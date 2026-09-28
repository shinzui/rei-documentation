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

Help topics are accessed via `rei help <topic>` and define canonical explanations for complex features. **Every help topic MUST have a corresponding guide in `content/docs/guides/`.**

Current help topics and their required guides:

| Help Topic | Required Guide |
|------------|----------------|
| `agent-memory-filesystem.md` | `agent-memory-filesystem.mdx` |
| `agent-memory.md` | `agent-memory.mdx` |
| `agent-schedules.md` | `agent-schedules.mdx` |
| `agent-sessions.md` | `agent-sessions.mdx` |
| `collections.md` | `collections.mdx` |
| `config.md` | `config.mdx` |
| `custom-properties.md` | `custom-properties.mdx` |
| `cycles.md` | `cycles.mdx` |
| `dashboard.md` | `dashboard.mdx` |
| `delegation.md` | `delegation.mdx` |
| `disruptions.md` | `disruptions.mdx` |
| `edges.md` | `edges.mdx` |
| `intention-filtering.md` | `intention-filtering.mdx` |
| `journal-entries.md` | `journal-entries.mdx` |
| `kit.md` | `kit.mdx` |
| `multi-agent-orchestration.md` | `multi-agent-orchestration.mdx` |
| `projects.md` | `projects.mdx` |
| `reminders.md` | `reminders.mdx` |
| `review-checkpoints.md` | `review-checkpoints.mdx` |
| `state-machines.md` | `state-machines.mdx` |
| `templates.md` | `templates.mdx` |
| `time.md` | `time-formats.mdx` |
| `topics.md` | `topics.mdx` |
| `views.md` | `views.mdx` |

**Sync requirements:**
1. **Every help topic MUST have a corresponding guide** - if a help topic exists without a guide, create one
2. **When help topics change, update the corresponding guide immediately**
3. **When new help topics are added, create new guides**

### User Documentation (`docs/user/`)

- `docs/user/cli/` - CLI command reference (`.md` files)
- `docs/user/quickstart.md` - Quickstart guide
- `docs/user/ai-integration.md` - AI integration guide
- `docs/user/concepts.md` - Core concepts
- `docs/user/CHANGELOG.md` - User-facing changelog

**CLI commands in source** (`docs/user/cli/`, as of the 2026-09-27 sync):
- action.md, agent-memory.md, agent-schedule.md, agent.md, automation-exit-contract.md
- blocker.md, category.md, checkpoint.md, collection.md, configuration.md
- custom-property.md, cycle.md, day.md, dependency.md, disruption.md, doc.md, edge.md
- focus.md, habit.md, help.md, intention.md, kiroku.md, kit.md, knowledge.md
- link.md, note.md, ontology.md, ops.md, outcome.md, periodic-check.md, playbook.md, predicate.md
- project.md, reflect.md, reminder.md, review.md, subscription.md, support.md, system.md
- task.md, template.md, today.md, tomorrow.md, topic.md, view.md, worker.md
- workspace.md, yesterday.md

Other user docs worth checking each sync: `docs/user/api.md` (→ `content/docs/api.mdx`) and
`docs/user/observability.md` (→ `content/docs/observability.mdx`).

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
- `content/docs/concepts/` - Concept documentation
- `content/docs/guides/` - **Guides (MUST match help topics 1:1)**
- `content/docs/changelog.mdx` - **Website changelog (user-facing)**
- `content/docs/` - Root docs (quickstart, configuration, etc.)
- `CHANGELOG.md` - Repository changelog (tracks sync status)

**Current concept pages:**
- index.mdx (Core Concepts overview)
- intentions.mdx, habits.mdx, reflections.mdx
- focus-cycles.mdx, custom-properties.mdx, ai-coaching.mdx

**Current guide pages:** one per help topic (see the table above), plus two guides with no
help topic of their own — `workflow-auto-setup.mdx` and `automation-exit-contract.mdx`
(the latter tracks `docs/user/cli/automation-exit-contract.md`).

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

### Step 3: Check Help Topics (CRITICAL)

**IMPORTANT:** Always check help topics for updates AND verify all have corresponding guides.

#### 3a. Check for updates to existing help topics:
```bash
cd /Users/shinzui/Keikaku/bokuno/rei-project/rei && git diff <last-commit>..HEAD -- rei-cli/help/
```

#### 3b. List all current help topics:
```bash
ls /Users/shinzui/Keikaku/bokuno/rei-project/rei/rei-cli/help/
```

#### 3c. Verify corresponding guides exist:
```bash
ls /Users/shinzui/Keikaku/bokuno/rei-project/rei-documentation/content/docs/guides/
```

**Every help topic MUST have a corresponding guide.** If a help topic exists without a matching guide, create the guide.

Help topics define canonical behavior. When they change:
1. Update the corresponding guide in `content/docs/guides/`
2. Ensure examples and syntax match exactly
3. Add any new topics as new guides

**Checklist for each sync:**
- [ ] All help topics have corresponding guides
- [ ] Updated help topics have their guides updated
- [ ] New help topics have new guides created

### Step 4: Identify Files to Update

Map source files to documentation files.

Each `docs/user/cli/<name>.md` maps to `content/docs/commands/<name>.mdx` with the same
basename, with these exceptions:

| Source | Target |
|--------|--------|
| configuration.md | `content/docs/configuration.mdx` (root page, not a command page) |
| automation-exit-contract.md | `content/docs/guides/automation-exit-contract.mdx` |
| README.md | `content/docs/commands/index.mdx` (command index tables) |
| `docs/user/api.md` | `content/docs/api.mdx` (root page) |
| `docs/user/observability.md` | `content/docs/observability.mdx` (root page) |

Map help topics to guides (**all help topics MUST have a corresponding guide**):

See the help-topic table above — every topic in `rei-cli/help/` maps to a guide of the same name, except `time.md` → `time-formats.mdx`.

**NOTE:** When new help topics are added in the source repo, add them to that table, create the corresponding guide, and register it in `content/docs/guides/meta.json`.

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
- custom-property: `SlidersHorizontal`
- cycle: `RefreshCw`
- dependency: `GitBranch`
- disruption: `AlertTriangle`
- doc: `File`
- focus: `Crosshair`
- habit: `Repeat`
- help: `CircleQuestionMark`
- intention: `Target`
- knowledge: `Lightbulb`
- link: `ExternalLink`
- neglected: `Clock`
- note: `FileText`
- ops: `Wrench`
- ontology: `Network`
- outcome: `Trophy`
- project: `FolderKanban`
- reflect: `BookText`
- reminder: `Bell`
- review: `CalendarCheck`
- subscription: `BellRing`
- support: `Link2`
- system: `Terminal`
- task: `ListTodo`
- today: `CalendarDays`
- tomorrow: `CalendarArrowUp`
- topic: `Hash`
- workspace: `FolderGit2`
- api (root page): `Server`

### Looking Up Valid Icons

Icons come from the `lucide-react` package. To find valid icon names:

```bash
# List all available icons
node -e "console.log(Object.keys(require('lucide-react').icons).join('\n'))"

# Search for icons by keyword
node -e "console.log(Object.keys(require('lucide-react').icons).filter(k => k.toLowerCase().includes('help')).join('\n'))"
```

**Important:** Icon names are PascalCase (e.g., `CircleQuestionMark`, not `circle-help`).

## Notes

- Always preserve existing MDX-specific features (components, imports)
- The source docs are the source of truth for CLI command behavior
- **Help topics are the source of truth for guides** - always sync them
- **Every help topic MUST have a corresponding guide in `content/docs/guides/`**
- Concepts pages may need manual curation beyond CLI docs
- **Always update both changelogs** after each sync session
- Website changelog should be user-friendly; repo changelog tracks git details
- Developer docs (`docs/dev/`) are primarily for rei project contributors, not typical sync targets
