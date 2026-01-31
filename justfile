# rei-documentation justfile

# List available recipes
default:
    @just --list

# Start development server
dev:
    pnpm dev

# Build for production
build:
    pnpm build

# Start production server
start:
    pnpm start

# Run type checking
types:
    pnpm types:check

# Run linter
lint:
    pnpm lint

# Format code
format:
    pnpm format

# Symlink Claude skills from claude/skills to .claude/skills
symlink-claude-skills:
    @mkdir -p .claude/skills
    @for dir in claude/skills/*/; do \
        name=$(basename "$dir"); \
        if [ ! -L ".claude/skills/$name" ]; then \
            ln -sf "../../claude/skills/$name" ".claude/skills/$name"; \
            echo "Symlinked: .claude/skills/$name -> claude/skills/$name"; \
        else \
            echo "Already linked: .claude/skills/$name"; \
        fi \
    done
