# SmartdogX's personal website

A personal writing site for Zhiyuan Xi, built with Jekyll and hosted at [smartdogx.github.io](https://smartdogx.github.io/). Formal research notes and the research diary live on the separate [PSU website](https://sites.psu.edu/smartdpgxzy/).

## Where things live

| Location | Purpose |
| --- | --- |
| `_posts/` | Published writing, with metadata at the top of each Markdown file |
| `_pages/` | About, writing archive, category and tag archives, and the 404 page |
| `index.html` | Homepage |
| `_layouts/` and `_includes/` | Local page templates and shared components |
| `assets/` | Styles, scripts, images, and other post attachments |
| `_data/` | Navigation and other shared site data |
| `_config.yml` | Site identity, URLs, plugins, and Jekyll settings |

The theme is stored in this repository; a remote theme download is not needed. The original site used the [Minimal Mistakes starter](https://github.com/mmistakes/mm-github-pages-starter). [ClassicalQY's website-building guide](https://classicalqy.github.io/website_building) was also a useful reference.

## Add a post

Create a Markdown file in `_posts/` named `YYYY-MM-DD-short-title.md`. Use an existing post as a reference, or start with:

```yaml
---
title: "A new essay"
date: 2026-10-19 12:00:00 -0400
categories:
  - Blog
tags:
  - personal
lang: "zh-CN"
topic: "reflections"
subtitle: "A short description beneath the title"
excerpt: "A brief introduction for the homepage and writing archive."
listed: true
---
```

Write the post below the closing `---`. Use `lang: "en"` for English writing. `subtitle` adds context without changing the original title; `excerpt` controls the archive preview. Use `topic: reflections`, `physics`, or `site-notes`; their labels live in `_data/topics.yml`. `listed: false` keeps a post out of the homepage, writing and taxonomy archives, and adjacent-post navigation while preserving its page. Add `featured: true` to select a homepage introduction; the homepage shows the newest three featured entries.

Put attachments in `assets/` and link to them with a site path such as `/assets/images/example.png`.

Existing post filenames, dates, categories, and permalinks determine their public URLs. Preserve them when making editorial changes so that old links continue to work. The existing `/posts/`, `/about/`, `/categories/`, and `/tags/` pages remain available. The former `/page2/`, `/page3/`, and `/page4/` pagination addresses now open the complete writing archive.

## Preview and build

With Ruby and Bundler installed, run these commands from this directory:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open [localhost:4000](http://127.0.0.1:4000/) to preview. Restart the server after changing `_config.yml`.

To produce the static site:

```sh
bundle exec jekyll build
```

Jekyll writes the generated site to `_site/`. Edit the source files, not that generated output. `.tools/` is reserved for optional local development runtimes and is ignored by Git; it is not part of the published site.
