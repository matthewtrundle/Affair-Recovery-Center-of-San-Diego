# Content Update Workflow

Step-by-step process for making content updates to the ARC San Diego website.

---

## Quick Reference

**For small updates** (typos, minor tweaks): Jump to [[#Quick Edit Process]]
**For page rewrites** (major changes): Follow [[#Full Update Process]]
**For new pages**: See [[#Adding New Pages]]
**For emergency updates**: See [[#Emergency Process]]

---

## Overview

This workflow ensures:
- ✅ Changes are tracked and documented
- ✅ Content stays consistent with brand voice
- ✅ SEO is maintained/improved
- ✅ Nothing breaks in production
- ✅ You can revert if needed

---

## Quick Edit Process

**Use for**: Typos, phone number updates, small copy tweaks

### Steps

1. **Document the Change**
   - Open `Content Updates/CHANGELOG.md`
   - Add entry with date, page, and change description

2. **Find the File**
   - Use [[01-PAGE-INVENTORY]] to locate correct file
   - Open in code editor

3. **Make the Edit**
   - Edit the content
   - Save file

4. **Test Locally**
   ```bash
   npm run dev
   ```
   - Navigate to the page
   - Verify change looks correct
   - Check mobile view

5. **Commit & Deploy**
   ```bash
   git add .
   git commit -m "Update: [description]"
   git push
   ```

6. **Verify Live**
   - Check production site
   - Confirm change is live

**Time**: 5-10 minutes

---

## Full Update Process

**Use for**: Page rewrites, adding sections, major content changes

### Phase 1: Planning (15-30 min)

1. **Create Update Document**
   - Copy template from `Content Updates/TEMPLATE-update-brief.md`
   - Name it: `YYYY-MM-DD-page-name-update.md`

2. **Document Current State**
   - Screenshot current page
   - Copy current text to update doc
   - Note word count

3. **Draft New Content**
   - Write new content in update doc
   - Check against brand voice guidelines
   - Verify tone consistency
   - Count words (similar length usually better)

4. **Review Checklist**
   - [ ] Maintains brand voice?
   - [ ] Includes relevant San Diego references?
   - [ ] Has clear CTA?
   - [ ] Uses keywords naturally?
   - [ ] Mobile-friendly length?
   - [ ] Accessible language (reading level)?

### Phase 2: Implementation (15-30 min)

5. **Locate Files**
   - Check [[01-PAGE-INVENTORY]] for file locations
   - Find component files if needed
   - Note any shared components

6. **Create Branch** (Optional but recommended for major changes)
   ```bash
   git checkout -b update/page-name-yyyy-mm-dd
   ```

7. **Make Changes**
   - Edit files
   - Update any related components
   - Check for content used in multiple places

8. **Update Metadata** (if applicable)
   - Page title
   - Meta description
   - OG tags
   - Schema markup

### Phase 3: Testing (15-20 min)

9. **Local Testing**
   ```bash
   npm run dev
   ```
   - [ ] Page loads correctly
   - [ ] No console errors
   - [ ] Links work
   - [ ] CTAs function
   - [ ] Images load
   - [ ] Mobile responsive
   - [ ] Tablet view
   - [ ] Desktop view

10. **Content Verification**
    - [ ] Read through entire page
    - [ ] Check for typos
    - [ ] Verify all facts
    - [ ] Test all links
    - [ ] Verify phone/email
    - [ ] Check formatting

11. **SEO Check**
    - [ ] Keywords present
    - [ ] Headers logical
    - [ ] Internal links working
    - [ ] Meta description under 160 chars
    - [ ] Title tag under 60 chars

### Phase 4: Deployment (10 min)

12. **Commit Changes**
    ```bash
    git add .
    git commit -m "Update [page name]: [brief description]"
    ```

13. **Push to Repository**
    ```bash
    git push origin [branch-name]
    ```

14. **Deploy**
    - If using Vercel: Auto-deploys from main
    - If using branch: Create pull request, review, merge

15. **Verify Production**
    - Check live site
    - Test on mobile device
    - Clear cache if needed
    - Check analytics are still tracking

### Phase 5: Documentation (5 min)

16. **Update Vault**
    - [ ] Add to `CHANGELOG.md`
    - [ ] Update page in [[01-PAGE-INVENTORY]]
    - [ ] Add before/after screenshots
    - [ ] Note any issues encountered

17. **Archive**
    - Move update doc to `Content Updates/Archive/`
    - Update status tags in vault

**Total Time**: 60-90 minutes

---

## Adding New Pages

### Planning Phase

1. **Define Purpose**
   - What problem does this page solve?
   - What action should visitors take?
   - How does it fit in site architecture?

2. **Content Outline**
   - Hero section
   - Main content sections (3-5)
   - CTAs
   - Related links

3. **SEO Planning**
   - Target keyword
   - Related keywords
   - Meta description
   - URL structure

### Implementation

4. **Create File**
   ```bash
   # For a new page at /new-page
   # Create: app/(marketing)/new-page/page.tsx
   ```

5. **Use Template**
   - Copy existing page structure
   - Update metadata
   - Add content

6. **Add Navigation**
   - Update `components/layout/Header.tsx`
   - Add to footer if appropriate
   - Update sitemap: `app/sitemap.ts`

7. **Internal Linking**
   - Add links FROM new page to existing pages
   - Add links TO new page from existing pages
   - Update [[01-PAGE-INVENTORY]]

8. **Test & Deploy**
   - Follow standard testing process
   - Verify sitemap includes new page
   - Check search console after 24 hours

---

## Emergency Process

**Use for**: Critical errors, wrong information, urgent legal issues

### Immediate Actions

1. **Assess Severity**
   - Is site broken? (5-alarm fire)
   - Wrong information? (4-alarm)
   - Typo/minor issue? (1-alarm)

2. **Quick Fix**
   ```bash
   # Fix directly on main branch if urgent
   git checkout main
   git pull
   # Make fix
   git add .
   git commit -m "HOTFIX: [description]"
   git push
   ```

3. **Verify Deploy**
   - Watch Vercel deploy
   - Check live site immediately
   - Clear CDN cache if needed

4. **Document Later**
   - Add to CHANGELOG when crisis over
   - Note what happened
   - Update procedures to prevent recurrence

---

## Using Git for Content

### Basic Commands

**Check status**:
```bash
git status
```

**See what changed**:
```bash
git diff
```

**Undo changes** (before commit):
```bash
git checkout -- [filename]
```

**Revert a commit**:
```bash
git revert [commit-hash]
```

**See history**:
```bash
git log --oneline
```

### Branch Strategy

**Main branch**: Always production-ready
**Update branches**: For major changes
**Naming**: `update/page-name-description`

### Commit Message Format

```
Update [page]: [brief description]

- Specific change 1
- Specific change 2
- Specific change 3

Refs: #issue-number (if applicable)
```

**Examples**:
- ✅ `Update Home: Revised hero headlines for clarity`
- ✅ `Fix Contact: Corrected phone number`
- ✅ `Add Services: New intensive therapy weekend section`
- ❌ `fixed stuff`
- ❌ `updates`

---

## Content Review Checklist

Use before every update:

### Brand Voice ✅
- [ ] Direct and honest tone
- [ ] San Diego references where natural
- [ ] Compassionate but not saccharine
- [ ] Professional but approachable
- [ ] Evidence-based language

### SEO ✅
- [ ] Target keyword in H1
- [ ] Keywords in first paragraph
- [ ] Headers (H2, H3) use semantic keywords
- [ ] Meta description compelling and under 160 chars
- [ ] Alt text on images
- [ ] Internal links to related pages

### Conversion ✅
- [ ] Clear CTA (what action to take)
- [ ] CTA appears multiple times
- [ ] Benefit-focused language
- [ ] Addresses objections
- [ ] Creates urgency (subtly)

### Technical ✅
- [ ] No broken links
- [ ] Images optimized
- [ ] Mobile responsive
- [ ] Fast load time
- [ ] No console errors
- [ ] Analytics tracking works

### Accessibility ✅
- [ ] Proper heading hierarchy
- [ ] Link text descriptive
- [ ] Color contrast sufficient
- [ ] Alt text present
- [ ] No autoplay video/audio

### Legal ✅
- [ ] No medical claims
- [ ] Appropriate disclaimers
- [ ] HIPAA compliant
- [ ] Accurate credentials
- [ ] Proper copyright

---

## Tools & Resources

### Required Tools
- **Code Editor**: VS Code (or similar)
- **Terminal**: For git and npm commands
- **Browser**: For testing (Chrome DevTools)
- **Obsidian**: For documentation

### Helpful Tools
- **Grammarly**: Catch typos
- **Hemingway Editor**: Check readability
- **Word Counter**: Track length
- **Google Docs**: Draft collaboratively
- **Screenshots**: Document before/after

### Reference Documents
- [[00-WEBSITE-OVERVIEW]] - Brand voice guide
- [[01-PAGE-INVENTORY]] - Find files
- [[02-CONTENT-AUDIT]] - Quality standards
- [[Components/]] - Reusable elements

---

## Common Issues & Solutions

### Issue: "Can't find where content lives"
**Solution**: Check [[01-PAGE-INVENTORY]], search codebase, or grep for text:
```bash
grep -r "text you're looking for" app/
```

### Issue: "Changes not showing up"
**Solution**:
1. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. Clear browser cache
3. Check if dev server restarted
4. Verify file saved

### Issue: "Broke something, need to undo"
**Solution**:
```bash
# If not committed yet:
git checkout -- [filename]

# If already committed:
git revert HEAD
```

### Issue: "Lost track of what I changed"
**Solution**:
```bash
git diff
git status
```

### Issue: "Content looks weird on mobile"
**Solution**:
1. Test with Chrome DevTools mobile emulator
2. Check Tailwind responsive classes
3. Test on actual device
4. Ask for technical help if CSS issue

---

## Getting Help

### For Content Questions
- Review [[00-WEBSITE-OVERVIEW]] for brand voice
- Check existing pages for examples
- Ask: "Does this sound like Jordan?"

### For Technical Issues
- Check Next.js documentation
- Review project README.md
- Check browser console for errors
- Search error messages

### For Git Issues
- `git status` to see current state
- GitHub Desktop if command line confusing
- Can always clone fresh copy if totally stuck

---

## Best Practices

1. **Make Small Changes**: Easier to test and revert
2. **Test Locally First**: Always run `npm run dev`
3. **Document Everything**: Future you will thank you
4. **Use Branches for Big Changes**: Safety net
5. **Read Changes Before Committing**: Catch mistakes
6. **Keep Brand Voice**: When in doubt, be more direct
7. **Mobile First**: Most visitors on phone
8. **Accessibility Matters**: Everyone should access site
9. **Performance Counts**: Keep it fast
10. **Commit Often**: Better than one huge commit

---

## Related Documents

- [[Content Updates/CHANGELOG]] - Track all changes
- [[Content Updates/TEMPLATE-update-brief]] - Use for planning
- [[Planning/LAUNCH-CHECKLIST]] - Pre-launch tasks
- [[01-PAGE-INVENTORY]] - Find files

---

*Last Updated: 2025-10-17*
