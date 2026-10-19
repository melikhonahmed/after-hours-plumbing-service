# Emergency Trade Assurance — Design System
**Project:** Modern Landing Page Redesign  
**Style:** High-trust tactical modernism for emergency plumbing and dispatch services

---

## 1. Brand Identity & Style Guidelines

This design system establishes a high-trust, responsive digital presence for round-the-clock emergency plumbing and residential infrastructure services in Greater Houston.

### Design Movement: High-Trust Tactical Modernism
Drawing inspiration from modern logistics and field-service emergency applications, the aesthetic blends:
- **Clean Architectural Structure:** Generous breathing room, well-organized technical grids, and crisp container cards that make complex service menus digestible.
- **Urgent Clarity:** High-visibility signaling where red commands primary emergency actions (immediate calls, dispatch confirmation), hydraulic blue establishes hydraulic authority and standard booking workflows, and deep slate anchors legibility.
- **Modern Polish:** Eliminates outdated blue-collar trade clichés in favor of crisp iconography, tactile micro-interactions, subtle borders, and soft layered shadows that convey premium craft and licensed professionalism.

### Emotional Target
- **Relief & Reassurance:** *"Help is immediately available, verified, and on the way."*
- **Precision & Reliability:** Clean lines and structural stability reflecting precision piping and code compliance.
- **Effortless Action:** Zero friction between reading an emergency issue and speaking directly to an on-call dispatcher.

---

## 2. Color Palette & Functional Tokens

```css
:root {
  /* Surface Hierarchy */
  --color-canvas: #F6F6F2;
  --color-canvas-white: #FFFFFF;
  --color-surface-dim: #CBDBF5;
  --color-surface-low: #EFF4FF;
  --color-surface-container: #E5EEFF;
  --color-surface-highest: #D3E4FE;
  
  /* Text & Contrast */
  --color-ink: #090D15;
  --color-ink-panel: #101726;
  --color-slate-900: #0F172A;
  --color-slate-700: #334155;
  --color-slate-500: #64748B;
  --color-slate-400: #94A3B8;
  --color-slate-200: #E2E8F0;
  
  /* Brand Emergency Red */
  --color-brand-red: #DC2626;
  --color-brand-red-dark: #B91C1C;
  --color-brand-red-light: #FEE2E2;
  --color-emergency-halo: rgba(220, 38, 38, 0.25);
  
  /* Brand Hydraulic Blue */
  --color-brand-blue: #0284C7;
  --color-brand-blue-dark: #0369A1;
  --color-brand-blue-light: #E0F2FE;
  --color-hydraulic-sky: #38BDF8;
  
  /* Accents & Status */
  --color-emerald-500: #10B981;
  --color-emerald-50: #ECFDF5;
  --color-amber-400: #FBBF24;
}
```

---

## 3. Typography Scales

- **Primary Headings & Badges:** `Plus Jakarta Sans`, font weights `600`, `700`, `800`, `900`.
- **Editorial Emphasis & Serif Accents:** `Newsreader` / `Instrument Serif` (italic, regular).
- **Body & Technical Data:** `Inter` / `system-ui`, font weights `400`, `500`, `600`.

| Token | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|
| `display-hero` | 3.5rem (56px) / 4.35rem (70px) | 800 / 900 | 1.06 | -0.03em |
| `display-hero-mobile` | 2.25rem (36px) | 800 | 1.15 | -0.02em |
| `headline-xl` | 2.25rem (36px) | 700 / 800 | 1.2 | -0.02em |
| `headline-lg` | 1.5rem (24px) | 700 | 1.3 | -0.01em |
| `headline-md` | 1.25rem (20px) | 600 | 1.35 | -0.005em |
| `body-lg` | 1.125rem (18px) | 400 | 1.6 | 0 |
| `body-md` | 1.0rem (16px) | 400 | 1.55 | 0 |
| `body-sm` | 0.875rem (14px) | 400 | 1.5 | 0.005em |
| `label-emergency` | 0.75rem (12px) | 800 | 1.0 | 0.08em (uppercase) |

---

## 4. Elevation & Shadow Tokens

- **Level 0 (Flat):** Surface canvas (`#F6F6F2` / `#FFFFFF`).
- **Level 1 (Resting Cards):** `border: 1px solid #E2E8F0; box-shadow: 0 2px 4px -1px rgba(15, 23, 42, 0.04), 0 4px 8px -2px rgba(15, 23, 42, 0.06);`
- **Level 2 (Interactive Hover):** `box-shadow: 0 10px 20px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04); border-color: rgba(2, 132, 199, 0.4);`
- **Level 3 (Floating Bars & Modals):** `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08);`
- **Emergency Halo:** `box-shadow: 0 0 16px rgba(220, 38, 38, 0.25);`

---

## 5. Components Specifications

1. **Floating Pill Navigation Header**:
   - Fixed top floating container with blur backdrop (`rgba(255,255,255,0.85)` + `backdrop-filter: blur(16px)`).
   - High-contrast emergency call link with live pulsing indicator.
   - Primary dark pill CTA button with smooth hover transition.
2. **Hero Tactical Direct Selector**:
   - Direct service selector card featuring Service Type, Desired Schedule, and Zip Code with instant quote action.
3. **Credibility Metric Strip (4-Pillars)**:
   - 12k+ Pipes & Fixtures Restored, 32+ Years Licensed Exp., 100% Upfront Guaranteed Pricing, 24/7 Urgent Dispatch.
4. **Bento Story Grid**:
   - Dual-tone tradecraft showcasing licensed mastery, safety compliance, and Houston heritage.
5. **Architectural Bento Footer**:
   - Integrated Emergency Dispatch Desk ribbon (`(832) 715-6441`), verified credentials, organized multi-column navigation, operating hours schedule, and license numbers.
