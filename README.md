1. Answer:
   JSX = JavaScript XML, is a syntax extension for JavaScript that looks a lot like HTML but is used in React to describe the UI.
2. Answer:
   Props are data passed from a parent component to a child component and States are data managed         within a component. Props are immutable but States are mutable.
3. Answer:
   useState is a React Hook that allows to add state to a functional component. useState is like          giving functional component its own memory box where we can store a value, change it, and React        automatically updates the UI.
4. Answer:
   State can be shared between components by **lifting it up** to their closest common parent and         passing it as **props**, or by using **React Context** for global access.
5. Answer:
   In React, events are handled using **camelCase props** like `onClick` with a **function** as the       handler. React uses **synthetic events** to manage and normalize event behavior across browsers.













# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
