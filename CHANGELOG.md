# Documentation Site Changelog

Track documentation site updates and synchronization with the source repository.

## Sync Status

**Source Repository:** `/Users/shinzui/Keikaku/bokuno/rei-project/rei`
**Last Source Commit Reviewed:** `a659a27` (2026-02-25)

---

## Changelog

### 2026-02-25

**Reviewed commits:** `3762096` through `a659a27`

**Files updated:**
- `commands/custom-property.mdx` — Added Lifecycle Property section (set-lifecycle, revoke-lifecycle)
- `commands/cycle.mdx` — Updated select-focus --date flag to document relative date expressions
- `commands/note.mdx` — Added `move` subcommand, updated `open` with `--stdin` flag
- `commands/subscription.mdx` — Added 15 missing subscription workers
- `guides/state-machines.mdx` — Added Lifecycle Properties (Auto-Complete) section and command summary
- `changelog.mdx` — Added 2026-02-25 entries

**Features documented:**
- Lifecycle property auto-complete (set-lifecycle, revoke-lifecycle)
- Cycle select-focus --date relative expressions (yesterday, 3 days ago)
- Note move command (reassign notes between entities)
- Note open --stdin (programmatic note updates)
- Full subscription worker list (15 workers added)

**No documentation needed:**
- `877e554` Documentation-only (lifecycle property docs in source)
- `cac0e9f` Move lifecycle property design doc to implemented
- `417b7dd` Internal: lifecycle property infrastructure
- `bc0fcc1` Agent and module doc updates
- `1abc29b` Workspace feature docs (dev-only)

### 2026-02-22

**Reviewed commits:** `29b5021` through `3762096`

**Files created:**
- `guides/disruptions.mdx` — **NEW** — Disruptions guide for tracking recurring interruptions (from help topic `rei help disruptions`)

**Files updated:**
- `commands/collection.mdx` — Added `--category` filter to `list`; added `set-category`, `clear-category`, `set-property`, `clear-property` subcommands; updated Tips section with category and custom property tips
- `commands/intention.mdx` — Added `--started-at` option to `create` command with example and notes
- `commands/link.mdx` — Added FZF Ctrl-F toggle documentation to `list` command
- `commands/help.mdx` — Added `disruptions` to available help topics
- `guides/collections.mdx` — Added Categories section, Custom Properties section, updated Command Summary table
- `guides/state-machines.mdx` — Added State Notes section with open/create/list commands; added `state notes` to overview table and command summary
- `guides/meta.json` — Added `disruptions` to navigation
- `changelog.mdx` — Added 2026-02-22 entries

**Help topics synced:**
- `rei-cli/help/disruptions.md` — **NEW** — Disruption tracking, sources, occurrences, lifecycle, categories, custom properties, task completion links
- `rei-cli/help/collections.md` — Added Categories section (set-category, clear-category, list --category) and Custom Properties section (set-property, clear-property, init-entities)
- `rei-cli/help/state-machines.md` — Added State Notes section (phase-specific documentation per state)

**Features documented:**
- Disruptions guide — recording, sources, lifecycle, addressing with intentions, categories, custom properties, task completion links
- Collection categories (`set-category`, `clear-category`, `list --category`)
- Collection custom properties (`set-property`, `clear-property`)
- State machine state notes (`custom-property <key> note`, `custom-property <key> notes`)
- `rei intention create --started-at` for backdating work start time
- `rei link list` FZF Ctrl-F toggle for active/all intentions

**No documentation needed:**
- `78f4d88` Move collection categories design doc to implemented (dev docs)
- `62def1c` Update collection and custom-property module docs (dev docs)
- `bffd1ed` Add collection categories and custom properties design doc (dev docs)
- `11e0a0b` Update docs for note-link extraction feature (dev docs)
- `57ec190` Extract links from markdown AST for note-link extraction (internal implementation)

---

### 2026-02-18

**Reviewed commits:** `641c5d0` through `29b5021`

**Files created:**
- `guides/journal-entries.mdx` — **NEW** — Journal entries guide for daily property tracking (from help topic `rei help journal-entries`)

**Files updated:**
- `commands/link.mdx` — Major overhaul: first-class links with canonical URL deduplication, new subcommands (show, detach, title, edit, remove, restore), updated add/list with deduplication and `--all`/`--include-removed` flags
- `commands/help.mdx` — Added `journal-entries` to available help topics
- `guides/custom-properties.mdx` — Added Journal Entry to Supported Entity Types table with constraints note; added link to journal entries guide
- `guides/meta.json` — Added `journal-entries` to navigation
- `changelog.mdx` — Added 2026-02-18 entries

**Help topics synced:**
- `rei-cli/help/journal-entries.md` — **NEW** — Daily tracking with journal entry properties
- `rei-cli/help/custom-properties.md` — Added day set-property, day clear-property, day show to supported commands; added journal entry constraints note

**Features documented:**
- First-class links with canonical URL deduplication (`link-canonical` normalization)
- One-to-many link attachments (same URL shared across entities)
- Auto-restore of previously removed links
- `rei link show` — View link details with all attachments
- `rei link detach` — Detach a link from an anchor
- `rei link title` — Set or clear display title
- `rei link edit` — Correct canonical URL (manual override)
- `rei link remove` — Soft-delete a link
- `rei link restore` — Restore a removed link
- `rei link add` — Now uses canonical URL normalization and deduplication
- `rei link list --all` / `--include-removed` — New listing flags
- Journal entries guide — daily metrics tracking, defining properties, frontmatter, constraints

**No documentation needed:**
- `d1d1a3a` Document journal entry custom property support in dev docs
- `2c6d6a4` Add first-class links design document (dev docs)
- Bug fixes: `e9695df`, `3b984ed`, `1fdca58`, `9e0503e`, `733a88b`
- Internal: `95a61ef` link backfill, `b05b8d9`/`fdcb73b` note subcommand refactoring

---

### 2026-02-17 (2)

**Reviewed commits:** `51f77dc` through `641c5d0`

**Files updated:**
- `commands/doc.mdx` — Added `remove` subcommand; updated `open` with FZF support (optional doc-id)
- `commands/agent.mdx` — Refined `explore` subcommand with FZF and interactive mode examples
- `commands/custom-property.mdx` — Added State-Qualified Notes section (`note` and `notes` subcommands)

**Features documented:**
- `rei doc remove` removes document attachments from entities (with FZF support)
- `rei doc open` now supports FZF selection when doc-id is omitted
- `rei custom-property note` opens/creates state-qualified notes for state machine properties
- `rei custom-property notes` lists state-qualified notes for a property on an entity
- `rei agent explore` FZF selection and interactive mode examples

**No documentation needed:**
- Dev module docs update (docs/dev/modules/custom-property/README.md)

---

### 2026-02-17

**Reviewed commits:** `9ed6666` through `51f77dc`

**Files created:**
- `commands/collection.mdx` — **NEW** — Collection commands for grouping knowledge artifacts (manual and virtual collections)
- `guides/collections.mdx` — **NEW** — Collections guide (from help topic `rei help collections`)

**Files updated:**
- `commands/doc.mdx` — Added `add` subcommand (copies file into workspace/docs and attaches); added `--copy` flag to `attach`; updated description
- `commands/note.mdx` — Added `set-title` and `clear-title` subcommands; expanded title extraction section to mention overrides; added `--collection` filter to `list`
- `commands/agent.mdx` — Added `explore` subcommand for AI analysis of collection contents
- `commands/help.mdx` — Added `collections` to available help topics
- `commands/index.mdx` — Added `collection` to Knowledge Commands table
- `commands/meta.json` — Added `collection` to navigation
- `guides/meta.json` — Added `collections` to navigation
- `changelog.mdx` — Added 2026-02-17 entries

**Help topics synced:**
- `rei-cli/help/collections.md` — **NEW** — Collections help topic (manual/virtual collections, queries, AI exploration)

**Features documented:**
- Collection module (`rei collection create`, `list`, `show`, `exec`, `add`, `remove`, `rename`, `describe`, `archive`, `restore`, `edit-query`, `export-query`)
- Manual collections (hand-picked members: notes, links, documents)
- Virtual collections (YAML query-based, with category and property filters)
- `rei agent explore` for AI thematic analysis of collection contents
- `rei note list --collection` for filtering notes by collection membership
- `rei doc add <file>` copies external files into `workspace/docs/` and attaches in one step
- `rei doc attach --copy` opt-in flag to copy file into workspace before attaching
- `rei note set-title` sets a stable user-defined title, preventing automatic H1 extraction
- `rei note clear-title` reverts to automatic title extraction

**No documentation needed:**
- `58f43f8` Add Collection module design document (dev docs)
- `0be80c2` Add state-machine-qualified notes for custom properties (internal feature, not yet user-facing in docs)

---

### 2026-02-15

**Reviewed commits:** `3811c50` through `9ed6666`

**Files updated:**
- `commands/note.mdx` — Added daily note frontmatter behavior: custom properties set via `rei day set-property` are rendered as YAML frontmatter when opening daily notes
- `commands/day.mdx` — Added cross-reference to daily note frontmatter feature
- `commands/outcome.mdx` — Documented that outcomes can be recorded on both Active and Completed intentions
- `commands/intention.mdx` — Updated defer notes to reflect that outcome recording is allowed on Completed intentions
- `changelog.mdx` — Added 2026-02-15 entries

**Features documented:**
- Daily note YAML frontmatter from journal entry custom properties
- Retrospective outcome recording on completed intentions

**No documentation needed:**
- `a2e8a6f` Allow recording outcomes on completed intentions (internal implementation)

---

### 2026-02-13

**Reviewed commits:** `e0c328a` through `3811c50`

**Files created:**
- `commands/day.mdx` — **NEW** — Daily properties on journal entries (set-property, clear-property, show)

**Files updated:**
- `commands/intention.mdx` — Added `--has-deadline` and `--roots` list filters; added `set-addresses` and `clear-addresses` subcommands for linking intentions to disruptions
- `commands/reflect.mdx` — Added `schedule` subcommand with 8 variants: daily, weekly, quarterly, yearly, on, pause, resume, cancel
- `commands/custom-property.mdx` — Added `journal_entry` as valid entity type; added `rei day set-property` examples and related command link
- `commands/index.mdx` — Added `day` to Organization Commands table
- `commands/meta.json` — Added `day` to navigation
- `changelog.mdx` — Added 2026-02-13 entries

**Features documented:**
- `rei day set-property/clear-property/show` — Track daily metrics (mood, energy, sleep) via journal entry properties
- `rei reflect schedule daily/weekly/quarterly/yearly/on` — Schedule recurring reflections
- `rei reflect schedule pause/resume/cancel` — Manage recurring reflection schedules
- `rei intention set-addresses/clear-addresses` — Link/unlink intentions to disruptions
- `rei intention list --has-deadline` — Filter intentions by deadline presence
- `rei intention list --roots` — Filter to root intentions only

---

### 2026-02-12

**Reviewed commits:** `94e57a2` through `e0c328a`

**Files updated:**
- `commands/intention.mdx` — Added `--category` flag to `create` command options, examples, and notes
- `commands/view.mdx` — Added `edit` subcommand for inline YAML editing via `$EDITOR`

**Features documented:**
- Category assignment at intention creation (`--category <slug>`)
- View inline editing (`rei view edit`)

---

### 2026-02-11 (2)

**Reviewed commits:** `f0d6c15` through `94e57a2`

**Files updated:**
- `commands/agent.mdx` — Added `assist` subcommand: always-interactive AI assistant for setup and management
- `commands/intention.mdx` — Added repeatable `--where` AND logic, `:missing` filter, `any`/`all` LabelSet operators, multiple filter examples for both `list` and `tree`
- `guides/intention-filtering.mdx` — Updated intro to mention both list and tree commands, added `:missing` filter, LabelSet membership section, multiple conditions examples, repeatable `--where` documentation

**Help topics synced:**
- `rei-cli/help/intention-filtering.md` — Added existence checks (`:missing`), LabelSet operators (`any`/`all`), multiple `--where` AND semantics, updated scope to include tree command

**Features documented:**
- Agent assist subcommand (`rei agent assist`) — always-interactive AI assistant
- Multiple `--where` filters with AND semantics on both `list` and `tree`
- Property missing filter (`key:missing`)
- LabelSet membership operators (`key any label1,label2`, `key all label1,label2`)

---

### 2026-02-11

**Reviewed commits:** `f26ba4a` through `f0d6c15`

**Files updated:**
- `guides/state-machines.mdx` — Added State Rules section, Task Completion Links section, state rules in overview and command summary
- `commands/custom-property.mdx` — Added State Rules section with auto-create behavior
- `commands/intention.mdx` — Added `link-tasks` and `unlink-tasks` commands, added category to `show --full` includes

**Help topics synced:**
- `rei-cli/help/state-machines.md` — Added state rules, task completion links, auto-create bool properties, commands summary updates

**Features documented:**
- State machine required property rules (`add-state-rule`, `remove-state-rule`)
- Auto-creation of boolean properties in `add-state-rule`
- Task completion links (`intention link-tasks`, `intention unlink-tasks`)
- Checklist-gated workflow pattern
- Category display in `intention show --full`

---

### 2026-02-10

**Reviewed commits:** `8da03d7` through `f26ba4a`

**Files updated:**
- `guides/custom-properties.mdx` — Added `note` value type and note reference property creation example
- `guides/views.mdx` — Added `showProperties` and `excludeProperties` section options, Property Display section, updated Output example with properties
- `commands/action.mdx` — Added FZF support to `list --intention` and interactive example
- `commands/custom-property.mdx` — Added `note` value type, `--type-note` flag, note reference creation example
- `commands/intention.mdx` — Added `--where` flag to tree command with examples and output behavior
- `commands/note.mdx` — Added `--include-descendants` flag to list command with example

**Help topics synced:**
- `rei-cli/help/custom-properties.md` — Added `note` value type and creation example
- `rei-cli/help/views.md` — Added `showProperties`, `excludeProperties`, and Property Display section

**Features documented:**
- Note value type for custom properties (`--type-note`)
- View property display (`showProperties`, `excludeProperties`)
- Intention tree property filtering (`--where` flag)
- Note list descendant category inclusion (`--include-descendants`)
- Action list FZF intention selection

---

### 2026-02-08

**Reviewed commits:** `425509f` through `8da03d7`

**Files created:**
- `commands/view.mdx` — **NEW** — Reusable multi-section views for displaying intentions
- `guides/views.mdx` — **NEW** — Complete views configuration guide (from help topic)

**Files updated:**
- `commands/intention.mdx` — Added `view` subcommand for executing views on intentions
- `commands/help.mdx` — Added `views` to available help topics
- `commands/index.mdx` — Added `view` to Organization Commands
- `guides/meta.json` — Added views to navigation
- `commands/meta.json` — Added view to navigation

**Help topics synced:**
- `rei-cli/help/views.md` — **NEW** — Intention views configuration and usage

**Features documented:**
- Intention views (`rei view create`, `list`, `show`, `exec`, `update`, `export`, `archive`, `restore`)
- View YAML configuration with sections, targets, filters, grouping, and ordering
- Filter types: status, dormancy, state_tag, property
- Target types: self, children, descendants, descendants:N, notes, tasks, actions
- `rei intention view` command for scoped view execution
- Views help topic (`rei help views`)

---

### 2026-02-07

**Reviewed commits:** `6cf8088` through `425509f`

**Files created:**
- `commands/worker.mdx` — **NEW** — Background job workers for queue-based processing
- `commands/periodic-check.mdx` — **NEW** — Periodic checks for automated dormancy evaluation and reminder triggering

**Features documented:**
- Worker command (`rei worker all`, `rei worker git-sync`) — Background processors for PGMQ queues
- Periodic check command (`rei periodic-check enqueue`, `status`, `history`) — Manual triggering and monitoring of automated checks
- Queue-based architecture with workspace-git-sync, intention-dormancy, and reminder-trigger workers
- pg_cron integration for scheduled dormancy evaluation and reminder triggering

---

### 2026-02-06

**Reviewed commits:** `dbf35f8` through `6cf8088`

**Files updated:**
- `guides/custom-properties.mdx` — Added LabelSet property type, LabelSet filtering section, LabelSet evolution commands
- `guides/dashboard.mdx` — Added Context Filtering section
- `commands/action.mdx` — Added `list` subcommand, added `--actor` option to `record`
- `commands/blocker.mdx` — Added habit blocker support with `--habit` option, added `--actor` option, added Habit Blocker Behavior section
- `commands/category.mdx` — Added `--actor` option to `create`
- `commands/custom-property.mdx` — Added `label-set` type, LabelSet evolution commands (`add-label`, `remove-label`), LabelSet filtering section, `--actor` option
- `commands/habit.mdx` — Added `--actor` option to `create`
- `commands/intention.mdx` — Added `--actor` option to `create`
- `commands/note.mdx` — Already has `--actor` option for `new` and `today`
- `commands/outcome.mdx` — Added `--actor` option to `record`
- `commands/reminder.mdx` — Added `--actor` option to `create`
- `commands/task.mdx` — Added `--actor` option to `complete`, `abandon`, and `reopen`
- `commands/doc.mdx` — Added `--actor` option to `attach`

**Help topics synced:**
- `rei-cli/help/custom-properties.md` — Added LabelSet type, LabelSet filtering syntax
- `rei-cli/help/dashboard.md` — Added Context Filtering section

**Features documented:**
- LabelSet property type for multi-select labels (`--type-label-set --labels`)
- LabelSet filtering with `any` (has any of) and `all` (has all of) operators
- LabelSet evolution commands (`add-label`, `remove-label`)
- Dashboard panel context filtering behavior
- `action list` subcommand with date range filters (`--today`, `--week`, `--month`, `--from/--to`)
- Habit blockers with auto-pause/resume behavior
- `--actor` option for action attribution across commands (action, blocker, category, custom-property, habit, intention, note, outcome, reminder, task, doc)

---

### 2026-02-04

**Reviewed commits:** `b78e261` through `dbf35f8`

**Files created:**
- `guides/dashboard.mdx` — **NEW** — Comprehensive guide for dashboard panels (from help topic)

**Files updated:**
- `commands/today.mdx` — Added `--no-intentions` flag, Flexible Habits section, Dashboard Panels section
- `commands/tomorrow.mdx` — Added Flexible Habits section
- `commands/yesterday.mdx` — Added Flexible Habits section
- `commands/custom-property.mdx` — Added `--category` flag to `show`, `archive`, `relabel`; added `set-state-limit`, `clear-state-limit`, `metrics` subcommands; added Category-Scoped Property Keys section; fixed icon to `SlidersHorizontal`
- `commands/help.mdx` — Added `state-machines` and `dashboard` to available topics
- `configuration.mdx` — Added Aliases section and Dashboard Panels section; noted local config (`./rei.yaml`) support
- `guides/meta.json` — Added dashboard to navigation

**Help topics synced:**
- `rei-cli/help/dashboard.md` — **NEW** — Configurable dashboard panels for today command

**Features documented:**
- Dashboard help topic (`rei help dashboard`)
- Dashboard panels configuration (`dashboard.panels` in rei.yaml)
- Command aliases (`aliases` in rei.yaml, `rei alias list`)
- `--no-intentions` flag on `rei today`
- Flexible Habits section in today, tomorrow, and yesterday dashboards
- `--category` flag for disambiguating `show`, `archive`, `relabel` commands
- `set-state-limit` and `clear-state-limit` subcommands for WIP limits
- `metrics` subcommand for state machine workflow analytics
- Category-scoped property keys with automatic resolution

---

### 2026-02-02

**Reviewed commits:** `386e373` through `b78e261`

**Files created:**
- `guides/state-machines.mdx` — **NEW** — Comprehensive guide for state machine properties (from help topic)

**Files updated:**
- `guides/custom-properties.mdx` — Added category-scoped keys, WIP limits, command summary, link to state-machines guide
- `guides/meta.json` — Added state-machines to navigation

**Help topics synced:**
- `rei-cli/help/state-machines.md` — **NEW** — Detailed state machine property documentation
- `rei-cli/help/custom-properties.md` — Added category-scoped keys, WIP limits, command summary

**Features documented:**
- State machine help topic (`rei help state-machines`)
- Category-scoped property keys with automatic resolution
- WIP (Work In Progress) limits for state machine states
- `--with-counts` flag for viewing entity counts per state
- `--category` flag for disambiguating duplicate property keys
- State limit commands (`set-state-limit`, `clear-state-limit`)
- State machine metrics command

---

### 2026-02-01 (3)

**Reviewed commits:** `925f9d8` through `386e373`

**Files updated:**
- `commands/custom-property.mdx` — Renamed `rename` to `relabel`, added `--order` to `add-state`, added `update-state-order` and `init-entities` subcommands
- `commands/intention.mdx` — Added `key:exists` filter syntax, added TUI fuzzy filter with `/` key
- `guides/intention-filtering.mdx` — Added Property Existence section for `key:exists` filter

**Source files synced:**
- `docs/user/cli/custom-property.md` — RelabelProperty, stateOrder, init-entities
- `docs/user/cli/intention.md` — Property existence filter, TUI filtering

---

### 2026-02-01 (2)

**Reviewed commits:** `09f1dfe` through `925f9d8`

**Files created:**
- `guides/custom-properties.mdx` — **NEW** — Comprehensive guide for custom properties (from help topic)
- `guides/time-formats.mdx` — **NEW** — Guide for time formats and --at flag (from help topic)

**Files updated:**
- `guides/intention-filtering.mdx` — Added Grouping section with `--group-by` option
- `guides/meta.json` — Added custom-properties and time-formats to navigation
- `commands/intention.mdx` — Added `-g, --group-by` option to list command with examples and Grouping Output section

**Help topics synced:**
- `rei-cli/help/intention-filtering.md` — Added --group-by option documentation
- `rei-cli/help/custom-properties.md` — Added stateOrder documentation for display ordering

**Source files synced:**
- `docs/user/cli/intention.md` — Added --group-by flag and grouping examples

---

### 2026-02-01

**Reviewed commits:** `f99224d` through `09f1dfe`

**Files created:**
- `commands/yesterday.mdx` — **NEW** — Yesterday dashboard command for reviewing previous day's activity

**Files updated:**
- `commands/review.mdx` — Added `day` subcommand for reviewing any arbitrary date
- `commands/intention.mdx` — Added `detach` and `note list` subcommands
- `commands/help.mdx` — Fixed icon from `CircleQuestionMark` to `CircleHelp`
- `commands/meta.json` — Added `yesterday` to navigation

**Source files synced:**
- `docs/user/cli/yesterday.md` — New command documentation
- `docs/user/cli/review.md` — Added `day` subcommand
- `docs/user/cli/intention.md` — Added `detach` and `note list` subcommands

---

### 2026-01-31

**Reviewed commits:** `5e64ac1` through `f99224d`

**Files created:**
- `guides/intention-filtering.mdx` — **NEW** — Guide explaining intention filtering options: contexts, categories, custom properties, and state machine tags
- `guides/meta.json` — **NEW** — Navigation for guides section

**Files updated:**
- `commands/intention.mdx` — Added `--category`, `--state-tag`, and `--dormant` filter options with examples and state tag filter documentation
- `commands/help.mdx` — Added `intention-filtering` help topic to available topics
- `meta.json` — Added guides section to navigation

**Source files synced:**
- `rei-cli/help/intention-filtering.md` — New help topic (source of truth for filtering guide)
- `docs/user/cli/intention.md` — Updated with --state-tag and --category filters

---

### 2026-01-30

**Reviewed commits:** `9bce485` through `5e64ac1`

**Files created:**
- `commands/custom-property.mdx` — **NEW** — Custom property definition and management command documentation
- `concepts/custom-properties.mdx` — **NEW** — Concepts page explaining custom properties philosophy, use cases, state machines, and best practices

**Files updated:**
- `disruption.mdx` — Added `set-property`, `clear-property` commands, `action update-description` command, `--where` filter for list
- `habit.mdx` — Added `set-property`, `clear-property` commands, `set-category`, `clear-category` commands, `--where` filter for list
- `intention.mdx` — Added `set-property`, `clear-property` commands, `note open` command, `--where` filter for list, custom properties in full view
- `help.mdx` — Added `custom-properties` help topic
- `commands/index.mdx` — Added custom-property to Organization Commands
- `commands/meta.json` — Added custom-property to navigation
- `concepts/index.mdx` — Added Custom Properties card
- `concepts/meta.json` — Added custom-properties to navigation

**Features documented:**
- Custom property system (`rei custom-property create`, `list`, `show`, `archive`, `rename`, `set-scope`)
- Property value types: int, float, text, bool, enum, duration, quantity, state-machine, date, datetime, path, url
- State machine YAML format with states, transitions, and system tags
- State machine evolution (add-state, remove-state, add-transition, remove-transition)
- Enum evolution (add-enum-value, remove-enum-value)
- Property assignment on intentions (`set-property`, `clear-property`)
- Property assignment on habits (`set-property`, `clear-property`)
- Property assignment on disruptions (`set-property`, `clear-property`)
- Property filtering with `--where` flag on intention, habit, and disruption lists
- Habit categories (`set-category`, `clear-category`)
- Intention note opening (`note open`)
- Disruption action description updates (`action update-description`)
- Help topic for custom properties
- Custom properties concepts page (philosophy, use cases, state machines, best practices)

**No documentation needed:**
- `d364030` Add state machine YAML format documentation (internal dev docs)
- `1e5a506` Move custom properties design docs to implemented and update status (dev docs)
- `7ad3c4f` Add custom-property module developer documentation (dev docs)
- `c461fb8` Add custom properties feature design documents (dev docs)

---

### 2026-01-29

**Reviewed commits:** `bedeca2` through `9bce485`

**Files updated:**
- `disruption.mdx` — Added FZF support for `show`, `update`, `set-category`, `set-context`, `resolve`, `reopen` commands; added `action update-occurred-at` and `action update-duration` subcommands
- `intention.mdx` — Added tree TUI child intention creation form (`a` key), added annotations documentation (horizon, active days, deadline, context, status), updated `show --full` to note category grouping for notes

**Features documented:**
- Disruption FZF support (show, update, set-category, set-context, resolve, reopen)
- Disruption action update commands (`action update-occurred-at`, `action update-duration`)
- Tree TUI child intention creation form (title, horizon, start as future)
- Tree TUI annotations (horizon, active days, deadline, context, status indicators)
- Notes grouped by category in intention full view

---

### 2026-01-28

**Reviewed commits:** `af88b79` through `bedeca2`

**Files updated:**
- `task.mdx` — Added task abandonment feature (`abandon` command, `--include-abandoned`/`--abandoned-only` flags, Task Status section)
- `intention.mdx` — Added cascade behavior note (abandoning intention abandons pending tasks)
- `category.mdx` — Added `set-description` subcommand
- `system.mdx` — Removed `fix-dormancy` command (one-off migration command removed from source)

**Features documented:**
- Task abandonment (`rei task abandon`) with reason and backdating support
- Task status lifecycle (Pending → Completed/Abandoned → Reopen)
- Cascade task abandonment when parent intention is abandoned
- Category description management (`rei category set-description`)

**No documentation needed:**
- `dae7248` Update knowledge module docs for task abandonment (dev docs)
- `82d2f36` Add task abandonment feature (internal implementation)
- `fa77644` Remove one-off system backfill and fix-dormancy commands (cleanup)

---

### 2026-01-27

**Reviewed commits:** `acf0b82` through `af88b79`

**Files updated:**
- `agent.mdx` — Added `create-note` subcommand for AI-structured note creation using category guidance
- `disruption.mdx` — Added `set-context` command, `--context/-c` flag on record, `note new` and `note list` subcommands
- `review.mdx` — Added Disruptions section to weekly review documentation, added disruptions to context filtering list

**Features documented:**
- Agent create-note command (`rei agent create-note [category] -i <input>`) — create notes using category guidance with optional intention/habit attachment
- Disruption context (`rei disruption set-context`, `--context` on record) — set context on disruptions for filtering
- Disruption notes (`rei disruption note new`, `note list`) — attach and manage notes on disruptions
- Weekly review disruptions — status counts (Active, Addressed, Resolved), items grouped by context

**No documentation needed:**
- `76c175c` Standardize Disruption message types to PascalCase (internal)
- `fb57ac5` Add event serialization patterns audit document (dev docs)
- `8225a07` through `51a1406` Row type elimination refactoring (internal architecture)
- `1d76a65` Add disruption module developer documentation (dev docs)

---

### 2026-01-26

**Reviewed commits:** `f5690e2` through `acf0b82`

**Files created:**
- `disruption.mdx` — **NEW** — Disruption tracking command documentation

**Files updated:**
- `action.mdx` — Added Ctrl-F FZF toggle documentation
- `commands/index.mdx` — Added disruption to Core Commands table, added Disruptions to today dashboard sections
- `meta.json` — Added disruption to sidebar navigation

**Features documented:**
- Disruption tracking module (record, list, show, update, set-category, mark-addressed, resolve, reopen)
- Action record FZF Ctrl-F toggle to show future intentions
- Disruption actions in `rei today` dashboard

---

### 2026-01-25

**Reviewed commits:** `d77f0e4` through `f5690e2`

**Files updated:**
- `category.mdx` — Added `--descriptions` flag to list, `set-usage`/`usage` commands, FZF support for `show`
- `intention.mdx` — Added `--deadline` option to create, `set-deadline`/`clear-deadline` commands, TUI clipboard copy (`y` key)
- `note.mdx` — Added `print` command
- `today.mdx` — Added deadline display in intention annotations

**Features documented:**
- Intention deadlines (`--deadline` on create, `set-deadline`, `clear-deadline`)
- Deadline display in today dashboard
- Tree TUI clipboard copy (press `y` to yank intention ID)
- Category usage text (`set-usage`, `usage` commands)
- Category list descriptions (`--descriptions` flag)
- Category show FZF support with preview pane
- Note print command (`rei note print`)

---

### 2026-01-24

**Reviewed commits:** `8eb89e5` through `d77f0e4`

**Files created:**
- `tomorrow.mdx` — **NEW** — Tomorrow dashboard preview command

**Features documented:**
- Tomorrow command (`rei tomorrow`) — Preview tomorrow's dashboard for evening planning
  - Shows active intentions, tasks (relative to tomorrow), blockers (age as of tomorrow), habits scheduled for tomorrow
  - Context filtering support (`-c/--context`)
  - Comparison table with `rei today`

---

### 2026-01-23

**Reviewed commits:** `563814f` through `8eb89e5`

**Files updated:**
- `intention.mdx` — Added `--tui` flag to tree command, updated show --full children section to note Active/Future filtering
- `note.mdx` — Added `delete` and `outgoing-links` subcommands
- `reflect.mdx` — Added `print` subcommand, enhanced `open` FZF toggle documentation
- `reminder.mdx` — Added `--user` flag for filtering user-created reminders
- `task.mdx` — Added `open-note` subcommand, added source note ID to list output
- `today.mdx` — Added active days count indicators for intentions and habits

**Features documented:**
- Interactive Tree TUI (`rei intention tree --tui`) — Navigate hierarchy with keyboard, view details, open notes
- Active days count tracking — Intentions and habits now display `[Nd]` indicators showing distinct days with activity
- Note deletion (`rei note delete`) — Permanently remove notes from workspace
- Outgoing links (`rei note outgoing-links`) — View notes that a given note links to (inverse of backlinks)
- Reflection printing (`rei reflect print`) — Print reflection content to stdout for piping
- Reflection open FZF toggle — Press `ctrl-f` to switch between pending-only and all reflections
- User reminder filter (`rei reminder list --user`) — Filter to show only user-created reminders
- Task note opening (`rei task open-note`) — Open the note containing a task
- Task source note display — Task list output now shows source note ID for each task

---

### 2026-01-20 (2)

**Reviewed commits:** `57e5f95` through `563814f`

**Files updated:**
- `action.mdx` — Added polarity feature (`-p/--polarity` option, `set-polarity`, `clear-polarity` subcommands, and Polarity section)

**Features documented:**
- Action polarity — Track energy impact of activities (energizing/neutral/draining)
- Polarity options on `record` command (`-p +`, `-p d`, etc.)
- `set-polarity` and `clear-polarity` subcommands
- Polarity display indicators (⚡ ≈ 🔻) in dashboard and FZF selectors

---

### 2026-01-20

**Reviewed commits:** `9283d10` through `57e5f95`

**Files updated:**
- `action.mdx` — Added `--no-habit` option and enhanced FZF habit selection documentation
- `category.mdx` — Added `print-note-guidance` and `improve-note-guidance` subcommands, enhanced `show` output with note guidance path
- `cycle.mdx` — Added `--at` backdating options to `start` and `complete` commands
- `note.mdx` — Added `--append` option to `get-help`, added `--json` option to `list`
- `reflect.mdx` — Added `cycle` subcommand for cycle reflections, enhanced documentation with FZF support notes and all options

**Features documented:**
- FZF habit selection — After selecting an intention, fzf now offers optional habit selection with "Skip" option
- Skip habit prompt — Use `--no-habit` to skip the habit selection prompt entirely
- Category guidance management — Print guidance to stdout, improve guidance with AI assistance
- Cycle backdating — Backdate cycle `start` and `complete` with `--at` option (e.g., "yesterday")
- Note help append mode — Append AI help directly to original note instead of creating separate note
- Note list JSON output — Use `--json` for scripted access to note listings
- Cycle reflections — Reflect on completed cycles with context from focus selections and duration

---

### 2026-01-18 (2)

**Reviewed commits:** `65e3760` through `9283d10`

**Files created:**
- `help.mdx` — **NEW** — Help topics command documentation

**Files updated:**
- `action.mdx` — Added `update-duration` subcommand for correcting action durations
- `agent.mdx` — Added Debug Mode section (`--debug` flag for all agent commands)
- `category.mdx` — Added `set-note-guidance` and `clear-note-guidance` subcommands
- `note.mdx` — Enhanced `get-help` with `--include-doc`, `--interactive`, `--debug` options and category guidance support
- `reminder.mdx` — Added `--system` flag for listing system reminders, expanded Automatic Reminders section with dormancy reminders
- `today.mdx` — Added `--include-dormant` option for showing dormant intentions

**Features documented:**
- Help topics command (`rei help`, `rei help time`) — display detailed help on specific topics
- Action duration correction (`rei action update-duration`)
- Agent debug mode — see rendered prompts without invoking LLM
- Category note guidance — set AI guidance that applies to all notes in a category
- Enhanced note help with document context, interactive mode, and debug mode
- System reminders — automatic reminders for dormancy and task due dates
- Dormant intention filtering — excluded by default from today dashboard

---

### 2026-01-18

**Reviewed commits:** `292adcc` through `65e3760`

**Files created:**
- `today.mdx` — **NEW** — Daily dashboard command documentation
- `review.mdx` — **NEW** — Review summaries command documentation (weekly review)

**Files updated:**
- `note.mdx` — Added `show` subcommand for viewing comprehensive note details

**Features documented:**
- Daily dashboard (`rei today`) — primary view for understanding daily priorities
  - Dashboard sections: Active Cycle & Focus, Triggered Reminders, Active Intentions, Completed Today, Tasks, Today's Actions, Blockers, Habits, Cue-Based Habits, Pending Reflections
  - Context filtering with `-c/--context`
  - Interactive TUI mode with `--tui`
- Weekly review (`rei review week`) — analyze progress over the current week
  - Sections: Intentions, Actions (by context/intention), Outcomes, Habit Adherence, Blockers, Reflections
  - Context filtering support
  - Color-coded habit adherence percentages
- Note show command (`rei note show`) — display comprehensive note details
  - Shows: title, path, anchor info, tags, category, embedded files with existence status, attached documents with source indicator, timestamps

---

### 2026-01-17

**Reviewed commits:** `159c9ea` through `292adcc`

**Files created:**
- `doc.mdx` — **NEW** — Document attachment command documentation
- `knowledge.mdx` — **NEW** — Knowledge management and verification commands

**Files updated:**
- `action.mdx` — Added `delete` subcommand for removing actions recorded in error
- `intention.mdx` — Added `set-note-guidance`, `show-note-guidance`, `clear-note-guidance` subcommands
- `note.mdx` — Added `--category` option to `new`, `--category` filter to `list`, `--focus`/`--no-guidance` options to `get-help`, `embeds` subcommand, and File Embeds section
- `task.mdx` — Added `--at` option to `complete` for backdating task completions

**Features documented:**
- Document attachments (`rei doc attach`, `list`, `open`) — attach files to intentions, actions, outcomes, reflections, and notes
- Knowledge verification (`rei knowledge verify`) with `--embeds` option for checking embedded files
- Action deletion (`rei action delete`) with optional reason
- Note guidance for intentions — set AI guidance that applies to all notes under an intention
- Note file embeds (`![[file.pdf]]` syntax) and `rei note embeds` command
- Focused help sessions (`--focus`) and guidance control (`--no-guidance`) for `note get-help`
- Task completion backdating with `--at` option

---

### 2026-01-15

**Reviewed commits:** `000187f` through `159c9ea`

**Files created:**
- `category.mdx` — **NEW** — Category command documentation for classifying entities

**Files updated:**
- `action.mdx` — Added `set-category` and `clear-category` subcommands
- `intention.mdx` — Added `set-category` and `clear-category` subcommands
- `note.mdx` — Added `set-category` and `clear-category` subcommands

**Features documented:**
- Categories feature (`rei category create`, `list`, `show`, `tree`, `retire`, `reactivate`, `link-focus`)
- Hierarchical category slugs (e.g., `work/meeting`, `personal/health`)
- Category assignment to actions (`action set-category`, `clear-category`)
- Category assignment to notes (`note set-category`, `clear-category`)
- Category assignment to intentions (`intention set-category`, `clear-category`)
- Focus area integration for time tracking
- Soft-delete with retire/reactivate pattern

---

### 2026-01-14

**Reviewed commits:** `7a7cc57` through `000187f`

**Files updated:**
- `action.mdx` — Added `reassociate` subcommand for moving actions between intentions
- `agent.mdx` — Added interactive mode (`-i/--interactive`) for all agent commands
- `habit.mdx` — Major update with habit polarity (Build/Break), expanded cadence options (monthly, quarterly, yearly, every-N-days, flexible schedules, cue-based), and Break habit commands (`start-abstinence`, `log-occurrence`)
- `cycle.mdx` — Added `extend` subcommand for extending active cycles

**Features documented:**
- Action reassociation (`rei action reassociate`) — move actions from one intention to another
- Agent interactive mode — starts Claude Code session with pre-approved rei commands
- Habit polarity — Build habits (cultivate) vs Break habits (avoid)
- Expanded habit cadences — monthly, quarterly, yearly, every-N-days, free-weekly/monthly/quarterly/yearly, cue-based with targets
- Break habit abstinence tracking (`start-abstinence`, `log-occurrence`)
- Cycle extension (`rei cycle extend <days>`)

---

### 2026-01-13 (2)

**Reviewed commits:** `35c80b7` through `7a7cc57`

**Files updated:**
- `intention.mdx` — Added `tracker` subcommand for visual activity tracking
- `configuration.mdx` — Added git configuration options for auto-committing workspace files

**Features documented:**
- Intention activity tracker (`rei intention tracker`) with calendar and heatmap styles
- Display options (`--days`, `--style`, `--include-children`)
- Git configuration options (`git.enabled`, `git.commit_notes`, `git.commit_reflections`, `git.commit_docs`, `git.commit_guidance`, etc.)

---

### 2026-01-13

**Reviewed commits:** `f71875b` through `35c80b7`

**Files created:**
- `subscription.mdx` — **NEW** — Subscription workers documentation with git-commit worker details
- `workspace.mdx` — **NEW** — Workspace git integration and management commands

**Files updated:**
- `note.mdx` — Added behavior note about help notes including wikilinks back to original note
- `commands/index.mdx` — Added subscription and workspace to System Commands table

**Features documented:**
- Workspace git integration (`rei workspace git-check`, `git-status`)
- Subscription workers (`rei subscription run`)
- Git commit worker for automatic versioning of notes, reflections, documents, and guidance
- Commit message format with entity metadata
- Help note back-linking behavior for `rei note get-help`

---

### 2026-01-12 (2)

**Reviewed commits:** `f4ab764` through `f71875b`

**Files updated:**
- `note.mdx` — Added `backlinks` and `broken-links` commands, added Wikilinks section
- `reminder.mdx` — Updated `check` command to document on-demand triggering behavior

**Features documented:**
- Wikilinks syntax (`[[Note Title]]` and `[[Note Title|Display Text]]`)
- `rei note backlinks` — View notes that link to a given note
- `rei note broken-links` — Find unresolved wikilinks
- Auto-resolution of wikilinks when matching note titles are extracted
- `rei reminder check` now triggers due reminders on-demand (not just displays)

---

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
