# Personal Homepage - React + Vite + Tailwind

Modern redesign of the personal homepage using React, Vite, and Tailwind CSS with advanced animations and effects.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
PersonalHomepage/
├── src/
│   ├── components/      # React components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/
│   └── assets/         # Static assets (images, etc.)
├── index.html          # HTML template
└── package.json        # Dependencies
```

## Features

- Asymmetric split-screen design
- Parallax scrolling effects
- 3D image carousel
- Smooth scroll animations
- Glassmorphism effects
- Responsive design
- Dark mode support

## Deployment

The project is automatically deployed to Strato via GitHub Actions when pushing to the `master` branch.

## Old Files

The original HTML files are preserved:
- `index.html.old` - Original Bootstrap-based homepage

