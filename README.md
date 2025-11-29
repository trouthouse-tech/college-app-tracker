# Tutorials

A Next.js app with TypeScript and Redux.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React-Redux** - React bindings for Redux
- **Tailwind CSS 4** - Styling

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── index.ts         # Component exports
│   └── ReduxProvider.tsx
└── store/               # Redux store
    ├── app.ts           # App slice
    ├── hooks.ts         # Typed hooks
    ├── index.ts         # Store exports
    ├── reducer.ts       # Root reducer
    ├── store.ts         # Store configuration
    └── types.ts         # TypeScript types
```

