# SEO blog posts

Each `.md` file is one article with YAML frontmatter (`title`, `description`, `keyword`) and markdown body. Target length: **800–1200 words**, H2/H3 structure, FAQs, CTA. Images use unique Unsplash URLs per article.

**Manifest:** see `manifest.json` for all planned keywords and URL slugs.

## Completed in repo

### Batch 1

| File | Keyword |
|------|---------|
| `iptv.md` | IPTV |
| `best-iptv.md` | Best IPTV |
| `free-iptv.md` | Free IPTV |
| `iptv-m3u.md` | IPTV m3u |
| `iptv-playlist.md` | IPTV playlist |
| `iptv-m3u8.md` | IPTV m3u8 |

### Batch 2

| File | Keyword |
|------|---------|
| `iptv-links.md` | IPTV links |
| `live-tv-iptv.md` | Live TV IPTV |
| `iptv-channels-list.md` | IPTV channels list |
| `iptv-subscription.md` | IPTV subscription |

### Batch 3

| File | Keyword |
|------|---------|
| `best-iptv-subscription.md` | Best IPTV subscription |
| `best-iptv-subscription-uk.md` | Best IPTV subscription UK |
| `best-iptv-service.md` | Best IPTV service |
| `premium-iptv.md` | Premium IPTV |
| `iptv-server.md` | IPTV server |

**Batch tracker:** `batches.json` — next batch starts at **IPTV trial** → slug `iptv-trial.md`.

**Remaining keywords:** see `manifest.json`. Request **“blog batch 4”** (5 posts) to continue.

**Live route:** Posts are listed at **`/blog`** and each file is available at **`/blog/{slug}`** (see `src/lib/blog.ts` and `src/app/blog/`).
