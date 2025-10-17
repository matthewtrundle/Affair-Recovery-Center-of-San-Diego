# Getting Started with ARC Content Vault

Quick start guide for using this Obsidian vault to manage your website content.

---

## Welcome! 👋

This vault is your command center for managing all content on the Affair Recovery Center of San Diego website. Whether you're making small tweaks or major updates, this is where you plan, track, and document everything.

---

## First Steps

### 1. Open This Vault in Obsidian

If you haven't already:

1. **Download Obsidian** (if needed): https://obsidian.md
2. **Open Obsidian**
3. **Click "Open folder as vault"**
4. **Navigate to**: `/Users/matthewrundle/Documents/ARC/ARC Content Vault`
5. **Click "Open"**

### 2. Explore the Vault

Start with these documents in order:

1. **[[README]]** - Overview of the vault (5 min read)
2. **[[00-WEBSITE-OVERVIEW]]** - Understand the project (10 min read)
3. **[[01-PAGE-INVENTORY]]** - See all pages and their status (15 min read)
4. **[[02-CONTENT-AUDIT]]** - Detailed content analysis (20 min read)

**Total time**: ~50 minutes to get fully oriented

### 3. Quick Tour

**Left Sidebar** (File Explorer):
- Browse folders
- See all documents
- Search files

**Main Area**:
- Read/edit documents
- Click [[links]] to navigate
- Use Ctrl/Cmd+Click to open in new pane

**Right Sidebar**:
- Backlinks (what links here)
- Tags
- Outline

---

## How This Vault Works

### Folder Structure

```
ARC Content Vault/
├── README.md                    ← Start here
├── GETTING-STARTED.md          ← You are here
├── 00-WEBSITE-OVERVIEW.md      ← Project overview
├── 01-PAGE-INVENTORY.md        ← All pages
├── 02-CONTENT-AUDIT.md         ← Content analysis
│
├── Pages/                       ← Individual page docs
│   └── HOME-PAGE.md
│
├── Components/                  ← Reusable elements
│   └── CTA-VARIATIONS.md
│
├── Planning/                    ← Project management
│   ├── CONTENT-UPDATE-WORKFLOW.md
│   └── LAUNCH-CHECKLIST.md
│
├── Content Updates/             ← Change tracking
│   ├── CHANGELOG.md
│   └── TEMPLATE-update-brief.md
│
├── Technical Docs/              ← How things work
│   └── GIT-WORKFLOW.md
│
└── Assets/                      ← Media tracking
    └── (coming soon)
```

### Document Types

**Overview Documents** (00-, 01-, 02-):
- Big picture information
- Reference material
- Read first

**Page Documents** (Pages/ folder):
- Detailed breakdown of each website page
- Content, structure, strategy
- Use when updating specific pages

**Component Documents** (Components/ folder):
- Reusable elements (CTAs, testimonials, etc.)
- Used across multiple pages
- Reference when consistency matters

**Planning Documents** (Planning/ folder):
- Workflows and processes
- Checklists
- How to do things

**Update Documents** (Content Updates/ folder):
- Track changes
- Plan updates
- History of modifications

**Technical Documents** (Technical Docs/ folder):
- How things work technically
- Git, deployment, etc.
- For when you need to code

---

## Common Tasks

### Task 1: Update Website Copy

**Goal**: Change text on a page

**Steps**:
1. Read [[CONTENT-UPDATE-WORKFLOW]] for process
2. Find page in [[01-PAGE-INVENTORY]]
3. Copy [[Content Updates/TEMPLATE-update-brief]] for planning
4. Make changes following workflow
5. Update [[Content Updates/CHANGELOG]]

**Time**: 30-60 minutes for typical update

---

### Task 2: Add New Page

**Goal**: Create entirely new page

**Steps**:
1. Read [[CONTENT-UPDATE-WORKFLOW#Adding New Pages]]
2. Plan content (use template)
3. Create page file in codebase
4. Add navigation links
5. Update [[01-PAGE-INVENTORY]]
6. Add to [[Content Updates/CHANGELOG]]

**Time**: 2-4 hours for new page

---

### Task 3: Review Before Launch

**Goal**: Make sure site is ready

**Steps**:
1. Open [[Planning/LAUNCH-CHECKLIST]]
2. Work through each section
3. Check off completed items
4. Address blocking issues first
5. Test everything

**Time**: Multiple days/weeks depending on readiness

---

### Task 4: Track a Change

**Goal**: Document what you changed

**Steps**:
1. Open [[Content Updates/CHANGELOG]]
2. Add new entry at top
3. Use template provided
4. Be specific about changes
5. Save

**Time**: 5 minutes

---

### Task 5: Find Specific Content

**Goal**: Locate where something lives

**Steps**:
1. Use Obsidian search (Ctrl/Cmd+Shift+F)
2. Or check [[01-PAGE-INVENTORY]]
3. Or use grep in terminal:
   ```bash
   grep -r "text to find" app/
   ```

**Time**: 2-5 minutes

---

## Obsidian Tips & Tricks

### Navigation

**Internal Links**:
- Click [[double bracket]] links to navigate
- Ctrl/Cmd+Click to open in new pane
- Hover to preview

**Backlinks**:
- See what links to current page
- Right sidebar → Backlinks
- Find related content

**Graph View**:
- Click graph icon
- See relationships between documents
- Explore connections

### Organization

**Tags**:
- Use #tags to categorize
- Click tag to see all with that tag
- Common tags:
  - #needs-review
  - #approved
  - #in-progress
  - #completed

**Folders**:
- Drag files between folders
- Right-click for options
- Keep structure clean

### Editing

**Markdown Shortcuts**:
- `#` for headers
- `**bold**` for bold
- `- [ ]` for checkboxes
- `` `code` `` for code

**Keyboard Shortcuts**:
- `Ctrl/Cmd+E`: Toggle edit/preview
- `Ctrl/Cmd+P`: Command palette
- `Ctrl/Cmd+O`: Quick switcher
- `Ctrl/Cmd+N`: New note

### Search

**Quick Search**:
- `Ctrl/Cmd+O`: Find file by name
- `Ctrl/Cmd+Shift+F`: Search all content
- Use quotes for exact match: `"exact phrase"`

**Filters**:
- `file:filename` - Search in specific file
- `tag:#tagname` - Search by tag
- `path:folder/` - Search in folder

---

## Best Practices

### 1. Update CHANGELOG

Every time you make a content change:
- Add entry to [[Content Updates/CHANGELOG]]
- Be specific about what changed
- Note which files were modified

**Why**: Track history, find changes later, accountability

### 2. Use Templates

Before major updates:
- Copy [[Content Updates/TEMPLATE-update-brief]]
- Fill it out completely
- Keep it for reference

**Why**: Organized planning, consistent process, better results

### 3. Link Documents

When referencing other documents:
- Use [[double bracket]] links
- Create connections
- Build knowledge web

**Why**: Easy navigation, see relationships, find related content

### 4. Tag Consistently

Use standard tags:
- `#needs-review` - Needs client review
- `#approved` - Client approved
- `#in-progress` - Currently working on
- `#completed` - Done

**Why**: Filter documents, track status, stay organized

### 5. Keep It Current

Update documents when things change:
- Note date at bottom
- Keep content accurate
- Archive old versions

**Why**: Reliable information, avoid confusion, maintain trust in system

---

## Workflow Example

Let's walk through a real example:

### Scenario: Update Home Page Hero Headline

**1. Plan** (10 min)
- Open [[Pages/HOME-PAGE]]
- Review current headline
- Check [[00-WEBSITE-OVERVIEW]] for brand voice
- Draft new headline

**2. Document** (5 min)
- Copy [[Content Updates/TEMPLATE-update-brief]]
- Name it: `2025-10-20-home-hero-update.md`
- Fill in current and proposed content

**3. Review** (10 min)
- Check against brand voice guidelines
- Verify tone consistency
- Get feedback if needed
- Mark as #approved in template

**4. Implement** (15 min)
- Open VS Code
- Find file: `app/(marketing)/page.tsx`
- Make change
- Test locally: `npm run dev`
- Verify looks good

**5. Deploy** (5 min)
```bash
git add .
git commit -m "Update Home: Revised hero headline for clarity"
git push
```
- Wait for Vercel deploy (2-3 min)
- Check live site

**6. Document** (5 min)
- Update [[Content Updates/CHANGELOG]]
- Update [[01-PAGE-INVENTORY]] if needed
- Move update brief to Archive/
- Mark #completed

**Total Time**: ~50 minutes for complete, documented update

---

## Getting Help

### Within This Vault

**Quick Reference**:
- [[CONTENT-UPDATE-WORKFLOW]] - How to update content
- [[Technical Docs/GIT-WORKFLOW]] - Using Git
- [[Planning/LAUNCH-CHECKLIST]] - Pre-launch tasks

**Search**:
- Use Obsidian search for any topic
- Check document index in [[README]]

### Outside This Vault

**Project Documentation**:
- Main `README.md` in project root
- Technical docs in project files
- Comments in code

**External Resources**:
- Next.js: https://nextjs.org/docs
- Obsidian: https://help.obsidian.md
- Git: https://git-scm.com/doc

### When Stuck

1. **Search this vault** for topic
2. **Check related documents** via backlinks
3. **Review workflow documents** for guidance
4. **Ask for help** with specific question

---

## Next Steps

Now that you're oriented:

### If You're About to Launch
1. ✅ Read [[Planning/LAUNCH-CHECKLIST]]
2. ✅ Work through critical items first
3. ✅ Test everything thoroughly
4. ✅ Update placeholder content

### If You're Maintaining Live Site
1. ✅ Familiarize with [[CONTENT-UPDATE-WORKFLOW]]
2. ✅ Bookmark [[Content Updates/CHANGELOG]]
3. ✅ Set up regular review schedule
4. ✅ Monitor analytics

### If You're Planning Content
1. ✅ Review [[02-CONTENT-AUDIT]]
2. ✅ Check [[01-PAGE-INVENTORY]] for gaps
3. ✅ Use [[Content Updates/TEMPLATE-update-brief]]
4. ✅ Plan systematically

---

## Customizing This Vault

### Add Your Own Documents

1. Create new file (Ctrl/Cmd+N)
2. Put in appropriate folder
3. Link from related documents
4. Add to appropriate index

### Modify Templates

1. Edit templates in `Content Updates/`
2. Adjust for your workflow
3. Keep structure for consistency

### Create New Sections

1. Add folders as needed
2. Update [[README]] index
3. Link new sections

---

## MCP Server Integration

This project supports Model Context Protocol servers:

### Available MCP Servers

**Git MCP**:
- Track changes with version control
- See commit history
- Manage branches

**Obsidian MCP** (if configured):
- Direct integration with Obsidian
- Enhanced search and navigation

**Future MCP Servers**:
- Check project configuration for available servers
- New servers add capabilities

### Using with Claude Code

When working with Claude:
- Reference this vault structure
- Claude can read these documents
- Use for context and guidance
- Keep vault updated as source of truth

---

## Maintaining This Vault

### Weekly
- [ ] Update [[Content Updates/CHANGELOG]] with any changes
- [ ] Review #in-progress items
- [ ] Archive completed update briefs

### Monthly
- [ ] Review [[01-PAGE-INVENTORY]] for accuracy
- [ ] Update page status tags
- [ ] Check for outdated information
- [ ] Archive old content updates

### Quarterly
- [ ] Full vault audit
- [ ] Update [[02-CONTENT-AUDIT]] if major changes
- [ ] Review and update workflows
- [ ] Clean up unused documents

### As Needed
- Update when website structure changes
- Add new pages to inventory
- Document new components
- Refine workflows based on experience

---

## Questions?

If you have questions about:

**Content Strategy**: See [[00-WEBSITE-OVERVIEW]]
**Specific Pages**: See [[01-PAGE-INVENTORY]]
**How to Update**: See [[CONTENT-UPDATE-WORKFLOW]]
**Technical**: See [[Technical Docs/GIT-WORKFLOW]]
**Launch Prep**: See [[Planning/LAUNCH-CHECKLIST]]

Can't find what you need? Use Obsidian search!

---

## You're Ready!

You now have:
- ✅ Understanding of vault structure
- ✅ Knowledge of key documents
- ✅ Workflows for common tasks
- ✅ Templates for planning
- ✅ Best practices to follow

**Start exploring!** The more you use this vault, the more valuable it becomes.

---

*Last Updated: 2025-10-17*
*Vault Version: 1.0*
*Questions or suggestions? Update this file!*
