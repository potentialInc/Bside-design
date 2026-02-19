# bside.art — Design System Specification
**v1.1 — February 2026**

---

## 1. Typography System

**Font Family**
- **Primary:** Inter (weights: 300, 400, 500, 600, 700)
- **Monospace:** JetBrains Mono (OTP / code inputs only)
- **Fallback:** `-apple-system, BlinkMacSystemFont, "SF Pro Text", Segoe UI, Roboto, Helvetica, Arial, sans-serif`

---

### Hero Heading

| Property | Value |
|---|---|
| Usage | Full-screen landing title (Welcome screen only) |
| Example | *Discover the Unseen World* |
| Font Size | 34px |
| Font Weight | 700 Bold |
| Line Height | 42px |
| Color | #FFFFFF |

---

### H1 — Page Title

| Property | Value |
|---|---|
| Usage | Primary title of every screen |
| Example | *Welcome Back, Create Account, Reset Password* |
| Font Size | **28px** |
| Font Weight | **600 Semi Bold** |
| Line Height | 36px |
| Letter Spacing | Tight |
| Color | #FFFFFF |

---

### H2 — Section Heading

| Property | Value |
|---|---|
| Usage | Content sections within a screen |
| Example | *About Artist, Related Artworks, You might also like* |
| Font Size | **20px** |
| Font Weight | **600 Semi Bold** |
| Line Height | 28px |
| Color | #FFFFFF |

---

### H3 — Content Heading

| Property | Value |
|---|---|
| Usage | Card titles, item names, nav bar label |
| Example | *Chansong Kim, MoMA Visit 2024, Notifications* |
| Font Size | **17px** |
| Font Weight | **600 Semi Bold** |
| Line Height | 24px |
| Color | #FFFFFF |

---

### Subhead

| Property | Value |
|---|---|
| Usage | Supporting line beneath a heading |
| Example | *Set up your profile to get started* |
| Font Size | 15px |
| Font Weight | 500 Medium |
| Line Height | 22px |
| Color | #8E8E93 |

---

### Body — Regular

| Property | Value |
|---|---|
| Usage | Default paragraph text, card descriptions |
| Font Size | 15px |
| Font Weight | 400 Regular |
| Line Height | 22px |
| Color | rgba(255, 255, 255, 0.92) |

---

### Body — Secondary

| Property | Value |
|---|---|
| Usage | Meta information, timestamps, supporting detail |
| Example | *2h ago, Frieze London 2026, 12 friends were there* |
| Font Size | **13px** |
| Font Weight | 400–500 |
| Line Height | 18px |
| Color | **#8E8E93** |

---

### Caption / Label

| Property | Value |
|---|---|
| Usage | Form field labels, tags, fine print |
| Font Size | **12px** |
| Font Weight | 500 Medium |
| Line Height | 16px |
| Color | **#636366** |

---

### Accent / Link

| Property | Value |
|---|---|
| Usage | Tappable text links |
| Example | *Sign Up, Forgot Password, Continue with Email* |
| Font Size | 14px |
| Font Weight | 500 Medium |
| Color | **#0A84FF** |
| RGB | 10, 132, 255 |

---

### Input Text

| Property | Value |
|---|---|
| Usage | Text inside form inputs |
| Font Size | 15–16px |
| Font Weight | 400 Regular |
| Color | #FFFFFF |
| Placeholder Color | **#636366** |

---

### Monospace (OTP Input)

| Property | Value |
|---|---|
| Usage | Verification code entry only |
| Font Family | JetBrains Mono |
| Font Size | 17px |
| Letter Spacing | 0.2em |
| Color | #FFFFFF |

---

## 2. Color System

### Primary Palette

| Name | HEX | RGB | Usage |
|---|---|---|---|
| Primary Black | `#000000` | 0, 0, 0 | App background |
| Pure White | `#FFFFFF` | 255, 255, 255 | Headings, primary buttons |
| iOS Blue | `#0A84FF` | 10, 132, 255 | Links, CTAs, focus rings, active states |
| Success Green | `#34C759` | 52, 199, 89 | Success states, toggle ON |
| Error Red | `#FF3B30` | 255, 59, 48 | Errors, destructive actions |

---

### Surface Colors

| Name | HEX | Usage |
|---|---|---|
| Surface 1 | `#1C1C1E` | Card backgrounds, input fields, bottom sheets |
| Surface 2 | `#2C2C2E` | Disabled buttons, secondary cards |
| Surface 3 | `#3A3A3C` | Toggle OFF state, inactive elements |
| Surface 4 | `#0A0A0A` | Deep black subtle backgrounds |

---

### Text Colors

| Name | HEX | Usage |
|---|---|---|
| Text Primary | `rgba(255,255,255,0.92)` | Main body text |
| Text Secondary | `#8E8E93` | Metadata, labels, timestamps, subheads |
| Text Muted | `#636366` | Captions, placeholders, form labels |
| Text Dark | `#48484A` | Tertiary text on dark surfaces |
| Text Subtle | `#C7C7CC` | Very light content, disabled captions |
| Text Disabled | `#545458` | Inactive input placeholders |

---

### Border / Separator Colors

| Name | Value | Usage |
|---|---|---|
| Border Subtle | `rgba(255,255,255,0.05)` | List separators, card edges |
| Border Default | `rgba(255,255,255,0.10)` | Input default borders |
| Border Emphasis | `rgba(255,255,255,0.15)` | Stronger card borders |
| Border Active | `#0A84FF` | Input focus state |

---

### Gradients

| Name | Value | Usage |
|---|---|---|
| Hero Glow | `radial-gradient(circle at bottom, #1a1a3a, rgba(0,0,0,0.8), #000)` | Welcome screen |
| Image Overlay | `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)` | Photo overlays |
| Card Fade | `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), rgba(0,0,0,0.2))` | Feed card overlays |
| Signup Glow | `linear-gradient(to top, rgba(88,28,135,0.20), rgba(88,28,135,0.05), transparent)` | Signup accent |

---

## 3. Buttons

### Primary Button

| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Text Color | `#000000` |
| Font Size | **15px** |
| Font Weight | **600 Semi Bold** |
| Height | **52px** |
| Border Radius | **14px** |
| Hover State | `rgba(255,255,255,0.90)` |
| Active State | `scale(0.98)` |
| Transition | `all 0.2s ease` |
| Examples | *Get Started, Sign In, Send Verification Code, Complete* |

---

### Secondary Button

| Property | Value |
|---|---|
| Background | `#6e7480` |
| Text Color | `#FFFFFF` |
| Font Size | 15px |
| Font Weight | 600 Semi Bold |
| Height | 50px |
| Border Radius | 12px |
| Hover State | `opacity: 0.70` |
| Example | *Continue with Email* |

---

### Disabled Button

| Property | Value |
|---|---|
| Background | `#2C2C2E` |
| Text Color | `#8E8E93` |
| Font Size | 17px |
| Height | 56px |
| Border Radius | 18px |
| Cursor | not-allowed |
| Example | *Sign Up (before form is valid)* |

---

### Ghost / Icon Button

| Property | Value |
|---|---|
| Background | transparent |
| Size | 32 × 32px |
| Border Radius | 50% (circle) |
| Icon Color | `#FFFFFF` |
| Hover | `opacity: 0.70` |
| Usage | Close (X), back arrow, share, more |

---

### Social Auth Button

| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Text Color | `#000000` |
| Height | 50px |
| Border Radius | 12px |
| Font Weight | 600 |
| Examples | *Sign in with Apple, Sign in with Google* |

---

### Toggle Switch

| Property | Value |
|---|---|
| Track Width | 51px |
| Track Height | 31px |
| Track Radius | 50% (pill) |
| Knob Size | 27 × 27px, white |
| OFF Color | `#3A3A3C` |
| ON Color | `#34C759` |
| Transition | `0.2s cubic-bezier(0.4, 0, 0.2, 1)` |

---

## 4. Form Inputs

| Property | Value |
|---|---|
| Height | 52–56px |
| Background | `#1C1C1E` |
| Border Default | `rgba(255,255,255,0.05)` — 1px |
| Border Focus | `#0A84FF` — 1.5px + `0 0 0 4px rgba(10,132,255,0.15)` glow |
| Border Radius | 14–18px |
| Text Size | 15–16px |
| Placeholder | `#636366` |
| Valid State | border `#34C759` + check icon |
| Invalid State | border `#FF3B30` + X icon |

---

## 5. Status Components

### Success Notification

| Property | Value |
|---|---|
| Icon | `solar:check-circle-bold` |
| Icon Color | `#34C759` |
| Text Color | `#34C759` |
| Background | `#1C1C1E` |
| Font Size | 13px |

---

### Error / Failure

| Property | Value |
|---|---|
| Icon | `solar:close-circle-bold` |
| Icon Color | `#FF3B30` |
| Text Color | `#FF3B30` |
| Background | `#1C1C1E` |

---

### Loading / Processing

| Property | Value |
|---|---|
| Icon | `svg-spinners:ring-resize` |
| Icon Color | `rgba(255,255,255,0.60)` |
| Background | `#2C2C2E` |
| Font Size | 14px |

---

### Unread Badge

| Property | Value |
|---|---|
| Size | 8 × 8px |
| Color | `#0A84FF` |
| Shape | Circle |
| Position | Top-right of icon |

---

## 6. Spacing System

| Token | Value | Usage |
|---|---|---|
| 4 | 4px | Icon-to-text gap, micro padding |
| 8 | 8px | Inner element spacing |
| 12 | 12px | Between list items |
| 16 | 16px | Card padding, standard gap |
| 20 | 20px | Section inner padding |
| 24 | 24px | Horizontal page margins, section gaps |
| 32 | 32px | Between major sections |
| 40 | 40px | Large section spacing |
| 48 | 48px | Top margin below status bar |

---

## 7. Border Radius

| Name | Value | Usage |
|---|---|---|
| XS | 6px | Badges, status pills, small tags |
| Small | 8px | Chips, minor cards |
| Medium | 12px | Social buttons, secondary elements |
| Large | 14px | Primary buttons |
| XL | 18px | Password inputs, disabled buttons |
| 2XL | 20–24px | Feed cards, modal containers |
| 3XL | 32px | Bottom sheets, large modals |
| Full | 50% | Avatars, circular buttons, OTP boxes |

---

## 8. Iconography

| Library | Tag Format | Usage |
|---|---|---|
| **Solar** (Iconify) | `<iconify-icon icon="solar:*">` | All UI icons — nav, status, actions, validation |
| **Lucide** | `<i data-lucide="*">` | Interactive controls (X, eye, chevron, check) |
| **Logos** (Iconify) | `<iconify-icon icon="logos:*">` | Apple, Google auth logos |
| **SVG Spinners** | `<iconify-icon icon="svg-spinners:*">` | Loading animations |

### Standard Icon Sizes

| Context | Size |
|---|---|
| Navigation bar | 24px |
| Status bar | 16–20px |
| Action / CTA | 20px |
| Inline with text | 14–16px |
| Empty state illustration | 30px |

---

## 9. Elevation & Shadows

| Level | Value | Usage |
|---|---|---|
| Elevation 1 | `0 2px 8px rgba(0,0,0,0.08)` | Subtle card lift |
| Elevation 2 | `0 4px 12px rgba(0,0,0,0.12)` | Cards, dropdowns |
| Elevation 3 | `0 20px 40px rgba(0,0,0,0.80)` | Bottom navigation bar |
| Focus Glow | `0 0 0 4px rgba(10,132,255,0.15)` | Input focus ring |
| White Glow | `0 0 20px rgba(255,255,255,0.15)` | Active states |

---

## 10. Motion & Animation

| Property | Value | Usage |
|---|---|---|
| Fast | `200ms ease` | Hovers, opacity |
| Standard | `300ms ease-in-out` | Modals, transitions |
| Slow | `500ms cubic-bezier(0.2,0.8,0.2,1)` | Entrance animations |
| Button press | `scale(0.98)` | Tap feedback |
| iOS easing | `cubic-bezier(0.4,0,0.2,1)` | Slides, toggles |

### Named Animations

| Name | Behavior | Usage |
|---|---|---|
| `slideDown` | Enter from top | Banner appearance |
| `slideUp` | Exit to top | Banner dismissal |
| `slideOutLeft` | Swipe-to-dismiss | Notification delete |
| `shimmer` | Skeleton pulse | Loading placeholders |

---

## 11. Device Frame (iPhone 14 Pro)

| Property | Value |
|---|---|
| Canvas Width | 375px |
| Canvas Height | 812px |
| Corner Radius | 40–50px |
| Dynamic Island | 120 × 35px |
| Status Bar Height | 44px |
| Home Indicator | 134 × 5px, color `#363636` |
| Bottom Nav Height | 72–100px (includes safe area) |
