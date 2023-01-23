import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "ka6zov",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
