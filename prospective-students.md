---
layout: page
title: Prospective Students
show_sidebar: false
hide_footer: false
hero_height: is-small
permalink: /prospective-students/
---

<style>
  /* ------------------------------------------------------------------
     Join Us 페이지 스타일
     사이트 공통 색을 따른다: 네이비 #010042, 연회색 카드 #f7f7fa / 테두리 #dcdce6
     폭은 테마의 .container 가 잡는다 (뷰포트에 따라 960/1152/1344px).
     여기서 max-width 를 고정하면 이 페이지만 좁아져 다른 페이지와 어긋난다.
     ------------------------------------------------------------------ */
  .prospective-page {
    --navy: #010042;
    --navy-soft: #f1f1f8;
    --line: #dcdce6;
    --muted: #5a5a72;
  }

  .prospective-page section {
    margin-top: 2.75rem;
  }
  .prospective-page section:first-of-type {
    margin-top: 0;
  }

  /* 섹션 제목: 왼쪽 네이비 악센트 바 */
  .content .prospective-page h2,
  .prospective-page h2 {
    position: relative;
    font-size: 1.45rem;
    line-height: 1.3;
    padding: 0 0 0.5rem 0.75rem;
    margin-bottom: 1rem;
    color: var(--navy);
    border-bottom: 1px solid var(--line);
  }
  .prospective-page h2::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.16em;
    height: 1em;
    width: 4px;
    border-radius: 2px;
    background: var(--navy);
  }

  /* 한국어 pane 안의 소제목도 영문 h2 와 같은 위계로 보이게 */
  .prospective-page .lang-pane > section > h3 {
    position: relative;
    font-size: 1.45rem;
    line-height: 1.3;
    padding: 0 0 0.5rem 0.75rem;
    margin: 2.75rem 0 1rem;
    color: var(--navy);
    border-bottom: 1px solid var(--line);
  }
  .prospective-page .lang-pane > section > h3::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.16em;
    height: 1em;
    width: 4px;
    border-radius: 2px;
    background: var(--navy);
  }
  .prospective-page .lang-pane > section > h3:first-of-type {
    margin-top: 1.25rem;
  }

  .prospective-page p {
    line-height: 1.75;
  }

  /* ---------- 연구 분야: Spatial AI / Robotics 두 개의 큰 카드 ---------- */
  .area-group {
    margin-top: 1.25rem;
    padding: 1.35rem 1.5rem 1.5rem;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: #f7f7fa;
    box-shadow: 0 1px 3px rgba(1, 0, 66, 0.06);
  }
  .area-group + .area-group {
    margin-top: 1.25rem;
  }

  /* 큰 카드 제목: 랩 이름(SPAtial AI + RObotics)을 그대로 드러내는 라벨 */
  .content .prospective-page .area-group__title,
  .prospective-page .area-group__title {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 0;
    padding: 0;
    border: none;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--navy);
  }
  .prospective-page .area-group__title::before { content: none; }
  /* 제목 오른쪽으로 이어지는 옅은 선 */
  .prospective-page .area-group__title::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--line);
  }

  .area-group .research-grid {
    margin-top: 1rem;
  }

  /* ---------- 연구 분야 카드 ---------- */
  .research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
    margin-top: 1.25rem;
  }

  .research-card {
    position: relative;
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 1.15rem 1.25rem 1.25rem;
    background: #ffffff;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(1, 0, 66, 0.05);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }
  /* 카드 상단 네이비 라인 */
  .research-card::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: var(--navy);
  }
  .research-card:hover {
    transform: translateY(-2px);
    border-color: #c9c9d8;
    box-shadow: 0 6px 16px rgba(1, 0, 66, 0.1);
  }

  .content .research-card h3,
  .research-card h3 {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: var(--navy);
    margin: 0.15rem 0 0.7rem;
    padding: 0;
  }
  .research-card h3::before {
    content: none;
  }

  /* 카드 안 목록: 기본 불릿 대신 작은 네이비 점 */
  .content .research-card ul,
  .research-card ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .research-card li {
    position: relative;
    padding-left: 0.95rem;
    margin: 0.3rem 0;
    font-size: 0.86rem;
    line-height: 1.5;
    color: #363646;
  }
  .research-card li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--navy);
    opacity: 0.55;
  }

  /* ---------- 본문 목록 (지원 자격 / 얻게 될 경험) ---------- */
  .content .prospective-page section > ul,
  .prospective-page section > ul {
    list-style: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  .prospective-page section > ul > li {
    position: relative;
    padding-left: 1.4rem;
    margin: 0.45rem 0;
    line-height: 1.6;
  }
  .prospective-page section > ul > li::before {
    content: "";
    position: absolute;
    left: 0.15rem;
    top: 0.58em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1.6px solid var(--navy);
  }

  /* ---------- 모집 대상: 목록 대신 pill ---------- */
  /* 위 `section > ul` 규칙보다 선택자 우선순위가 높아야 하므로
     .prospective-page 를 함께 붙여 준다 */
  .prospective-page .position-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
  }
  .prospective-page .position-pills > li {
    margin: 0;
    padding: 4px 14px;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    line-height: 1.6;
    border-radius: 999px;
    background: var(--navy-soft);
    color: var(--navy);
    border: 1.5px solid var(--navy);
  }
  .prospective-page .position-pills > li::before { content: none; }

  /* ---------- 지원 안내 박스 ---------- */
  .apply-box {
    margin-top: 1.25rem;
    padding: 1.35rem 1.5rem;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: #f7f7fa;
    box-shadow: 0 1px 3px rgba(1, 0, 66, 0.06);
  }
  .content .apply-box p:last-child,
  .apply-box p:last-child { margin-bottom: 0; }

  .apply-button-wrap {
    margin: 1rem 0 1.15rem;
  }
  /* Bulma 기본 파랑 대신 사이트 네이비 */
  .content .apply-box .button.is-link,
  .apply-box .button.is-link {
    background: var(--navy);
    border-color: var(--navy);
    color: #ffffff;
    font-weight: 700;
    border-radius: 999px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition: background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
  }
  .apply-box .button.is-link:hover {
    background: #1a1a6b;
    border-color: #1a1a6b;
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(1, 0, 66, 0.22);
  }

  .apply-contact {
    font-size: 0.9rem;
    color: var(--muted);
  }
  .apply-email {
    display: inline-block;
    margin-left: 0.15rem;
    padding: 1px 10px;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 999px;
    background: #ffffff;
    color: var(--navy);
    border: 1.5px solid var(--navy);
  }

  /* ---------- 언어 선택: 세그먼트 토글 ----------
     바깥 트랙 전체가 미선택 색(연한 네이비)이고,
     그 안에서 고른 쪽만 네이비로 채워진다. */
  .lang-switch {
    display: inline-flex;
    gap: 0.3rem;
    /* 안쪽 라벨 크기는 그대로 두고 트랙(겉 버튼)만 넉넉하게 */
    padding: 0.45rem 0.55rem;
    border-radius: 999px;
    background: var(--navy-soft);
  }
  /* 첫 섹션 제목과 같은 행의 오른쪽 끝에 배치.
     제목은 언어 pane 안에 있어 같은 부모를 쓸 수 없으므로 absolute 로 겹쳐 둔다.
     (제목이 짧아 겹칠 일이 없고, 좁은 화면에서는 아래 미디어쿼리로 일반 흐름 복귀) */
  .prospective-page {
    position: relative;
  }
  .lang-switch-wrap {
    position: absolute;
    top: -0.25rem;
    right: 0;
    z-index: 1;
  }

  @media screen and (max-width: 640px) {
    .lang-switch-wrap {
      position: static;
      display: flex;
      justify-content: flex-end;
      margin: 0 0 1.5rem;
    }
  }
  .lang-switch .tag-button {
    display: inline-block;
    min-width: 4.2rem;
    padding: 0.28rem 0.85rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 1.3;
    text-align: center;
    border: none;
    border-radius: 999px;
    background: transparent;
    color: var(--navy);
    cursor: pointer;
    user-select: none;
    transition: background 0.2s ease, color 0.2s ease;
  }
  .lang-switch .tag-button:hover:not(.active) {
    background: #e2e2ef;
  }
  .lang-switch .tag-button.active {
    background: var(--navy);
    color: #ffffff;
  }
  .lang-switch .tag-button:focus-visible {
    outline: 2px solid var(--navy);
    outline-offset: 2px;
  }

  /* 테마 CSS 가 [hidden] 을 덮어쓰지 않도록 명시적으로 숨김 */
  .lang-pane[hidden] { display: none !important; }
</style>

<div class="content prospective-page">
  <!-- 언어 선택: 트랙 안에서 고른 쪽만 채워지는 세그먼트 토글 (우측 정렬) -->
  <div class="lang-switch-wrap">
    <div class="lang-switch" id="lang-switch" role="group" aria-label="Language">
      <span class="tag-button active" data-lang="en" role="button" tabindex="0" aria-pressed="true">ENG</span>
      <span class="tag-button" data-lang="ko" role="button" tabindex="0" aria-pressed="false">KOR</span>
    </div>
  </div>

  <div class="lang-pane" data-lang="en">
  <section aria-labelledby="join-sparo-lab">
    <h2 id="join-sparo-lab">Join SPARO Lab</h2>
    <p>
      SPARO Lab at Inha University focuses on building <strong>spatial AI</strong> for real-world <strong>robotics</strong>. Our goal is to enable robots to understand, navigate, and collaborate in complex and dynamic environments beyond controlled laboratory settings.
    </p>
    <p>
      We are particularly interested in robust and scalable robot autonomy, where perception, mapping, and decision-making are tightly integrated under real-world constraints such as noise, uncertainty, and limited communication.
    </p>
    <p>
      Our research spans from fundamental algorithms to real-world deployment, with a strong emphasis on field validation and system-level integration.
    </p>
  </section>

  <section aria-labelledby="research-areas">
    <h2 id="research-areas">Research Areas</h2>

    <div class="area-group">
      <h3 class="area-group__title">Spatial AI</h3>
      <div class="research-grid">
      <article class="research-card">
        <h3>Spatial Intelligence</h3>
        <ul>
          <li>Topometric and semantic mapping</li>
          <li>Communication-efficient map representation</li>
          <li>Distributed spatial intelligence</li>
        </ul>
      </article>
      <article class="research-card">
        <h3>Global Localization</h3>
        <ul>
          <li>Place recognition across modalities</li>
          <li>Robust localization in degraded environments</li>
          <li>Collaborative mapping and localization</li>
        </ul>
      </article>
      <article class="research-card">
        <h3>Robust Robot Perception</h3>
        <ul>
          <li>Multi-modal sensing including LiDAR, Radar, RGB, and Thermal</li>
          <li>All-weather perception</li>
          <li>Uncertainty-aware perception</li>
          <li>Underwater and maritime vision</li>
        </ul>
      </article>
      </div>
    </div>

    <div class="area-group">
      <h3 class="area-group__title">Robotics</h3>
      <div class="research-grid">
      <article class="research-card">
        <h3>SLAM and Multi-Robot Systems</h3>
        <ul>
          <li>Multi-session and multi-robot SLAM</li>
          <li>Communication-aware coordination</li>
          <li>Heterogeneous robot collaboration</li>
        </ul>
      </article>
      <article class="research-card">
        <h3>Physical AI and Robot Learning</h3>
        <ul>
          <li>Learning-based navigation</li>
          <li>Sim-to-real transfer</li>
          <li>Traversability estimation</li>
          <li>Perception-action coupling</li>
        </ul>
      </article>
      <article class="research-card">
        <h3>Field Robotics</h3>
        <ul>
          <li>Maritime robotics</li>
          <li>Autonomous delivery robots</li>
          <li>Service robots in real environments</li>
          <li>Large-scale deployment scenarios</li>
        </ul>
      </article>
      </div>
    </div>
  </section>

  <section aria-labelledby="research-environment">
    <h2 id="research-environment">Research Environment</h2>
    <p>
      SPARO Lab provides a strong experimental and collaborative environment, including an indoor home-like testbed with motion capture system, simulation environments such as Isaac Sim and MuJoCo, and various robotic platforms including mobile robots, legged robots, and service robots.
    </p>
    <p>
      Students are encouraged to work on both theoretical research and real-world systems.
    </p>
  </section>

  <section aria-labelledby="what-we-expect">
    <h2 id="what-we-expect">What We Expect</h2>
    <ul>
      <li>Strong interest in robotics and AI</li>
      <li>Motivation to solve challenging real-world problems</li>
      <li>Willingness to work on both theory and systems</li>
      <li>Experience with, or willingness to learn, Python or C++</li>
      <li>Experience with, or willingness to learn, ROS or ROS2</li>
      <li>Basic background in machine learning, deep learning, or robotics</li>
    </ul>
  </section>

  <section aria-labelledby="what-you-will-gain">
    <h2 id="what-you-will-gain">What You Will Gain</h2>
    <ul>
      <li>Hands-on experience with real robotic systems</li>
      <li>Opportunities to publish in top-tier venues such as ICRA, IROS, and RA-L</li>
      <li>Experience with large-scale research projects</li>
      <li>Collaboration opportunities with industry and international research groups</li>
    </ul>
  </section>

  <section aria-labelledby="open-positions">
    <h2 id="open-positions">Open Positions</h2>
    <ul class="position-pills">
      <li>M.S. students</li>
      <li>Ph.D. students</li>
      <li>Integrated M.S./Ph.D. students</li>
      <li>Undergraduate interns</li>
    </ul>
  </section>

  <section aria-labelledby="how-to-apply-en">
    <h2 id="how-to-apply-en">How to Apply</h2>
    <div class="apply-box">
      <p>Please apply using the Google Form below.</p>
      <div class="apply-button-wrap">
        <a class="button is-link" href="https://forms.gle/K12Xfo9kbCGZQ5oJ9" target="_blank" rel="noopener noreferrer">Apply via Google Form</a>
      </div>
      <p class="apply-contact">If you have questions, please contact the lab by email. &nbsp;<strong>Email</strong> <span class="apply-email">yg.cho at inha.ac.kr</span></p>
    </div>
  </section>
  </div>

  <div class="lang-pane" data-lang="ko" hidden>
  <section aria-labelledby="join-sparo-lab-ko">
    <h3 id="join-sparo-lab-ko">Join SPARO Lab</h3>
    <p>
      SPARO Lab은 인하대학교 로봇 연구실로, 실세계 <strong>로보틱스</strong>를 위한 <strong>공간지능(Spatial AI)</strong>을 연구합니다.
    </p>
    <p>
      단순한 실험실 환경이 아니라, 다양한 센서 노이즈와 환경 변화, 제한된 통신 조건이 존재하는 상황에서도 로봇이 스스로 인지하고, 이동하고, 협력할 수 있는 기술을 개발하는 것을 목표로 합니다.
    </p>
    <p>
      본 연구실은 알고리즘 수준의 연구뿐만 아니라 실제 로봇 시스템 구현과 현장 검증까지 포함하는 시스템 중심 연구를 지향합니다.
    </p>

    <h3>주요 연구 분야</h3>

    <div class="area-group">
      <h3 class="area-group__title">Spatial AI</h3>
      <div class="research-grid">
      <article class="research-card">
        <h3>공간지능</h3>
        <ul>
          <li>토포메트릭 및 시맨틱 맵</li>
          <li>통신 효율 기반 맵 표현</li>
          <li>분산형 공간지능</li>
        </ul>
      </article>
      <article class="research-card">
        <h3>전역 위치추정</h3>
        <ul>
          <li>멀티모달 장소 인식</li>
          <li>열악 환경에서의 강건한 위치추정</li>
          <li>협업 맵핑 및 위치추정</li>
        </ul>
      </article>
      <article class="research-card">
        <h3>강건한 로봇 인지</h3>
        <ul>
          <li>멀티모달 센싱 LiDAR Radar RGB Thermal</li>
          <li>악천후 및 저가시 환경 인지</li>
          <li>불확실성 기반 인지</li>
          <li>수중 및 해양 환경 비전</li>
        </ul>
      </article>
      </div>
    </div>

    <div class="area-group">
      <h3 class="area-group__title">Robotics</h3>
      <div class="research-grid">
      <article class="research-card">
        <h3>SLAM 및 멀티 로봇 시스템</h3>
        <ul>
          <li>멀티 세션 및 멀티 로봇 SLAM</li>
          <li>통신 제약 기반 협력</li>
          <li>이기종 로봇 협업</li>
        </ul>
      </article>
      <article class="research-card">
        <h3>Physical AI 및 로봇 학습</h3>
        <ul>
          <li>학습 기반 네비게이션</li>
          <li>Sim-to-Real 전이</li>
          <li>주행 가능성 추정</li>
          <li>인지 행동 통합 학습</li>
        </ul>
      </article>
      <article class="research-card">
        <h3>필드 로보틱스</h3>
        <ul>
          <li>해양 로봇</li>
          <li>자율 배송 로봇</li>
          <li>서비스 로봇</li>
          <li>대규모 실환경 로봇 시스템</li>
        </ul>
      </article>
      </div>
    </div>

    <h3>연구 환경</h3>
    <p>
      SPARO Lab은 모션캡처 기반 실내 테스트베드, Isaac Sim 및 MuJoCo 등의 시뮬레이션 환경, 그리고 다양한 로봇 플랫폼을 바탕으로 연구를 수행합니다.
    </p>
    <p>
      학생들은 이론과 실제 시스템을 함께 다루는 연구를 수행하게 됩니다.
    </p>

    <h3>지원 자격</h3>
    <ul>
      <li>로봇 및 인공지능에 관심 있는 학생</li>
      <li>실제 문제 해결에 흥미가 있는 학생</li>
      <li>이론과 시스템을 함께 다루고 싶은 학생</li>
      <li>Python 또는 C++ 활용 가능자 또는 학습 의지가 있는 학생</li>
      <li>ROS 또는 ROS2 경험자 또는 학습 의지가 있는 학생</li>
      <li>머신러닝 딥러닝 로봇공학 기초 보유자 우대</li>
    </ul>

    <h3>학생이 얻게 될 경험</h3>
    <ul>
      <li>실제 로봇 시스템 개발 경험</li>
      <li>ICRA IROS RA-L 등 국제 학술대회 및 저널 논문 연구 경험</li>
      <li>대형 연구 프로젝트 참여 경험</li>
      <li>산업체 및 해외 연구기관과의 협업 기회</li>
    </ul>

    <h3>모집 대상</h3>
    <ul class="position-pills">
      <li>석사과정</li>
      <li>박사과정</li>
      <li>석박통합과정</li>
      <li>학부 인턴</li>
    </ul>

    <h3>지원 방법</h3>
    <div class="apply-box">
      <p>아래 구글 폼을 통해 지원해 주세요.</p>
      <div class="apply-button-wrap">
        <a class="button is-link" href="https://forms.gle/K12Xfo9kbCGZQ5oJ9" target="_blank" rel="noopener noreferrer">구글 폼으로 지원하기</a>
      </div>
      <p class="apply-contact">문의 사항은 이메일로 연락 바랍니다. &nbsp;<strong>이메일</strong> <span class="apply-email">yg.cho at inha.ac.kr</span></p>
    </div>
  </section>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const bar   = document.getElementById('lang-switch');
  const panes = Array.from(document.querySelectorAll('.lang-pane'));
  if (!bar || !panes.length) return;

  function select(lang) {
    panes.forEach(p => { p.hidden = p.dataset.lang !== lang; });
    bar.querySelectorAll('.tag-button').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    try { localStorage.setItem('sparo-join-lang', lang); } catch (e) {}
  }

  bar.addEventListener('click', function (e) {
    const btn = e.target.closest('.tag-button');
    if (btn && bar.contains(btn)) select(btn.dataset.lang);
  });

  // 키보드 접근성 (Enter / Space)
  bar.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const btn = e.target.closest('.tag-button');
    if (!btn || !bar.contains(btn)) return;
    e.preventDefault();
    select(btn.dataset.lang);
  });

  // 마지막에 고른 언어를 기억한다
  let saved = null;
  try { saved = localStorage.getItem('sparo-join-lang'); } catch (e) {}
  select(saved === 'ko' || saved === 'en' ? saved : 'en');
});
</script>
