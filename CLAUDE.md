# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the SPARO Lab (Spatial AI and Robotics Lab) website, built with Jekyll 4.4.1 and using the Bulma Clean Theme. The site showcases research papers, projects, lab members, news, and publications.

## Development Commands

### Local Development
```bash
# Install Ruby dependencies
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Build the site
bundle exec jekyll build
```

The site will be available at `http://localhost:4000` with live reload enabled (configured in `_config.yml`).

### Additional Notes
- Changes to `_config.yml` require restarting the Jekyll server
- The site uses `remote_theme: chrisrhymes/bulma-clean-theme@v0.14.0`

## Architecture

### Content Management via YAML Data Files

The site's content is primarily managed through YAML files in `_data/` rather than individual markdown files:

- **`research_paper.yml`** - Research publications with tags, authors, links, and dates
- **`research_project.yml`** - Lab projects
- **`research.yml`** - Combined research overview (legacy)
- **`current_members.yml`** - Current lab members
- **`alumni.yml`** - Former lab members
- **`international_publications.yml`** / **`domestic_publications.yml`** - Publication lists
- **`news.yml`** - Lab news and announcements
- **`album.yml`** - Photo gallery images
- **`navigation.yml`** - Site navigation menu structure

### Custom Layouts and Includes

- **`_layouts/research.html`** - Complex layout with tag-based filtering system, color-coded tags (120+ color palette), and card-based display. Includes JavaScript for dynamic filtering and card interactivity.
- **`_layouts/people.html`** - People page layout
- **`_layouts/publication.html`** - Publications layout
- **`_includes/research.html`** - Research component include
- **`_includes/people.html`** - People component include
- **`_includes/news.html`** - News component include
- **`_includes/album.html`** - Album/gallery component include

### Page Structure

- **`index.md`** - Homepage with hero section linking to GitHub and YouTube
- **`research.md`** - Research overview page that uses `layout: research` and pulls from `images_data: research`
- **`people/people.md`** - People page that uses `gallery: people`
- **`publications.md`** - Full publications listing

### Research Project Pages

Individual research projects live in `/research/[project-name]/` subdirectories (e.g., `/research/diter/`, `/research/solid/`, `/research/polaris/`). Each contains:
- Standalone HTML pages with their own Jekyll setup (separate `Gemfile`, `_config.yml`)
- Custom styling and assets in `static/` subdirectories
- These are independent mini-sites linked from the main site

## Key Concepts

### Tag-Based Filtering System

The research layout implements a sophisticated filtering system:
- Tags are extracted from YAML data and auto-generated as filter buttons
- Each tag gets a unique color from a 120+ color palette
- Filtering is done client-side with JavaScript
- Cards can have multiple tags and are shown when any tag matches

### Data Flow

1. Content is defined in `_data/*.yml` files
2. Pages reference data via `gallery: [data_name]` or `images_data: [data_name]` in frontmatter
3. Layouts (especially `research.html`) iterate over the data to render cards/components
4. JavaScript enhances interactivity (filtering, modals, clickable cards)

## Common Tasks

### Adding a New Research Paper

1. Edit `_data/research_paper.yml`
2. Add a new entry under the `- title: Paper` images array:
```yaml
- link: /img/research/paper/[filename].png
  alt: Conference/Journal Name
  alt_link: https://conference-url.com
  pulished_date: Month, Year
  paper: "Paper Title"
  authors: Author Names
  tags:
      - Tag1
      - Tag2
  page_link: /research/[project-slug]/
```

### Adding a Lab Member

1. Edit `_data/current_members.yml`
2. Add entry with name, position, image, bio, and links

### Updating Navigation

Edit `_data/navigation.yml` to modify the site menu structure.

### Creating a New Research Project Page

1. Create directory: `/research/[project-name]/`
2. Add `index.html`, `Gemfile`, and any assets
3. Ensure the main research YAML references this page with `page_link: /research/[project-name]/`

## Site Configuration

- **Base URL**: `https://sparolab.github.io`
- **Theme color**: `#191970` (dark blue)
- **Fixed navbar**: Top position
- **Permalink style**: Pretty URLs (no `.html` extensions)
