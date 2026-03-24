import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "package.json"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],

    ...js.configs.recommended,

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "script",
    },
  },
  ...tseslint.configs.recommended,
]);
