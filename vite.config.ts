import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        products: resolve(__dirname, "products.html"),
        markets: resolve(__dirname, "markets.html"),
        retail: resolve(__dirname, "retail.html"),
        faq: resolve(__dirname, "faq.html"),
        quote: resolve(__dirname, "quote.html"),
        process: resolve(__dirname, "process.html"),
      }
    }
  }
});
