---
title: "News"
layout: page
show_sidebar: true
---

## News

### <a id="papers"></a> 📄 Papers
<ul>
  {% for paper in site.data.news.papers %}
    <li><strong>{{ paper.date }}</strong> - {{ paper.title }}
    {% if paper.authors %}
      <em>({{ paper.authors }})</em>
    {% endif %}
    </li>
  {% endfor %}
</ul>

### <a id="awards"></a> 🏆 Awards
<ul>
  {% for award in site.data.news.awards %}
    <li><strong>{{ award.date }}</strong> - {{ award.title }}
      {% if award.description %}
        ({{ award.description }})
      {% endif %}
      {% if award.link %}
        <a href="{{ award.link }}" target="_blank">[Read more]</a>
      {% endif %}
    </li>
  {% endfor %}
</ul>

### <a id="people"></a> 👥 New Members
<ul>
  {% for member in site.data.news.people %}
    <li><strong>{{ member.date }}</strong> - {{ member.name }} {{ member.description }}</li>
  {% endfor %}
</ul>

<!-- 
## News
* [Feb. 2025] Hogyun received outstanding research awards at Inha Univ. (Excellence of journal publication and Most-applied patent). Congrats!
* [Feb. 2025] Jiyun received AFCV award at KRoC 2025. [Congrats](http://m.irobotnews.com/news/articleView.html?idxno=37582)! 
* [Feb. 2025] Miryeong  and Jiyun joined our lab. Welcome!
* [Jan. 2025] Two papers (Diter++ and PoLaRIS) are accepted at ICRA 2025! Congrats Jiwon, Dongjin, and Juwon!
* [Oct. 2024] One paper about underwater image enhancement and depth estimation (TRIDENT) has been accepted by IEEE Sensors Journal. Congrats Geonmo!
* [Sep. 2024] One paper about RADAR-based localization (Referee) is accepted by IEEE Robotics and Automation Letters (RA-L). Congrats Byunghee and Hogyun!
* [Aug. 2024] One paper about LiDAR-based localization (Solid) is accepted by IEEE Robotics and Automation Letters (RA-L). Congrats Hogyun!
* [July. 2024] Juwon, Euncheol, Minho, and Gihyeon won the competition at Hanhwa Aerospace for the future tech challenge!
* [June. 2024] Gihyeon and Dongjin received the best paper award at ICROS 2024! Congrats!
* [May. 2024] Uni-mapper received the best research award (3rd prize) at ICRA 2024 Construction Robotics Workshop! Congrats!
* [Feb. 2024] One paper  is accepted to ICRA 2024!
* [Jan. 2024] One paper is accepted by IEEE Sensors Letters!
* [Nov. 2023] One paper is accepted by IEEE Sensors Journal!
* [Nov. 2023] Our lab (4-luca team) won the industry-academia collaboration challenge (한국산업기술진흥원장상. Ranked in the Top 20 teams out of 489 teams)
* [Oct. 2023] Ugrad. Autonomous Driving Team (VI2RE) received an excellent algorithm award (우수 알고리즘 상) from the Virtual Seoul Driving Challenge.  (7th-8th rank among 70 teams)
* [Oct. 2023] SPARO Lab won a big grant from NRF-STEAM (미래유망융합기술파이오니어)
* [Jun. 2023] Ugrad. project received the Excellent paper award (우수논문상) in ICROS 2023! Congrats!
* [Mar. 2023] Six members joined SPARO Lab! Hogyun, Seungjun, Seokhwan, Byunghee, Euncheol, and Jungwoo welcome!
* [Feb. 2023] Three papers are accepted to ICRA 2023 (2 Regular, 1 RA-L)
* [Jan. 2023] One paper is accepted to Sensors
* [Jan. 2023] Gilhwan got scholarship from Hyundai Motors Company. 
* [Dec. 2022] NeRd-four team (Jooyong, Gilhwan, Geonmo, and Juhui) won the embedded software competition! Congrats!
* [Aug. 2022] One paper is accepted to T-ITS (Nonparametric background model-based LiDAR SLAM)
* [Aug. 2022] Gilhwan join SPARO Lab! Welcome!
* [Jun. 2022] SPARO Lab (with HD-DNA Lab.) won a big grant from NRF (NRF Basic Research Lab. 기초연구실)
* [Jun. 2022] Prof. Cho receives 우수신진연구자상 at ICROS 2022
* [Jun. 2022] Prof. Cho presents at ICROS (제어로봇시스템학회) 2022
* [Jul. 2022]  Seungjun and Seokhwan receive the Excellent paper award (우수논문상)! Congrats!
* [Apr. 2022] SPARO Lab won a big grant from IITP (Deep Total Recall: Continual Learning for Human-Like Recall of Artificial Neural Networks )
* [Apr. 2022] SPARO Lab started the joint project (Industry-academy collaboration, Partner: Neubility)
* [Apr. 2022] One paper is accepted to RA-L (Vivid++)
* [Mar. 2022] Geonmo, Jooyong, and Juhui joined SPARO Lab! Welcome!
 -->
