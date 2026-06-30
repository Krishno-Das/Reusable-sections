// ─────────────────────────────────────────────
//  SECTION CATALOG — DATA FILE
//  Add your own sections by copying the template
//  at the bottom of this file.
// ─────────────────────────────────────────────

const SECTIONS = [

  {
    id: "nav-01",
    code: "NAV-01",
    name: "Split Navbar",
    category: "Navbar",
    tags: ["navbar","navigation","header","cta"],
    thumbnail: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="44" width="252" height="72" rx="3" fill="#1e3a4a" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="30" y="62" width="32" height="8" rx="2" fill="#4fa8a8"/>
      <rect x="84" y="66" width="26" height="4" rx="2" fill="#3d6070"/>
      <rect x="118" y="66" width="26" height="4" rx="2" fill="#3d6070"/>
      <rect x="152" y="66" width="26" height="4" rx="2" fill="#3d6070"/>
      <rect x="196" y="60" width="52" height="16" rx="3" fill="#c97a3d"/>
      <text x="14" y="134" font-family="monospace" font-size="10" fill="#4fa8a8">NAV-01 · Split Navbar</text>
    </svg>`,
    html: `<nav class="nav-split">
  <a href="#" class="nav-split__logo">YourBrand</a>
  <ul class="nav-split__links">
    <li><a href="#">Product</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">About</a></li>
  </ul>
  <a href="#" class="nav-split__cta">Get started</a>
</nav>`,
    css: `/* ── Split Navbar ── */
.nav-split {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 28px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  font-family: system-ui, sans-serif;
}
.nav-split__logo {
  font-weight: 700;
  font-size: 17px;
  color: #111;
  text-decoration: none;
  letter-spacing: -0.01em;
}
.nav-split__links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-split__links a {
  color: #555;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.15s;
}
.nav-split__links a:hover { color: #111; }
.nav-split__cta {
  background: #111;
  color: #fff;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.15s;
}
.nav-split__cta:hover { background: #333; }
@media (max-width: 640px) { .nav-split__links { display: none; } }`
  },

  {
    id: "hero-01",
    code: "HERO-01",
    name: "Split Hero",
    category: "Hero",
    tags: ["hero","banner","cta","image"],
    thumbnail: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#14202a"/>
      <rect x="16" y="28" width="90" height="8" rx="2" fill="#e9e4d8"/>
      <rect x="16" y="44" width="72" height="8" rx="2" fill="#e9e4d8"/>
      <rect x="16" y="68" width="84" height="4" rx="2" fill="#3d6070"/>
      <rect x="16" y="78" width="64" height="4" rx="2" fill="#3d6070"/>
      <rect x="16" y="96" width="56" height="18" rx="3" fill="#c97a3d"/>
      <rect x="148" y="20" width="116" height="116" rx="6" fill="#1e3a4a" stroke="#2e5a6e" stroke-width="1"/>
      <line x1="148" y1="20" x2="264" y2="136" stroke="#2e5a6e" stroke-width="1"/>
      <line x1="264" y1="20" x2="148" y2="136" stroke="#2e5a6e" stroke-width="1"/>
      <text x="16" y="152" font-family="monospace" font-size="9" fill="#4fa8a8">HERO-01 · Split Hero</text>
    </svg>`,
    html: `<section class="hero-split">
  <div class="hero-split__body">
    <h1 class="hero-split__heading">Build interfaces<br>faster.</h1>
    <p class="hero-split__sub">Clean markup, no framework lock-in. Drop it straight into any project.</p>
    <a href="#" class="hero-split__cta">Get started →</a>
  </div>
  <div class="hero-split__visual" aria-hidden="true"></div>
</section>`,
    css: `/* ── Split Hero ── */
.hero-split {
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 72px 32px;
  max-width: 1120px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
}
.hero-split__body { flex: 1; }
.hero-split__heading {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #0f1112;
  margin: 0 0 18px;
}
.hero-split__sub {
  font-size: 17px;
  color: #5a6472;
  line-height: 1.6;
  margin: 0 0 32px;
  max-width: 400px;
}
.hero-split__cta {
  display: inline-block;
  background: #0f1112;
  color: #fff;
  padding: 14px 26px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
}
.hero-split__visual {
  flex: 1;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #f0ece0 0%, #ddd6c0 100%);
  border-radius: 16px;
}
@media (max-width: 768px) {
  .hero-split { flex-direction: column; padding: 48px 20px; }
  .hero-split__heading { font-size: 36px; }
  .hero-split__visual { width: 100%; }
}`
  },

  {
    id: "pricing-01",
    code: "PRICING-01",
    name: "3-Tier Pricing",
    category: "Pricing",
    tags: ["pricing","cards","plans","saas"],
    thumbnail: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#14202a"/>
      <rect x="14" y="24" width="72" height="112" rx="3" fill="#1e3a4a" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="102" y="16" width="76" height="128" rx="3" fill="#1e3a4a" stroke="#c97a3d" stroke-width="1.5"/>
      <rect x="194" y="24" width="72" height="112" rx="3" fill="#1e3a4a" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="24" y="40" width="52" height="6" rx="2" fill="#3d6070"/>
      <rect x="112" y="32" width="56" height="6" rx="2" fill="#4fa8a8"/>
      <rect x="204" y="40" width="52" height="6" rx="2" fill="#3d6070"/>
      <rect x="24" y="56" width="38" height="10" rx="2" fill="#e9e4d8"/>
      <rect x="112" y="48" width="42" height="12" rx="2" fill="#e9e4d8"/>
      <rect x="204" y="56" width="38" height="10" rx="2" fill="#e9e4d8"/>
      <rect x="24" y="110" width="52" height="14" rx="3" fill="none" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="112" y="106" width="56" height="16" rx="3" fill="#c97a3d"/>
      <rect x="204" y="110" width="52" height="14" rx="3" fill="none" stroke="#2e5a6e" stroke-width="1"/>
      <text x="14" y="154" font-family="monospace" font-size="9" fill="#4fa8a8">PRICING-01 · 3-Tier</text>
    </svg>`,
    html: `<section class="pricing-grid">
  <div class="pricing-grid__card">
    <p class="pricing-grid__tier">Starter</p>
    <p class="pricing-grid__price">$0<span>/mo</span></p>
    <ul>
      <li>1 project</li>
      <li>Community support</li>
      <li>Basic exports</li>
    </ul>
    <a href="#" class="pricing-grid__btn">Choose plan</a>
  </div>
  <div class="pricing-grid__card pricing-grid__card--featured">
    <p class="pricing-grid__badge">Most popular</p>
    <p class="pricing-grid__tier">Pro</p>
    <p class="pricing-grid__price">$24<span>/mo</span></p>
    <ul>
      <li>Unlimited projects</li>
      <li>Priority support</li>
      <li>Advanced exports</li>
    </ul>
    <a href="#" class="pricing-grid__btn">Choose plan</a>
  </div>
  <div class="pricing-grid__card">
    <p class="pricing-grid__tier">Team</p>
    <p class="pricing-grid__price">$59<span>/mo</span></p>
    <ul>
      <li>Everything in Pro</li>
      <li>5 seats included</li>
      <li>Shared workspace</li>
    </ul>
    <a href="#" class="pricing-grid__btn">Choose plan</a>
  </div>
</section>`,
    css: `/* ── 3-Tier Pricing ── */
.pricing-grid {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 56px 32px;
  max-width: 960px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
}
.pricing-grid__card {
  flex: 1;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 28px 22px;
  background: #fff;
}
.pricing-grid__card--featured {
  border-color: #0f1112;
  box-shadow: 0 12px 32px rgba(0,0,0,0.10);
  transform: translateY(-10px);
}
.pricing-grid__badge {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #c97a3d;
  margin: 0 0 6px;
}
.pricing-grid__tier {
  font-size: 15px;
  font-weight: 600;
  color: #0f1112;
  margin: 0 0 6px;
}
.pricing-grid__price {
  font-size: 36px;
  font-weight: 800;
  color: #0f1112;
  margin: 0 0 20px;
  letter-spacing: -0.02em;
}
.pricing-grid__price span { font-size: 14px; font-weight: 400; color: #9ca3af; }
.pricing-grid__card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  font-size: 14px;
  color: #555;
  line-height: 2;
}
.pricing-grid__btn {
  display: block;
  text-align: center;
  padding: 11px;
  border: 1.5px solid #0f1112;
  border-radius: 7px;
  color: #0f1112;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}
.pricing-grid__card--featured .pricing-grid__btn {
  background: #0f1112;
  color: #fff;
}
@media (max-width: 720px) {
  .pricing-grid { flex-direction: column; }
  .pricing-grid__card--featured { transform: none; }
}`
  },

  {
    id: "cards-01",
    code: "CARDS-01",
    name: "Feature Cards",
    category: "Cards",
    tags: ["cards","features","grid","icons"],
    thumbnail: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#14202a"/>
      <rect x="14" y="14" width="116" height="60" rx="3" fill="#1e3a4a" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="150" y="14" width="116" height="60" rx="3" fill="#1e3a4a" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="14" y="86" width="116" height="60" rx="3" fill="#1e3a4a" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="150" y="86" width="116" height="60" rx="3" fill="#1e3a4a" stroke="#c97a3d" stroke-width="1"/>
      <rect x="24" y="24" width="20" height="16" rx="2" fill="#4fa8a8"/>
      <rect x="160" y="24" width="20" height="16" rx="2" fill="#4fa8a8"/>
      <rect x="24" y="96" width="20" height="16" rx="2" fill="#4fa8a8"/>
      <rect x="160" y="96" width="20" height="16" rx="2" fill="#c97a3d"/>
      <rect x="52" y="28" width="60" height="5" rx="2" fill="#e9e4d8"/>
      <rect x="188" y="28" width="60" height="5" rx="2" fill="#e9e4d8"/>
      <rect x="52" y="100" width="60" height="5" rx="2" fill="#e9e4d8"/>
      <rect x="188" y="100" width="60" height="5" rx="2" fill="#e9e4d8"/>
      <rect x="24" y="50" width="96" height="3" rx="2" fill="#2e5a6e"/>
      <rect x="160" y="50" width="96" height="3" rx="2" fill="#2e5a6e"/>
      <rect x="24" y="122" width="96" height="3" rx="2" fill="#2e5a6e"/>
      <rect x="160" y="122" width="96" height="3" rx="2" fill="#2e5a6e"/>
      <text x="14" y="155" font-family="monospace" font-size="9" fill="#4fa8a8">CARDS-01 · Feature Grid</text>
    </svg>`,
    html: `<section class="feature-cards">
  <article class="feature-cards__item">
    <div class="feature-cards__icon">⚡</div>
    <h3>Fast setup</h3>
    <p>Drop the markup in and it just works — no build step required.</p>
  </article>
  <article class="feature-cards__item">
    <div class="feature-cards__icon">♿</div>
    <h3>Accessible</h3>
    <p>Semantic HTML and visible focus states out of the box.</p>
  </article>
  <article class="feature-cards__item">
    <div class="feature-cards__icon">📱</div>
    <h3>Responsive</h3>
    <p>Looks right from 320px phones up to wide desktop screens.</p>
  </article>
  <article class="feature-cards__item">
    <div class="feature-cards__icon">🎨</div>
    <h3>Themeable</h3>
    <p>Swap the CSS variables and it matches any brand palette.</p>
  </article>
</section>`,
    css: `/* ── Feature Cards ── */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 56px 32px;
  max-width: 880px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
}
.feature-cards__item {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  background: #fff;
}
.feature-cards__icon {
  font-size: 28px;
  margin-bottom: 14px;
}
.feature-cards__item h3 {
  font-size: 16px;
  font-weight: 700;
  color: #0f1112;
  margin: 0 0 8px;
}
.feature-cards__item p {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}
@media (max-width: 560px) {
  .feature-cards { grid-template-columns: 1fr; padding: 40px 16px; }
}`
  },

  {
    id: "footer-01",
    code: "FOOTER-01",
    name: "Dark Column Footer",
    category: "Footer",
    tags: ["footer","dark","columns","links","social"],
    thumbnail: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#14202a"/>
      <line x1="14" y1="32" x2="266" y2="32" stroke="#2e5a6e" stroke-width="1" stroke-dasharray="4 3"/>
      <rect x="14" y="44" width="40" height="5" rx="2" fill="#4fa8a8"/>
      <rect x="84" y="44" width="40" height="5" rx="2" fill="#4fa8a8"/>
      <rect x="154" y="44" width="40" height="5" rx="2" fill="#4fa8a8"/>
      <rect x="224" y="44" width="40" height="5" rx="2" fill="#4fa8a8"/>
      <rect x="14" y="58" width="32" height="3" rx="2" fill="#3d6070"/>
      <rect x="14" y="68" width="28" height="3" rx="2" fill="#3d6070"/>
      <rect x="14" y="78" width="30" height="3" rx="2" fill="#3d6070"/>
      <rect x="84" y="58" width="32" height="3" rx="2" fill="#3d6070"/>
      <rect x="84" y="68" width="28" height="3" rx="2" fill="#3d6070"/>
      <rect x="84" y="78" width="30" height="3" rx="2" fill="#3d6070"/>
      <rect x="154" y="58" width="32" height="3" rx="2" fill="#3d6070"/>
      <rect x="154" y="68" width="28" height="3" rx="2" fill="#3d6070"/>
      <rect x="154" y="78" width="30" height="3" rx="2" fill="#3d6070"/>
      <circle cx="232" cy="64" r="9" fill="none" stroke="#3d6070" stroke-width="1.5"/>
      <circle cx="252" cy="64" r="9" fill="none" stroke="#3d6070" stroke-width="1.5"/>
      <line x1="14" y1="110" x2="266" y2="110" stroke="#2e5a6e" stroke-width="1" stroke-dasharray="4 3"/>
      <rect x="14" y="120" width="70" height="4" rx="2" fill="#2e5a6e"/>
      <text x="14" y="154" font-family="monospace" font-size="9" fill="#4fa8a8">FOOTER-01 · Dark Columns</text>
    </svg>`,
    html: `<footer class="footer-dark">
  <div class="footer-dark__inner">
    <div class="footer-dark__col">
      <p class="footer-dark__heading">Product</p>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Changelog</a>
    </div>
    <div class="footer-dark__col">
      <p class="footer-dark__heading">Company</p>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Careers</a>
    </div>
    <div class="footer-dark__col">
      <p class="footer-dark__heading">Resources</p>
      <a href="#">Docs</a>
      <a href="#">Support</a>
      <a href="#">Status</a>
    </div>
    <div class="footer-dark__col">
      <p class="footer-dark__heading">Follow</p>
      <div class="footer-dark__socials">
        <a href="#" aria-label="Twitter">𝕏</a>
        <a href="#" aria-label="GitHub">⌥</a>
      </div>
    </div>
  </div>
  <div class="footer-dark__bottom">
    <p>© 2026 Your Company. All rights reserved.</p>
  </div>
</footer>`,
    css: `/* ── Dark Column Footer ── */
.footer-dark {
  background: #0f1112;
  color: #d1d5db;
  font-family: system-ui, sans-serif;
}
.footer-dark__inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 32px 32px;
}
.footer-dark__heading {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  margin: 0 0 14px;
}
.footer-dark__col a {
  display: block;
  font-size: 14px;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.15s;
}
.footer-dark__col a:hover { color: #fff; }
.footer-dark__socials { display: flex; gap: 10px; }
.footer-dark__socials a {
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid #374151;
  border-radius: 50%;
  font-size: 13px;
  margin-bottom: 0;
}
.footer-dark__bottom {
  border-top: 1px solid #1f2937;
  max-width: 960px;
  margin: 0 auto;
  padding: 18px 32px;
  font-size: 13px;
  color: #6b7280;
}
.footer-dark__bottom p { margin: 0; }
@media (max-width: 640px) {
  .footer-dark__inner { grid-template-columns: repeat(2, 1fr); }
}`
  },

  {
    id: "subscribe-01",
    code: "SUB-01",
    name: "Email Subscribe",
    category: "Marketing",
    tags: ["email","subscribe","newsletter","form","cta"],
    thumbnail: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#14202a"/>
      <rect x="40" y="24" width="200" height="112" rx="6" fill="#1e3a4a" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="80" y="44" width="120" height="8" rx="2" fill="#e9e4d8"/>
      <rect x="70" y="60" width="140" height="4" rx="2" fill="#3d6070"/>
      <rect x="56" y="88" width="110" height="24" rx="4" fill="#14202a" stroke="#2e5a6e" stroke-width="1"/>
      <rect x="174" y="88" width="54" height="24" rx="4" fill="#c97a3d"/>
      <rect x="66" y="98" width="60" height="4" rx="2" fill="#2e5a6e"/>
      <rect x="184" y="98" width="34" height="4" rx="2" fill="#fff" opacity="0.6"/>
      <text x="40" y="152" font-family="monospace" font-size="9" fill="#4fa8a8">SUB-01 · Email Subscribe</text>
    </svg>`,
    html: `<section class="subscribe-block">
  <h2 class="subscribe-block__heading">Stay in the loop</h2>
  <p class="subscribe-block__sub">Get updates on new sections and components, straight to your inbox.</p>
  <div class="subscribe-block__form">
    <input type="email" class="subscribe-block__input" placeholder="you@example.com" aria-label="Email address">
    <button class="subscribe-block__btn" type="button">Subscribe</button>
  </div>
</section>`,
    css: `/* ── Email Subscribe ── */
.subscribe-block {
  text-align: center;
  padding: 72px 32px;
  max-width: 560px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
}
.subscribe-block__heading {
  font-size: 30px;
  font-weight: 800;
  color: #0f1112;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}
.subscribe-block__sub {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 32px;
}
.subscribe-block__form {
  display: flex;
  gap: 8px;
}
.subscribe-block__input {
  flex: 1;
  padding: 12px 16px;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  color: #111;
  outline: none;
  font-family: inherit;
}
.subscribe-block__input:focus { border-color: #0f1112; }
.subscribe-block__btn {
  background: #0f1112;
  color: #fff;
  padding: 12px 22px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}
.subscribe-block__btn:hover { background: #333; }
@media (max-width: 480px) {
  .subscribe-block__form { flex-direction: column; }
}`
  },

  // ─────────────────────────────────────────────
  // TEMPLATE: Copy this block to add a new section
  // ─────────────────────────────────────────────
  // {
  //   id: "category-02",          // unique, lowercase, no spaces
  //   code: "CAT-02",             // label on the card
  //   name: "Section Name",
  //   category: "Category",       // used for filter tabs
  //   tags: ["tag1","tag2"],       // used for search
  //   thumbnail: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
  //     <!-- draw a simple schematic here -->
  //   </svg>`,
  //   html: `<!-- your markup here -->`,
  //   css: `/* your styles here */`
  // },

];
