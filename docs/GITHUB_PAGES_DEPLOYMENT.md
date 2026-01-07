# GitHub Pages Deployment Issue

## Problem Summary

Deploying a TanStack Start SPA to GitHub Pages at a subpath (e.g., `/rei-documentation/`) does not work due to a fundamental incompatibility between TanStack Start's prerender system and Vite's `base` configuration.

## Technical Details

### The Conflict

1. **Vite's `base` config**: When set to `/rei-documentation/`, all asset URLs are prefixed with this path. This is required for GitHub Pages subpath deployment.

2. **TanStack Start's prerender**: During build, the prerender phase starts a Vite preview server and fetches pages to generate static HTML. The fetch URLs are constructed using the router's `basepath`.

3. **The incompatibility**: The Vite preview server serves content at the configured `base` path (`/rei-documentation/`), but the prerender fetcher constructs URLs relative to root (`/`). This causes 404 errors during prerender:
   ```
   Error: Failed to fetch /: Not Found
   ```

### Why SPA Mode Forces Prerender

In TanStack Start's schema (`packages/start-plugin-core/src/schema.ts`), SPA mode **always forces prerender enabled**:

```typescript
const spaSchema = z.object({
  // ...
  prerender: pagePrerenderOptionsSchema
    .transform((opts) => ({
      // ...
      enabled: true,  // Always forced to true
    })),
})
```

This means there's no way to disable prerendering when using SPA mode.

## Attempted Solutions

### 1. Post-processing HTML files
- Rewrote asset paths in HTML from `/assets/...` to `/rei-documentation/assets/...`
- Also rewrote navigation links
- **Problem**: JavaScript files contain internal chunk imports that also need rewriting, and the approach becomes fragile

### 2. Runtime basepath detection
- Detect basepath from `window.location` at runtime
- **Problem**: Causes hydration mismatch between server-rendered HTML (basepath="/") and client (basepath="/rei-documentation/")

### 3. Build-time basepath injection via Vite's `define`
- Inject `__BASE_PATH__` constant at build time
- **Problem**: Prerender still uses wrong basepath, and internal JS chunk paths remain broken

### 4. Disabling prerender with `failOnError: false`
- Allow prerender to fail silently
- **Problem**: No index.html is generated, breaking the entire site

## Recommended Solutions

### Option 1: Use a Custom Domain (Recommended)
Deploy to a custom domain without a subpath. This eliminates the base path issue entirely.

```yaml
# In GitHub Pages settings, configure custom domain
# No base path needed - everything serves from /
```

### Option 2: Deploy to Vercel or Netlify
These platforms handle SPA routing natively and don't require the subpath workaround that GitHub Pages needs.

```bash
# Vercel
npx vercel

# Netlify
npx netlify deploy
```

### Option 3: Switch to React Router
Fumadocs supports React Router, which works correctly with Vite's `base` config because it doesn't have the same prerender architecture:

- `fumadocs` has examples for `react-router` and `react-router-spa`
- React Router respects Vite's base path throughout the build

### Option 4: Wait for TanStack Start Fix
The TanStack Start team may address this issue in future releases. Relevant considerations:
- Allow disabling prerender in SPA mode
- Make prerender respect Vite's `base` config

## Current State

The site builds successfully for local development (no base path). For GitHub Pages deployment, the site is currently broken due to the issues documented above.

## Files Modified During Investigation

- `vite.config.ts` - Various attempts at base path configuration
- `src/router.tsx` - Runtime basepath detection attempts
- `scripts/generate-spa-shell.mjs` - Post-processing script for HTML rewriting
- `.github/workflows/deploy.yml` - Build and deployment workflow

## References

- TanStack Router source: `/Users/shinzui/Keikaku/hub/tanstack/router`
- Fumadocs examples: `/Users/shinzui/Keikaku/hub/fumadocs/examples/`
- TanStack Start prerender code: `packages/start-plugin-core/src/prerender.ts`
- TanStack Start schema: `packages/start-plugin-core/src/schema.ts`
