# bside.art - Claude Project Configuration

This folder contains project-specific documentation and configuration for the bside.art mobile application project.

## Project Overview

**Project Name:** bside.art
**Project Type:** Mobile Application (iOS + Android)
**Framework:** React Native (Expo)
**Backend:** Django (Python) + AWS ECS
**AI/ML:** FastAPI Artwork Recognition Engine
**Target Launch:** March 31, 2026

## Folder Structure

```
.claude-project/
├── prd/                          # Product Requirements Documents
│   └── bside_art_PRD_updated_260130.md
├── docs/                         # Design & Technical Documentation
│   └── bside_design_style_guideline.md
├── memory/                       # Project Memory & Context
│   ├── DECISIONS.template.md    # Key architectural decisions
│   ├── LEARNINGS.template.md    # Lessons learned during development
│   └── PREFERENCES.template.md  # User/team preferences
├── secrets/                      # Sensitive Configuration (git-ignored)
│   └── .gitkeep
└── status/                       # Implementation Status Tracking
    ├── backend/                  # Backend API implementation status
    ├── frontend/                 # Frontend (mobile) implementation status
    └── .gitkeep
```

## Key Documents

### 📋 Product Requirements Document (PRD)
- **Location:** [`prd/bside_art_PRD_updated_260130.md`](prd/bside_art_PRD_updated_260130.md)
- **Version:** 2.0 (Updated: January 30, 2026)
- **Contents:**
  - Complete feature specifications for MVP
  - Database schema documentation
  - AI/ML API specifications
  - AWS infrastructure requirements
  - User flows and page breakdowns

### 🎨 Design & Style Guideline
- **Location:** [`docs/bside_design_style_guideline.md`](docs/bside_design_style_guideline.md)
- **Version:** 2.0 (Updated based on PRD v2.0)
- **Contents:**
  - 23 screen designs with page-by-page briefs
  - Complete design system (colors, typography, components)
  - Brand identity and design philosophy
  - Critical design rules (25 rules)
  - 8-week deliverables timeline (Feb 3 - March 31, 2026)
  - Accessibility standards (WCAG 2.1 Level AA)

## Development Timeline

**8-Week Sprint to MVP (March 31, 2026):**
- **Week 1-2:** Research, wireframes, core screens (Auth, Camera, Artwork Detail)
- **Week 3-4:** Main features (Feed, Search, Artist/Gallery profiles, components)
- **Week 5-6:** Admin screens, states, dark mode, responsive design
- **Week 7:** Polish, accessibility audit, prototypes, QA
- **Week 8:** Final handoff, asset exports, documentation, developer walkthrough

## Core Features (MVP Scope)

✅ **Artwork Camera** - Capture + Upload with AI recognition
✅ **Art Feed** - Display capture collections from followed users
✅ **My Page** - Home, Captures, Collections tabs
✅ **Authentication** - Apple/Google Social Login
✅ **Search** - Artist/artwork/user search
✅ **Social** - Follow/Unfollow functionality
✅ **Admin** - Django Admin Dashboard (simplified)

## Tech Stack

- **Frontend:** React Native 0.81.5, Expo ^54.0.27, React 19.1.0
- **Backend:** Django 6.0.1+, PostgreSQL 16+, AWS ECS
- **AI/ML:** FastAPI, PyTorch, TensorFlow (Artwork Recognition)
- **Infrastructure:** AWS (ECS, RDS, S3, CloudFront, Route 53)
- **Authentication:** Apple Sign-In, Google Sign-In
- **Storage:** AWS S3 + CloudFront (dynamic image transformation)

## Design Philosophy

**Core Inspiration:**
- Nike SNKRS (minimalist, product-focused navigation)
- HYPE by Hypebeast (content-driven UI, calm visual tone)
- Spotify (playlist organization and curation)
- Pinterest (visual-first interface, discovery)
- Vivino (object scanning functionality)

**Design Pillars:**
1. **Artwork First** - Artworks are always the hero content
2. **Minimal & Elegant** - Clean, sophisticated interfaces
3. **Smooth & Engaging** - Fluid transitions and animations
4. **Understated Luxury** - Premium feel, gallery-like environment

## Usage

This folder is referenced by Claude Code for project context. Documents here help Claude understand:
- Project requirements and specifications
- Design system and visual standards
- Implementation status and progress
- Past decisions and learnings
- Team preferences and patterns

## Maintenance

- **PRD Updates:** Update PRD when requirements change, increment version
- **Design Guide Updates:** Update when design system or screens change
- **Memory Files:** Keep decisions and learnings up to date
- **Status Tracking:** Update implementation status as development progresses

---

**Last Updated:** February 2, 2026
**Maintained By:** Design & Development Team
