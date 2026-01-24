---
name: sync-rei-docs
description: Sync documentation from the rei source repository to this documentation site
---

# Sync Documentation from Source Repository

Skill for syncing documentation from the rei source repository to this documentation site.

## Source Repository

**Location:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei`

**Key doc locations in source:**

### User Documentation (`docs/user/`)
- `docs/user/cli/` - CLI command reference (`.md` files)
- `docs/user/quickstart.md` - Quickstart guide
- `docs/user/ai-integration.md` - AI integration guide
- `docs/user/concepts.md` - Core concepts (anatomy of equanimity mapping)
- `docs/user/CHANGELOG.md` - User-facing changelog

### Developer Documentation (`docs/dev/`)
- `docs/dev/architecture/` - System design and patterns
- `docs/dev/modules/` - Per-module microdocs (12 modules)
- `docs/dev/design/implemented/` - Implemented ADRs
- `docs/dev/design/proposed/` - Proposed ADRs
- `docs/dev/learnings/` - Engineering lessons
- `docs/dev/roadmap/` - Project planning
- `docs/dev/technical-debt/` - Technical debt tracking

## Documentation Repository (this repo)

**Location:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei-documentation`

**Content structure:**
- `content/docs/commands/` - CLI command reference (`.mdx` files)
- `content/docs/concepts/` - Concept documentation
- `content/docs/changelog.mdx` - **Website changelog (user-facing)**
- `content/docs/` - Root docs (quickstart, configuration, etc.)
- `CHANGELOG.md` - Repository changelog (tracks sync status)

## Workflow

### Step 1: Check Last Reviewed Commit

Read the repo changelog to find the last reviewed commit:
```bash
head -20 /Users/shinzui/Keikaku/bokuno/rei-project/rei-documentation/CHANGELOG.md
```

### Step 2: Get Recent Changes

Check for doc changes since the last reviewed commit:
```bash
cd /Users/shinzui/Keikaku/bokuno/rei-project/rei && git log --oneline <last-commit>..HEAD -- docs/
```

To see what changed:
```bash
cd /Users/shinzui/Keikaku/bokuno/rei-project/rei && git diff --name-only <last-commit>..HEAD -- docs/
```

### Step 3: Identify Files to Update

Map source files to documentation files:

| Source (rei/docs/user/cli/*.md) | Target (rei-documentation/content/docs/commands/*.mdx) |
|---------------------------------|--------------------------------------------------------|
| action.md | action.mdx |
| agent.md | agent.mdx |
| blocker.md | blocker.mdx |
| cycle.md | cycle.mdx |
| dependency.md | dependency.mdx |
| doc.md | doc.mdx |
| focus.md | focus.mdx |
| habit.md | habit.mdx |
| intention.md | intention.mdx |
| knowledge.md | knowledge.mdx |
| link.md | link.mdx |
| note.md | note.mdx |
| outcome.md | outcome.mdx |
| reflect.md | reflect.mdx |
| reminder.md | reminder.mdx |
| subscription.md | subscription.mdx |
| support.md | support.mdx |
| task.md | task.mdx |

### Step 4: Update Documentation

When updating files, transform from Markdown to MDX format:

1. Add frontmatter with `title`, `description`, and `icon` fields
2. Convert code blocks from `sh` to `bash` (optional but consistent)
3. Preserve all command documentation, options, and examples
4. Add or update any cross-references

Example MDX frontmatter:
```mdx
---
title: rei habit
description: Manage recurring habits and track adherence
icon: Repeat
---
```

### Step 5: Update BOTH Changelogs

**IMPORTANT:** After syncing, update TWO changelog files:

#### 1. Repository Changelog (`CHANGELOG.md`)

Update with:
- Last reviewed commit hash
- Date of update
- Commits reviewed (from..to)
- Files updated
- Features documented

#### 2. Website Changelog (`content/docs/changelog.mdx`)

Update with user-friendly changelog entries:
- Date header (## YYYY-MM-DD)
- New commands or features with descriptions
- Enhancements to existing commands
- Keep it readable for end users (not technical git details)

**Format for website changelog:**

```mdx
## YYYY-MM-DD

### New Command: Command Name

Brief description of what the new command does.

- `rei command subcommand` — What it does
- `rei command other` — What this does

### Feature Enhancements

- **`rei existing command`** — What changed or was added
```

## Commands to Run

```bash
# Check repo changelog for last sync
head -20 CHANGELOG.md

# From source repo - check recent doc commits
cd /Users/shinzui/Keikaku/bokuno/rei-project/rei
git log --oneline --since="1 week ago" -- docs/

# From source repo - show changed files
git diff --name-only <last-commit>..HEAD -- docs/

# Read a specific source doc
cat docs/user/cli/<command>.md
```

## Icon Mapping

Use these Lucide icons for command pages:
- action: `Zap`
- agent: `Bot`
- blocker: `Ban`
- category: `Tags`
- changelog: `History`
- cycle: `RefreshCw`
- dependency: `GitBranch`
- doc: `File`
- focus: `Crosshair`
- habit: `Repeat`
- help: `CircleQuestionMark`
- intention: `Target`
- knowledge: `Lightbulb`
- link: `ExternalLink`
- note: `FileText`
- outcome: `Trophy`
- reflect: `BookText`
- reminder: `Bell`
- review: `CalendarCheck`
- subscription: `BellRing`
- support: `Link2`
- system: `Terminal`
- task: `ListTodo`
- today: `CalendarDays`
- workspace: `FolderGit2`

### Looking Up Valid Icons

Icons come from the `lucide-react` package. To find valid icon names:

```bash
# List all available icons
node -e "console.log(Object.keys(require('lucide-react').icons).join('\n'))"

# Search for icons by keyword
node -e "console.log(Object.keys(require('lucide-react').icons).filter(k => k.toLowerCase().includes('help')).join('\n'))"
```

**Important:** Icon names are PascalCase (e.g., `CircleQuestionMark`, not `circle-question-mark`).

## Notes

- Always preserve existing MDX-specific features (components, imports)
- The source docs are the source of truth for CLI command behavior
- Concepts pages may need manual curation beyond CLI docs
- **Always update both changelogs** after each sync session
- Website changelog should be user-friendly; repo changelog tracks git details
- Developer docs (`docs/dev/`) are primarily for rei project contributors, not typical sync targets
