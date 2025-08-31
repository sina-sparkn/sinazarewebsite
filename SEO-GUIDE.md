# 🚀 راهنمای کامل SEO برای پورتفولیو Sina Zare

این راهنما تمام بهینه‌سازی‌های SEO که برای پورتفولیو شما پیاده‌سازی شده است را شرح می‌دهد.

## 📋 فهرست مطالب

1. [تنظیمات اصلی SEO](#تنظیمات-اصلی-seo)
2. [Meta Tags](#meta-tags)
3. [Structured Data](#structured-data)
4. [Sitemap و Robots](#sitemap-و-robots)
5. [Search Engine Verification](#search-engine-verification)
6. [Performance Optimization](#performance-optimization)
7. [Security Headers](#security-headers)
8. [چک‌لیست SEO](#چک‌لیست-seo)

## 🔧 تنظیمات اصلی SEO

### Nuxt Config بهینه‌سازی شده

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  site: {
    url: 'https://sinazare.xyz',
    name: 'Sina Zare - Creative Developer Portfolio',
    description: 'Independent Creative Developer with 3+ years of experience...',
    keywords: ['Sina Zare', 'Developer', 'Portfolio', '...'],
    author: 'Sina Zare'
  },
  
  // Sitemap و Robots
  modules: [
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
  ]
})
```

## 🏷️ Meta Tags

### کامپوننت SEO

فایل `components/SEO.vue` شامل:

- **Basic Meta Tags**: title, description, keywords
- **Open Graph Tags**: برای شبکه‌های اجتماعی
- **Twitter Cards**: برای Twitter
- **Canonical URLs**: جلوگیری از محتوای تکراری
- **Hreflang Tags**: پشتیبانی چندزبانه

### کامپوننت Search Engine Verification

فایل `components/SearchEngineVerification.vue` شامل:

- Google Search Console
- Bing Webmaster Tools
- Yandex Webmaster
- Baidu Webmaster Tools
- Naver Search Advisor
- Seznam.cz
- Pinterest Domain Verification
- Facebook Domain Verification

## 📊 Structured Data

### Schema.org JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sina Zare",
  "alternateName": "سینا زارع",
  "jobTitle": "Creative Developer",
  "description": "Independent Creative Developer with 3+ years of experience",
  "url": "https://sinazare.xyz",
  "sameAs": [
    "https://github.com/sina-sparkn",
    "https://www.linkedin.com/in/sina-zare-a01550238/",
    "https://t.me/sinazarexyz"
  ],
  "knowsAbout": [
    "Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS",
    "Redux", "Zustand", "Git", "Jest", "NestJS"
  ]
}
```

## 🗺️ Sitemap و Robots

### Sitemap.xml

فایل `public/sitemap.xml` شامل:

- صفحه اصلی (انگلیسی و فارسی)
- فایل رزومه
- Hreflang tags برای چندزبانه

### Robots.txt

فایل `public/robots.txt` شامل:

- اجازه دسترسی به تمام صفحات
- منع دسترسی به فولدرهای admin و private
- مشخص کردن مسیر sitemap

## 🔍 Search Engine Verification

### فایل‌های Verification

برای تایید مالکیت در موتورهای جستجو:

- `google[code].html` - Google Search Console
- `BingSiteAuth.xml` - Bing Webmaster Tools
- `yandex_[code].html` - Yandex Webmaster
- `baidu_[code].html` - Baidu Webmaster Tools
- و سایر موتورهای جستجو...

### نحوه استفاده

1. در Google Search Console ثبت‌نام کنید
2. کد verification را دریافت کنید
3. کد را در `components/SearchEngineVerification.vue` جایگزین کنید
4. همین کار را برای سایر موتورهای جستجو انجام دهید

## ⚡ Performance Optimization

### .htaccess (برای Apache)

فایل `public/.htaccess` شامل:

- فشرده‌سازی GZIP
- Browser Caching
- Security Headers
- HTTPS Redirect
- WWW to non-WWW Redirect

### PWA Manifest

فایل `public/manifest.json` شامل:

- نام اپلیکیشن
- آیکون‌ها
- تنظیمات نمایش
- رنگ‌بندی

## 🔒 Security Headers

### Headers امنیتی

```apache
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
```

### Security.txt

فایل `public/.well-known/security.txt` برای گزارش مسائل امنیتی.

## ✅ چک‌لیست SEO

### Meta Tags
- [x] Title Tags
- [x] Meta Description
- [x] Meta Keywords
- [x] Canonical URLs
- [x] Hreflang Tags
- [x] Open Graph Tags
- [x] Twitter Cards

### Technical SEO
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Structured Data (JSON-LD)
- [x] Search Engine Verification
- [x] SSL Certificate (HTTPS)
- [x] Mobile Optimization
- [x] Page Speed Optimization

### Content SEO
- [x] Semantic HTML
- [x] Proper Heading Structure (H1, H2, etc.)
- [x] Alt Tags for Images
- [x] Internal Linking
- [x] External Links with rel="noopener"

### Performance
- [x] Image Optimization
- [x] CSS/JS Minification
- [x] GZIP Compression
- [x] Browser Caching
- [x] CDN Ready

### Security
- [x] Security Headers
- [x] HTTPS Redirect
- [x] Content Security Policy
- [x] XSS Protection

## 🚀 مراحل بعدی

### 1. تنظیم Search Console

```bash
# Google Search Console
https://search.google.com/search-console

# Bing Webmaster Tools
https://www.bing.com/webmasters

# Yandex Webmaster
https://webmaster.yandex.com
```

### 2. تست SEO

```bash
# Google PageSpeed Insights
https://pagespeed.web.dev/

# GTmetrix
https://gtmetrix.com/

# SEO Checker
https://www.seobility.net/en/seocheck/
```

### 3. مانیتورینگ

- Google Analytics
- Google Search Console
- Bing Webmaster Tools
- Core Web Vitals

## 📞 پشتیبانی

اگر سوالی در مورد SEO دارید، با من تماس بگیرید:

- **Email**: sinazare.xyz@gmail.com
- **Telegram**: @sinazarexyz
- **Website**: https://sinazare.xyz

---

**نکته**: کدهای verification در فایل‌های HTML و meta tags باید با کدهای واقعی از موتورهای جستجو جایگزین شوند.
