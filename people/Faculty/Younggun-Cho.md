---
layout: page
title: Younggun Cho
subtitle: Associate Professor
permalink: /people/Faculty/Younggun-Cho
---

<style>
  .yg-profile {
    --yg-accent: #1f4f73;
    --yg-accent-soft: #eef5f9;
    --yg-text: #2f3540;
    --yg-muted: #5f6b76;
    --yg-border: #d9e3ea;
    color: var(--yg-text);
  }

  .yg-profile__intro {
    display: grid;
    grid-template-columns: minmax(240px, 360px) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: start;
  }

  .yg-profile__photo {
    margin: 0;
  }

  .yg-profile__photo img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 14px;
    box-shadow: 0 12px 30px rgba(31, 79, 115, 0.16);
  }

  .yg-profile__summary {
    font-size: 1.04rem;
    line-height: 1.75;
  }

  .yg-profile__summary p {
    margin: 0 0 1rem;
  }

  .yg-profile__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1.4rem;
  }

  .yg-profile__link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.58rem 0.85rem;
    border: 1px solid var(--yg-border);
    border-radius: 999px;
    color: var(--yg-accent);
    background: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  .yg-profile__link:hover,
  .yg-profile__link:focus {
    color: var(--yg-accent);
    border-color: var(--yg-accent);
    box-shadow: 0 5px 14px rgba(31, 79, 115, 0.14);
    transform: translateY(-1px);
  }

  .yg-profile__section {
    margin-top: 3rem;
  }

  .yg-profile__section > h2 {
    margin-bottom: 1.25rem;
    padding-bottom: 0.55rem;
    color: var(--yg-accent);
    border-bottom: 2px solid var(--yg-border);
  }

  .yg-profile__focus {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .yg-profile__tag {
    display: inline-flex;
    align-items: center;
    min-height: 2.35rem;
    padding: 0.48rem 0.82rem;
    border-radius: 8px;
    background: var(--yg-accent-soft);
    color: var(--yg-accent);
    font-weight: 700;
  }

  .yg-profile__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .yg-profile__card {
    height: 100%;
    padding: 1.35rem 1.45rem;
    border: 1px solid var(--yg-border);
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 6px 18px rgba(31, 79, 115, 0.07);
  }

  .yg-profile__card h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--yg-accent);
  }

  .yg-profile__list {
    margin: 0;
    padding-left: 1.2rem;
  }

  .yg-profile__list > li {
    margin-bottom: 0.85rem;
    line-height: 1.55;
  }

  .yg-profile__list > li:last-child {
    margin-bottom: 0;
  }

  .yg-profile__sublist {
    margin-top: 0.55rem;
    padding-left: 1.15rem;
    color: var(--yg-muted);
  }

  .yg-profile__sublist li {
    margin-bottom: 0.3rem;
  }

  .yg-profile__year {
    color: var(--yg-accent);
    font-weight: 800;
  }

  @media (max-width: 820px) {
    .yg-profile__intro,
    .yg-profile__grid {
      grid-template-columns: 1fr;
    }

    .yg-profile__photo {
      max-width: 420px;
      margin: 0 auto;
    }
  }

  @media (max-width: 520px) {
    .yg-profile__intro {
      gap: 1.5rem;
    }

    .yg-profile__section {
      margin-top: 2.25rem;
    }

    .yg-profile__card {
      padding: 1.1rem 1.15rem;
    }

    .yg-profile__link {
      width: 100%;
      justify-content: center;
    }
  }
</style>

<div class="yg-profile">
  <section class="yg-profile__intro" aria-label="Younggun Cho profile">
    <figure class="yg-profile__photo">
      <img src="/img/people/faculty/조영근_증명사진_.jpg" alt="Younggun Cho">
    </figure>

    <div class="yg-profile__summary">
      <p>
        I am an Associate Professor in the Department of Electrical and Electronic Engineering at Inha University.
        My research focuses on collaborative spatial intelligence for autonomous robots operating in complex real-world environments.
      </p>
      <p>
        At SPARO Lab, we develop multi-robot systems that can perceive, adapt, and collaborate in challenging environments.
        My research interests include multi-robot SLAM, robust multimodal perception, and long-term autonomy, with applications spanning planetary exploration, maritime robotics, and field robotics.
      </p>
      <p>
        Before joining Inha University, I was an Assistant Professor in the Department of Robotics Engineering at Yeungnam University and a postdoctoral researcher at KAIST.
        I received my Ph.D. from KAIST through the Civil and Environmental Engineering and Robotics programs, advised by Prof. Ayoung Kim, and my M.S. from KAIST, advised by Prof. Myungjin Chung.
        I received my B.E. from Inha University.
      </p>

      <nav class="yg-profile__links" aria-label="Professional links">
        <a class="yg-profile__link" href="mailto:yg.cho@inha.ac.kr">
          <i class="fas fa-envelope" aria-hidden="true"></i><span>Email</span>
        </a>
        <a class="yg-profile__link" href="https://www.linkedin.com/in/younggun-cho-392799116/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin" aria-hidden="true"></i><span>LinkedIn</span>
        </a>
        <a class="yg-profile__link" href="https://scholar.google.com/citations?user=W5MOKWIAAAAJ&hl=ko&authuser=1" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-google-scholar" aria-hidden="true"></i><span>Google Scholar</span>
        </a>
        <a class="yg-profile__link" href="https://github.com/youngguncho" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span>
        </a>
        <a class="yg-profile__link" href="https://sites.google.com/site/ygchocv/home" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-home" aria-hidden="true"></i><span>Personal Website</span>
        </a>
      </nav>
    </div>
  </section>

  <section class="yg-profile__section" aria-labelledby="research-focus">
    <h2 id="research-focus">Research Focus</h2>
    <div class="yg-profile__focus">
      <span class="yg-profile__tag">Collaborative Spatial Intelligence</span>
      <span class="yg-profile__tag">Multi-Robot SLAM</span>
      <span class="yg-profile__tag">Robust Multimodal Perception</span>
      <span class="yg-profile__tag">Long-Term Autonomy</span>
      <span class="yg-profile__tag">Field and Planetary Robotics</span>
    </div>
  </section>

  <section class="yg-profile__section" aria-labelledby="research-highlights">
    <h2 id="research-highlights">Selected Research Highlights</h2>
    <div class="yg-profile__card">
      <ul class="yg-profile__list">
        <li>
          <span class="yg-profile__year">2026 — ICRA, Vienna.</span>
          SPARO Lab presented four regular conference papers spanning spatial AI, robot perception, inertial odometry, semantic localization, traversability estimation, and neural mapping.
        </li>
        <li>
          <span class="yg-profile__year">2026 — KISS-IMU.</span>
          Finalist for the ICRA 2026 Best Paper Award on Robot Perception.
        </li>
        <li>
          <span class="yg-profile__year">2026 — Hilti × Trimble SLAM Challenge.</span>
          SPARO Lab, in collaboration with Riibotics, won 2nd Place in the SLAM Category.
        </li>
      </ul>
    </div>
  </section>

  <section class="yg-profile__section" aria-label="Achievements">
    <div class="yg-profile__grid">
      <article class="yg-profile__card">
        <h3>Student and Team Achievements</h3>
        <ul class="yg-profile__list">
          <li>
            <span class="yg-profile__year">2026 — ICRA.</span>
            Jiwon Choi won the Outstanding WiRA Student Paper Award.
          </li>
          <li>
            <span class="yg-profile__year">2026 — RoboCup@Home / Home Service.</span>
            Inha United advanced to the final round and placed 4th overall among 24 competing teams.
          </li>
          <li>
            <span class="yg-profile__year">2026 — RoboCup Soccer / Middle Size Humanoid.</span>
            Inha United advanced to the knockout tournament and placed 9th overall among 17 competing teams.
          </li>
        </ul>
      </article>

      <article class="yg-profile__card">
        <h3>Selected Honors</h3>
        <ul class="yg-profile__list">
          <li><span class="yg-profile__year">2025</span> — New Generation Star Project Award, IROS 2025</li>
          <li><span class="yg-profile__year">2024</span> — Minister of Trade, Industry and Energy Award</li>
          <li><span class="yg-profile__year">2024</span> — Best Research Award, 3rd Place, ICRA Workshop on the Future of Construction</li>
          <li><span class="yg-profile__year">2024</span> — Best Paper Award, ICROS</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="yg-profile__section" aria-labelledby="academic-service">
    <h2 id="academic-service">Academic Service</h2>
    <div class="yg-profile__grid">
      <article class="yg-profile__card">
        <h3>Organizing Committees</h3>
        <ul class="yg-profile__list">
          <li><strong>IEEE International Conference on Robotics and Automation (ICRA 2027)</strong> — Organizing Committee</li>
          <li><strong>IEEE International Symposium on Safety, Security, and Rescue Robotics (SSRR 2026)</strong> — Organizing Committee</li>
          <li>
            <strong>Korea Robotics Society Annual Conference (KRoC)</strong> — Organizing Committee
            <ul class="yg-profile__sublist">
              <li>2022 — OS/Workshop</li>
              <li>2024 — Concurrent Journal Submission</li>
              <li>2026 — Publicity and Social Media</li>
              <li>2027 — Flagship Session</li>
            </ul>
          </li>
          <li><strong>International Conference on Control, Automation and Systems (ICCAS 2026)</strong> — Organizing Committee</li>
        </ul>
      </article>

      <article class="yg-profile__card">
        <h3>Editorial Roles</h3>
        <ul class="yg-profile__list">
          <li><strong>IEEE Robotics and Automation Letters (RA-L)</strong> — Associate Editor, Localization and Mapping</li>
          <li><strong>IEEE International Conference on Robotics and Automation (ICRA 2026)</strong> — Associate Editor, Autonomy for Mobility and Manipulation 2</li>
          <li><strong>Intelligent Service Robotics (ISR)</strong> — Associate Editor, 2025–Present</li>
          <li><strong>IEEE International Conference on Ubiquitous Robots (UR)</strong> — Associate Editor, 2020, 2021, 2023, and 2024</li>
          <li><strong>International Conference on Control, Automation and Systems (ICCAS)</strong> — Associate Editor for Regular Papers, 2024 and 2026</li>
        </ul>
      </article>
    </div>
  </section>
</div>
