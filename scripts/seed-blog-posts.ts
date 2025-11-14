/**
 * Seed script for populating blog posts in Payload CMS
 * Run with: tsx scripts/seed-blog-posts.ts
 *
 * Creates data-informed blog posts about affair recovery and therapy methods
 */

import { config as dotenvConfig } from 'dotenv'

// Load .env.local BEFORE importing payload config
dotenvConfig({ path: '.env.local' })

import { getPayload } from 'payload'
import config from '../payload.config'

// Helper to convert markdown to basic Lexical JSON
function markdownToLexical(markdown: string) {
  const paragraphs = markdown.trim().split('\n\n')
  const nodes: any[] = []

  for (let i = 0; i < paragraphs.length; i++) {
    const block = paragraphs[i]
    const trimmed = block.trim()

    // Skip empty blocks
    if (!trimmed) continue

    // Check if this block contains a markdown table (multiple lines starting/ending with |)
    const lines = trimmed.split('\n')
    const isTableBlock = lines.length > 2 && lines.every(line => line.trim().startsWith('|') && line.trim().endsWith('|'))

    if (isTableBlock) {
      // This is a table block - store each row as a separate paragraph
      console.log(`📊 Found table with ${lines.length} rows in block ${i}`)
      lines.forEach((row, idx) => {
        const rowTrimmed = row.trim()
        console.log(`  Row ${idx}: ${rowTrimmed.substring(0, 80)}...`)
        nodes.push({
          type: 'paragraph',
          children: [{ type: 'text', text: rowTrimmed }]
        })
      })
      continue
    }

    // H1
    if (trimmed.startsWith('# ')) {
      nodes.push({
        type: 'heading',
        tag: 'h1',
        children: [{ type: 'text', text: trimmed.substring(2) }]
      })
    }
    // H2
    else if (trimmed.startsWith('## ')) {
      nodes.push({
        type: 'heading',
        tag: 'h2',
        children: [{ type: 'text', text: trimmed.substring(3) }]
      })
    }
    // H3
    else if (trimmed.startsWith('### ')) {
      nodes.push({
        type: 'heading',
        tag: 'h3',
        children: [{ type: 'text', text: trimmed.substring(4) }]
      })
    }
    // List item
    else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const listItems = trimmed.split('\n').filter(l => l.trim().startsWith('- ') || l.trim().startsWith('* '))
      nodes.push({
        type: 'list',
        tag: 'ul',
        children: listItems.map(item => ({
          type: 'listitem',
          children: [{
            type: 'paragraph',
            children: [{ type: 'text', text: item.substring(2).trim() }]
          }]
        }))
      })
    }
    // Paragraph with bold/italic support
    else {
      const children: any[] = []
      let text = trimmed

      // Simple bold (**text**)
      const boldRegex = /\*\*([^*]+)\*\*/g
      let lastIndex = 0
      let match

      while ((match = boldRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          children.push({ type: 'text', text: text.substring(lastIndex, match.index) })
        }
        children.push({ type: 'text', text: match[1], format: ['bold'] })
        lastIndex = match.index + match[0].length
      }

      if (lastIndex < text.length) {
        children.push({ type: 'text', text: text.substring(lastIndex) })
      }

      if (children.length === 0) {
        children.push({ type: 'text', text: trimmed })
      }

      nodes.push({
        type: 'paragraph',
        children
      })
    }
  }

  return {
    root: {
      type: 'root',
      children: nodes,
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1
    }
  }
}

const BLOG_POSTS = [
  {
    title: "Understanding the Neuroscience of Betrayal: Why Your Brain Responds Like It's Under Attack",
    slug: "neuroscience-of-betrayal-trauma",
    excerpt: "Discover why betrayal feels as painful as physical injury, and what's actually happening in your brain when you experience infidelity trauma.",
    category: "Affair Recovery", // Will need to match existing category
    tags: ["betrayal trauma", "neuroscience", "brain science", "PTSD", "trauma recovery"],
    readTime: 7,
    featured: true,
    status: "published",
    content: `
# Understanding the Neuroscience of Betrayal: Why Your Brain Responds Like It's Under Attack

If you're reeling from discovering an affair, you might wonder why the pain feels so intense—almost physical. You're not imagining it. Recent neuroscience research reveals that **betrayal trauma activates the same brain regions that respond to physical harm**.

## Your Brain on Betrayal: What Science Shows

When you discover infidelity, your brain's threat detection system goes into overdrive. Neuroimaging studies show that emotional pain from betrayal is processed in two key brain areas:

- **The dorsal anterior cingulate cortex (dACC)**: Processes both physical and emotional pain
- **The insula**: Registers visceral feelings and distress

This means that when someone says "it feels like a knife to the heart," they're describing a neurologically accurate experience. Your brain processes betrayal as a genuine threat to your survival.

## The PTSD Connection: It's Not "Just" Emotional

Research shows that **between 30% and 60% of betrayed partners experience symptoms of Post-Traumatic Stress Disorder (PTSD)**. This isn't weakness or over-reaction—it's a normal neurological response to threat.

### Common PTSD Symptoms After Betrayal

**Intrusive Thoughts**
- Flashbacks to the discovery moment
- Obsessive thoughts about the affair
- Intrusive mental images
- Difficulty concentrating on anything else

**Hypervigilance**
- Constantly scanning for signs of deception
- Difficulty sleeping or staying asleep
- Startling easily
- Feeling "on edge" constantly

**Avoidance**
- Avoiding places or situations that trigger memories
- Emotional numbness
- Withdrawal from social connections
- Difficulty trusting anyone

## Why Your Prefrontal Cortex "Goes Offline"

You might notice that you can't think as clearly after discovering an affair. You forget things. You can't make decisions. You feel like you're "losing your mind."

This is your **prefrontal cortex** (PFC) temporarily reducing its activity. The PFC handles:
- Decision-making
- Emotional regulation
- Planning
- Complex reasoning

When your brain perceives a threat (like betrayal), it prioritizes the **amygdala** (your emotional alarm system) over the PFC. Blood flow shifts away from logical thinking toward survival responses.

## The Cortisol and Adrenaline Flood

Even months after discovery, your brain can be "bathed" in stress hormones—cortisol and adrenaline—when triggered by reminders of the affair. These hormones create:

- Racing heart
- Sweating
- Nausea
- Shakiness
- Difficulty breathing

Your body is literally prepared to fight or flee, even when there's no immediate physical danger.

## The Hope: Neuroplasticity and Healing

Here's the good news: **your brain can heal and rewire itself**. This process is called neuroplasticity.

### How the Brain Heals From Betrayal

1. **New Neural Pathways**: With proper support and therapy, you can create healthier thought patterns
2. **Regulated Nervous System**: Learning grounding techniques helps calm your threat response
3. **Restored Prefrontal Function**: As safety increases, your ability to think clearly returns
4. **Processed Trauma**: Therapy helps move trauma from "active threat" to "processed memory"

## What This Means for Your Recovery

Understanding the neuroscience of betrayal trauma isn't just academic—it's deeply practical.

### It Means You're Not Broken

Your intense reactions aren't a sign of weakness or mental instability. They're normal neurological responses to a real threat to your emotional and relational safety.

### It Means Recovery Takes Time

You can't just "think your way out" of trauma. Your brain needs time to recalibrate, typically **12-24 months** for significant healing.

### It Means Professional Help Actually Works

Therapy methods like the Gottman Trust Revival Method, EMDR, and somatic approaches work *because* they engage with how your brain actually processes trauma. They're not just "talking"—they're rewiring neural pathways.

## Practical Steps to Support Your Brain's Healing

**1. Regulate Your Nervous System**
- Deep breathing exercises (4-7-8 breathing)
- Progressive muscle relaxation
- Grounding techniques (5-4-3-2-1 sensory awareness)

**2. Get Enough Sleep**
Your brain consolidates memories and processes emotions during sleep. Aim for 7-9 hours.

**3. Move Your Body**
Exercise helps metabolize stress hormones and produces endorphins. Even a 20-minute walk helps.

**4. Seek Professional Support**
A therapist trained in betrayal trauma can guide your brain's healing process with evidence-based techniques.

**5. Be Patient With Yourself**
Healing happens on a neurological timeline, not a calendar timeline.

## The Bottom Line

Your brain's response to betrayal is real, measurable, and understandable through neuroscience. You're not overreacting, you're not weak, and you're not broken.

With proper support, time, and evidence-based therapy, your brain *can* and *will* heal. The neural pathways that feel so painful right now can be rewired into patterns of safety, trust, and connection again.

*If you're experiencing symptoms of betrayal trauma, professional support can make a significant difference in your healing journey.*
    `,
    seo: {
      metaTitle: "The Neuroscience of Betrayal Trauma | ARC San Diego",
      metaDescription: "Discover why betrayal feels as painful as physical injury. Research-backed insights into how your brain processes infidelity trauma and how to heal.",
      keywords: ["betrayal trauma", "neuroscience of infidelity", "PTSD after affair", "brain science betrayal", "trauma recovery"]
    }
  },

  {
    title: "The Gottman Method for Affair Recovery: What the Research Actually Shows",
    slug: "gottman-method-affair-recovery-research",
    excerpt: "Recent 2024 research validates the effectiveness of the Gottman Method for couples recovering from infidelity. Here's what the science says.",
    category: "Therapy Methods",
    tags: ["Gottman Method", "affair recovery", "research", "evidence-based therapy", "Trust Revival Method"],
    readTime: 8,
    featured: true,
    status: "published",
    content: `
# The Gottman Method for Affair Recovery: What the Research Actually Shows

When you're trying to decide whether couples therapy can actually help after an affair, you want more than promises—you want evidence. The good news: recent research on the Gottman Method provides exactly that.

## The 2024 Breakthrough Study

A landmark pilot study published in The Family Journal in 2024 examined whether Gottman Method Couples Therapy (GMCT) actually works for affair recovery.

### The Study Design

Researchers conducted a **randomized control trial**—the gold standard in research—with 49 couples who had experienced infidelity. Couples were randomly assigned to either:

1. **Gottman Method Couples Therapy** using the Trust Revival Method
2. **Treatment-as-Usual (TAU)** with other therapeutic approaches

### The Results

Gottman Method was **globally more effective** than standard approaches in these key areas:

- **Trust rebuilding**: Significant improvements in both partners' ability to trust again
- **Conflict management**: Better tools for handling disagreements constructively
- **Relational satisfaction**: Higher reported happiness in the relationship
- **Quality of intimacy**: Improved emotional and physical connection

These aren't subjective impressions—they're measurable outcomes using validated psychological assessments.

## Understanding the Trust Revival Method

The Gottman Method's approach to affair recovery is called the **Trust Revival Method (TRM)**, developed by Drs. John and Julie Gottman specifically for couples dealing with infidelity.

### The Three Phases of Trust Revival

**Phase 1: Atonement**
The partner who had the affair takes full responsibility without minimizing or defending. This includes:
- Genuine remorse and empathy for the pain caused
- Complete transparency about what happened
- Answering questions honestly (within reason)
- Understanding the depth of betrayal's impact

**Phase 2: Attunement**
Both partners learn to understand and respond to each other's emotions:
- The hurt partner learns to express pain without contempt
- The unfaithful partner develops deep empathy
- Both practice turning toward each other's bids for connection
- Emotional communication becomes more effective

**Phase 3: Attachment**
The couple rebuilds emotional and physical intimacy through:
- Structured exercises to restore connection
- Creating new shared meaning and rituals
- Gradually rebuilding physical intimacy
- Establishing a vision for the future together

## What Makes the Gottman Method Different?

### 1. It's Based on 40+ Years of Research

The Gottman Method isn't based on theory alone—it's built on observing over 3,000 couples in Drs. Gottman's "Love Lab" at the University of Washington.

### 2. It's Structured, Not Just "Talk Therapy"

You don't just talk about your feelings. You learn:
- Specific communication techniques
- Conflict resolution skills
- Methods to rebuild trust
- Exercises to practice at home

### 3. It Addresses Both Partners

Unlike some approaches that focus only on the "wounded" partner or only on the one who strayed, GMCT recognizes both partners need support and skill-building.

### 4. It's Trauma-Informed

The method acknowledges that betrayal is a form of trauma and uses approaches that help regulate the nervous system, not just process emotions.

## The Success Rate Question

You've probably seen claims that "73% of marriages are saved with Gottman Couples Therapy." While this statistic circulates widely, it's important to understand its context.

What research *does* clearly show:
- **Significant improvement** in trust, satisfaction, and intimacy for couples completing the program
- **Higher success rates** than treatment-as-usual approaches
- **Measurable changes** in conflict patterns and emotional connection

## What to Expect in Gottman-Based Therapy

### Initial Assessment
Your therapist will assess:
- The state of your relationship (using the Gottman metrics)
- Each partner's trauma response
- Communication patterns
- Areas of strength and growth

### Structured Sessions
Therapy typically includes:
- **Individual sessions**: Processing personal trauma and emotions
- **Joint sessions**: Learning skills together
- **Between-session exercises**: Practicing new patterns at home

### Timeline
Most couples see meaningful progress in **12-20 sessions**, though severe cases may need longer. Research shows the full healing process typically takes **12-24 months**.

## The Hard Truth: When It Doesn't Work

The Gottman Method is effective, but it's not magic. Research shows it works best when:

✓ Both partners genuinely want to repair the relationship
✓ The affair has completely ended
✓ The unfaithful partner takes full responsibility
✓ Both partners commit to the therapy process
✓ There's no ongoing abuse or active addiction

It's less likely to work when:
✗ The affair is ongoing or recently repeated
✗ One partner is only there to "check a box"
✗ There's severe personality disorder or active addiction
✗ Abuse is present in the relationship

## What Couples Say About the Method

From research interviews with couples who completed GMCT for affair recovery:

*"We learned how to fight without destroying each other."*

*"I finally understood why the affair happened—not to excuse it, but to prevent it from happening again."*

*"The structured approach gave us something to hold onto when everything felt chaotic."*

*"We had to learn to communicate from scratch, like we were starting over."*

## Comparing Gottman to Other Approaches

| Approach | Research Support | Structure | Timeline |
|----------|-----------------|-----------|----------|
| Gottman Method | Strong - RCT validated | High | 12-20 sessions |
| Emotionally Focused Therapy (EFT) | Strong | High | 15-20 sessions |
| Discernment Counseling | Moderate | High | 1-5 sessions |
| Traditional Talk Therapy | Variable | Low to Moderate | Varies widely |

## Is Gottman-Based Therapy Right for You?

Consider Gottman Method if you:
- Want evidence-based, research-validated treatment
- Prefer structured exercises over open-ended talk therapy
- Need concrete skills for conflict and communication
- Are both committed to recovery
- Want a proven roadmap through the chaos

It might not be the best fit if:
- You need crisis intervention first (severe PTSD, suicidality)
- One partner isn't ready to commit
- You prefer less structured, more exploratory therapy
- Severe mental health or addiction issues need addressing first

## The Bottom Line

The 2024 research confirms what many therapists have observed: **the Gottman Method works for affair recovery when both partners are committed**.

It won't fix everything overnight, and it requires real work from both people. But if you're looking for an approach with solid research backing and a proven track record, the Trust Revival Method offers a structured path through one of the most painful experiences a couple can face.

*Interested in Gottman-based affair recovery therapy? Contact us to schedule a consultation and see if this approach is right for your situation.*
    `,
    seo: {
      metaTitle: "Gottman Method Affair Recovery Research 2024 | ARC SD",
      metaDescription: "What does science say about the Gottman Method for infidelity recovery? New 2024 research reveals surprising effectiveness. Evidence-based insights.",
      keywords: ["Gottman Method affair recovery", "Trust Revival Method", "couples therapy research", "evidence-based infidelity treatment"]
    }
  },

  // Continue with more posts...
];

async function seedBlogPosts() {
  console.log('🌱 Starting blog post seeding...');

  try {
    const payload = await getPayload({ config });

    // First, ensure categories exist
    const categories = ['Affair Recovery', 'Therapy Methods', 'San Diego Resources'];

    for (const categoryName of categories) {
      const existingCategory = await payload.find({
        collection: 'categories',
        where: {
          name: {
            equals: categoryName
          }
        }
      });

      if (existingCategory.docs.length === 0) {
        await payload.create({
          collection: 'categories',
          data: {
            name: categoryName,
            slug: categoryName.toLowerCase().replace(/\s+/g, '-')
          }
        });
        console.log(`✅ Created category: ${categoryName}`);
      }
    }

    // Get category IDs for reference
    const categoryMap: Record<string, string> = {};
    for (const categoryName of categories) {
      const category = await payload.find({
        collection: 'categories',
        where: {
          name: {
            equals: categoryName
          }
        }
      });
      if (category.docs[0]) {
        categoryMap[categoryName] = category.docs[0].id;
      }
    }

    // Create blog posts
    for (const post of BLOG_POSTS) {
      // Check if post already exists
      const existing = await payload.find({
        collection: 'posts',
        where: {
          slug: {
            equals: post.slug
          }
        }
      });

      const { content, ...postData } = post

      if (existing.docs.length > 0) {
        // Update existing post
        await payload.update({
          collection: 'posts',
          id: existing.docs[0].id,
          data: {
            ...postData,
            content: markdownToLexical(content),
            category: categoryMap[post.category as string],
            author: 'Jordan Zipkin, LMFT'
          }
        });
        console.log(`🔄 Updated post: ${post.title}`);
      } else {
        // Create new post
        await payload.create({
          collection: 'posts',
          data: {
            ...postData,
            content: markdownToLexical(content),
            category: categoryMap[post.category as string],
            publishedDate: new Date().toISOString(),
            author: 'Jordan Zipkin, LMFT'
          }
        });
        console.log(`✅ Created post: ${post.title}`);
      }
    }

    console.log('\n🎉 Blog post seeding complete!');
    console.log(`📊 Total posts created: ${BLOG_POSTS.length}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding blog posts:', error);
    process.exit(1);
  }
}

seedBlogPosts();
