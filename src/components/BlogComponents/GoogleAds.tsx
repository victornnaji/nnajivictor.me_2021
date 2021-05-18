import React from 'react'
import { Helmet } from 'react-helmet'

const GoogleAds = () => {
    return (
      <Helmet>
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script>{configuration}</script> */}
        <script data-ad-client="ca-pub-8366354165206148" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
    )
}

export default GoogleAds
