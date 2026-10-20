# Task 5-b — Blog System Builder (work record)

## Scope completed
- `/blog` listing page + `/blog/[slug]` article pages + `BlogBrowser` client component
- All 10 blog images regenerated via scripts/gen-images.sh

## Files
- src/components/blog/blog-browser.tsx (new, "use client")
- src/app/blog/page.tsx (new, server)
- src/app/blog/[slug]/page.tsx (new, server, SSG via generateStaticParams)

## Key decisions
- Default browser state renders all 10 posts server-side (SEO)
- Date format pinned to UTC + id-ID locale → hydration-safe
- Related posts: same category first, fill with latest others, slice 3
- JSON-LD: listing = BreadcrumbList + ItemList(all posts); article = Article + BreadcrumbList

## Handoffs / warnings for next agents
- public/images/hero.jpg & public/images/og-image.jpg failed AI generation (retried once) — regenerate
- Pre-existing lint error in src/components/shared/navbar.tsx:29 (set-state-in-effect) — owner: Task 1; not touched
- My files lint clean (bunx eslint src/app/blog src/components/blog → exit 0)
