# Sync Documentation from Source Repository

Skill for syncing documentation from the rei source repository to this documentation site.

## Source Repository

**Location:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei`

**Key doc locations in source:**
- `docs/cli/` - CLI command reference (`.md` files)
- `docs/architecture/` - Architecture documentation
- `docs/design/` - Design documents
- `docs/QUICKSTART.md` - Quickstart guide
- `docs/CHANGELOG.md` - Documentation changelog with last reviewed commit

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

| Source (rei/docs/cli/*.md) | Target (rei-documentation/content/docs/commands/*.mdx) |
|----------------------------|--------------------------------------------------------|
| action.md | action.mdx |
| agent.md | agent.mdx |
| blocker.md | blocker.mdx |
| cycle.md | cycle.mdx |
| focus.md | focus.mdx |
| habit.md | habit.mdx |
| intention.md | intention.mdx |
| note.md | note.mdx |
| outcome.md | outcome.mdx |
| reflect.md | reflect.mdx |
| task.md | task.mdx |
| subscription.md | (may need to create subscription.mdx) |
| dependency.md | (may need to create dependency.mdx) |
| doc.md | (may need to create doc.mdx) |
| link.md | (may need to create link.mdx) |
| knowledge.md | (may need to create knowledge.mdx) |

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
cat docs/cli/<command>.md
```

## Icon Mapping

Use these Lucide icons for command pages:
- habit: `Repeat`
- intention: `Target`
- action: `Zap`
- focus: `Crosshair`
- cycle: `RefreshCw`
- note: `FileText`
- task: `ListTodo`
- blocker: `Ban`
- reflect: `BookText`
- agent: `Bot`
- outcome: `Trophy`
- support: `Link2`
- subscription: `Bell`
- dependency: `GitBranch`
- doc: `File`
- link: `ExternalLink`
- knowledge: `Lightbulb`
- changelog: `History`

## Notes

- Always preserve existing MDX-specific features (components, imports)
- The source docs are the source of truth for CLI command behavior
- Concepts pages may need manual curation beyond CLI docs
- **Always update both changelogs** after each sync session
- Website changelog should be user-friendly; repo changelog tracks git details
