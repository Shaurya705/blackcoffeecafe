# ☕ The Black Coffee Cafe (BCC)

Welcome to the digital storefront of **The Black Coffee Cafe (BCC)** — a premium, visually immersive, and brand-driven React application that brings our cozy aesthetic straight to your screen. This project leverages modern web design to deliver a Starbucks-level digital experience curated specifically for urban cafe lovers.

## 🌟 Live Demo

*If you are hosting this application, you can add your deployment link here.*

## 🚀 Features

- **Premium Cinema-Level Hero:** Immersive background visuals, soft steam animations, and a glass-morphic navigation bar.
- **"Your Daily Escape" Scroll:** Interactive horizontally scrolling experience cards that outline the BCC vibe (Work-Friendly zone, Late Night Hangouts).
- **Interactive Signature Menu:** Smooth-animated tab switching system displaying our signature coffees, comfort foods, and dessert drinks perfectly categorized.
- **Instagram-Style Masonry Grid:** An aesthetic gallery of cafe interiors, working spaces, and food styling mimicking popular photo-sharing grids.
- **Second Workspace Section:** Highlighting the perks of working at BCC — featuring Free WiFi, Plug Points, and 24x7 status indicators via dynamic floating badges.
- **Social Proof Testimonials:** Real community reviews seamlessly presented with beautiful customized star ratings.
- **Location Mapping Placeholder:** Featuring stylized dark-themed mapping logic for exploring multi-outlet locations (Gaur City 1, Sector 62, Sector 37).
- **Responsive "Order Now" Floating Bubble:** Easy to reach conversion point for orders anywhere on the page.

## 🛠️ Technology Stack

- **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Animation Engine:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide-React](https://lucide.dev/) (plus custom optimized SVGs)
- **Styling:** Custom Modular Vanilla CSS with comprehensive CSS variable tokens. 
- **Design Philosophy:** Dark theme, warm coffee accents (neon and gold), glassmorphism (frosted backgrounds), smooth-scroll interactions, mobile-first responsiveness.
- **Typography:** Google Fonts (`Inter` for body structure, `Outfit` for bold modern headings).

## 📂 Project Structure

```
blackcoffeecafe/
├── public/                 # Static assets (custom rendered images)
├── src/
│   ├── components/         # Modular feature components
│   │   ├── Experience/     # Horizontal scroll cards
│   │   ├── Footer/         # Branding footer & icons
│   │   ├── Gallery/        # Masonry instagram grid
│   │   ├── Hero/           # Animated steam/overlay landing
│   │   ├── Locations/      # Multi-outlet exploration
│   │   ├── Menu/           # Interactive product categories
│   │   ├── Navbar/         # Collapsing blurred navigation
│   │   ├── SocialProof/    # Testimonials and user reviews
│   │   └── WorkAndChill/   # Target audience feature board
│   ├── App.jsx             # Main architectural shell
│   ├── index.css           # Global tokens, utilities & reset
│   └── main.jsx            # Entry point
└── README.md
```

## 💻 Running the Project Locally

To get a copy of this repository up and running on your local machine:

**1. Clone the repository:**
```bash
git clone https://github.com/Shaurya705/blackcoffeecafe.git
cd blackcoffeecafe
```

**2. Install all dependencies:**
```bash
npm install
```

**3. Fire up the local development server:**
```bash
npm run dev
```

**4. Build for output/production:**
```bash
npm run build
```

## 🎨 Design Tokens

- **Espresso Dark:** `#0a0808` / `#141110`
- **Warm Cream:** `#f5f0eb`
- **Caramel Gold:** `#d4a373`
- **Neon Soft:** `#ffba08`
- **Glass Effects:** `rgba(20, 17, 16, 0.6)` with `-webkit-backdrop-filter: blur(12px)`

---

*"Made for coffee lovers, built for conversations."*
