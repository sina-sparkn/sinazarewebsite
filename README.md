# Sina Zare - Creative Developer Portfolio

A modern, responsive portfolio website built with Nuxt 3, showcasing my skills and projects as a Creative Developer.

**🌐 Live Site:** [https://sinazare.xyz](https://sinazare.xyz)

## 🚀 Features

- **Multi-language Support**: English and Persian (فارسی)
- **Responsive Design**: Optimized for all devices
- **Dark/Light Theme**: Toggle between themes
- **SEO Optimized**: Complete SEO implementation
- **PWA Ready**: Progressive Web App capabilities
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS
- **Internationalization**: Nuxt i18n
- **SEO**: Built-in Nuxt SEO + custom implementation
- **Deployment**: Ready for production

## 📱 SEO Features

- ✅ Meta tags optimization
- ✅ Open Graph and Twitter Cards
- ✅ Structured Data (Schema.org)
- ✅ Sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Hreflang tags for multilingual support
- ✅ Performance optimization
- ✅ Security headers

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-project

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 🌍 Internationalization

The site supports multiple languages:
- **English** (default): `/`
- **Persian**: `/fa`

Language switching is handled automatically based on user preference.

## 📊 Performance

- Lighthouse Score: 95+
- Core Web Vitals: Optimized
- Loading Speed: < 2 seconds
- SEO Score: 100/100

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
NUXT_PUBLIC_SITE_URL=https://sinazare.xyz
NUXT_PUBLIC_SITE_NAME="Sina Zare Portfolio"
```

### SEO Settings

SEO configuration is in `nuxt.config.ts` and `components/SEO.vue`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: 'https://sinazare.xyz',
      siteName: 'Sina Zare Portfolio'
    }
  }
})
```

## 📁 Project Structure

```
my-project/
├── components/          # Vue components
│   ├── SEO.vue         # SEO component
│   └── SearchEngineVerification.vue
├── layouts/            # Layout templates
├── pages/              # Page components
├── public/             # Static assets
│   ├── robots.txt      # SEO robots
│   ├── sitemap.xml     # SEO sitemap
│   ├── manifest.json   # PWA manifest
│   └── .htaccess      # Apache optimization
├── assets/             # CSS and other assets
├── i18n.config.ts      # Internationalization
├── nuxt.config.ts      # Nuxt configuration
└── package.json        # Dependencies
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run generate

# Deploy to Netlify
```

### Traditional Hosting

```bash
# Build
npm run generate

# Upload dist/ folder to your server
```

## 📈 SEO Checklist

- [x] Meta tags optimization
- [x] Title and description tags
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Hreflang tags
- [x] Performance optimization
- [x] Mobile optimization
- [x] Security headers

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [https://sinazare.xyz](https://sinazare.xyz)
- **Email**: sinazare.xyz@gmail.com
- **Telegram**: [@sinazarexyz](https://t.me/sinazarexyz)
- **GitHub**: [sina-sparkn](https://github.com/sina-sparkn)
- **LinkedIn**: [Sina Zare](https://www.linkedin.com/in/sina-zare-a01550238/)

---

Built with ❤️ by [Sina Zare](https://sinazare.xyz)
