export function renderFooter(): string {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img src="/logo-tripport.png" alt="Triport Agro International Limited" class="footer-logo-img" decoding="async" loading="lazy" onerror="this.style.display='none'" />
          <p class="footer-copy">Uganda's trusted agricultural export partner, delivering premium coffee, fresh fruits, vegetables, and food products to international markets.</p>
          <div class="social-row">
            <a href="https://www.facebook.com/triportagro" target="_blank" rel="noopener" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://twitter.com/triportagro" target="_blank" rel="noopener" aria-label="Twitter / X"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://www.linkedin.com/company/triportagro" target="_blank" rel="noopener" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="https://www.instagram.com/triportagro" target="_blank" rel="noopener" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="about">About Us</a>
          <a href="products">Export Products</a>
          <a href="retail">Retail Products</a>
          <a href="markets">Export Markets</a>
          <a href="quote">Contact Us</a>
        </div>
        <div>
          <h4>Export Products</h4>
          <a href="products">Ugandan Coffee</a> 
          <a href="products">Fresh Fruits</a>
          <a href="products">Fresh Vegetables</a>
          <a href="products">Fresh Foods</a>
          <a href="quote">Request Quote</a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>P.O. Box 114415<br/>Kampala, Uganda</p>
          <p>+256 (0) 700 683670</p>
          <p>+256 (0) 780 391916</p>
          <p>triportagro@gmail.com</p>
        </div>
      </div>
      <div class="container">
        <div class="footer-bottom">
          <p>© ${year} Triport Agro International Limited. All rights reserved.</p>
          <div class="footer-credit">
            <span class="credit-label">MADE &amp; DESIGNED BY</span>
            <a href="https://www.kavotech.uk" target="_blank" rel="noopener" class="credit-kavo-link" aria-label="Kavo Technologies UK website">Kavo Technologies UK</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
