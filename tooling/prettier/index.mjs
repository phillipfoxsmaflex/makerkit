/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  printWidth: 80,
  singleQuote: true,
  arrowParens: 'always',
  importOrder: [
    '/^(?!.*\\.css).*/',
    '^server-only$',
    '^react$',
    '^react-dom$',
    '^next$',
    '^next/(.*)$',
    '^@supabase/supabase-js$',
    '^@supabase/gotrue-js$',
    '<THIRD_PARTY_MODULES>',
    '^@kit/(.*)$', // package imports
    '^~/(.*)$', // app-specific imports
    '^[./]', // relative imports
  ],
  tailwindFunctions: ['tw', 'clsx', 'cn', 'cva'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};

export default config;
