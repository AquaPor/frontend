import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* FontAwesome CDN */}
        <script
          src="https://kit.fontawesome.com/bdbfe9e284.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

