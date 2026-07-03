# Merve Civan — Product Portfolio (Sprint 1)

Bu, önceki mesajdaki brief'e göre kurulmuş ilk sprint: React (Vite) + Tailwind CSS v4 + Framer Motion + Lucide Icons ile responsive, dark-theme bir ana sayfa.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` açılır.

## Build & Deploy (Netlify)

```bash
npm run build
```

`dist/` klasörünü Netlify'a sürükle-bırak ile veya `netlify deploy --prod` ile yayınlayabilirsin.

## Neler tamamlandı (Sprint 1 kapsamı)

- Navbar (scroll'da blur efekti, mobil menü)
- Hero (typing animasyonu + imza öğesi: yüklenince kendini çizen bir retention curve — D1/D7/D30, işini tanımlayan somut bir görsel)
- Featured Case Studies (Match Factory!, Clash Royale, Royal Match — "coming soon" durumuyla)
- Product Skills grid
- Featured Projects (Meko Games GDD, Olist BI, Fog Veil GDD)
- Analytics Dashboard kartı (Olist projesi, oyun analitiğine bağlanan bir not ile)
- Articles listesi
- About ("Why Product?" hikayesi)
- Contact + Footer
- Renk paleti ve Space Grotesk font brief'teki gibi uygulandı
- Reduced-motion tercihi olan kullanıcılar için animasyonlar otomatik kısılıyor

## Senin doldurman gerekenler

- `src/pages/Home.jsx` içindeki Contact bölümünde `mailto:merve.civan@example.com`, LinkedIn ve GitHub linkleri placeholder — kendi bilgilerinle değiştir.
- `src/data/caseStudies.js` — Royal Match analizini yazınca `status: "coming-soon"` alanını `"published"` yap, `metrics` ve `summary` alanlarını doldur.
- Hero'daki profil görseli/illustration eklenmedi; brief'te "sağ tarafta illustration veya profil fotoğrafı" deniyordu, ben yerine imza öğesi olarak retention curve koydum çünkü işini doğrudan temsil ediyor. İstersen `src/components/Hero.jsx` içindeki SVG bloğunu bir fotoğrafla değiştirebilirsin.
- Articles bölümü kaldırıldı (henüz yazı yazılmadığı için). İleride yazmaya başlarsan haber ver, aynı yapıyı geri ekleyebiliriz.

## Sonraki sprint (brief'te belirtilen)

- `/case-studies/:slug` route'ları — solda table of contents, sağda okuma alanı olan gerçek case study sayfaları (`react-router-dom` zaten `package.json`'da kurulu ama henüz route'lara bağlanmadı çünkü Sprint 1 kapsamı sadece ana sayfaydı).
- About, Projects, Articles, Resume için ayrı sayfalar (şu an hepsi tek sayfada section olarak).
- Gerçek Power BI ekran görüntüsü (şu an DashboardCard'da temsili sayılar var).

## Tasarım notları

- Renk paleti ve Linear/Vercel hissiyatı brief'te net şekilde tanımlıydı, olduğu gibi uygulandı.
- Tek "imza" öğesi olarak Hero'daki kendini çizen retention curve'ü seçtim — rastgele bir dekorasyon değil, product analyst olarak her gün baktığın bir grafik türü. Geri kalan her şeyi (kart hover'ları, navbar blur) sakin tuttum ki bu öğe öne çıksın.
