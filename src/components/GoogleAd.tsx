'use client'
import { memo, useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAd = ({type}: { type: string }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <div className="border googleAd-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="auto"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-6100475101609357"
        data-ad-slot={type}
      />
    </div>
  );
};
export default memo(GoogleAd);