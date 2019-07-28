---
layout: page
title: Blog
permalink: updates/
image: /blog.svg
---

Here are the most recent updates about SSC, what we've been doing and what we hope to do soon:

<!-- Inject posts from _post here using for loop in ruby. -->
{% for post in site.posts limit:site.tiles-count %}



<section>
	<div class="content">
		<h2><a href="{{ post.url | relative_url }}" class="link">{{ post.title }}</a></h2>
		<p>{{ post.description }}</p>
	</div>
</section>

{% endfor %}
