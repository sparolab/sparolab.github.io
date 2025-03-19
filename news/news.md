---
title: "News"
layout: page
show_sidebar: true
---

## News

### <a id="papers"></a> 📄 Papers
<ul>
  {% for paper in site.data.news.papers %}
    <li><strong>{{ paper.date }}</strong> - {{ paper.description }}
    {% if paper.authors %}
      <em>({{ paper.authors }})</em>
    {% endif %}
    </li>
  {% endfor %}
</ul>

### <a id="awards"></a> 🏆 Awards
<ul>
  {% for award in site.data.news.awards %}
    <li><strong>{{ award.date }}</strong> - {{ award.description }}
      {% if award.description %}
        ({{ award.description }})
      {% endif %}
      {% if award.link %}
        <a href="{{ award.link }}" target="_blank">[Read more]</a>
      {% endif %}
    </li>
  {% endfor %}
</ul>

### <a id="projects"></a> 👥 Projects
<ul>
  {% for member in site.data.news.people %}
    <li><strong>{{ member.date }}</strong> - {{ member.description }}</li>
  {% endfor %}
</ul>


### <a id="people"></a> 👥 New Members
<ul>
  {% for member in site.data.news.people %}
    <li><strong>{{ member.date }}</strong> - {{ member.name }} {{ member.description }}</li>
  {% endfor %}
</ul>
