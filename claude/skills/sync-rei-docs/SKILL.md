---
name: sync-rei-docs
description: Sync documentation from the rei source repository to this documentation site
---

# Sync Documentation from Source Repository

Skill for syncing documentation from the rei source repository to this documentation site.

## Source Repository

**Location:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei`

**Project structure:**
- `rei-cli/` - CLI application
- `rei-core/` - Core domain library

### Help Topics (CRITICAL - Source of Truth for Guides)

**Location:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei/rei-cli/help/`

Help topics are accessed via `rei help <topic>` and define canonical explanations for complex features. **Guides in the documentation site MUST match these help topics.**

Current help topics:
- `custom-properties.md` - Custom property types, creation, and usage
- `intention-filtering.md` - Filtering intentions with --where, --context, --state-tag
- `time.md` - Time formats for --at flag (relative and absolute)

**Sync requirement:** When help topics change, update corresponding concept pages in the documentation site.

### User Documentation (`docs/user/`)

- `docs/user/cli/` - CLI command reference (`.md` files)
- `docs/user/quickstart.md` - Quickstart guide
- `docs/user/ai-integration.md` - AI integration guide
- `docs/user/concepts.md` - Core concepts
- `docs/user/CHANGELOG.md` - User-facing changelog

**CLI commands in source:**
- action.md, agent.md, blocker.md, category.md, configuration.md
- custom-property.md, cycle.md, dependency.md, disruption.md, doc.md
- focus.md, habit.md, help.md, intention.md, knowledge.md
- link.md, note.md, outcome.md, reflect.md, reminder.md
- review.md, subscription.md, support.md, system.md
- task.md, today.md, tomorrow.md, workspace.md

### Developer Documentation (`docs/dev/`)

- `docs/dev/architecture/` - System design and patterns
  - cli-design.md, cli-implementation.md, domain.md
  - event-serialization-patterns.md, event-sourcing-audit.md
  - examples.md, fzf-integration.md, overview.md, streams.md
- `docs/dev/modules/` - Per-module microdocs (17 modules)
  - agent, category, custom-property, cycle, dependency
  - disruption, focus, guidance, habit, intention
  - journal-entry, knowledge, note, reflection, reminder, support
- `docs/dev/design/` - ADRs (implemented and proposed)
- `docs/dev/learnings/` - Engineering lessons
- `docs/dev/roadmap/` - Project planning
- `docs/dev/technical-debt/` - Technical debt tracking
- `docs/dev/testing/` - Testing documentation
- `docs/dev/features/` - Feature documentation
- `docs/dev/bugs/` - Bug tracking

## Documentation Repository (this repo)

**Location:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei-documentation`

**Content structure:**
- `content/docs/commands/` - CLI command reference (`.mdx` files)
- `content/docs/concepts/` - Concept documentation and guides
- `content/docs/changelog.mdx` - **Website changelog (user-facing)**
- `content/docs/` - Root docs (quickstart, configuration, etc.)
- `CHANGELOG.md` - Repository changelog (tracks sync status)

**Current concept pages:**
- index.mdx (Core Concepts overview)
- intentions.mdx, habits.mdx, reflections.mdx
- focus-cycles.mdx, custom-properties.mdx, ai-coaching.mdx

## Workflow

### Step 1: Check Last Reviewed Commit

Read the repo changelog to find the last reviewed commit:
```bash
head -20 /Users/shinzui/Keikaku/bokuno/rei-project/rei-documentation/CHANGELOG.md
```

### Step 2: Get Recent Changes

Check for doc changes since the last reviewed commit:
```bash
cd /Users/shinzui/Keikaku/bokuno/rei-project/rei && git log --oneline <last-commit>..HEAD -- docs/ rei-cli/help/
```

To see what changed:
```bash
cd /Users/shinzui/Keikaku/bokuno/rei-project/rei && git diff --name-only <last-commit>..HEAD -- docs/ rei-cli/help/
```

### Step 3: Check Help Topics

**IMPORTANT:** Always check if help topics have changed:
```bash
cd /Users/shinzui/Keikaku/bokuno/rei-project/rei && git diff <last-commit>..HEAD -- rei-cli/help/
```

Help topics define canonical behavior. When they change:
1. Update the corresponding concept page in `content/docs/concepts/`
2. Ensure examples and syntax match exactly
3. Add any new topics as concept pages

### Step 4: Identify Files to Update

Map source files to documentation files:

| Source (rei/docs/user/cli/*.md) | Target (rei-documentation/content/docs/commands/*.mdx) |
|---------------------------------|--------------------------------------------------------|
| action.md | action.mdx |
| agent.md | agent.mdx |
| blocker.md | blocker.mdx |
| category.md | category.mdx |
| configuration.md | (content/docs/configuration.mdx) |
| custom-property.md | custom-property.mdx |
| cycle.md | cycle.mdx |
| dependency.md | dependency.mdx (if exists) |
| disruption.md | disruption.mdx |
| doc.md | doc.mdx |
| focus.md | focus.mdx |
| habit.md | habit.mdx |
| help.md | help.mdx |
| intention.md | intention.mdx |
| knowledge.md | knowledge.mdx |
| link.md | link.mdx |
| note.md | note.mdx |
| outcome.md | outcome.mdx |
| reflect.md | reflect.mdx |
| reminder.md | reminder.mdx |
| review.md | review.mdx |
| subscription.md | subscription.mdx |
| support.md | support.mdx |
| system.md | system.mdx |
| task.md | task.mdx |
| today.md | today.mdx |
| tomorrow.md | tomorrow.mdx |
| workspace.md | workspace.mdx |

Map help topics to concept pages:

| Help Topic (rei-cli/help/) | Target (content/docs/concepts/) |
|----------------------------|--------------------------------|
| custom-properties.md | custom-properties.mdx |
| intention-filtering.md | (add to intentions.mdx or new page) |
| time.md | (add as new time-formats.mdx or to relevant pages) |

### Step 5: Update Documentation

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

### Step 6: Update BOTH Changelogs

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
git log --oneline --since="1 week ago" -- docs/ rei-cli/help/

# From source repo - show changed files
git diff --name-only <last-commit>..HEAD -- docs/ rei-cli/help/

# Read a specific source doc
cat docs/user/cli/<command>.md

# Read a help topic
cat rei-cli/help/<topic>.md
```

## Icon Mapping

Use these Lucide icons for command pages:
- action: `Zap`
- agent: `Bot`
- blocker: `Ban`
- category: `Tags`
- changelog: `History`
- configuration: `Settings`
- custom-property: `Sliders`
- cycle: `RefreshCw`
- dependency: `GitBranch`
- disruption: `AlertTriangle`
- doc: `File`
- focus: `Crosshair`
- habit: `Repeat`
- help: `CircleHelp`
- intention: `Target`
- knowledge: `Lightbulb`
- link: `ExternalLink`
- neglected: `Clock`
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
- tomorrow: `CalendarArrowUp`
- workspace: `FolderGit2`

### Looking Up Valid Icons

Icons come from the `lucide-react` package. To find valid icon names:

```bash
# List all available icons
node -e "console.log(Object.keys(require('lucide-react').icons).join('\n'))"

# Search for icons by keyword
node -e "console.log(Object.keys(require('lucide-react').icons).filter(k => k.toLowerCase().includes('help')).join('\n'))"
```

**Important:** Icon names are PascalCase (e.g., `CircleHelp`, not `circle-help`).

## Notes

- Always preserve existing MDX-specific features (components, imports)
- The source docs are the source of truth for CLI command behavior
- **Help topics are the source of truth for guides** - always sync them
- Concepts pages may need manual curation beyond CLI docs
- **Always update both changelogs** after each sync session
- Website changelog should be user-friendly; repo changelog tracks git details
- Developer docs (`docs/dev/`) are primarily for rei project contributors, not typical sync targets
