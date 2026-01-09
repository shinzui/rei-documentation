# Documentation Site Changelog

Track documentation site updates and synchronization with the source repository.

## Sync Status

**Source Repository:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei`
**Last Source Commit Reviewed:** `724e0a8` (2026-01-08)

---

## Changelog

### 2026-01-08

**Reviewed commits:** `3aafe3c` through `724e0a8`

**Files updated:**
- `action.mdx` — Added `update-occurred-at` command for correcting action timestamps
- `habit.mdx` — Added `--duration` option to `record-action`, added `update-action-occurred-at` command
- `commands/index.mdx` — Added `neglected` command to dashboard commands section, enhanced `today` dashboard description

**Features documented:**
- Action timestamp correction (`action update-occurred-at`)
- Habit action duration tracking (`habit record-action --duration`)
- Habit action timestamp correction (`habit update-action-occurred-at`)
- Neglected intentions finder (`neglected --days --context`)
- Enhanced today dashboard (Completed Today section)
- Enhanced info command (workspace, notes, reflections, database status)

---

### 2026-01-07

**Reviewed commits:** `3bcd9c8` through `3aafe3c`

**Files updated:**
- `action.mdx` — Added `update-description` command, expanded `record` command with relative time and duration formats
- `habit.mdx` — Added `rename` command, `record-action` and `update-action-template` commands, `--json` flags for show/list/status, `--full` flag for show, blocker integration
- `intention.mdx` — Added `--future` flag to create, intention status section, `contexts` command, expanded lifecycle documentation
- `note.mdx` — Added `--habit` flag to new/list commands, smart aggregation for intention filter, add-tags/remove-tags commands
- `task.mdx` — **NEW** — Full task command documentation including due dates

**Features documented:**
- Action description updates (`action update-description`)
- Habit renaming (`habit rename`)
- Habit JSON output (show, list, status `--json`)
- Habit full view (`habit show --full`)
- Simplified habit action recording (`habit record-action`)
- Habit action template management (`habit update-action-template`)
- Habit blocker integration (auto-pause/resume)
- Future intention creation (`intention create --future`)
- Note support for habits (`note new/list --habit`)
- Task management with due dates (`task list/complete/reopen/due`)
- Task filtering (`--all`, `--include-completed`, `--due-today`, `--overdue`)

**Navigation updated:**
- Added `task` to commands navigation in meta.json

---

### 2026-01-07 (Initial)

**Initial changelog setup**

- Created sync-docs skill for checking and updating documentation from source repo
- Established mapping between source docs and documentation site structure

---

## How to Sync

Use the `/sync-docs` skill to:
1. Check for changes in the source repository's docs
2. Compare with the last reviewed commit
3. Update documentation files as needed
4. Update this changelog
