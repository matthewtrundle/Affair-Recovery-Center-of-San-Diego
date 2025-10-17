# Git Workflow for ARC San Diego

Simple, practical guide to using Git for content updates and version control.

---

## Why Git?

Git allows you to:
- ✅ Track every change made to the website
- ✅ See who changed what and when
- ✅ Revert to previous versions if needed
- ✅ Work on features without breaking production
- ✅ Collaborate safely with others

Think of it as "Track Changes" for code, but much more powerful.

---

## Basic Concepts

### Repository (Repo)
Your project folder that Git tracks. This is your entire website.

### Commit
A snapshot of your changes. Like saving a version in Track Changes.

### Branch
A separate line of development. Work on new features without affecting the live site.

### Main Branch
The production-ready code. What's deployed to your live website.

### Push
Send your changes to GitHub (cloud backup).

### Pull
Get latest changes from GitHub to your computer.

---

## Daily Workflow

### Starting Your Day

```bash
# Make sure you're in the project directory
cd /Users/matthewrundle/Documents/ARC

# Get latest changes
git pull

# Check current status
git status
```

### Making Changes

1. **Edit files** (in VS Code or your editor)

2. **Check what changed**:
```bash
git status
git diff
```

3. **Stage your changes** (prepare to commit):
```bash
# Stage specific files
git add app/(marketing)/page.tsx

# Or stage everything
git add .
```

4. **Commit your changes** (save the snapshot):
```bash
git commit -m "Update home page hero headline"
```

5. **Push to GitHub** (backup to cloud):
```bash
git push
```

### Ending Your Day

```bash
# Make sure everything is committed
git status

# Should see: "nothing to commit, working tree clean"
```

---

## Commit Message Best Practices

### Format
```
Update [page/component]: Brief description

- Specific change 1
- Specific change 2 (if needed)
```

### Good Examples ✅
```bash
git commit -m "Update Home: Revised hero headlines for clarity"
git commit -m "Fix Contact: Corrected phone number to actual number"
git commit -m "Add Services: New intensive therapy weekend section"
git commit -m "Update FAQ: Added question about military families"
```

### Bad Examples ❌
```bash
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "changes"
git commit -m "wip"
```

### Why It Matters
Good commit messages help you:
- Find changes later
- Understand what was done
- Revert specific changes if needed
- Collaborate with others

---

## Checking Status

### See what you've changed
```bash
git status
```

Output explained:
- **Red files**: Changed but not staged
- **Green files**: Staged and ready to commit
- **Clean working tree**: Nothing changed

### See what changed in files
```bash
# See all changes
git diff

# See changes in specific file
git diff app/(marketing)/page.tsx

# See what's staged
git diff --staged
```

### See recent history
```bash
# Simple view
git log --oneline

# Detailed view
git log

# Last 5 commits
git log --oneline -5
```

---

## Undoing Changes

### Before You Commit

**Undo changes in a file**:
```bash
# Discard changes (back to last commit)
git checkout -- filename.tsx

# Discard all changes
git checkout -- .
```

**Unstage a file** (but keep changes):
```bash
git reset HEAD filename.tsx
```

### After You Commit (But Haven't Pushed)

**Undo last commit** (keep changes):
```bash
git reset --soft HEAD~1
```

**Undo last commit** (discard changes):
```bash
git reset --hard HEAD~1
```

### After You've Pushed

**Revert a commit** (creates new commit undoing changes):
```bash
# Find commit hash
git log --oneline

# Revert it
git revert abc123

# Push the revert
git push
```

---

## Branching Workflow

### When to Use Branches

Use branches for:
- Major content rewrites
- New pages/features
- Experimental changes
- Anything you want to test before going live

### Creating a Branch

```bash
# Create and switch to new branch
git checkout -b update/home-page-rewrite

# Branch naming convention:
# update/description
# fix/bug-description
# feature/new-thing
```

### Working on a Branch

```bash
# Make changes
# Edit files...

# Commit as usual
git add .
git commit -m "Draft new home page hero"

# Push branch to GitHub
git push -u origin update/home-page-rewrite
```

### Merging a Branch

```bash
# Switch back to main
git checkout main

# Get latest
git pull

# Merge your branch
git merge update/home-page-rewrite

# Push to production
git push

# Delete branch (optional, if done)
git branch -d update/home-page-rewrite
```

### Switching Between Branches

```bash
# See all branches
git branch

# Switch to a branch
git checkout branch-name

# Switch back to main
git checkout main
```

---

## Common Scenarios

### Scenario 1: Fix a Typo

```bash
# Edit the file
# Save it

git add .
git commit -m "Fix typo on About page"
git push

# Done! Auto-deploys to Vercel
```

**Time**: 2 minutes

---

### Scenario 2: Rewrite a Section

```bash
# Create branch
git checkout -b update/about-page-bio

# Edit files
# Save changes

# Commit progress
git add .
git commit -m "Draft new bio section"
git push -u origin update/about-page-bio

# Continue editing...
# When done:

git add .
git commit -m "Finalize bio rewrite"
git push

# Switch to main and merge
git checkout main
git merge update/about-page-bio
git push
```

**Time**: 30-60 minutes

---

### Scenario 3: Emergency Hotfix

```bash
# Don't waste time with branches

# Make the fix
# Edit file, save

git add .
git commit -m "HOTFIX: Correct phone number on contact page"
git push

# Verify it deployed
# Check live site in 2-3 minutes
```

**Time**: 5 minutes

---

### Scenario 4: Oh No, I Broke Something!

```bash
# If you haven't committed:
git checkout -- .

# If you already committed but not pushed:
git reset --hard HEAD~1

# If you already pushed:
git log --oneline
# Note the good commit hash (abc123)

git revert abc123
git push

# Or, nuclear option (use with caution):
git reset --hard abc123
git push --force
```

---

## GitHub Desktop (Alternative)

If command line is intimidating, use GitHub Desktop:

1. **Download**: https://desktop.github.com/
2. **Open repo**: File → Add Local Repository
3. **See changes**: Visual diff of all changes
4. **Commit**: Type message, click "Commit to main"
5. **Push**: Click "Push origin"

**Pros**: Visual, easier to understand
**Cons**: Less powerful than command line

---

## Git Ignore

The `.gitignore` file tells Git what NOT to track.

**Already ignored** (in your project):
- `node_modules/` - Dependencies
- `.next/` - Build files
- `.env.local` - Secrets
- `.DS_Store` - Mac system files

**Never commit**:
- Passwords or API keys
- Large files (videos, etc.)
- Personal notes
- Backup files

---

## Working with Others

### Before You Start Work
```bash
git pull
```

### Push Often
```bash
# Commit and push frequently
# Don't let changes pile up
```

### Communicate
- Use good commit messages
- Coordinate on big changes
- Don't edit same file simultaneously

### Resolve Conflicts

If Git says "conflict":

1. **Open conflicted file**
2. **Look for conflict markers**:
```
<<<<<<< HEAD
Your version
=======
Their version
>>>>>>> branch-name
```
3. **Choose which to keep** (or combine)
4. **Remove conflict markers**
5. **Commit the resolution**:
```bash
git add .
git commit -m "Resolve merge conflict in home page"
git push
```

---

## Best Practices

### Do's ✅

1. **Commit often** - Small, frequent commits
2. **Write good messages** - Future you will thank you
3. **Pull before pushing** - Stay in sync
4. **Test before committing** - Make sure it works
5. **Use branches for big changes** - Safety net
6. **Push at end of day** - Backup your work

### Don'ts ❌

1. **Don't commit secrets** - API keys, passwords
2. **Don't commit huge files** - Use Git LFS if needed
3. **Don't force push to main** - Unless emergency
4. **Don't work on main for big changes** - Use branches
5. **Don't leave uncommitted changes** - Commit before switching tasks

---

## Troubleshooting

### "Permission denied"
**Problem**: SSH key or authentication issue
**Solution**:
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/matthewtrundle/Affair-Recovery-Center-of-San-Diego.git
```

### "Merge conflict"
**Problem**: Same file changed in different ways
**Solution**: See "Resolve Conflicts" above

### "Nothing to commit"
**Problem**: No changes to commit
**Solution**: This is fine! Means working tree is clean

### "Your branch is ahead/behind"
**Problem**: Out of sync with GitHub
**Solution**:
```bash
# If ahead (you have changes):
git push

# If behind (GitHub has changes):
git pull
```

### "Detached HEAD state"
**Problem**: Not on a branch
**Solution**:
```bash
git checkout main
```

### Lost work?
**Problem**: Deleted something by accident
**Solution**:
```bash
# Find it in history
git log --all --full-history -- path/to/file

# Restore from commit
git checkout commit-hash -- path/to/file
```

---

## Useful Commands Cheat Sheet

### Status & Info
```bash
git status              # What's changed
git log --oneline       # Recent commits
git diff                # See changes
git branch              # List branches
```

### Making Changes
```bash
git add .               # Stage all changes
git commit -m "msg"     # Commit with message
git push                # Send to GitHub
git pull                # Get from GitHub
```

### Branching
```bash
git checkout -b name    # Create branch
git checkout main       # Switch to main
git merge branch        # Merge branch
git branch -d name      # Delete branch
```

### Undoing
```bash
git checkout -- file    # Discard changes
git reset --soft HEAD~1 # Undo commit, keep changes
git revert commit-hash  # Undo commit (safe)
```

---

## Integration with Vercel

### Auto-Deploy Setup

**Main branch** → Auto-deploys to production
- Every push to main goes live
- ~2-3 minutes deploy time
- Check Vercel dashboard for status

**Other branches** → Preview deploys
- Each branch gets preview URL
- Test before merging to main
- Share with others for review

### Deploy Logs

View in Vercel dashboard:
- Build logs
- Deploy status
- Error messages
- Performance metrics

### Rollback

In Vercel dashboard:
- View past deploys
- Click "Promote to Production" on old deploy
- Instant rollback

Or via Git:
```bash
git revert HEAD
git push
```

---

## Git Aliases (Time Savers)

Add to `~/.gitconfig`:

```ini
[alias]
    st = status
    co = checkout
    ci = commit
    br = branch
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --oneline --graph --all
```

Then use:
```bash
git st          # instead of git status
git co main     # instead of git checkout main
git ci -m "msg" # instead of git commit -m "msg"
```

---

## Getting Help

### Built-in Help
```bash
git help
git help commit
git help branch
```

### Resources
- Git documentation: https://git-scm.com/doc
- GitHub guides: https://guides.github.com/
- Interactive tutorial: https://learngitbranching.js.org/

### When Stuck
1. Check `git status`
2. Read the error message carefully
3. Google the error message
4. Check Stack Overflow
5. Ask for help (include error message)

---

## Related Documents

- [[CONTENT-UPDATE-WORKFLOW]] - When to use Git
- [[LAUNCH-CHECKLIST]] - Pre-launch Git tasks
- [[CHANGELOG]] - Track changes in human terms

---

*Last Updated: 2025-10-17*
*Git Version: 2.x*
