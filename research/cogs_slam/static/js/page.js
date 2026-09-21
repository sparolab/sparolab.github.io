const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

async function setupResults() {
  const host = document.querySelector("#results-charts");
  try {
    const response = await fetch("./static/js/results.json");
    if (!response.ok) throw new Error("Results unavailable");
    const { methods, scenes } = await response.json();
    const select = document.querySelector("#scene-select");
    const groups = new Map();
    for (const scene of scenes) {
      if (!groups.has(scene.group)) {
        const optgroup = document.createElement("optgroup");
        optgroup.label = scene.group;
        groups.set(scene.group, optgroup);
        select.append(optgroup);
      }
      groups.get(scene.group).append(new Option(scene.label, scene.id));
    }
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.2 },
          )
        : null;
    const last = methods.length - 1;
    function render() {
      observer?.disconnect();
      const scene = scenes.find((item) => item.id === select.value);
      host.replaceChildren();
      for (const [key, name, subtitle, max, unit] of [
        ["psnr", "Rendering quality", "PSNR · Higher is better ↑", scene.psnrMax, "dB"],
        ["ate", "Trajectory error", "ATE RMSE · Lower is better ↓", scene.ateMax, "cm"],
      ]) {
        const card = document.createElement("article");
        card.className = "metric-chart";
        card.setAttribute("aria-label", `${scene.label}: ${name}`);
        card.innerHTML = `<span class="chart-kicker">${scene.label} / ${scene.agents} agents</span><h3>${name}</h3><p>${subtitle}</p>`;
        methods.forEach((method, i) => {
          // Values stay strings so they print with the paper's own precision.
          const text = scene[key][i];
          const value = Number(text);
          const clipped = value > max;
          const label =
            i === last ? "Co-GS SLAM" : i === last - 1 ? "Ours · map only" : method;
          const row = document.createElement("div");
          row.className = `metric-row ${i === last ? "ours" : i === last - 1 ? "variant" : ""} ${clipped ? "clipped" : ""}`;
          row.style.setProperty("--bar-target", `${Math.min(value / max, 1) * 100}%`);
          row.style.setProperty("--delay", `${i * 65}ms`);
          row.innerHTML = `<span class="metric-label">${label}</span><span class="bar-track" aria-hidden="true"><span class="bar-fill"></span></span><span class="metric-value">${text}</span>`;
          row.setAttribute("aria-label", `${label}: ${text} ${unit}`);
          card.append(row);
        });
        card.insertAdjacentHTML(
          "beforeend",
          `<div class="chart-scale" aria-hidden="true"><span>0</span><span>${max / 2}</span><span>${max} ${unit}</span></div>`,
        );
        host.append(card);
        if (observer && !reducedMotion.matches) observer.observe(card);
        else card.classList.add("is-visible");
      }
    }
    render();
    select.addEventListener("change", render);
    document.querySelector(".results-controls").hidden = false;
    document.querySelector(".chart-note").hidden = false;
    document.querySelector(".results-table").open = false;
  } catch (error) {
    // The full static tables remain visible even if fetching or scripting fails.
    console.warn(
      "Interactive charts unavailable; exact result tables remain available.",
      error,
    );
  }
}
setupResults();

// Without JavaScript both qualitative panels stay visible one after another.
function setupTabs() {
  const list = document.querySelector(".qual-tabs");
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  function select(tab, focus) {
    tabs.forEach((item) => {
      const on = item === tab;
      item.setAttribute("aria-selected", String(on));
      item.tabIndex = on ? 0 : -1;
      document.getElementById(item.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (event) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
      if (!step) return;
      event.preventDefault();
      select(tabs[(i + step + tabs.length) % tabs.length], true);
    });
  });
  list.hidden = false;
  select(tabs[0]);
}
setupTabs();

function setupCopy() {
  const button = document.querySelector(".copy-button");
  if (!navigator.clipboard) return;
  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(
        document.querySelector("#bibtex-code").textContent,
      );
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy failed";
    }
    setTimeout(() => (button.textContent = "Copy"), 1600);
  });
}
setupCopy();
