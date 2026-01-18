# rei Documentation

Documentation site for [rei](https://github.com/shinzui/rei), a CLI tool for intentional living and equanimity mapping.

## Tech Stack

- [Fumadocs](https://fumadocs.vercel.app/) - Documentation framework
- [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Markdown with JSX

## Development

### Prerequisites

- Node.js 20+
- pnpm

Or use [Nix](https://nixos.org/) with the provided flake:

```bash
nix develop
```

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`.

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm start
```

### Other Commands

```bash
# Type check
pnpm types:check

# Lint
pnpm lint

# Format
pnpm format
```

## Project Structure

```
content/
└── docs/
    ├── commands/      # CLI command reference
    ├── concepts/      # Core concepts documentation
    ├── index.mdx      # Home page
    ├── quickstart.mdx # Getting started guide
    └── changelog.mdx  # Feature changelog
```

## Syncing Documentation

Documentation is synced from the rei source repository. Use the `/sync-rei-docs` Claude Code skill to:

1. Check for changes in the source repository
2. Update documentation files
3. Update changelogs

See `CHANGELOG.md` for sync history and the last reviewed commit.

## Writing Documentation

### Adding a New Command

1. Create `content/docs/commands/<command>.mdx`
2. Add frontmatter with `title`, `description`, and `icon`
3. Add the command to `content/docs/commands/meta.json`
4. Update `content/docs/commands/index.mdx` if needed

### Frontmatter

```mdx
---
title: rei command
description: Brief description of the command
icon: IconName
---
```

Icons use [Lucide](https://lucide.dev/icons/).

## License

MIT
