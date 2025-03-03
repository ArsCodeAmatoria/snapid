# Snapid

A React Native application built with Tamagui UI framework, without Expo or web components.

## Features

- Pure React Native (no Expo)
- Tamagui UI framework for consistent and beautiful UI
- Native components only (no web components)
- Custom MCD (Material-Components Design) rules

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- React Native development environment set up

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the App

For iOS:

```bash
npm run ios
```

For Android:

```bash
npm run android
```

## Project Structure

```
snapid/
├── android/              # Android native code
├── ios/                  # iOS native code
├── src/
│   ├── components/       # Reusable UI components
│   └── screens/          # Application screens
├── App.js                # Main application component
├── index.js              # Entry point
├── tamagui.config.js     # Tamagui configuration
└── .mcd                  # Material-Components Design rules
```

## MCD Rules

This project follows custom Material-Components Design rules defined in the `.mcd` file at the root of the project. 