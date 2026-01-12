# Documentation Site Changelog

Track documentation site updates and synchronization with the source repository.

## Sync Status

**Source Repository:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei`
**Last Source Commit Reviewed:** `f4ab764` (2026-01-12)

---

## Changelog

### 2026-01-12

**Reviewed commits:** `10c9fff` through `f4ab764`

**Files updated:**
- `note.mdx` — Added `today` command for daily notes with automatic task due dates
- `intention.mdx` — Added `set-overview` and `clear-overview` commands, added Overview Note to full view

**Features documented:**
- Daily notes (`rei note today`) with JournalEntry anchoring
- Automatic due date assignment for tasks in daily notes
- Overview note feature for intentions (`set-overview`, `clear-overview`)
- Overview notes appear prominently in `intention show --full` output

---

### 2026-01-11

**Reviewed commits:** `7b68f45` through `10c9fff`

**Files updated:**
- `system.mdx` — **NEW** — System commands for dormancy evaluation and fixes
- `intention.mdx` — Added Tasks, Linked habits, and Reminders to full view display
- `commands/index.mdx` — Added System Commands category with `rei system`

**Features documented:**
- System command (`rei system evaluate-dormancy`, `fix-dormancy`)
- Hierarchy-aware dormancy evaluation (parents with active children aren't dormant)
- Dormancy threshold configuration (`intention.dormancyThresholdDays`)
- Intention full view now shows tasks, linked habits, and reminders

**Notes:**
- Source docs restructured into `docs/user/` and `docs/dev/` directories
- Developer docs (`docs/dev/`) contain architecture, design, learnings, modules, roadmap, and technical debt documentation primarily for rei project contributors

---

### 2026-01-10

**Reviewed commits:** `a999540` through `7b68f45`

**Files updated:**
- `reminder.mdx` — **NEW** — Full reminder command documentation
- `habit.mdx` — Added `tracker` subcommand, added Reminders section with `remind` shortcut
- `intention.mdx` — Added `remind` shortcut command
- `note.mdx` — Added `get-help` and `remind` subcommands
- `outcome.mdx` — Enhanced `record` with FZF support, `--at` option, stdin support, and ISO 8601 timestamps
- `commands/index.mdx` — Added reminder to Time Commands, added triggered reminders to dashboard description

**Features documented:**
- Reminder command (`reminder create`, `list`, `show`, `complete`, `snooze`, `cancel`, `reschedule`, `check`)
- Reminder shortcuts (`intention remind`, `habit remind`, `note remind`)
- Habit adherence tracker (`habit tracker --days`)
- Note AI help (`note get-help`)
- Outcome recording enhancements (FZF, relative time, ISO 8601, stdin)
- Dashboard triggered reminders integration

**Navigation updated:**
- Added `reminder` to commands navigation

---

### 2026-01-09

**Reviewed commits:** `724e0a8` through `a999540`

**Files updated:**
- `action.mdx` — Added ISO 8601 absolute timestamp support for `--at` option
- `intention.mdx` — Added tree command options (`--future`, `--all`, `--completed`), added Supports/Supported By to full view
- `support.mdx` — **NEW** — Full support command documentation
- `commands/index.mdx` — Added support command to Core Commands, added FZF interactive toggle documentation

**Features documented:**
- ISO 8601 timestamp support for action recording (`2024-01-15T14:30:00Z`, timezone offsets)
- Support relationships between intentions (`support add`, `show`, `supported-by`, `remove`)
- FZF interactive toggle (`ctrl-f` to switch between active/all intentions)
- Intention tree view options (future, all, completed filtering)

**Navigation updated:**
- Added `support` to commands navigation in meta.json

---

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
