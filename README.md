# Zustand Expo DevTools Plugin

A lightweight **Expo Dev Client Plugin** for visualizing **Zustand state** in Expo apps using **Expo SDK 50+**.


https://github.com/user-attachments/assets/4c947711-f85f-4e89-99e3-1bdb914299b5

## Installation

Ensure you have **Zustand** installed in your project:

```sh
npm install zustand
```

Then, install the **Zustand Expo DevTools plugin**:

```sh
npm install zustand-expo-devtools
```

## Usage

### 1. Import the Middleware

In your Zustand store file, import the middleware from `zustand-expo-devtools`:

```javascript
import { middleware } from 'zustand-expo-devtools';
```

### 2. Apply Middleware to Your Zustand Store

Pass your Zustand store into the middleware function **before exporting**:

```javascript
import create from 'zustand';
import { middleware } from 'zustand-expo-devtools';

const useBearStore = create((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));

middleware(useBearStore);

export default useBearStore;
```

### 3. Debugging in Expo Dev Client

Once the middleware is applied, you can inspect the Zustand store state directly in your **Expo Dev Client**, making it easier to debug state changes.

## Features

- 🚀 **Compatible with Expo SDK 50+**
- 🛠 **Works seamlessly with Zustand state management**
- 📊 **Live state visualization in Expo Dev Client**

## Notes

- Ensure that you are running your app inside an **Expo Dev Client** for this middleware to function properly.
- The middleware does not impact performance in production builds.

## Contributing

Feel free to open issues or pull requests to improve the plugin!

## License

MIT License

