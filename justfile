# rei-documentation justfile

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
