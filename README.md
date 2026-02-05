# 📌 Portfolio (Next.js + Tailwind)

This project is a Next.js (App Router) conversion of the original static portfolio site. It preserves the overall layout, transitions, and styling while moving to a React-based structure.

## ✅ Features
- Fixed navigation with section transitions
- Keyboard shortcuts (H, S, P, T, C)
- 3D project cards
- Animated headings
- Responsive burger menu
- CV download buttons

## 🛠️ Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS (base) + custom global styles
- Font Awesome (icons via CDN)

## ▶️ Run the project
```bash
npm run dev
```

Open [https://portfolio-bay-xi-28.vercel.app/] in your browser.

## 🖼️ Assets
The hero image and project thumbnails are represented by styled placeholders.
Replace them with real assets by adding image files in the public folder and updating the markup in src/app/page.js.

## 📂 Key Files
- src/app/page.js — main page layout and navigation logic
- src/app/globals.css — migrated global styles
- src/app/layout.js — global layout + icon CDN
