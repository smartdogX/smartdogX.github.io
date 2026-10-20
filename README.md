# SmartdogX's personal website

A personal writing site for Zhiyuan Xi, built with Jekyll and hosted at [smartdogx.github.io](https://smartdogx.github.io/). Formal research notes and the research diary live on the separate [PSU website](https://sites.psu.edu/smartdpgxzy/).

## Where things live

| Location | Purpose |
| --- | --- |
| `_posts/` | Published writing, with metadata at the top of each Markdown file |
| `_translations/` | Full counterpart translations, linked to original posts by `source_slug` |
| `_localized/` | Chinese-only display copies for the two originally mixed-language entries; no separate pages are generated |
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

## English and Chinese

Use the **EN / 中文** switch in the header to open the same page in the other language. The homepage, writing archive, About page, navigation, search messages, and article navigation are localized too. Language links work without JavaScript; the archive search preserves its query and topic when switching.

Original article URLs remain unchanged. Each original has one counterpart in `_translations/`, served at `/en` or `/zh` followed by the original path. Translations are a separate Jekyll collection, so the writing archive contains one entry per essay rather than duplicate posts.

For a new translation, copy the structure of an existing translation file:

```yaml
---
layout: single
title: "Translated title"
lang: en
source_slug: short-title
original_url: /blog/short-title/
permalink: /en/blog/short-title/
date: 2026-10-19
excerpt: "A summary in the target language."
---
```

`source_slug` must match the original post's filename slug. Use `lang: zh-CN` and `/zh/...` for a Chinese translation of an English original. Translate the full article below the frontmatter and preserve code, links, and timestamps. `native_title` on an original post supplies its display title without replacing its historical `title` value. Interface text lives in `_data/i18n.yml`.

The original first numbered reflection and old blog collection contain both languages. Their Chinese reading versions live in `_localized/zh-thoughts1.md` and `_localized/zh-collection.md`; the raw `_posts/` bodies remain intact. Keep these display copies in sync if editing those originals later.

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
