import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Summit</title>
        <meta property="og:title" content="The Summit" />
        <meta
          name="description"
          content="A weekend of invention, collaboration, and friendship in San Francisco with 50 Hack Club leaders from around the world."
        />
        <meta
          property="og:description"
          content="A weekend of invention, collaboration, and friendship in San Francisco with 50 Hack Club leaders from around the world."
        />
        <meta name="twitter:card" content="/public/bridge.png" />
        <meta
          name="keywords"
          content="Leader, leader, summit, Summit, Hack Club, Invention, Collaboration, Friendship, Weekend event, San Francisco, Hack Club, Global leaders, Hackathon, Technology, Innovation, Networking, Learning, Creative thinking, Community building, Coding, Programming, Project development, Skill sharing, Global collaboration, Tech enthusiasts"
        />
        <meta name="author" content="Hack Club" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e34d4d" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#B42E1E" />
        <meta property="og:image" content="/public/bridge.svg" />
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
