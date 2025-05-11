# 🧪 Rick & Morty Explorer App

A React Native app to browse characters from the Rick and Morty universe, featuring infinite scroll, custom theming, and fully animated loading and error screens — all with a touch of Schwifty!

---

## Screenshots

### Main Character Screen

> _Shows the character list with header and infinite scroll._

![Main Screen]()

---

### Error Screen

![Error Screen]()

---

### Loading Indicator

![Loading Screen]()

---

## Features

- Custom error and loading screens with animations
- Light/dark theme support with `ThemedView` and `ThemedText`
- Modular component structure with reusable UI elements
- TypeScript-first architecture

---

## Installation

```bash
npm install
npm run ios | npm run android
```

## Structure

components/
├── character-card/
├── error-screen/
├── ui/
hooks/
└── useCharacters.ts
types/
assets/
└── images/

## API

Rick and Morty API: https://rickandmortyapi.com
