import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
     "/api":{
      target:'http://localhost:3000',
      secure:false,
     }
  },
},
  plugins: [react()], 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
