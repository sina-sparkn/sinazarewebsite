<template>
  <!-- This component doesn't render anything visible -->
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Sina Zare - Creative Developer Portfolio'
  },
  description: {
    type: String,
    default: 'Independent Creative Developer with 3+ years of experience in Next.js, React, and modern web technologies. View my projects and get in touch.'
  },
  keywords: {
    type: String,
    default: 'Sina Zare, Developer, Portfolio, Next.js, React, Frontend, Web Development, Iran, Creative Developer'
  },
  image: {
    type: String,
    default: '/og-image.jpg'
  },
  url: {
    type: String,
    default: 'https://sinazare.xyz'
  },
  type: {
    type: String,
    default: 'website'
  }
});

const { locale } = useI18n();
const config = useRuntimeConfig();

// Dynamic SEO based on locale
const localizedTitle = computed(() => {
  if (locale.value === 'fa') {
    return `${props.title} - سینا زارع`;
  }
  return props.title;
});

const localizedDescription = computed(() => {
  if (locale.value === 'fa') {
    return 'توسعه دهنده خلاق و مستقل با بیش از ۳ سال تجربه در Next.js، React و تکنولوژی‌های مدرن وب. پروژه‌های من را ببینید و با من در تماس باشید.';
  }
  return props.description;
});

// Set SEO meta tags
useHead({
  title: localizedTitle,
  meta: [
    { name: 'description', content: localizedDescription },
    { name: 'keywords', content: props.keywords },
    { name: 'author', content: 'Sina Zare' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph
    { property: 'og:title', content: localizedTitle },
    { property: 'og:description', content: localizedDescription },
    { property: 'og:type', content: props.type },
    { property: 'og:url', content: props.url },
    { property: 'og:image', content: props.image },
    { property: 'og:site_name', content: 'Sina Zare Portfolio' },
    { property: 'og:locale', content: locale.value === 'fa' ? 'fa_IR' : 'en_US' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: localizedTitle },
    { name: 'twitter:description', content: localizedDescription },
    { name: 'twitter:image', content: props.image },
    { name: 'twitter:site', content: '@sinazarexyz' },
    
    // Additional SEO
    { name: 'theme-color', content: '#000000' },
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
  ],
  link: [
    { rel: 'canonical', href: props.url },
    { rel: 'alternate', hreflang: 'en', href: 'https://sinazare.xyz' },
    { rel: 'alternate', hreflang: 'fa', href: 'https://sinazare.xyz/fa' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://sinazare.xyz' }
  ]
});

// Set JSON-LD structured data
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sina Zare',
  alternateName: 'سینا زارع',
  jobTitle: 'Creative Developer',
  description: localizedDescription,
  url: props.url,
  sameAs: [
    'https://github.com/sina-sparkn',
    'https://www.linkedin.com/in/sina-zare-a01550238/',
    'https://t.me/sinazarexyz'
  ],
  knowsAbout: [
    'Next.js', 'React', 'JavaScript', 'TypeScript', 'Tailwind CSS',
    'Redux', 'Zustand', 'Git', 'Jest', 'NestJS'
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Frontend Developer',
    description: 'Creative developer specializing in modern web technologies'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
    description: 'Independent developer working on various projects'
  }
});
</script>
