import { GA_TRACKING_ID } from "@/libs/gtag";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                });
              `,
          }}
      />
  </>
  );
}
export default GoogleAnalytics;