# Bside Design & Style Guideline
## Product Design System & UI/UX Standards

**Version:** 1.0  
**Date:** January 30, 2026  
**Project:** Bside - Artwork-Centric Social Platform  
**Target Launch:** March 31, 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Brand Identity & Design Philosophy](#2-brand-identity--design-philosophy)
3. [Visual Design System](#3-visual-design-system)
4. [Typography](#4-typography)
5. [Color Palette](#5-color-palette)
6. [Iconography](#6-iconography)
7. [Components Library](#7-components-library)
8. [Layout & Grid System](#8-layout--grid-system)
9. [Navigation Patterns](#9-navigation-patterns)
10. [Motion & Animation](#10-motion--animation)
11. [Module-Specific Guidelines](#11-module-specific-guidelines)
12. [Accessibility Standards](#12-accessibility-standards)
13. [Design Specifications](#13-design-specifications)

---

## 1. Project Overview

### 1.1 Service Description
Bside is a mobile application enabling users to capture and upload artworks from offline exhibition venues, collect and manage artwork information through AI-based camera recognition, discover new artists through art-centric feeds, and connect with artworks and artists through social engagement.

### 1.2 Core User Journey
**Capture → Recognize → Collect → Share → Discover**

### 1.3 Target Audience
**Primary Persona:** Gen Z art enthusiasts (18-26 years old)
- Digitally native and culturally engaged
- Active participants in cultural experiences (exhibitions, galleries, art fairs)
- Expressive and experience-oriented
- Representative references: Emma Chamberlain, Timothée Chalamet
- May not have strong purchasing power yet but deeply invested in cultural participation

**Secondary Personas:**
- MZ generation art lovers who frequently visit exhibitions
- Art collectors managing personal collections
- Artists monitoring engagement with their work
- Gallery professionals tracking artwork popularity

### 1.4 Platform Requirements
- **iOS:** 15.0 or higher
- **Android:** API 29 or higher
- **Framework:** React Native 0.81.5+, Expo ^54.0.27
- **Responsive:** All devices including iPad, tablets, foldables

---

## 2. Brand Identity & Design Philosophy

### 2.1 Brand Personality

**Core Attributes:**
- **Minimal and Elegant:** Artwork as hero content
- **Composed and Calm:** Sophisticated, not playful or childish
- **Joyful and Energetic:** With subtle moments of delight
- **Strong Presence:** Confident, premium feel
- **Understated Luxury:** Like a premium department store, not a street market

**Personality References:**
- Emma Thompson (composed, elegant, sophisticated)
- Johnny Depp (artistic, authentic, distinctive)

### 2.2 Design Principles

#### Principle 1: Artwork First
- Artworks are always the hero content
- UI elements support but never overpower artwork imagery
- Use subtle backgrounds, blur, and gradients to create hierarchy
- Generous white/negative space around artwork images

#### Principle 2: Minimal Yet Meaningful
- Every element serves a clear purpose
- Clean, uncluttered interfaces
- Strategic use of visual accents (iconography, animations, text boxes)
- Avoid unnecessary decorative elements

#### Principle 3: Smooth & Engaging
- Fluid transitions between screens (view-transition-like animations)
- Dynamic, not static interactions
- Responsive feedback to user actions
- Fast, modular, streamlined experiences (reference: Obsidian)

#### Principle 4: Understated Elegance
- Sophisticated color palette with subtle gradients
- Premium feel through typography and spacing
- Refined visual language inspired by Nike SNKRS and HYPE by Hypebeast
- Calm and balanced overall tone

#### Principle 5: Intuitive Flow
- Clear user journey from capture to collection to sharing
- Easy information retrieval and organization
- Seamless navigation with intuitive patterns
- Contextual guidance without overwhelming users

### 2.3 Reference Applications

**Primary Inspirations:**
1. **Nike SNKRS App**
   - Minimalist, product-focused navigation
   - Smooth transitions and animations
   - Clean, cohesive visual language
   - Refined tone and manner

2. **HYPE by Hypebeast**
   - Content-driven UI
   - Calm and balanced visual tone
   - Subtle use of emojis/icons as visual accents
   - Clear information hierarchy

3. **Spotify**
   - Playlist organization and curation features
   - Easy content discovery
   - Personalization patterns

4. **Pinterest**
   - Smooth image search and discovery
   - Visual-first interface
   - Masonry/grid layouts for content

5. **Vivino**
   - Object scanning functionality (wine bottles → artworks)
   - Recognition result displays
   - Information overlay patterns

**Secondary References:**
- **bgaworks.com:** Understated, minimal yet elegant aesthetic
- **Obsidian:** Modular, streamlined, fast file management
- **Instagram:** Social features, feed patterns, profile layouts

### 2.4 Anti-References (Avoid These Styles)

**DO NOT Reference:**
1. **Artue.io** - Too commercial, static, lacks platform personality
2. **DeviantArt** - Too game-like, young, reserved for kids
3. **Artness.kr** - Too cute and playful, lacks sophistication
4. **Art Basel App** - While luxurious, may be too heavy/formal for Gen Z

**Avoid:**
- Loud, busy design styles
- Overly playful or childish aesthetics
- Game-like UI patterns
- Static, commercial marketplace feels
- Excessive decoration or ornamentation

---

## 3. Visual Design System

### 3.1 Overall Visual Language

**Core Aesthetic:**
- Clean, minimal interfaces with strategic visual accents
- Blur effects and subtle gradients for depth and elegance
- Card-based layouts for content organization
- Generous padding and spacing
- Sophisticated use of shadows and elevation
- Dark mode support following device settings

### 3.2 Visual Hierarchy

**Level 1 - Hero Content (Artworks)**
- Largest visual elements
- High-quality images, edge-to-edge where appropriate
- Minimal framing to let artwork breathe
- Full-bleed images in detail views

**Level 2 - Primary Actions**
- Capture button (prominent in camera view)
- Primary CTAs (Follow, Share, Save)
- Navigation bar items
- Clear, accessible touch targets (minimum 44x44pt)

**Level 3 - Secondary Information**
- Artwork metadata (title, artist, year)
- Collection headers
- User information
- Engagement metrics (capture counts, followers)

**Level 4 - Tertiary Elements**
- Timestamps
- Location tags
- Supplementary details
- Helper text and guidance

### 3.3 Surface Treatments

**Cards:**
- Border radius: 12-16px for main cards, 8-12px for nested cards
- Subtle shadows: elevation-1 (0 2px 8px rgba(0,0,0,0.08))
- Padding: 16-24px internal spacing
- Background: White (#FFFFFF) in light mode, Dark (#1C1C1E) in dark mode
- Border: Optional 1px border at rgba(0,0,0,0.06) for subtle definition

**Blur Effects:**
- Backdrop blur for overlays: blur(20px) with 80% opacity
- Use for navigation bars, modal headers, bottom sheets
- Frosted glass effect for premium feel
- Tint with subtle color (white/black at 20-40% opacity)

**Gradients:**
- Subtle, sophisticated gradients for backgrounds
- Primary gradient: Linear from primary color 40% → primary color darker 10%
- Overlay gradients for text readability on images
- Bottom gradient on images: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)

**Shadows:**
- Elevation-1: 0 2px 8px rgba(0,0,0,0.08) - Cards, buttons
- Elevation-2: 0 4px 16px rgba(0,0,0,0.12) - Raised cards, modals
- Elevation-3: 0 8px 24px rgba(0,0,0,0.16) - Bottom sheets, prominent modals
- Elevation-4: 0 12px 32px rgba(0,0,0,0.20) - Top-level overlays

**Dividers:**
- Thickness: 1px or 0.5px for subtle separation
- Color: rgba(0,0,0,0.06) in light mode, rgba(255,255,255,0.1) in dark mode
- Use sparingly; prefer spacing over dividers where possible

---

## 4. Typography

### 4.1 Font Selection

**Primary Font Family: SF Pro (iOS) / Roboto (Android)**
- System native fonts for performance and platform consistency
- Fallback: Inter or similar geometric sans-serif

**Characteristics:**
- Clean, modern, highly legible
- Excellent screen rendering
- Professional yet approachable
- Strong hierarchy through weight variations

### 4.2 Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Use Case |
|-------|------|--------|-------------|----------------|----------|
| **Display Large** | 32pt | Bold (700) | 40pt (125%) | -0.5px | Hero headlines, onboarding |
| **Display Medium** | 28pt | Semibold (600) | 36pt (129%) | -0.5px | Page titles, main headers |
| **Display Small** | 24pt | Semibold (600) | 32pt (133%) | -0.5px | Section headers |
| **Heading 1** | 20pt | Semibold (600) | 28pt (140%) | -0.3px | Card titles, artwork names |
| **Heading 2** | 18pt | Semibold (600) | 26pt (144%) | -0.3px | Subheadings, artist names |
| **Heading 3** | 16pt | Semibold (600) | 24pt (150%) | -0.2px | Labels, smaller headers |
| **Body Large** | 17pt | Regular (400) | 26pt (153%) | 0px | Primary body text |
| **Body Medium** | 15pt | Regular (400) | 22pt (147%) | 0px | Secondary body text |
| **Body Small** | 13pt | Regular (400) | 20pt (154%) | 0px | Captions, metadata |
| **Label Large** | 15pt | Medium (500) | 22pt (147%) | 0.1px | Button text, CTAs |
| **Label Medium** | 13pt | Medium (500) | 18pt (138%) | 0.1px | Tab labels, small buttons |
| **Label Small** | 11pt | Medium (500) | 16pt (145%) | 0.2px | Tiny labels, badges |
| **Caption** | 12pt | Regular (400) | 18pt (150%) | 0.2px | Timestamps, tertiary info |

### 4.3 Typography Rules

**Artwork Titles:**
- Font: Heading 1 (20pt, Semibold)
- Color: Text Primary
- Max lines: 2, truncate with ellipsis
- Always pair with artist name below

**Artist Names:**
- Font: Body Medium (15pt, Regular)
- Color: Text Secondary
- Always clickable/tappable to artist profile
- Underline on hover/press (if applicable)

**Body Text:**
- Font: Body Large (17pt, Regular) for primary content
- Line height: 1.5-1.6 for optimal readability
- Max line length: ~60-75 characters for comfortable reading
- Color: Text Primary

**Metadata (Year, Medium, Location):**
- Font: Body Small (13pt, Regular)
- Color: Text Tertiary
- Use consistent formatting: "Oil on Canvas, 2023"
- Comma-separated, not bulleted

**Capture Counts / Engagement Metrics:**
- Font: Label Small (11pt, Medium)
- Color: Text Secondary
- Format: "1,424" (use comma separators for thousands)

**Timestamps:**
- Font: Caption (12pt, Regular)
- Color: Text Tertiary
- Relative format: "2 hours ago", "3 days ago"
- Absolute for older: "Dec 21, 2025"

**Button Text:**
- Font: Label Large (15pt, Medium)
- All caps only for primary CTAs (e.g., "FOLLOW", "CAPTURE")
- Sentence case for secondary actions (e.g., "Edit profile")

### 4.4 Text Colors (See Color Palette Section for Hex Values)

- **Text Primary:** Highest contrast, main content (90% opacity on background)
- **Text Secondary:** Medium contrast, supporting text (60% opacity)
- **Text Tertiary:** Low contrast, metadata (40% opacity)
- **Text On Dark:** For text over dark backgrounds/images (White at 90-100%)
- **Text On Light:** For text over light backgrounds (Black at 80-90%)

---

## 5. Color Palette

### 5.1 Primary Color Philosophy

**Goal:** Sophisticated, elegant, not overly colorful. Colors should enhance artwork visibility, not compete with them.

**Approach:**
- Neutral-forward palette with refined accents
- Subtle, sophisticated secondary colors
- High contrast for accessibility
- Dark mode as a first-class citizen

### 5.2 Color System

#### Primary Colors

**Primary (Brand/Accent)**
- **Primary 500:** `#1C1C1E` (Dark Charcoal - Main brand color)
- **Primary 400:** `#2C2C2E` (Lighter charcoal)
- **Primary 600:** `#0A0A0A` (Darker charcoal)
- Use for: Primary buttons, key UI elements, brand presence

**Rationale:** Deep, sophisticated dark tone that feels premium and lets artwork stand out. Unlike bright primary colors, this creates an elegant, gallery-like environment.

#### Neutral Colors (Foundation)

**Light Mode:**
- **Background Primary:** `#FFFFFF` (Pure White)
- **Background Secondary:** `#F9F9F9` (Off-white, subtle texture)
- **Background Tertiary:** `#F2F2F2` (Light gray for dividers, inactive elements)
- **Surface:** `#FFFFFF` (Card backgrounds)
- **Surface Elevated:** `#FFFFFF` with shadow (Cards with elevation)

**Dark Mode:**
- **Background Primary:** `#000000` (True Black for OLED efficiency)
- **Background Secondary:** `#1C1C1E` (System dark gray)
- **Background Tertiary:** `#2C2C2E` (Lighter system dark gray)
- **Surface:** `#1C1C1E` (Card backgrounds)
- **Surface Elevated:** `#2C2C2E` with shadow

#### Text Colors

**Light Mode:**
- **Text Primary:** `rgba(0, 0, 0, 0.87)` (#000000 at 87% opacity)
- **Text Secondary:** `rgba(0, 0, 0, 0.60)` (#000000 at 60% opacity)
- **Text Tertiary:** `rgba(0, 0, 0, 0.38)` (#000000 at 38% opacity)
- **Text Disabled:** `rgba(0, 0, 0, 0.26)` (#000000 at 26% opacity)

**Dark Mode:**
- **Text Primary:** `rgba(255, 255, 255, 0.92)` (#FFFFFF at 92% opacity)
- **Text Secondary:** `rgba(255, 255, 255, 0.60)` (#FFFFFF at 60% opacity)
- **Text Tertiary:** `rgba(255, 255, 255, 0.38)` (#FFFFFF at 38% opacity)
- **Text Disabled:** `rgba(255, 255, 255, 0.26)` (#FFFFFF at 26% opacity)

#### Accent Colors

**Blue (Interactive Elements)**
- **Blue 500:** `#007AFF` (iOS Blue)
- **Blue 400:** `#3395FF`
- **Blue 600:** `#0051D5`
- Use for: Links, selected states, informational elements

**Green (Success)**
- **Green 500:** `#34C759` (iOS Green)
- Use for: Success messages, confirmation states

**Red (Error/Important)**
- **Red 500:** `#FF3B30` (iOS Red)
- Use for: Errors, destructive actions, important warnings

**Orange (Warning)**
- **Orange 500:** `#FF9500` (iOS Orange)
- Use for: Warnings, alerts that need attention

**Purple (Special/Featured)**
- **Purple 500:** `#AF52DE` (iOS Purple)
- Use sparingly for: Special badges, featured content, premium indicators

#### Semantic Colors

**Borders:**
- **Light Mode:** `rgba(0, 0, 0, 0.06)` (Subtle)
- **Dark Mode:** `rgba(255, 255, 255, 0.10)` (Subtle)

**Dividers:**
- **Light Mode:** `rgba(0, 0, 0, 0.08)`
- **Dark Mode:** `rgba(255, 255, 255, 0.12)`

**Overlays:**
- **Scrim (over images):** `rgba(0, 0, 0, 0.40)` to `rgba(0, 0, 0, 0.60)`
- **Modal Backdrop:** `rgba(0, 0, 0, 0.50)`

### 5.3 Color Usage Guidelines

#### DO:
- Use neutral colors as the foundation (80% of UI)
- Reserve accent colors for interactive elements and status indicators
- Ensure sufficient contrast (WCAG AA minimum: 4.5:1 for text)
- Use consistent color meanings (blue = interactive, red = error, etc.)
- Leverage opacity for creating hierarchy within single colors

#### DON'T:
- Use too many colors simultaneously (max 2-3 colors per screen beyond neutrals)
- Use color as the only indicator of state (combine with icons, text, or patterns)
- Place low-contrast text over artwork images without scrim/overlay
- Use bright, saturated colors that compete with artwork

### 5.4 Gradient Examples

**Background Gradient (Subtle texture):**
```css
linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 100%)
```

**Image Overlay (Bottom fade for text readability):**
```css
linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)
```

**Button Gradient (Premium feel on primary button):**
```css
linear-gradient(135deg, #1C1C1E 0%, #0A0A0A 100%)
```

**Dark Mode Background Gradient:**
```css
linear-gradient(180deg, #000000 0%, #1C1C1E 100%)
```

---

## 6. Iconography

### 6.1 Icon Style

**Primary Style: Outlined (Line Icons)**
- **Stroke width:** 2px at base size (24x24pt)
- **Style:** Minimal, geometric, rounded corners (2-3px corner radius)
- **Consistency:** Match SF Symbols (iOS) / Material Icons (Android) aesthetic
- **Scalability:** Design at 24x24pt base, ensure clarity at 16pt and 32pt

**Secondary Style: Filled (Solid Icons)**
- Use sparingly for:
  - Selected/active states in navigation
  - Key artwork-related actions (capture, heart/save)
  - Status indicators
- Same outer shape as outlined version for consistency

### 6.2 Core Icon Set

**Navigation Icons (Outlined, 2px stroke):**
- Home / Art Feed: House icon
- Search: Magnifying glass
- Camera: Camera outline
- My Page: Person icon
- Notifications: Bell

**Action Icons:**
- Capture (Camera): Filled circle with camera inside (primary action)
- Like/Save: Heart (outline → filled on tap)
- Share: Share arrow (iOS style forward arrow)
- More/Options: Three horizontal dots
- Edit: Pencil icon
- Delete: Trash bin
- Add: Plus sign in circle
- Close: X mark
- Back: Chevron left
- Forward: Chevron right
- Filter: Funnel icon
- Sort: Two-arrow vertical swap

**Artwork/Content Icons:**
- Gallery: Building/museum icon
- Exhibition: Picture frame icon
- Artist: Palette icon
- Collection: Folder icon
- Year: Calendar icon
- Medium: Paint brush icon
- Location: Pin/map marker

**Social Icons:**
- Follow: Person with plus
- Following: Person with checkmark
- Followers: Two people icon
- Comment: Speech bubble
- User Tag: "@" symbol

**System Icons:**
- Settings: Gear icon
- Info: "i" in circle
- Help: Question mark in circle
- Warning: Exclamation in triangle
- Error: X in circle
- Success: Checkmark in circle

### 6.3 Icon Sizing & Usage

| Context | Size | Stroke | Usage |
|---------|------|--------|-------|
| **Navigation Bar** | 24x24pt | 2px | Tab bar items |
| **Action Buttons** | 24x24pt | 2px | In-content actions |
| **Small Controls** | 20x20pt | 1.75px | Inline actions, tags |
| **List Items** | 20x20pt | 1.75px | Leading icons in lists |
| **Large Touch Targets** | 28x28pt | 2px | Primary actions (Capture) |
| **Badges/Pills** | 16x16pt | 1.5px | Small indicators |

### 6.4 Icon Colors

**Light Mode:**
- **Default State:** `rgba(0, 0, 0, 0.60)` (Text Secondary)
- **Active/Selected:** `#007AFF` (Blue 500) or `#1C1C1E` (Primary 500)
- **Disabled:** `rgba(0, 0, 0, 0.26)` (Text Disabled)
- **On Dark Background:** `rgba(255, 255, 255, 0.90)`

**Dark Mode:**
- **Default State:** `rgba(255, 255, 255, 0.60)` (Text Secondary)
- **Active/Selected:** `#007AFF` (Blue 500)
- **Disabled:** `rgba(255, 255, 255, 0.26)` (Text Disabled)

### 6.5 Icon Guidelines

**DO:**
- Use outlined icons as default to keep interface light
- Fill icons for selected/active states for clear feedback
- Maintain consistent stroke width across all outlined icons
- Pair icons with labels for primary actions (especially in navigation)
- Ensure minimum touch target of 44x44pt for interactive icons

**DON'T:**
- Mix different icon styles within the same context
- Use icons without clear meaning (avoid obscure metaphors)
- Scale icons unevenly (maintain aspect ratio)
- Use decorative icons excessively
- Place icons too close together (minimum 8pt spacing)

### 6.6 Emoji Usage

**Strategic Accent (Inspired by HYPE by Hypebeast):**
- Use subtle emoji as visual accents to indicate hype, popularity, or special status
- Examples:
  - 🔥 (fire) next to trending artists/artworks
  - ⭐ (star) for featured collections
  - 🎨 (palette) for artist-specific content
  - 📍 (pin) for location-based check-ins
- **Guidelines:**
  - Use sparingly (1-2 per screen maximum)
  - Size: 14-16pt (slightly smaller than body text)
  - Position: Inline with text or as leading indicator
  - Never replace functional icons with emoji
  - Ensure emoji choices are culturally appropriate and universally understood

---

## 7. Components Library

### 7.1 Buttons

#### Primary Button
**Usage:** Main actions (Follow, Capture, Save, Publish)

**Style:**
- Background: `#1C1C1E` (Primary 500) or gradient
- Text: `#FFFFFF`, Label Large (15pt, Medium), All Caps for emphasis
- Padding: 16pt vertical, 24pt horizontal (minimum)
- Border radius: 12pt (full rounding) or 8pt (rounded rectangle)
- Height: 48pt minimum for accessibility
- Shadow: Elevation-1

**States:**
- **Default:** Background #1C1C1E, no border
- **Hover/Press:** Background #2C2C2E (Primary 400), scale 0.98
- **Disabled:** Background `rgba(28, 28, 30, 0.30)`, text at 40% opacity

**Variations:**
- **Full Width:** Stretch to container width, common for modal CTAs
- **Compact:** Reduced padding (12pt vertical, 20pt horizontal), 40pt height

#### Secondary Button
**Usage:** Secondary actions (Cancel, Edit, See More)

**Style:**
- Background: Transparent or `#F2F2F2` (Background Tertiary in light mode)
- Text: `#1C1C1E` (Primary 500), Label Large (15pt, Medium), Sentence case
- Border: 1pt solid `rgba(0, 0, 0, 0.12)`
- Padding: 16pt vertical, 24pt horizontal
- Border radius: 12pt
- Height: 48pt minimum

**States:**
- **Default:** Border visible, background subtle
- **Hover/Press:** Background darkens to `#E8E8E8`, scale 0.98
- **Disabled:** Border and text at 30% opacity

#### Tertiary Button (Text Button)
**Usage:** Low-priority actions (Skip, Learn More)

**Style:**
- Background: Transparent (no fill, no border)
- Text: `#007AFF` (Blue 500), Label Large (15pt, Medium), Sentence case
- Padding: 12pt vertical, 16pt horizontal
- Border radius: 8pt (for tap area)

**States:**
- **Default:** Text color blue
- **Hover/Press:** Background `rgba(0, 122, 255, 0.10)`, text color darkens
- **Disabled:** Text at 40% opacity

#### Icon Button
**Usage:** Compact actions (More options, Close, Back)

**Style:**
- Background: Transparent or circular fill `rgba(0, 0, 0, 0.05)` in light mode
- Icon: 24x24pt, color `rgba(0, 0, 0, 0.60)`
- Size: 44x44pt touch target (minimum)
- Border radius: 50% (circular) or 8pt (rounded square)

**States:**
- **Default:** Icon at default color
- **Hover/Press:** Background becomes visible `rgba(0, 0, 0, 0.10)`, icon darkens
- **Active:** Icon color changes to blue or primary

#### Floating Action Button (FAB)
**Usage:** Primary capture action in camera view

**Style:**
- Background: `#FFFFFF` (Light mode) or `#2C2C2E` (Dark mode)
- Icon: Filled camera, 28x28pt, color `#1C1C1E` or `#FFFFFF`
- Size: 64x64pt diameter (circular)
- Border radius: 50% (fully circular)
- Shadow: Elevation-3 for prominence
- Position: Bottom center or bottom right, 24pt from edges

**States:**
- **Default:** Full opacity, prominent shadow
- **Press:** Scale 0.95, shadow increases (elevation-4)
- **Processing:** Subtle spin animation, reduced opacity

### 7.2 Input Fields

#### Text Input
**Usage:** Search, username entry, manual artwork input

**Style:**
- Background: `#F2F2F2` (Light mode) or `#2C2C2E` (Dark mode)
- Text: Body Large (17pt, Regular), color Text Primary
- Padding: 12pt vertical, 16pt horizontal
- Border radius: 10pt
- Height: 44pt minimum
- Border: None in default state, 2pt solid `#007AFF` when focused

**States:**
- **Default:** Neutral background, placeholder at Text Tertiary color
- **Focused:** Blue border appears, background slightly lighter
- **Error:** Border becomes `#FF3B30` (Red 500), error message below in red
- **Disabled:** Background at 50% opacity, text at Text Disabled color

**Label & Helper Text:**
- Label: Body Medium (15pt, Medium), color Text Primary, 8pt above input
- Helper/Error text: Caption (12pt, Regular), 8pt below input
- Error text color: Red 500

#### Search Input
**Usage:** Search bar in Search tab

**Style:**
- Background: `#F2F2F2` with search icon (20x20pt) leading
- Text: Body Large (17pt, Regular)
- Padding: 10pt vertical, 16pt horizontal (with 36pt padding-left for icon)
- Border radius: 12pt (fully rounded)
- Height: 40pt
- Placeholder: "Search artists, artworks, users..." at Text Tertiary color

**Features:**
- Leading search icon (magnifying glass)
- Trailing clear button (X icon) appears when text entered
- Auto-complete dropdown appears below on typing

### 7.3 Cards

#### Artwork Card
**Usage:** Display artwork in feeds, collections, search results

**Style:**
- Background: `#FFFFFF` (Light mode) or `#1C1C1E` (Dark mode)
- Padding: 0pt (image edge-to-edge), 12pt padding for text content below image
- Border radius: 16pt
- Shadow: Elevation-1
- Aspect ratio: Maintain original artwork ratio or standardize to 4:5 or 1:1 per context

**Structure:**
1. **Image Area:**
   - Full-width image, border-radius on top corners
   - Gradient overlay if text placed on image
   - Capture count badge (top-right): pill shape, 11pt Medium text, background blur
   
2. **Content Area (below image):**
   - **Artwork Title:** Heading 1 (20pt, Semibold), max 2 lines with ellipsis
   - **Artist Name:** Body Medium (15pt, Regular), color Text Secondary, tappable
   - **Metadata:** Body Small (13pt, Regular), color Text Tertiary (Year, Medium)
   - **Engagement:** Label Small (11pt, Medium), capture count or other metrics

**Interaction:**
- Entire card tappable to artwork detail
- Artist name separately tappable to artist profile
- Subtle press animation: scale 0.98, shadow increases

#### Collection Card
**Usage:** Display collection in Art Feed, My Page

**Style:**
- Background: `#FFFFFF` (Light mode) or `#1C1C1E` (Dark mode)
- Padding: 16pt
- Border radius: 16pt
- Shadow: Elevation-1

**Structure:**
1. **Header:**
   - User avatar (40x40pt, circular, left)
   - Username (Body Medium, Semibold) + timestamp (Caption, Text Tertiary)
   - More button (icon button, right)

2. **Collection Title & Location:**
   - Collection name (Heading 1, 20pt Semibold)
   - Location + date (Body Small, Text Tertiary) with location pin icon
   - Gallery tag if applicable (pill/badge)

3. **Artwork Carousel:**
   - Horizontal scrollable list of artwork thumbnails
   - Thumbnail size: 200x240pt (or adapt to collection)
   - Spacing: 12pt between thumbnails
   - Page indicator: dots at bottom (optional)

4. **Footer:**
   - Engagement info: "27 friends were there" with avatar stack
   - Capture count, comment count (if applicable)

**Interaction:**
- Entire card tappable to collection detail
- Individual artworks in carousel separately tappable
- Horizontal swipe to view more artworks in carousel

#### User Card
**Usage:** Display user in search results, follower lists

**Style:**
- Background: `#FFFFFF` (Light mode) or `#1C1C1E` (Dark mode)
- Padding: 12pt
- Border radius: 12pt
- Shadow: None or subtle elevation-1

**Structure:**
1. **Avatar:** 48x48pt circular, left-aligned
2. **User Info (middle):**
   - Username (Body Medium, Semibold)
   - Bio snippet (Caption, Text Tertiary, max 1 line)
3. **Action (right):**
   - Follow button (compact secondary button) or "Following" state

**Interaction:**
- Entire card tappable to user profile
- Follow button separately tappable

### 7.4 Modals & Sheets

#### Bottom Sheet
**Usage:** Recognition results, filters, options menus

**Style:**
- Background: `#FFFFFF` (Light mode) or `#1C1C1E` (Dark mode)
- Border radius: 16pt on top corners
- Shadow: Elevation-3
- Handle: 36x5pt rounded rectangle, centered, 12pt from top edge, color `rgba(0,0,0,0.20)`

**Structure:**
1. **Header:**
   - Title (Heading 2, 18pt Semibold), centered or left-aligned
   - Close button (icon button, top-right)
   - Divider below (optional, 1px)

2. **Content Area:**
   - Scrollable content with 16pt padding
   - May include lists, forms, images, text

3. **Footer (optional):**
   - Primary action button (full-width or split)
   - Sticky to bottom with padding

**Behavior:**
- Swipe down to dismiss
- Tap backdrop to dismiss (if not modal/required)
- Animates up from bottom with spring animation

#### Modal / Dialog
**Usage:** Confirmations, alerts, important actions

**Style:**
- Background: `#FFFFFF` (Light mode) or `#1C1C1E` (Dark mode)
- Border radius: 16pt
- Shadow: Elevation-4
- Max width: 90% of screen width, centered
- Backdrop: `rgba(0,0,0,0.50)` scrim

**Structure:**
1. **Header:**
   - Title (Heading 2, 18pt Semibold), centered
   - Close button (top-right, optional)

2. **Body:**
   - Message text (Body Large, 17pt Regular), centered or left-aligned
   - 24pt padding all sides

3. **Actions:**
   - Buttons: Primary + Secondary (horizontal layout)
   - Or single primary button (full-width)
   - 16pt padding, 12pt gap between buttons

**Behavior:**
- Fades in with backdrop
- Requires action to dismiss (no backdrop tap dismiss for critical modals)
- Buttons should clearly indicate action (e.g., "Delete", "Cancel")

### 7.5 Lists & Tables

#### Simple List Item
**Usage:** Settings, menus, options

**Style:**
- Background: Transparent or `#FFFFFF` in grouped lists
- Height: 56pt minimum
- Padding: 16pt horizontal, 12pt vertical
- Border: Bottom divider 1px `rgba(0,0,0,0.06)` between items

**Structure:**
- Leading icon (optional, 24x24pt, 16pt margin-right)
- Primary text (Body Large, 17pt Regular), left-aligned
- Secondary text (Caption, 12pt), below primary (if needed)
- Trailing element (chevron, toggle, badge), right-aligned

**Interaction:**
- Tap entire row to navigate or toggle
- Subtle background change on press: `rgba(0,0,0,0.05)`

#### Artwork List Item (Linear List)
**Usage:** My Captures tab, search results

**Style:**
- Background: Transparent
- Height: 80-100pt
- Padding: 12pt horizontal
- Border: Bottom divider

**Structure:**
- Thumbnail image (80x80pt square, 12pt border radius), left
- Content (middle, fills space):
  - Artwork title (Body Medium, 15pt Semibold), max 1 line
  - Artist name (Body Small, 13pt Regular), Text Secondary
  - Metadata (Caption, 12pt), Text Tertiary (Year, Medium)
- Trailing element (chevron or capture count badge), right

**Interaction:**
- Tap to navigate to artwork detail
- Thumbnail and text both tappable as one unit

### 7.6 Navigation Components

#### Tab Bar (Bottom Navigation)
**Usage:** Main navigation (Home, Search, Camera, My Page, Notifications)

**Style:**
- Background: `#FFFFFF` with blur (Light mode) or `#1C1C1E` with blur (Dark mode)
- Height: 56pt + safe area inset
- Shadow: Top border 1px or subtle shadow (elevation-1)
- Blur effect: Backdrop blur(20px) with 95% opacity

**Structure:**
- 4-5 tab items, evenly distributed
- Each item:
  - Icon (24x24pt, outlined default, filled when active)
  - Label (Label Medium, 13pt Medium), optional (can be icon-only for space)
  - Active indicator: Icon becomes filled, text color changes to primary/blue

**States:**
- **Inactive:** Icon outlined, color Text Secondary
- **Active:** Icon filled, color Primary 500 or Blue 500, label bold

**Behavior:**
- Tap to switch tabs with smooth transition
- Active tab does not change on re-tap (no scroll-to-top behavior unless desired)

#### Top Navigation Bar
**Usage:** Page headers, back navigation

**Style:**
- Background: `#FFFFFF` with blur (Light mode) or `#1C1C1E` with blur (Dark mode)
- Height: 44pt + status bar height
- Blur effect: Backdrop blur(20px) with 95% opacity
- Shadow: Bottom border 1px or subtle shadow when scrolled

**Structure:**
- **Leading:** Back button (chevron left icon button) or Close button
- **Title:** Page title (Heading 2, 18pt Semibold), centered or left-aligned
- **Trailing:** Action buttons (icon buttons, 1-2 max)

**Behavior:**
- Title fades in on scroll (large title collapses to standard nav bar)
- Blur increases slightly on scroll for depth
- Leading button navigates back or dismisses modal

### 7.7 Badges & Pills

#### Badge (Notification Badge)
**Usage:** Notification count, unread indicators

**Style:**
- Background: `#FF3B30` (Red 500)
- Text: `#FFFFFF`, Label Small (11pt, Medium)
- Size: 20x20pt minimum (circular for count, pill for larger numbers)
- Border radius: 50% (circular) or 10pt (pill)
- Border: 2pt solid background color (to separate from icon)

**Position:**
- Top-right of icon (notification bell, tab icon)
- Offset by 4pt from icon edge

#### Pill / Tag
**Usage:** Gallery tags, location tags, status indicators

**Style:**
- Background: `#F2F2F2` (Light mode) or `#2C2C2E` (Dark mode)
- Text: `#1C1C1E` or Text Primary, Label Small (11pt, Medium)
- Padding: 6pt vertical, 12pt horizontal
- Border radius: 12pt (fully rounded)
- Height: 28pt

**Variations:**
- **Filled:** Colored background (e.g., Purple 500 for featured)
- **Outlined:** Transparent background with 1pt border

**Interaction:**
- May be tappable to filter or navigate (e.g., gallery tag opens gallery page)
- Subtle press state: background darkens

### 7.8 Empty States

**Usage:** When no content exists (empty captures, no search results, no followers)

**Style:**
- Center-aligned content
- Icon or illustration (64-96pt size), color Text Tertiary
- Heading (Heading 2, 18pt Semibold), color Text Secondary
- Body text (Body Large, 17pt Regular), color Text Tertiary, max 2 lines
- Optional CTA button (primary or secondary button)

**Example Messages:**
- "No captures yet" → "Start capturing artworks at exhibitions"
- "No results found" → "Try searching for a different artist or artwork"
- "No followers yet" → "Share your collections to attract followers"

**Tone:**
- Friendly and encouraging, not negative
- Provide clear next step or suggestion

---

## 8. Layout & Grid System

### 8.1 Grid Structure

**Column Grid:**
- **Mobile (< 768pt width):** 4 columns
- **Tablet (≥ 768pt width):** 8 columns
- **Large Tablet / iPad Pro (≥ 1024pt width):** 12 columns
- **Gutter:** 16pt between columns
- **Margin:** 16pt on left and right edges (mobile), 24pt (tablet), 32pt (large)

**Baseline Grid:**
- 8pt baseline grid for vertical rhythm
- All spacing increments in multiples of 8pt (8, 16, 24, 32, 40, 48, 56, 64, etc.)

### 8.2 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `spacing-xs` | 4pt | Very tight spacing, icon margins |
| `spacing-sm` | 8pt | Tight spacing, inner component gaps |
| `spacing-md` | 16pt | Standard spacing, padding, gaps |
| `spacing-lg` | 24pt | Large spacing, section separation |
| `spacing-xl` | 32pt | Extra large spacing, major sections |
| `spacing-2xl` | 40pt | Very large spacing |
| `spacing-3xl` | 48pt | Page-level spacing |

**Application:**
- **Component Internal Padding:** spacing-md (16pt) default
- **Gaps between elements:** spacing-sm (8pt) to spacing-md (16pt)
- **Section separation:** spacing-lg (24pt) to spacing-xl (32pt)
- **Screen margins:** spacing-md (16pt) mobile, spacing-lg (24pt) tablet

### 8.3 Layout Patterns

#### Single Column (Mobile Portrait)
- Most common pattern for mobile
- Full-width content with left/right margins (16pt)
- Cards stack vertically with spacing-md (16pt) gaps

#### Two Column (Tablet / Large Screen)
- Artworks, collections displayed in 2-column grid
- Gutter: 16pt between columns
- Use for gallery grids, artwork lists

#### Masonry / Pinterest-Style Grid
- Variable height items (artwork cards)
- 2 columns mobile, 3-4 columns tablet
- Maintains aspect ratios, items flow naturally
- Use in: Search results, collection galleries

#### Horizontal Scroll (Carousel)
- Single row of horizontally scrollable items
- Item width: 200-240pt (artwork thumbnails)
- Spacing: 12pt between items
- Padding: 16pt on left edge, content extends beyond right edge to suggest scroll
- Use in: Collection artwork carousels, recommended artists

#### Full-Bleed Image
- Edge-to-edge image (0pt margins)
- Overlay elements (back button, title) with blur/scrim backgrounds
- Use in: Artwork detail hero image, camera view

### 8.4 Safe Areas & Insets

**iOS Safe Area:**
- Account for notch, home indicator, status bar
- Use `safe-area-inset-top`, `safe-area-inset-bottom` in CSS
- Tab bar includes `safe-area-inset-bottom` automatically
- Top nav bar includes status bar height + 44pt

**Android System Bars:**
- Account for status bar (24pt typical) and navigation bar (48pt typical)
- Use system window insets API
- Ensure interactive elements not obscured by system UI

**Responsive Breakpoints:**
- **Small (< 375pt width):** iPhone SE, compact phones
- **Medium (375-768pt width):** Standard phones (iPhone 12-15, most Android)
- **Large (768-1024pt width):** Tablets (iPad, Android tablets)
- **Extra Large (≥ 1024pt width):** iPad Pro, foldables in tablet mode

---

## 9. Navigation Patterns

### 9.1 Primary Navigation (Tab Bar)

**Structure:**
- 5 tabs: Art Feed (Home), Search, Camera, My Page, Notification
- Fixed at bottom of screen
- Always visible except during camera capture or full-screen content
- Active tab indicated by filled icon + color change

**Transitions:**
- Cross-fade between tabs (300ms ease-in-out)
- Maintain scroll position per tab (do not reset on re-visit)
- Smooth, no jarring jumps

### 9.2 Secondary Navigation

#### Back Navigation
- Chevron-left icon button in top-left of nav bar
- Tap to return to previous screen
- Gesture: Swipe from left edge to go back (iOS standard)
- Animate previous screen sliding in from left

#### Drill-Down Navigation
- Tap card/item to navigate to detail screen
- Detail screen slides in from right
- Nav bar title transitions (fade out old, fade in new)
- Back button appears automatically in nav bar

#### Modal Navigation
- Bottom sheet or full-screen modal for temporary contexts
- Dismiss via swipe-down, close button, or backdrop tap (if appropriate)
- Animate up from bottom (bottom sheet) or fade in (modal dialog)

### 9.3 Camera Navigation

**Entry:**
- Tap Camera tab in tab bar
- Full-screen camera view
- Hide tab bar during active capture
- Show top overlay with location/check-in info (dismissible drawer)

**Exit:**
- Tap back button (top-left) or device back gesture
- After capture, auto-navigate to recognition result screen (bottom sheet over camera)
- From result screen, can close to return to camera or navigate to captured artwork detail

### 9.4 Navigation Hierarchy

**Level 1:** Tab bar screens (Art Feed, Search, Camera, My Page, Notifications)  
**Level 2:** Content detail screens (Artwork Detail, Collection Detail, User Profile, Artist Profile, Gallery Profile)  
**Level 3:** Nested detail or editing screens (Edit Collection, Settings, Account Settings)  
**Level 4:** Modals, overlays (Confirmations, Recognition Results, Filters)

**Navigation Flow Example:**
1. **Art Feed (Level 1)** → Tap collection card
2. **Collection Detail (Level 2)** → Tap artwork in collection
3. **Artwork Detail (Level 2)** → Tap artist name
4. **Artist Profile (Level 2)** → Tap artwork in artist's list
5. **Different Artwork Detail (Level 2)** → Navigate back via back button or gesture

**Guideline:** Maximum 3-4 levels deep before requiring exit/reset to avoid user confusion. Use modals/sheets for temporary contexts (don't add to navigation stack if not needed).

---

## 10. Motion & Animation

### 10.1 Animation Philosophy

**Goal:** Smooth, engaging interactions inspired by Nike SNKRS and HYPE by Hypebeast. Animations should feel purposeful, not gratuitous.

**Principles:**
1. **Fluid & Natural:** Ease-in-out curves, spring physics for organic feel
2. **Contextual:** Animations indicate relationships (where content comes from/goes to)
3. **Fast but Noticeable:** 200-400ms for most transitions (quick but perceivable)
4. **Subtle:** Avoid distracting user from content (artwork is hero)

### 10.2 Timing & Easing

**Duration Standards:**
| Animation Type | Duration | Easing |
|----------------|----------|--------|
| **Micro-interactions** (button press, toggle) | 150-200ms | Ease-out |
| **Transitions** (screen navigation, card expand) | 300-400ms | Ease-in-out or spring |
| **Reveal/Hide** (bottom sheet, modal) | 300ms | Ease-out (reveal), ease-in (hide) |
| **Loading states** (spinner, skeleton) | 1000ms loop | Linear |

**Easing Curves:**
- **Ease-out:** `cubic-bezier(0.0, 0.0, 0.2, 1)` - Fast start, slow end (entering elements)
- **Ease-in:** `cubic-bezier(0.4, 0.0, 1, 1)` - Slow start, fast end (exiting elements)
- **Ease-in-out:** `cubic-bezier(0.4, 0.0, 0.2, 1)` - Smooth acceleration and deceleration (most transitions)
- **Spring:** Physics-based spring (e.g., React Native Animated.spring) for organic feel (buttons, gestures)

### 10.3 Common Animations

#### Button Press
- **Effect:** Scale down to 0.96-0.98, subtle shadow increase
- **Duration:** 150ms ease-out (press), 200ms ease-out (release)
- **Trigger:** On touch down/up

#### Card Tap
- **Effect:** Scale down to 0.98, shadow elevation increases by 1 level
- **Duration:** 200ms ease-out
- **Trigger:** On tap, before navigation

#### Screen Transition (Navigation)
- **Effect:** New screen slides in from right (or bottom for modals), previous screen slides left
- **Duration:** 350ms ease-in-out
- **Overlay:** Slight fade on exiting screen (opacity 1 → 0.5) for depth
- **Trigger:** On navigation push/pop

#### Bottom Sheet Reveal
- **Effect:** Sheet slides up from bottom, backdrop fades in
- **Duration:** 300ms ease-out
- **Gesture:** Swipe down to dismiss (follow finger, then animate close if threshold met)
- **Trigger:** On action that opens sheet

#### Tab Switch
- **Effect:** Cross-fade between tab content (old fades out, new fades in)
- **Duration:** 300ms ease-in-out
- **Icon:** Morph from outlined to filled (if possible) or simple fade
- **Trigger:** On tab tap

#### Image Load (Fade-In)
- **Effect:** Image fades in from placeholder (blur-up or solid color)
- **Duration:** 400ms ease-in-out
- **Trigger:** When image asset loaded

#### Skeleton Loading
- **Effect:** Shimmer animation left to right across placeholder shapes
- **Duration:** 1200ms loop, linear
- **Appearance:** Light gradient (90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)
- **Trigger:** While content loading

#### Pull to Refresh
- **Effect:** Spinner or custom icon appears at top, rotates or animates
- **Duration:** Spinner: 800ms loop, elastic bounce on release
- **Gesture:** User pulls content down beyond top threshold
- **Trigger:** On pull gesture and release

#### Like/Save (Heart Animation)
- **Effect:** Heart icon transitions from outlined to filled, brief scale up (1.0 → 1.3 → 1.0), slight rotation or bounce
- **Duration:** 400ms ease-out for scale, 200ms for icon change
- **Trigger:** On tap to like/save

### 10.4 Scroll Behavior

#### Parallax Scrolling
- **Usage:** Image in artwork detail header scrolls slower than content (0.5x speed)
- **Effect:** Creates depth, keeps focus on artwork image longer

#### Sticky Headers
- **Usage:** Nav bar becomes sticky on scroll, collapses large title to standard title
- **Effect:** Fade large title out, fade standard title in, increase blur on nav bar background
- **Trigger:** On scroll past threshold (e.g., 44pt from top)

#### Fade-Out Elements
- **Usage:** Elements like large hero text fade out as user scrolls down
- **Effect:** Opacity decreases based on scroll position (linear or ease-out)

### 10.5 Animation Don'ts

**Avoid:**
- Excessive bounce or elastic effects (feels unprofessional)
- Long animations (>500ms) for frequent interactions
- Animations without purpose (decoration only)
- Conflicting animations simultaneously (user doesn't know where to look)
- Animations that block interaction (always allow interruption if appropriate)

---

## 11. Module-Specific Guidelines

### 11.1 Module 1: Artwork Camera

#### Camera View Layout

**Full-Screen Camera Feed:**
- Edge-to-edge camera preview (0pt margins)
- Top overlay (drawer, swipe down to hide/show):
  - **Location & Check-In Info:** Display location (GPS-based), timestamp, check-in prompt ("Are you at Frieze London 2025? Yes")
  - Background: Blur(20px) + rgba(0,0,0,0.4) scrim
  - Text: Body Medium (15pt), white, centered or left-aligned
  - Padding: 16pt all sides
  - Border radius: 0pt on top (full-width), 16pt on bottom corners
- Center guide: Subtle frame or bounding box (dashed line, low opacity) indicating artwork placement zone
  - Guidance text: "Place the artwork in the center of the camera to 'Capture'" (Body Small, white, centered, background scrim)
- Bottom controls:
  - **Capture Button (FAB):** Center, 64x64pt, white circular background, filled camera icon
  - **Upload Button (Left):** Icon button (40x40pt), gallery icon, opens photo picker
  - **Flash/Settings (Right, optional):** Icon button (40x40pt), flash icon
  - Position: 24pt from bottom (accounting for safe area)

**Camera Controls Behavior:**
- Capture button press: Scale down (0.95), trigger capture animation (brief screen flash white 100ms), haptic feedback, immediately open recognition result sheet
- Upload button: Opens native photo picker with guidance: "Upload photos taken with artwork centered"

#### Recognition Result (Bottom Sheet)

**Success State (Artwork Matched):**
- **Header:**
  - Title: "Artwork Recognized" (Heading 2, 18pt Semibold)
  - Close button (top-right)
- **Content:**
  - **Captured Image:** Display cropped/corrected artwork image (full-width, 16:10 aspect ratio)
  - **Artwork Details:**
    - Title (Heading 1, 20pt Semibold)
    - Artist Name (Body Medium, 15pt Regular, Text Secondary, tappable)
    - Year, Medium (Body Small, 13pt, Text Tertiary)
    - Capture Date & Location (Caption, 12pt, Text Tertiary)
- **Action Buttons:**
  - "Add to Collection" (Primary button, full-width) → Adds to Capture Collection, navigates to Art Feed or My Page
  - "View Details" (Tertiary button) → Opens Artwork Detail screen

**Failure State (Artwork Not Recognized):**
- **Header:** Title: "Processing Artwork" (Heading 2, 18pt Semibold)
- **Content:**
  - **Captured Image:** Display image with subtle overlay message "We are processing this artwork for you" (centered, Body Medium, white text with scrim background)
  - **Suggested Artworks (Optional):** Display inferred artworks based on location/exhibition (if available)
    - List 2-3 artwork cards horizontally scrollable
    - Tap to manually select correct artwork
  - **Manual Input Option:**
    - "Can't find it? Enter artwork info manually" (Tertiary button or link)
    - Opens form: Artist name (text input), Artwork title (text input), Year (text input)
  - **Request Info Collection:**
    - "Request platform to add this artwork" (Secondary button) → Submits image and context for admin review

**Animation:**
- Sheet slides up from bottom (300ms ease-out) immediately after capture
- Artwork image fades in as recognition completes (400ms)

#### Location-Based Check-In

**Check-In Criteria:**
- 500m radius from known exhibition/gallery location (GPS + database match)
- Time-based: Only suggest check-in during exhibition operating hours (from database)

**Check-In UI:**
- Appears as a drawer from top of camera view on camera open (if within radius)
- Format: "Are you at [Exhibition Name]? [Yes] [No]"
- Buttons: Small secondary buttons (compact), "Yes" confirms, "No" dismisses
- **Behavior:**
  - Once per session (resets on app restart/termination)
  - If confirmed, check-in status maintained throughout camera session
  - Check-in info shown in top overlay (persistent until session ends)
  - Captured artworks automatically tagged with exhibition/gallery information

**Visual:**
- Background: Blur + scrim
- Text: White, Body Medium (15pt)
- Buttons: Compact secondary style (32pt height)

#### Camera UX Considerations

**Guidance:**
- Display guide overlay when artwork not centered: "Please center the artwork in the camera frame" (top center, Body Small, white with scrim)
- Guide disappears once artwork aligned (if detection possible)

**Performance:**
- Camera feed should be smooth (60fps minimum)
- Recognition processing happens in background (do not freeze UI)
- Show subtle loading indicator if recognition takes >2 seconds (e.g., spinner in bottom sheet header)

**Permissions:**
- Request camera permission on first camera tab access
- Request location permission on first check-in prompt
- Request photo library permission on first upload attempt
- Use clear, friendly permission prompts explaining benefit to user

---

### 11.2 Module 2: Art Feed (Home)

#### Feed Structure

**Content Hierarchy:**
1. **User's Recent Capture Collections** (Top Priority)
   - Display user's own captured collections first (if any exist in session)
   - Format: Collection cards (see Components section)
   - Show max 2-3 most recent, then blend with followed users' content
   
2. **Followed Users' Collections (Personal Collection)**
   - Display collections shared by users you follow
   - Chronological order (most recent first)
   - Format: Collection cards

3. **Platform Collection (Curated Content)**
   - Interspersed between personal collections (every 5-7 items)
   - Examples:
     - "This Week's Most Captured Artworks" → Carousel of top artworks
     - "Trending Artists" → Artist profile cards
     - "Featured Exhibitions" → Exhibition/gallery cards
   - Format: Distinct card style with "Platform Collection" badge/label

4. **Follower Recommendations**
   - Occasional section (every 10-15 items or at end of feed)
   - "You might also like" → 3-5 user cards horizontally scrollable
   - Based on: Most captured artists, similar collections, common exhibition visits

#### Feed Layout

**Vertical Scroll:**
- Single column (mobile), two column (tablet in landscape)
- Cards stack vertically with spacing-md (16pt) gaps
- Infinite scroll: Load more content as user scrolls (paginated API calls)
- Pull-to-refresh at top to load newest content

**Empty State (No Content):**
- Display when user follows no one and has no captures
- Message: "Welcome to Bside! Start capturing artworks or follow others to see their collections here."
- Illustration: Camera icon + artwork icon (64pt size, Text Tertiary color)
- CTA: "Explore" button → Navigate to Search tab or Camera tab

#### Collection Card Interactions

**Tap on Collection Header:**
- Navigate to Collection Detail screen (shows all artworks in collection, full info)

**Tap on Artwork Thumbnail (in carousel):**
- Navigate to Artwork Detail screen

**Tap on User Avatar/Name:**
- Navigate to User Profile screen

**Tap "More" Button (three dots):**
- Open action sheet (bottom sheet):
  - Share Collection (system share sheet)
  - Edit Collection (if own collection)
  - Report (if not own collection)
  - Delete (if own collection, with confirmation modal)

#### Capture Collection (User's Own)

**Auto-Generated Collections:**
- Based on location + timestamp + exhibition data
- **If at known exhibition/gallery:**
  - Collection name: Exhibition name (e.g., "Frieze London 2026")
  - Location: City, venue (e.g., "London, UK")
  - Metadata: Dates attended, number of artworks captured, friends who also attended
  - Gallery tag: If single gallery, add gallery tag (pill)
  
- **If at personal location (e.g., home):**
  - Collection name: "Personal Collection at [Location Name]" or user-editable custom name
  - Location: City or address (user can edit)
  - No gallery tag

**Editable Elements:**
- Collection name (if not tied to official exhibition)
- Artwork order (drag to reorder in edit mode)
- Artworks included (remove from collection)
- Publish/unpublish (make public to followers or keep private)

**Editing UI:**
- "Edit" button in collection card "More" menu
- Enter edit mode: Artworks show checkboxes, drag handles appear
- Bottom action bar: "Delete Selected", "Reorder", "Save"

#### Platform Collection Design

**Distinct Visual:**
- Border or background color slightly different (e.g., light blue tint, `rgba(0, 122, 255, 0.05)`)
- Header label: "Platform Collection" or icon (bside logo, small)
- Carousel style for artwork lists (horizontal scroll)

**Types:**
1. **"This Week's Most Captured":**
   - Title: "This Week's Most Captured" (Heading 2, 18pt Semibold)
   - Horizontal carousel of top 5-10 artworks with capture counts
   - Artwork card format: Image + Title + Artist + Capture count badge

2. **"Trending Artists":**
   - Title: "Trending Artists" (Heading 2)
   - Horizontal carousel of 5-7 artist profile cards
   - Artist card: Avatar + Name + Brief bio (1 line) + "Follow" button

3. **"Recommended Exhibitions":**
   - Title: "Exhibitions Near You" (if location available) or "Recommended Exhibitions"
   - Vertical list of 2-3 exhibition cards
   - Exhibition card: Hero image + Exhibition name + Gallery/venue + Dates

#### Feed Performance

**Optimization:**
- Lazy load images (load only when in viewport or near viewport)
- Image sizes: Use thumbnails (200x240pt) in carousels, larger (400x480pt) for single featured images
- Paginate: Load 10-15 items initially, fetch more on scroll
- Cache: Cache user follows, recent feed data locally for fast load on app open

---

### 11.3 Module 3: My Page (Social Media Profile)

#### Profile Header

**Layout:**
- Top section with background (optional gradient or solid color)
- Profile avatar (96x96pt, circular, centered)
- Username (Display Medium, 28pt Semibold, centered below avatar)
- Bio (Body Large, 17pt Regular, Text Secondary, centered, max 3 lines)
- Edit Profile button (if own profile) or Follow button (if other user's profile)
  - Edit Profile: Secondary button, compact
  - Follow: Primary button (if not following) or secondary "Following" (if following)
- Stats row (centered, below bio):
  - **Captures:** Count + label (Label Medium, 13pt)
  - **Followers:** Count + label (tappable → Follower List)
  - **Following:** Count + label (tappable → Following List)
  - Spacing: 24pt between stats, centered alignment

**Settings Icon:**
- Top-right corner (icon button, gear icon)
- Opens Settings screen

#### Tab Menu (Below Profile Header)

**Three Tabs:**
1. **Home:** User's curated/featured collections (highlights)
2. **Captures:** All captured artworks in linear list or grid format
3. **Collections:** Collections organized by exhibition, date, or custom grouping

**Tab Style:**
- Underline indicator for active tab (2pt thick, Primary color)
- Tab labels: Label Large (15pt, Medium)
- Inactive tabs: Text Secondary color
- Active tab: Text Primary color

**Content Area:**
- Scrollable content below tab bar
- Tab switching: Smooth cross-fade transition (300ms)

#### Tab 1: Home

**Purpose:** User's personalized art dashboard, highlights of their collection

**Layout:**
- Mix of featured collection cards and pinned artworks
- User can customize: Pin favorite collections or artworks to top
- If empty (no pins/featured collections):
  - Empty state: "Customize your highlights by pinning favorite collections or artworks"
  - CTA: "Pin from Captures" button

**Edit Mode:**
- "Edit" button in top-right of Home tab (when in own profile)
- Enter edit mode: Checkboxes on items, "Pin" / "Unpin" actions
- Save changes

#### Tab 2: Captures

**Purpose:** List all captured artworks chronologically or by sort criteria

**Layout Options:**
1. **List View (Default):**
   - Linear list of artwork list items (see Components)
   - Show: Thumbnail + Title + Artist + Date captured
   - Sort options: Chronological (newest first), Artist name, Artwork name, Capture count

2. **Grid View (Toggle):**
   - 2-column grid (mobile) or 3-column (tablet)
   - Show: Artwork thumbnail only, overlay title on hover/long-press
   - Masonry layout (maintain aspect ratios) or uniform grid (crop to square)

**Sorting & Filtering:**
- Top bar with sort dropdown and filter icon
- **Sort by:** Date (newest/oldest), Artist (A-Z), Artwork (A-Z), Capture Count (most/least)
- **Filter by:** Year captured, Exhibition/Location, Artist (multi-select)
- Apply filters in bottom sheet or modal

**Interaction:**
- Tap artwork → Navigate to Artwork Detail
- Long-press (or checkbox mode) → Batch actions: Delete, Add to collection

**Search within Captures:**
- Search bar at top (optional, can be in filter section)
- Search by artwork title, artist name

#### Tab 3: Collections

**Purpose:** Display collections grouped by exhibition, gallery, date, or custom criteria

**Layout:**
- Vertical list of collection cards (smaller version than feed)
- **Collection Card Format:**
  - Cover image: First artwork in collection or user-selected cover (aspect ratio 16:9 or 4:3)
  - Collection name (Heading 2, 18pt Semibold)
  - Artwork count (e.g., "23 Artworks")
  - Date range or exhibition info (Caption, 12pt, Text Tertiary)
  - Visibility indicator: "Private" or "Public" badge (pill)

**Grouping Options (Dropdown or Segmented Control):**
- **By Year:** "2026", "2025", etc. (default)
- **By Exhibition:** Grouped by exhibition/gallery
- **By Artist:** Grouped by artist name

**Empty State:**
- "No collections yet. Start capturing artworks at exhibitions to create collections automatically."
- CTA: "Go to Camera" button

**Interaction:**
- Tap collection → Navigate to Collection Detail screen
- Long-press → Actions: Edit, Delete, Share, Change visibility

#### Other User's Profile (Viewing Someone Else)

**Differences:**
- No "Edit Profile" button → "Follow" or "Following" button instead
- No "Settings" icon
- Cannot edit their collections (but can view if public)
- Private collections hidden if not following or if user's account is private

**Follow Status:**
- If not following: "Follow" button (primary)
- If following: "Following" button (secondary), tap to unfollow (with confirmation)
- If pending (private account): "Requested" button (disabled state)

**Private Account:**
- If account private and not following:
  - Show profile header (avatar, username, bio, stats)
  - Tabs locked with message: "This account is private. Follow to see their captures and collections."

#### Settings Screen (Accessed via Gear Icon)

**Layout:**
- Grouped list format (iOS Settings style)
- Sections:
  1. **Account Settings:** (Requires password confirmation to access)
     - Change Username
     - Change Password (email accounts only)
     - Account Visibility (Private/Public toggle)
     - Allow profile in search engine results (toggle)
     - Delete Account (destructive action, confirmation required)
  
  2. **Notification Settings:**
     - New Followers (toggle)
     - Accepted Follow Requests (toggle)
     - Artwork Comments (toggle, future)
     - Platform Announcements (toggle)
  
  3. **About:**
     - Privacy Policy (opens in webview or external browser)
     - Terms of Service (opens in webview or external browser)
     - Help & Support (opens FAQ or contact form)
     - App Version (display only)
  
  4. **Account Actions:**
     - Logout (confirmation dialog)

**Password Confirmation Modal (for Account Settings):**
- Before allowing access to sensitive account settings, show modal:
  - "Enter your password to continue" (Heading 2)
  - Password input field (secure entry)
  - "Confirm" button (primary) and "Cancel" button (secondary)

---

### 11.4 Module 4: Search

#### Search Input (Top of Screen)

**Style:**
- Search bar with magnifying glass icon (leading)
- Placeholder: "Search artists, artworks, users..." (Body Large, Text Tertiary)
- Border radius: 12pt (fully rounded)
- Background: `#F2F2F2` (Light mode) or `#2C2C2E` (Dark mode)
- Height: 40pt
- Margin: 16pt from screen edges
- Clear button (trailing X icon) appears when text entered

**Behavior:**
- Auto-focus on tab open (optional, may be intrusive)
- As user types, show auto-complete suggestions below search bar
- Debounce: Wait 300ms after user stops typing before triggering search API

#### Recent Search History

**Displayed When:**
- User taps into search bar but has not typed anything yet

**Layout:**
- Section header: "Recent" (Heading 3, 16pt Semibold, Text Primary)
- List of recent search terms (last 10-15 searches)
- Each item:
  - Icon: Clock icon (16x16pt, Text Tertiary), left
  - Search term (Body Large, 17pt Regular, Text Primary)
  - "X" button (icon button, right) to remove from history
- Tap term → Re-run search with that term

**Clear All:**
- Button at bottom: "Clear Search History" (Tertiary button, destructive text color)

#### Auto-Complete Suggestions

**Displayed When:**
- User is actively typing in search bar

**Layout:**
- Dropdown list below search bar (overlays content)
- Background: Surface color with shadow (elevation-2)
- Max 5-7 suggestions
- Each suggestion:
  - Icon indicating type (artist icon, artwork icon, user icon)
  - Suggested text with matching part bolded (e.g., searching "kim" → "**Kim** Chansong")
  - Category label (Caption, Text Tertiary, e.g., "Artist", "Artwork", "User")

**Behavior:**
- Tap suggestion → Run full search with that term and navigate to results

#### Search Results (After Search Submitted)

**Tab Filters (Top of Results):**
- Horizontal segmented control or tab bar:
  - **All** (default, mixed results)
  - **Artworks**
  - **Artists**
  - **Profiles** (Users)
- Active tab underlined or highlighted (Primary color)

**Result Layout (by Type):**

**Artworks:**
- Grid layout: 2 columns (mobile), 3-4 columns (tablet)
- Masonry or uniform grid (crop to square)
- Each artwork card:
  - Image (artwork thumbnail)
  - Overlay (on image or below): Title + Artist name (truncated)
  - Capture count badge (top-right corner of image)
- Tap → Navigate to Artwork Detail

**Artists:**
- List layout: Artist list items
- Each artist item:
  - Avatar (circular, 56x56pt), left
  - Artist name (Body Medium, 15pt Semibold)
  - Brief bio (Caption, 12pt, Text Tertiary, max 1 line)
  - "Follow" button (if not following) or "Following" (if following), right
- Tap artist (not button) → Navigate to Artist Profile

**Profiles (Users):**
- List layout: User list items (see Components > User Card)
- Each user item:
  - Avatar (circular, 48x48pt), left
  - Username (Body Medium, 15pt Semibold)
  - Bio snippet (Caption, 12pt, Text Tertiary, max 1 line)
  - "Follow" button or "Following" status, right
- Tap user (not button) → Navigate to User Profile

**Empty State (No Results):**
- Illustration: Magnifying glass icon (64pt, Text Tertiary)
- Message: "No results found for '[search term]'" (Heading 2, 18pt Semibold)
- Suggestion: "Try searching with different keywords" (Body Large, Text Tertiary)

**Loading State:**
- Skeleton loading cards (shimmer animation) while search API resolves

#### Search Performance

- **Debounce:** Wait 300ms after user stops typing
- **Min Characters:** Require 2-3 characters before triggering API call (reduce noise)
- **Caching:** Cache recent search results locally for 5-10 minutes (avoid redundant API calls)

---

### 11.5 Artwork Detail Screen

#### Hero Section

**Layout:**
- Full-width artwork image at top (edge-to-edge)
- Aspect ratio: Maintain original artwork aspect ratio, height up to 60% of screen
- Overlay elements (over image, with scrim):
  - Back button (top-left, icon button)
  - More button (top-right, icon button, three dots)
  - Capture count badge (bottom-right of image, pill shape, blur background)

**Parallax Effect:**
- Image scrolls slower than content below (0.5x speed)
- Creates depth, keeps image in view longer

#### Content Section (Below Image)

**Layout:**
- Background: Surface color (white or dark surface)
- Padding: 16pt horizontal
- Sections:

1. **Artwork Information:**
   - **Title:** Heading 1 (20pt, Semibold), Text Primary
   - **Artist Name:** Body Medium (15pt, Regular), Text Secondary, tappable → Artist Profile
   - **Year & Medium:** Body Small (13pt, Regular), Text Tertiary, format: "Oil on Canvas, 2023"
   - **Dimensions (if available):** Body Small, Text Tertiary, format: "100 × 80 cm"
   - Spacing: 8pt between title, artist, metadata

2. **Engagement Stats:**
   - Capture count: "1,424 captures" (Label Medium, 13pt, Text Secondary)
   - Icon: Small filled icon (capture icon or heart) + count
   - Spacing: 16pt below metadata

3. **Exhibition/Gallery Context (if applicable):**
   - Section header: "In Exhibition" (Heading 3, 16pt Semibold)
   - Exhibition card (compact):
     - Exhibition name (Body Medium, 15pt Semibold, tappable → Exhibition detail)
     - Gallery name (Body Small, 13pt, Text Secondary, tappable → Gallery profile)
     - Dates (Caption, 12pt, Text Tertiary)
   - Spacing: 24pt below engagement stats

4. **About Artist:**
   - Section header: "About Artist" (Heading 3, 16pt Semibold)
   - Artist avatar (40x40pt, circular)
   - Artist name (Body Medium, 15pt Semibold, tappable)
   - Brief bio (Body Large, 17pt Regular, Text Primary, max 3-4 lines, "Read more" link to expand)
   - "Follow" button (if not following artist)
   - Spacing: 24pt below previous section

5. **Related Artworks:**
   - Section header: "Related Artworks" (Heading 3, 16pt Semibold)
   - Horizontal carousel of 5-7 artwork thumbnails (same artist or similar style)
   - Thumbnail size: 160x200pt
   - Tap → Navigate to that artwork's detail screen
   - Spacing: 24pt below previous section

6. **Related Artists:**
   - Section header: "Related Artists" (Heading 3, 16pt Semibold)
   - Horizontal carousel of 3-5 artist cards (artists with exhibitions at same gallery, or similar style)
   - Artist card: Avatar + Name + "Follow" button
   - Tap → Navigate to Artist Profile
   - Spacing: 24pt below previous section

7. **Related Exhibitions:**
   - Section header: "Related Exhibitions" (Heading 3, 16pt Semibold)
   - List of 2-3 exhibition cards (artist's next exhibition, or gallery's current exhibitions)
   - Exhibition card: Hero image + Name + Gallery + Dates
   - Tap → Navigate to Exhibition detail (if available) or Gallery profile
   - Spacing: 24pt below previous section

**Bottom Padding:** 32pt (ensure content not cut off)

#### Action Buttons (Sticky Bottom Bar, Optional)

**Layout:**
- Sticky to bottom with blur background (backdrop blur 20px)
- Two actions:
  - **Add to Collection (Primary button, full-width or left-aligned)**
  - **Share (Icon button, right-aligned)**
- Height: 64pt + safe area inset
- Padding: 16pt horizontal

**Behavior:**
- Add to Collection: Opens bottom sheet with user's collections, select collection to add artwork
- Share: Opens system share sheet (share artwork link, image, or info)

---

### 11.6 Artist Profile Screen

#### Header Section

**Layout:**
- Artist avatar (96x96pt, circular, centered)
- Artist name (Display Medium, 28pt Semibold, centered)
- Based in & Birth year (Body Medium, 15pt Regular, Text Secondary, centered), format: "b. 1985, Based in Seoul, Korea"
- Social links (if available): Instagram, website icons (24x24pt, tappable), centered row
- "Follow" button (if not following) or "Following" button (if following), centered below name

**Stats Row:**
- Captures (how many times artist's artworks captured)
- Artworks (number of artworks in database)
- Exhibitions (number of exhibitions)
- Centered, spacing: 24pt between stats

#### Bio Section

**Layout:**
- Section header: "About" (Heading 3, 16pt Semibold)
- Bio text (Body Large, 17pt Regular, Text Primary)
- Max lines: 5, "Read more" link to expand full bio (if longer)
- Spacing: 24pt below stats

#### Artworks Section

**Layout:**
- Section header: "Artworks" (Heading 3, 16pt Semibold)
- Grid layout: 2-column (mobile), 3-column (tablet)
- Masonry or uniform grid
- Each artwork: Image + Title (overlay or below), capture count badge
- Tap → Navigate to Artwork Detail

**Sort/Filter:**
- Dropdown or icon button (top-right of section header)
- Sort by: Chronological (newest first), Most captured, Alphabetical
- Filter by: Year, Medium, Exhibition

**Load More:**
- Paginate: Load 12-20 artworks initially, load more on scroll

#### Exhibitions Section

**Layout:**
- Section header: "Exhibitions" (Heading 3, 16pt Semibold)
- List of exhibition cards (compact)
- Each card: Exhibition name + Gallery + Dates (Past/Upcoming indicator)
- Tap → Navigate to Exhibition detail (if available) or Gallery profile

**Tabs (Optional):**
- Upcoming | Past (segmented control)
- Show only relevant exhibitions in each tab

#### Related Artists Section (Optional)

**Layout:**
- Section header: "Related Artists" (Heading 3, 16pt Semibold)
- Horizontal carousel of 3-5 artist cards
- Tap → Navigate to other Artist Profile

---

### 11.7 Gallery Profile Screen

#### Header Section

**Layout:**
- Gallery logo (if available, 80x80pt square or rectangular, centered)
- Gallery name (Display Medium, 28pt Semibold, centered)
- Location (Body Medium, 15pt Regular, Text Secondary), format: "Seoul, Korea"
- Address (Body Small, 13pt Regular, Text Tertiary), tappable → Open maps
- Website link (Body Small, 13pt Regular, Blue 500, tappable)

#### Opening Hours Section

**Layout:**
- Section header: "Hours" (Heading 3, 16pt Semibold)
- List of days and hours (Body Medium, 15pt Regular, Text Primary)
- Today's hours highlighted (bold or different color)
- Format: "Monday: 10:00 AM - 6:00 PM"

#### Current Exhibitions Section

**Layout:**
- Section header: "Current Exhibitions" (Heading 3, 16pt Semibold)
- List of exhibition cards (full cards with hero image)
- Each card: Image + Exhibition name + Dates + Artists (list)
- Tap → Navigate to Exhibition detail

#### Past Exhibitions Section (Optional)

**Layout:**
- Section header: "Past Exhibitions" (Heading 3, 16pt Semibold)
- List of exhibition cards (compact, text-only or small image)
- Tap → Navigate to Exhibition detail

---

## 12. Accessibility Standards

### 12.1 Compliance

**Target:** WCAG 2.1 Level AA minimum

**Requirements:**
- Color contrast ratio: 4.5:1 for text, 3:1 for large text (18pt+)
- Touch targets: Minimum 44x44pt for all interactive elements
- Text scaling: Support dynamic type (iOS) and font scaling (Android) up to 200%
- Keyboard navigation: Support for external keyboards (especially on tablets)
- Screen reader support: VoiceOver (iOS) and TalkBack (Android) compatibility

### 12.2 Text & Color Contrast

**Text Color Contrast (Light Mode):**
- Text Primary on Background Primary: ≥ 7:1 (AAA)
- Text Secondary on Background Primary: ≥ 4.5:1 (AA)
- Text Tertiary on Background Primary: ≥ 3:1 (for non-essential text, or 4.5:1 if essential)
- Button text on Primary background: ≥ 4.5:1

**Text Color Contrast (Dark Mode):**
- Text Primary on Background Primary: ≥ 7:1
- Text Secondary on Background Primary: ≥ 4.5:1
- Text Tertiary on Background Primary: ≥ 3:1
- Button text on Primary background: ≥ 4.5:1

**Recommendations:**
- Test all text/background color combinations with contrast checker
- Never rely on color alone to convey information (use icons, text labels, or patterns)
- Provide high-contrast mode option in future (alternative color scheme)

### 12.3 Touch Targets

**Minimum Size:**
- All interactive elements (buttons, links, icons): 44x44pt minimum
- If visual size is smaller (e.g., icon 24x24pt), expand touch area invisibly to 44x44pt

**Spacing:**
- Minimum 8pt spacing between adjacent touch targets
- Avoid clustering too many interactive elements closely

### 12.4 Screen Reader Support

**Labels:**
- All interactive elements must have accessible labels
- For icon-only buttons, provide accessibility label (e.g., "Close", "More options", "Search")
- Use semantic HTML / native components where possible (for web-based React Native components)

**Hints:**
- Provide hints for complex interactions (e.g., "Double tap to open", "Swipe down to dismiss")

**Grouping:**
- Group related content logically (e.g., artwork card content grouped together)
- Use heading roles for section headers to allow screen reader users to navigate by headings

**Focus Order:**
- Ensure logical focus order (top to bottom, left to right)
- Test with VoiceOver/TalkBack to ensure order makes sense

### 12.5 Dynamic Type / Font Scaling

**Support:**
- Respect user's system font size settings
- Test UI with font sizes scaled up to 200% (very large accessibility sizes)
- Ensure text does not truncate or overlap at large sizes

**Layout Adaptations:**
- Use flexible layouts that reflow when text scales
- Avoid fixed heights for text containers
- Allow multi-line text where truncation would harm UX

### 12.6 Motion & Animations

**Respect "Reduce Motion" Setting:**
- Detect system "Reduce Motion" preference (iOS, Android)
- Disable or simplify animations when "Reduce Motion" is enabled
- Replace transitions with instant changes or very subtle fades

**Avoid:**
- Flashing content (risk of seizures, WCAG violation)
- Excessive motion or parallax that may cause discomfort

### 12.7 Alt Text for Images

**Artwork Images:**
- Provide alt text: "[Artwork title] by [Artist name]"
- If artwork title unknown, use: "Artwork by [Artist name]" or "Captured artwork"

**Decorative Images:**
- Mark as decorative (empty alt text or `role="presentation"`) if no informational value

**Icons:**
- Provide accessible labels (not alt text, since icons are not images in native apps)

---

## 13. Design Specifications

### 13.1 File Formats & Naming

**Design Files:**
- Figma (preferred for collaboration)
- Sketch (alternative)
- Adobe XD (alternative)

**Naming Convention:**
- Format: `bside_[module]_[screen_name]_[version].fig`
- Example: `bside_artfeed_collection_detail_v1.2.fig`

**Screens to Deliver:**
- All primary flows (Camera, Art Feed, Search, My Page, Notifications)
- Key detail screens (Artwork Detail, Artist Profile, Gallery Profile)
- All modals, bottom sheets, overlays
- Empty states, error states, loading states
- Both light and dark mode variants

### 13.2 Design Tokens / Style Guide Export

**Deliverables:**
- Color palette with hex codes (for both light and dark mode)
- Typography scale with font sizes, weights, line heights
- Spacing scale (8pt grid system, all spacing tokens)
- Icon library (SVG exports, 24x24pt base size)
- Component library (reusable components with variants and states)

**Format:**
- Figma design tokens plugin or manual documentation
- JSON file with design tokens for developer handoff (if tooling available)

### 13.3 Export Specifications

**Image Assets:**
- Format: PNG (for raster), SVG (for icons, logos)
- Resolutions: @1x, @2x, @3x (iOS standard), mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi (Android standard)
- Color space: sRGB

**Icon Assets:**
- SVG (vector, preferred for scalability)
- Outlined and filled variants
- 24x24pt viewBox

**Artwork Thumbnails (Example Sizes):**
- Small: 200x240pt (@2x: 400x480px)
- Medium: 400x480pt (@2x: 800x960px)
- Large/Hero: 800x960pt (@2x: 1600x1920px)

### 13.4 Responsive Design

**Breakpoints:**
- **Small (< 375pt):** iPhone SE, compact devices
- **Medium (375-768pt):** Standard phones (iPhone 12-15, most Android)
- **Large (768-1024pt):** Tablets (iPad, Android tablets)
- **Extra Large (≥ 1024pt):** iPad Pro, large tablets, foldables

**Responsive Considerations:**
- Single column on mobile portrait
- Two column layouts on tablets in landscape
- Adjust font sizes slightly larger on tablets (optional, for readability)
- Increase padding/margins on larger screens

### 13.5 Handoff & Developer Collaboration

**Tools:**
- Figma Inspect mode for developers to extract specs
- Zeplin (alternative) for detailed design handoff
- Style guide documentation (markdown or PDF)

**Communication:**
- Weekly design review meetings with PM and developers
- Slack/Teams channel for quick clarifications
- Shared Figma file with commenting enabled for feedback

**Prototypes:**
- Interactive Figma prototypes for key flows
- Demonstrate animations, transitions, gestures
- Use for user testing and stakeholder presentations

### 13.6 Version Control

**Design Versioning:**
- Use Figma branches or Sketch version history
- Tag major versions (v1.0, v2.0) for milestones
- Document changes in version notes

**Component Library Maintenance:**
- Update component library as designs evolve
- Notify developers of breaking changes (e.g., component API changes)

---

## Appendix: Design Checklist

### Pre-Design Phase
- [ ] Review PRD and user personas thoroughly
- [ ] Study reference apps (Nike SNKRS, HYPE by Hypebeast, Spotify, Pinterest, Vivino)
- [ ] Define brand colors, typography, and core visual language
- [ ] Establish component library structure

### Design Phase
- [ ] Design all primary screens (Art Feed, Camera, Search, My Page, Notifications)
- [ ] Design all secondary screens (Artwork Detail, Artist Profile, Gallery Profile, Collection Detail, etc.)
- [ ] Design all modals, bottom sheets, and overlays
- [ ] Design empty states, error states, loading states for all screens
- [ ] Create both light mode and dark mode designs
- [ ] Ensure all interactive elements have clear hover/press states
- [ ] Verify touch targets are minimum 44x44pt
- [ ] Check color contrast ratios (WCAG AA minimum)
- [ ] Annotate animations and transitions in prototypes
- [ ] Include micro-interactions (button presses, swipes, etc.)

### Review Phase
- [ ] Internal design critique (review with PM and team)
- [ ] Stakeholder presentation (client approval)
- [ ] Developer handoff review (ensure feasibility and clarity)
- [ ] Accessibility audit (contrast, touch targets, screen reader labels)
- [ ] User testing (if applicable, gather feedback on prototypes)

### Handoff Phase
- [ ] Export all assets (icons, images) in required formats and resolutions
- [ ] Document design tokens (colors, typography, spacing)
- [ ] Provide interactive Figma prototypes for reference
- [ ] Share style guide and component library
- [ ] Conduct design walkthrough session with developers
- [ ] Set up communication channel for ongoing design support

### Post-Launch Phase
- [ ] Monitor user feedback and analytics (inform design iterations)
- [ ] Update designs based on learnings and feedback
- [ ] Plan next iteration features (3D viewing, DMs, enhancements)
- [ ] Maintain design system and component library

---

## Conclusion

This comprehensive Design & Style Guideline serves as the single source of truth for the Bside project's visual and interaction design. All designers, developers, and stakeholders should reference this document throughout the project lifecycle to ensure consistency, quality, and alignment with the product vision.

**Key Takeaways:**
1. **Artwork is Hero:** Design should always elevate artwork as the primary content.
2. **Minimal & Elegant:** Clean, sophisticated interfaces inspired by premium apps.
3. **Smooth & Engaging:** Fluid animations and interactions create a delightful user experience.
4. **Accessible & Inclusive:** Meet WCAG standards and support all users.
5. **Consistent & Cohesive:** Use the design system, components, and tokens to maintain consistency across all screens.

For questions, clarifications, or design feedback, please contact the Product Manager or Design Lead.

**Document Version:** 1.0  
**Last Updated:** January 30, 2026  
**Next Review:** February 15, 2026 (Post-MVP)

---

*This document is a living guideline and will be updated as the product evolves.*
