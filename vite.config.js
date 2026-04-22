import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rawBase = process.env.VITE_BASE_PATH?.trim();
const normalizedBase = rawBase
  ? `/${rawBase.replace(/^\/+|\/+$/g, "")}/`
  : "/";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     port: 5173
//   },
//   base: normalizedBase
// });

export default defineConfig({
  plugins: [react()],
  base: "/",   // ✅ force correct path
});