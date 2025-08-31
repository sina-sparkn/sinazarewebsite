<template>
  <!-- This component doesn't render anything visible -->
</template>

<script setup>
// Search Engine Verification Meta Tags
useHead({
  meta: [
    // Google Search Console
    { name: 'google-site-verification', content: 'your-google-verification-code' },
    
    // Bing Webmaster Tools
    { name: 'msvalidate.01', content: 'your-bing-verification-code' },
    
    // Yandex Webmaster
    { name: 'yandex-verification', content: 'your-yandex-verification-code' },
    
    // Baidu Webmaster Tools
    { name: 'baidu-site-verification', content: 'your-baidu-verification-code' },
    
    // Naver Search Advisor
    { name: 'naver-site-verification', content: 'your-naver-verification-code' },
    
    // Seznam.cz
    { name: 'seznam-wmt', content: 'your-seznam-verification-code' },
    
    // Additional verification for other search engines
    { name: 'p:domain_verify', content: 'your-pinterest-verification-code' },
    { name: 'facebook-domain-verification', content: 'your-facebook-verification-code' },
    
    // Security and Privacy
    { name: 'referrer', content: 'strict-origin-when-cross-origin' },
    { name: 'format-detection', content: 'telephone=no' },
    
    // Mobile optimization
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    
    // Geo targeting
    { name: 'geo.region', content: 'IR' },
    { name: 'geo.country', content: 'Iran' },
    { name: 'geo.placename', content: 'Iran' },
    
    // Content classification
    { name: 'rating', content: 'general' },
    { name: 'distribution', content: 'global' },
    { name: 'audience', content: 'all' },
    { name: 'classification', content: 'business' },
    
    // Cache control
    { 'http-equiv': 'cache-control', content: 'public, max-age=31536000' },
    { 'http-equiv': 'expires', content: new Date(Date.now() + 31536000000).toUTCString() }
  ]
});
</script>
