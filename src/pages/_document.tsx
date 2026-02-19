import { Html, Head, Main, NextScript } from "next/document";

const themeBootScript = `
(() => {
  try {
    const theme = localStorage.getItem("theme-mode");
    if (theme === "light" || theme === "dark" || theme === "system") {
      document.documentElement.dataset.theme = theme;
    }
  } catch {}
})();
`;

export default function Document() {
  return (
    <Html lang="en" data-theme="system" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#0c0c0d" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f8f8f8" media="(prefers-color-scheme: light)" />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
