# فونت‌های Satoshi در پروژه

## توضیحات
این پروژه از فونت‌های Satoshi به عنوان فونت اصلی استفاده می‌کند. فونت‌ها به صورت محلی در پوشه `public/fonts` قرار دارند.

## فایل‌های فونت
- `Satoshi-Variable.woff2` - فرمت WOFF2 (بهینه‌ترین)
- `Satoshi-Variable.woff` - فرمت WOFF (پشتیبانی از مرورگرهای قدیمی)

## نحوه استفاده

### در CSS
```css
/* استفاده از کلاس‌های آماده */
.font-satoshi-light { font-weight: 300; }
.font-satoshi-normal { font-weight: 400; }
.font-satoshi-medium { font-weight: 500; }
.font-satoshi-semibold { font-weight: 600; }
.font-satoshi-bold { font-weight: 700; }
.font-satoshi-extrabold { font-weight: 800; }
.font-satoshi-black { font-weight: 900; }
```

### در Tailwind CSS
```html
<!-- استفاده از کلاس‌های Tailwind -->
<div class="font-satoshi font-light">متن با وزن 300</div>
<div class="font-satoshi font-normal">متن با وزن 400</div>
<div class="font-satoshi font-medium">متن با وزن 500</div>
<div class="font-satoshi font-semibold">متن با وزن 600</div>
<div class="font-satoshi font-bold">متن با وزن 700</div>
<div class="font-satoshi font-extrabold">متن با وزن 800</div>
<div class="font-satoshi font-black">متن با وزن 900</div>
```

### در Vue Components
```vue
<template>
  <div class="font-satoshi font-bold text-2xl">
    عنوان با فونت Satoshi Bold
  </div>
</template>
```

## مزایای استفاده از فونت‌های محلی
1. **سرعت بیشتر**: عدم نیاز به دانلود از Google Fonts
2. **حریم خصوصی**: عدم ارسال اطلاعات به سرورهای Google
3. **کنترل بهتر**: مدیریت مستقیم فایل‌های فونت
4. **عملکرد بهتر**: استفاده از فرمت WOFF2 بهینه

## پشتیبانی از مرورگرها
- **WOFF2**: Chrome 36+, Firefox 39+, Safari 12+, Edge 14+
- **WOFF**: Chrome 6+, Firefox 3.6+, Safari 5.1+, IE 9+

## نکات مهم
- فونت‌ها با `font-display: swap` تنظیم شده‌اند تا تجربه کاربری بهتری ارائه دهند
- فونت‌های fallback برای مرورگرهایی که فونت Satoshi را پشتیبانی نمی‌کنند تنظیم شده‌اند
- وزن فونت پیش‌فرض 400 (normal) است
