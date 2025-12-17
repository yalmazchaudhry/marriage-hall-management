import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Turn off built-in/TS unused vars so we don't get duplicate errors
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Auto-remove unused imports when running --fix
      "unused-imports/no-unused-imports": "error",

      // Auto-fix unused variables but allow ones starting with "_"
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // Disable formatting-related ESLint rules that would conflict with Prettier.
  eslintConfigPrettier,
]);

export default eslintConfig;
