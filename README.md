# Personal Website (Static Build)

This repository is the **compiled static export** of my personal website.

- Source code is maintained separately.
- This repo is intended for deployment and distribution of build artifacts only.
- Published site: `https://hec-ovi.dev`

## Repository Structure

- `out/`: production static files (`index.html`, `_next/`, assets, `robots.txt`, `sitemap.xml`, etc.)


## Local Preview

From this repository root:

```bash
npx serve out
```

Then open the local URL shown in terminal.

## Update Workflow

1. Build latest version in the source repository.
2. Copy updated export into this repo’s `out/`.

## SEO Notes

This build already includes:

- Canonical URL metadata
- Open Graph + Twitter metadata
- Structured data (JSON-LD)
- `robots.txt`
- `sitemap.xml`
