---
layout: page
title: Updates
permalink: updates/
---

Here are the most recent updates about SSC and what we've been doing:

<!-- Inject posts from _post here using for loop in ruby. -->
{% for post in site.posts limit:site.tiles-count %}

<section class="spotlight">
	<div class="image">{% if post.image %}<img src="{% if site.featured-image-source %}{{ post.image | prepend: site.featured-image-source | absolute_url }}{% else %}{{ "" | absolute_url }}/assets/images/{{ post.image }}{% endif %}" alt="" />{% endif %}</div>
	<div class="content">
		<h2><a href="{{ post.url | relative_url }}" class="link">{{ post.title }}</a></h2>
		<p>{{ post.description }}</p>
	</div>
</section>

{% endfor %}
