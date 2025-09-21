import { createRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.tsx";
import "./index.css";

// Get the root element
const rootElement = document.getElementById("root")!;

// Create root with basic setup
const root = createRoot(rootElement);

// Render app with basic setup
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

console.log('✅ Basic app initialization complete');
