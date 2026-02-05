# bside.art - Quick Start Guide

Welcome to the bside.art project! This guide helps you quickly understand the project structure and get started.

---

## 📁 Project Structure

```
Bside-design/
├── .claude/                          # Claude workflow configuration (submodule)
├── .claude-project/                  # Project-specific docs (THIS FOLDER)
│   ├── README.md                     # Project overview
│   ├── QUICK_START.md               # This file
│   ├── prd/                         # Product Requirements
│   │   └── bside_art_PRD_updated_260130.md (36KB)
│   ├── docs/                        # Design Documentation
│   │   ├── bside_design_style_guideline.md (116KB)
│   │   └── DESIGN_SYSTEM_QUICK_REFERENCE.md (6KB)
│   ├── memory/                      # Project Context & Memory
│   │   ├── PROJECT_CONTEXT.md
│   │   ├── DECISIONS.template.md
│   │   ├── LEARNINGS.template.md
│   │   └── PREFERENCES.template.md
│   ├── status/                      # Implementation Status
│   │   ├── backend/
│   │   ├── frontend/
│   │   └── design/
│   └── secrets/                     # Sensitive Config (git-ignored)
├── bside_art_PRD_updated_260130.md  # PRD (root copy)
└── bside_design_style_guideline.md  # Design Guide (root copy)
```

---

## 🚀 Quick Links

### Essential Documents
1. **PRD (Product Requirements):** [.claude-project/prd/bside_art_PRD_updated_260130.md](.claude-project/prd/bside_art_PRD_updated_260130.md)
   - All feature specifications, database schema, API endpoints

2. **Design Guide (Comprehensive):** [.claude-project/docs/bside_design_style_guideline.md](.claude-project/docs/bside_design_style_guideline.md)
   - 3,200+ lines, 23 screen designs, complete design system

3. **Design System (Quick Reference):** [.claude-project/docs/DESIGN_SYSTEM_QUICK_REFERENCE.md](.claude-project/docs/DESIGN_SYSTEM_QUICK_REFERENCE.md)
   - Colors, typography, spacing, components at a glance

4. **Project Context:** [.claude-project/memory/PROJECT_CONTEXT.md](.claude-project/memory/PROJECT_CONTEXT.md)
   - Current status, recent updates, open questions

---

## 📋 Project At A Glance

**Project:** bside.art - Artwork-centric social platform
**Type:** Mobile App (iOS + Android)
**Framework:** React Native (Expo)
**Deadline:** March 31, 2026 (MVP)
**Current Phase:** Design & Planning (Week 1 of 8)

### Core Features (MVP)
✅ Artwork Camera (AI recognition)
✅ Art Feed (collections from followed users)
✅ My Page (Home, Captures, Collections)
✅ Search (artists, artworks, users)
✅ Social (Follow/Unfollow)
✅ Authentication (Apple/Google)

### Tech Stack
- **Frontend:** React Native 0.81.5, Expo ^54.0.27
- **Backend:** Django 6.0.1, PostgreSQL 16, AWS ECS
- **AI/ML:** FastAPI, PyTorch, TensorFlow
- **Infrastructure:** AWS (S3, CloudFront, Route 53)

---

## 🎨 Design System Essentials

### Colors
- **Primary:** #1C1C1E (Dark Charcoal)
- **Interactive:** #007AFF (Blue)
- **Success:** #34C759, **Error:** #FF3B30, **Warning:** #FF9500

### Typography
- **Font:** SF Pro (iOS) / Roboto (Android)
- **Sizes:** 32pt, 28pt, 24pt, 20pt, 18pt, 16pt, 15pt, 13pt, 12pt, 11pt

### Spacing (8pt Grid)
- **Scale:** 4pt, 8pt, 16pt, 24pt, 32pt, 40pt, 48pt

### Key Rules
1. Artwork is always the hero content
2. 44x44pt minimum touch targets
3. 4.5:1 contrast ratio for text
4. Dark mode automatic (system-driven)
5. Loading states for all async operations

---

## 📊 23 Screens Overview

### Common (4 screens)
1. Splash | 2. Login | 3. Sign Up | 4. Password Recovery

### Main Navigation (5 tabs)
5. Art Feed | 6. Search | 7. Camera | 8. My Page | 9. Notifications

### Detail Screens (4 screens)
10. Artwork Detail | 11. Artist Profile | 12. Gallery Profile | 13. Collection Detail

### My Page Sub-Screens (4 screens)
14. Home Tab | 15. Captures Tab | 16. Collections Tab | 17. Settings

### Camera Flow (2 states)
18. Recognition Success | 19. Recognition Failure

### Admin (4 screens)
20. Admin Login | 21. User Management | 22. Push Management | 23. Content Management

---

## ⏱️ 8-Week Timeline

### Week 1-2 (Feb 3-16): Research & Core Screens
- Reference app research
- Wireframes (all 23 screens)
- High-fidelity: Login, Camera, Artwork Detail, My Page

### Week 3-4 (Feb 17 - Mar 2): Main Features
- Art Feed, Search, Artist/Gallery profiles
- Component library expansion

### Week 5-6 (Mar 3-16): Admin & States
- Admin screens, empty/error/loading states
- Dark mode, responsive design

### Week 7 (Mar 17-23): Polish
- Accessibility audit, interactive prototypes, QA

### Week 8 (Mar 24-31): Handoff
- Asset exports, documentation, developer walkthrough

---

## 🔑 Key Design Decisions

### Design Philosophy
- **Inspiration:** Nike SNKRS + HYPE by Hypebeast
- **Aesthetic:** Minimal, elegant, artwork-first
- **Color Approach:** Neutral-forward (80% neutral, 20% accent)

### Technical Choices
- **Authentication:** Social login only (Apple + Google)
- **Dark Mode:** Automatic (no manual toggle)
- **Admin:** Django Admin Dashboard (no custom UI for MVP)
- **Icons:** Outlined default, filled for active states

---

## 📝 Next Actions

### This Week (Week 1)
- [ ] Study reference apps (Nike SNKRS, HYPE, Spotify, Pinterest, Vivino)
- [ ] Create mood board
- [ ] Start wireframes for all 23 screens
- [ ] Set up Figma project structure

### Week 2
- [ ] Complete wireframes
- [ ] High-fidelity designs for Phase 1 screens
- [ ] Component library foundations
- [ ] First design review

---

## 🛠️ Development Setup (Coming Soon)

Development will start in Week 3-4. Setup instructions will be added here when ready.

**GitHub Repo:** https://github.com/dunamis-art-tech/bside-app

---

## 📞 Contact & Communication

### Design Reviews
- **When:** Mondays (weekly)
- **Duration:** 1 hour
- **Attendees:** Design team + PM

### Developer Sync
- **When:** Wednesdays (bi-weekly, starting Week 3)
- **Duration:** 30 minutes

### Client Check-ins
- **When:** Fridays (bi-weekly)
- **Duration:** 1 hour

### Channels
- **Slack:** #bside-design
- **Figma:** [Shared workspace link TBD]

---

## 📚 Learning Resources

### Reference Apps to Study
1. **Nike SNKRS** - Navigation, product focus, transitions
2. **HYPE by Hypebeast** - Content presentation, visual tone
3. **Spotify** - Organization, personalization
4. **Pinterest** - Image discovery, grid layouts
5. **Vivino** - Object scanning, recognition UI

### Design System Inspiration
- Apple Human Interface Guidelines (iOS)
- Material Design 3 (Android)
- Nike Design System
- Stripe Design System

---

## ✅ Success Criteria

Design succeeds if:
- ✅ All 23 screens designed with light + dark mode
- ✅ Component library complete (30+ components)
- ✅ Accessibility: WCAG AA compliant
- ✅ Responsive: Works on iPhone SE to iPad Pro
- ✅ Artwork is visually dominant on every screen
- ✅ AI recognition flow feels seamless (<3 seconds)
- ✅ Navigation is intuitive, no confusion
- ✅ Feels premium: Nike SNKRS + HYPE for art world

---

**Need Help?**
- Check [README.md](README.md) for project overview
- Check [PROJECT_CONTEXT.md](memory/PROJECT_CONTEXT.md) for current status
- Check [DESIGN_SYSTEM_QUICK_REFERENCE.md](docs/DESIGN_SYSTEM_QUICK_REFERENCE.md) for design specs
- Check [bside_design_style_guideline.md](docs/bside_design_style_guideline.md) for full documentation

**Last Updated:** February 2, 2026
