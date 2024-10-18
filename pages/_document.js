import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add structured data for the website logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.baptistelabaune.com",
              logo: "https://www.baptistelabaune.com/logo.png",
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
