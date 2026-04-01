import { teamMembers } from "./teamData";

export function heroSection(): string {
  return `
    <section class="hero auto-bg" data-image-base="hero-coffee">
      <span class="asset-placeholder-label hero-placeholder">IMAGE PLACEHOLDER</span>
      <div class="container hero-content reveal">
        <h1>Premium Fresh &amp;<br/>Dry Produce,<br/><span class="hero-accent">Sustainably</span><br/>Sourced</h1>
        <p>Connecting Ugandan farmers directly to international markets. We deliver high-quality agricultural products with fair trade practices that empower local communities.</p>
        <div class="cta-row">
          <a href="products" class="btn btn-primary">Explore Products</a>
          <a href="quote" class="btn btn-outline">Get a Quote</a>
        </div>
      </div>
      <div class="container hero-kpis-wrap reveal">
        <div class="hero-kpis">
          <article class="hero-kpi">
            <strong>15+</strong>
            <span>Years<br/>Experience</span>
          </article>
          <article class="hero-kpi">
            <strong>10+</strong>
            <span>Countries<br/>Served</span>
          </article>
          <article class="hero-kpi">
            <strong>500+</strong>
            <span>Partner<br/>Farmers</span>
          </article>
          <article class="hero-kpi hero-kpi-highlight">
            <strong>100%</strong>
            <span>Sustainable</span>
          </article>
        </div>
      </div>
    </section>
  `;
}

export function processSection(): string {
  return `
    <section class="section soft-green">
      <div class="container">
        <div class="section-head reveal">
          <h2>Our Export Process</h2>
          <p>A seamless four-step journey from your order to international delivery with full quality assurance.</p>
        </div>
        <div class="card-grid four">
          ${[
            ["1", "Quote & Order", "Submit your export requirements through our simple quote form."],
            ["2", "Sourcing & Quality", "Source fresh produce from trusted Ugandan farmers with checks."],
            ["3", "Documentation", "Complete handling of all export documents and certifications."],
            ["4", "Shipping & Delivery", "Safe transport via air or sea with cold chain management."]
          ]
            .map(
              (step) => `
            <article class="step-card reveal">
              <span class="step-pill">${step[0]}</span>
              <h3>${step[1]}</h3>
              <p>${step[2]}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function productsSection(): string {
  const products = [
    {
      base: "product-coffee",
      image: "/product-coffee.png",
      title: "Ugandan Coffee",
      summary: "Specialty and commercial coffee sourced from high-altitude regions with traceable farmer networks.",
      varieties: "Arabica (Bugisu, Sipi) and Robusta (Central Uganda)",
      packaging: "60 kg jute bags, GrainPro-lined bags, and private-label options",
      formats: "Green beans, screen-graded lots, and selected microlots"
    },
    {
      base: "product-fruits",
      image: "/product-fruits.jpg",
      title: "Fresh Fruits",
      summary: "Export-grade tropical fruits selected for taste, shelf life, and consistent size profiles.",
      varieties: "Pineapple (Smooth Cayenne), mango (Apple/Kent), avocado (Hass/Fuerte), passion fruit",
      packaging: "4 kg to 10 kg ventilated cartons, clamshells, and palletized cold-chain loads",
      formats: "Air-freight premium packs and sea-freight controlled-ripening packs"
    },
    {
      base: "product-vegetables",
      image: "/product-vegetables.png",
      title: "Fresh Vegetables",
      summary: "Farm-fresh vegetables harvested to order and prepared to meet retail and wholesale specifications.",
      varieties: "Hot peppers, French beans, okra, eggplant, tomatoes, and leafy assortments",
      packaging: "2 kg to 8 kg produce boxes, perforated liners, and moisture-control packs",
      formats: "Trimmed, graded, and mixed-load consignments"
    },
    {
      base: "product-foods",
      image: "/product-foods.jpg",
      title: "Grains & Legumes",
      summary: "Cleaned and sorted staples for food service, retail, and ingredient supply chains.",
      varieties: "Sesame, maize, beans, soybeans, and other seasonal commodity lines",
      packaging: "25 kg and 50 kg PP bags, bulk sacks, and custom labeled retail packs",
      formats: "Machine-cleaned, handpicked premium grades, and contract-volume supply"
    }
  ];

  return `
    <section class="section white-bg">
      <div class="container">
        <div class="section-head reveal">
          <h2>Premium Ugandan Products</h2>
          <p>From premium coffee to fresh produce and dry commodities, each product line includes clear variety, grading, and packaging options for international buyers.</p>
        </div>
        <div class="card-grid four products-grid">
          ${products
            .map(
              (item) => `
            <article class="product-card reveal">
              <img class="product-media-image" src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
              <div class="product-body">
                <h3>${item.title}</h3>
                <p class="product-summary">${item.summary}</p>
                <ul class="product-specs">
                  <li><strong>Types:</strong> ${item.varieties}</li>
                  <li><strong>Packaging:</strong> ${item.packaging}</li>
                  <li><strong>Export Formats:</strong> ${item.formats}</li>
                </ul>
              </div>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function marketsSection(): string {
  return `
    <section class="section green-splash auto-bg" data-image-base="market-network">
      <span class="asset-placeholder-label section-placeholder">IMAGE PLACEHOLDER</span>
      <div class="container">
        <div class="section-head on-dark reveal">
          <h2>Exporting to 3 Continents</h2>
          <p>From the heart of Uganda to markets across Europe, the Middle East, and Asia.</p>
        </div>
        <div class="card-grid three glass-grid">
          ${[
            ["Europe", "Serving premium markets with high-quality Ugandan coffee, fresh produce, and agricultural products."],
            ["Middle East", "Trusted supplier of fresh fruits, vegetables, and specialty products to Gulf markets."],
            ["Asia", "Growing presence in Asian markets with premium coffee and agricultural exports."]
          ]
            .map(
              (market) => `
            <article class="glass-card reveal">
              <h3>${market[0]}</h3>
              <p>${market[1]}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function aboutHeroSection(): string {
  return `
    <section class="section about-hero auto-bg" data-image-base="pic">
      <span class="asset-placeholder-label section-placeholder">IMAGE PLACEHOLDER</span>
      <div class="container about-hero-content reveal">
        <h1>Built In Uganda, Trusted Across Global Markets</h1>
        <p>Triport Agro International Limited is an export-focused agribusiness connecting farmer communities to international buyers through high-quality produce, transparent sourcing, and dependable logistics.</p>
        <div class="about-hero-tags">
          <span>Farmer Partnerships</span>
          <span>Traceable Supply</span>
          <span>Export Compliance</span>
        </div>
      </div>
    </section>
  `;
}

export function aboutValuesSection(): string {
  const values = [
    [
      "Quality Without Compromise",
      "Every shipment is selected, graded, and packed to meet destination-market standards for freshness, consistency, and shelf life."
    ],
    [
      "Fair Trade Partnerships",
      "We work directly with organized farmer groups and pay transparently, helping create sustainable income opportunities in rural communities."
    ],
    [
      "Reliable Export Execution",
      "From documentation and certification to shipment coordination, our team manages end-to-end export workflows with clear communication."
    ]
  ];

  return `
    <section class="section about-values-wrap">
      <div class="container">
        <div class="section-head reveal">
          <h2>How We Create Value</h2>
          <p>Our operations are built around quality, fairness, and reliability for both farmers and international buyers.</p>
        </div>
        <div class="card-grid three about-values-grid">
          ${values
            .map(
              (item) => `
            <article class="about-value-card reveal">
              <h3>${item[0]}</h3>
              <p>${item[1]}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function aboutSection(): string {
  return `
    <section class="section white-bg">
      <div class="container">
        <div class="section-head reveal">
          <h2>Your Trusted Ugandan Export Partner</h2>
          <p>Triport Agro International Limited connects organized farmer groups and global buyers through reliable sourcing, quality control, and export-ready logistics.</p>
        </div>
        <article class="about-panel reveal auto-bg" data-image-base="about-farm">
          <span class="asset-placeholder-label section-placeholder">IMAGE PLACEHOLDER</span>
          <div class="about-copy">
            <p>We build long-term partnerships with Ugandan farmers to source premium coffee, fresh fruits, vegetables, and dry commodities that meet international quality expectations.</p>
            <p>Our team manages selection, grading, packaging, and export documentation end-to-end so buyers receive consistent products, transparent communication, and dependable delivery windows.</p>
            <div class="about-highlights">
              <span>Farmer-First Sourcing</span>
              <span>Strict Quality Grading</span>
              <span>Export Documentation Support</span>
            </div>
            <a href="quote" class="btn btn-primary">Request Quote</a>
          </div>
          <div class="metrics">
            <div><strong>500+</strong><span>Partner Farmers</span></div>
            <div><strong>15+</strong><span>Countries Served</span></div>
            <div><strong>3</strong><span>Continents</span></div>
            <div><strong>10+</strong><span>Export Products</span></div>
          </div>
        </article>
      </div>
    </section>
  `;
}

export function ctaSection(imageBase = "cta-texture"): string {
  return `
    <section class="section pale-band">
      <div class="container reveal">
        <article class="cta-panel auto-bg" data-image-base="${imageBase}">
          <span class="asset-placeholder-label section-placeholder">IMAGE PLACEHOLDER</span>
          <h2>Global Export Solutions</h2>
          <p>Serving international buyers across Europe, Middle East, and beyond with certified export-quality produce.</p>
          <div class="tag-row">
            <span>Certified Quality</span>
            <span>Fast Processing</span>
            <span>Global Delivery</span>
          </div>
          <a href="quote" class="btn btn-light">Request Export Quote</a>
        </article>
      </div>
    </section>
  `;
}

export function proofStripSection(): string {
  return `
    <section class="section proof-strip-wrap">
      <div class="container">
        <div class="proof-strip reveal">
          <article class="proof-item">
            <strong>500+</strong>
            <span>Tons Exported Annually</span>
          </article>
          <article class="proof-item">
            <strong>15+</strong>
            <span>Countries Reached</span>
          </article>
          <article class="proof-item">
            <strong>100+</strong>
            <span>Satisfied Buyers</span>
          </article>
          <article class="proof-item">
            <strong>10+</strong>
            <span>Years Experience</span>
          </article>
        </div>
      </div>
    </section>
  `;
}

export function testimonialsSection(): string {
  const testimonials = [
    [
      "European Import Buyer",
      "Triport Agro International Limited has been our preferred coffee and produce supplier for three seasons. Quality consistency and communication are excellent."
    ],
    [
      "Retail Distributor, Gulf Region",
      "Documentation and shipment handling are always reliable. Their team understands export timelines and compliance requirements."
    ],
    [
      "Food Service Buyer, Asia",
      "Fresh produce quality is dependable and deliveries are on schedule. We value their transparent updates and responsive support."
    ]
  ];

  return `
    <section class="section testimonials-wrap" id="testimonials">
      <div class="container">
        <div class="section-head reveal">
          <h2>What Our Clients Say</h2>
          <p>Trusted by international buyers and local partners across global markets.</p>
        </div>
        <div class="testimonial-grid">
          ${testimonials
            .map(
              (entry) => `
            <article class="testimonial-card reveal">
              <div class="stars" aria-label="5 star rating">★★★★★</div>
              <p class="testimonial-quote">"${entry[1]}"</p>
              <h3>${entry[0]}</h3>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function teamSection(): string {
  const members = teamMembers;

  return `
    <section class="section team-wrap">
      <div class="container">
        <div class="section-head reveal">
          <h2>Our Team</h2>
          <p>Experienced leaders at the intersection of agriculture, technology, and finance.</p>
        </div>
        <div class="team-grid">
          ${members
            .map(
              (m, i) => `
            <article class="team-card reveal" id="team-${m.slug}">
              <div class="team-photo-wrap">
                <img class="team-photo" src="${m.image}" alt="${m.name}" loading="lazy" decoding="async" onerror="this.style.display='none'" style="object-position:${i === 0 ? 'top center' : 'center'}" />
              </div>
              <a href="/#team-${m.slug}" class="team-name-link">
                <h3 class="team-name">${m.name}</h3>
              </a>
              <span class="team-role">${m.role}</span>
              <span class="team-quals"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;flex-shrink:0"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> ${m.qualifications}</span>
              <button type="button" class="team-link" data-team-index="${i}">View Full Profile <span>&rsaquo;</span></button>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
    <script type="application/json" id="teamData">${JSON.stringify(members.map(m => ({ slug: m.slug, name: m.name, role: m.role, qualifications: m.qualifications, image: m.image, bio: m.bio, responsibilities: m.responsibilities, quote: m.quote })))}</script>
  `;
}

export function teamModalMarkup(): string {
  return `
    <div class="team-modal-overlay" id="teamModal" aria-hidden="true">
      <div class="team-modal" role="dialog" aria-modal="true">
        <button class="team-modal-close" id="teamModalClose" type="button" aria-label="Close profile">&times;</button>
        <div class="team-modal-header">
          <div class="team-modal-photo-wrap">
            <img class="team-modal-photo" id="teamModalPhoto" src="" alt="" decoding="async" />
          </div>
          <div class="team-modal-info">
            <h3 class="team-modal-name" id="teamModalName"></h3>
            <span class="team-modal-role" id="teamModalRole"></span>
            <span class="team-modal-quals" id="teamModalQuals"></span>
          </div>
        </div>
        <div class="team-modal-body" id="teamModalBody"></div>
        <div class="team-modal-responsibilities">
          <h4><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> Key Responsibilities</h4>
          <ul id="teamModalResponsibilities"></ul>
        </div>
        <blockquote class="team-modal-quote" id="teamModalQuote"></blockquote>
      </div>
    </div>
  `;
}

export function faqSection(): string {
  const rows = [
    ["What are your minimum order quantities for export?", "Minimum order quantities vary by product and destination. Most export orders start from one consolidated container load."],
    ["Which countries do you export to?", "We export to markets in Europe, the Middle East, and Asia, with documentation prepared per destination requirements."],
    ["How long does shipping take?", "Lead times depend on product type and destination. Typical dispatch windows range from 7 to 21 days after order confirmation."],
    ["Do you provide quality certifications?", "Yes. We coordinate required certifications, phytosanitary documentation, and compliance paperwork for each shipment."]
  ];

  return `
    <section class="section faq-wrap">
      <div class="container">
        <div class="section-head reveal">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about ordering and exporting.</p>
        </div>
        <div class="faq-list">
          ${rows
            .map(
              (entry, i) => `
            <details class="faq-item reveal" ${i === 0 ? "open" : ""}>
              <summary>${entry[0]}</summary>
              <div class="faq-answer"><div class="faq-answer-inner"><p>${entry[1]}</p></div></div>
            </details>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function quoteSection(): string {
  const steps = [
    ["1", "Quotation Review", "We review your request details, product selection, quantity, and destination requirements."],
    ["2", "Offer & Confirmation", "We send a structured quotation with pricing, packaging options, and shipping terms."],
    ["3", "Preparation & Documentation", "After confirmation, we prepare products, quality checks, and export documentation."],
    ["4", "Dispatch & Updates", "Your shipment is dispatched and we share status updates until delivery." ]
  ];

  return `
    <section class="section white-bg">
      <div class="container">
        <div class="section-head reveal">
          <h2>Ready to Export to Your Market?</h2>
          <p>Submit your requirements and receive a professional export quotation tailored to your market, packaging, and logistics needs.</p>
        </div>
        <div class="quote-grid reveal">
          <div class="quote-image-wrap">
            <img src="/contact.png" alt="Contact Triport Agro International Limited" class="contact-image" onerror="this.style.display='none'" />
            <div class="contact-image-caption">
              <h3>Professional Export Support</h3>
              <p>From inquiry to shipment, our team coordinates quality, documentation, and logistics end to end.</p>
            </div>
          </div>
          <form class="quote-form" id="quoteForm">
            <label>Full Name<input name="name" type="text" placeholder="Your full name" required /></label>
            <label>Email Address<input name="email" type="email" placeholder="you@company.com" required /></label>
            <label>Phone Number<input name="phone" type="text" placeholder="+256 7xx xxx xxx" /></label>
            <label>Destination Country<input name="country" type="text" placeholder="Destination country" required /></label>

            <label>Product Interest
              <select name="product" required>
                <option value="">Select a product</option>
                <optgroup label="1. Coffee &amp; Beverage Crops">
                  <option value="Coffee (green beans)">Coffee (green beans)</option>
                  <option value="Cocoa">Cocoa</option>
                  <option value="Tea">Tea</option>
                  <option value="Vanilla">Vanilla</option>
                  <option value="Sugarcane">Sugarcane</option>
                </optgroup>
                <optgroup label="2. Fresh Fruits">
                  <option value="Banana">Banana</option>
                  <option value="Pineapple">Pineapple</option>
                  <option value="Mango">Mango</option>
                  <option value="Avocado">Avocado</option>
                  <option value="Passion Fruit">Passion Fruit</option>
                  <option value="Papaya">Papaya</option>
                  <option value="Watermelon">Watermelon</option>
                  <option value="Lemon">Lemon</option>
                  <option value="Lime">Lime</option>
                  <option value="Orange">Orange</option>
                  <option value="Guava">Guava</option>
                  <option value="Jackfruit">Jackfruit</option>
                  <option value="Dragon Fruit">Dragon Fruit</option>
                </optgroup>
                <optgroup label="3. Fresh Vegetables">
                  <option value="Tomato">Tomato</option>
                  <option value="Onion">Onion</option>
                  <option value="Garlic">Garlic</option>
                  <option value="Cabbage">Cabbage</option>
                  <option value="Carrot">Carrot</option>
                  <option value="Cucumber">Cucumber</option>
                  <option value="Eggplant">Eggplant</option>
                  <option value="Bell Pepper">Bell Pepper</option>
                  <option value="Chili Pepper">Chili Pepper</option>
                  <option value="Zucchini">Zucchini</option>
                </optgroup>
                <optgroup label="4. Fresh Legumes (Pulses)">
                  <option value="Green Beans">Green Beans</option>
                  <option value="Peas">Peas</option>
                  <option value="Cowpeas">Cowpeas</option>
                  <option value="Chickpea">Chickpea</option>
                  <option value="Lentil">Lentil</option>
                  <option value="Pigeon Pea">Pigeon Pea</option>
                </optgroup>
                <optgroup label="5. Root Crops (Fresh)">
                  <option value="Cassava">Cassava</option>
                  <option value="Sweet Potato">Sweet Potato</option>
                  <option value="Yam">Yam</option>
                  <option value="Ginger">Ginger</option>
                  <option value="Turmeric">Turmeric</option>
                </optgroup>
                <optgroup label="6. Fresh Herbs &amp; Spices">
                  <option value="Basil">Basil</option>
                  <option value="Mint">Mint</option>
                  <option value="Coriander">Coriander</option>
                  <option value="Parsley">Parsley</option>
                  <option value="Rosemary">Rosemary</option>
                  <option value="Thyme">Thyme</option>
                  <option value="Chili Pepper">Chili Pepper</option>
                </optgroup>
                <optgroup label="7. Nuts &amp; Oil Crops">
                  <option value="Macadamia">Macadamia</option>
                  <option value="Cashew">Cashew</option>
                  <option value="Groundnut">Groundnut</option>
                  <option value="Sesame">Sesame</option>
                  <option value="Sunflower Seed">Sunflower Seed</option>
                </optgroup>
              </select>
            </label>
            <label>Other Product (if applicable)<input name="other_product" type="text" placeholder="Specify other product" /></label>
            <label>Requested Quantity<input name="quantity" type="text" placeholder="e.g. 1 x 40ft, 2 tons, 500 kg" /></label>
            <label>Preferred Packaging
              <select name="packaging">
                <option value="">Select packaging</option>
                <option>60 kg jute bags</option>
                <option>GrainPro-lined bags</option>
                <option>4-10 kg ventilated cartons</option>
                <option>2-8 kg produce boxes</option>
                <option>25 kg PP bags</option>
                <option>50 kg PP bags</option>
                <option>Bulk</option>
                <option>Retail packs</option>
              </select>
            </label>

            <label>Destination Port<input name="port" type="text" placeholder="e.g. Mombasa, Rotterdam, Jebel Ali" /></label>
            <label>Container Type
              <select name="container">
                <option value="">Select container</option>
                <option>20ft Dry</option>
                <option>40ft Dry</option>
                <option>40ft High Cube</option>
                <option>20ft Reefer</option>
                <option>40ft Reefer</option>
                <option>Bulk</option>
              </select>
            </label>

            <label class="full">Additional Details / Message<textarea name="message" rows="4" placeholder="Any special handling, certifications required, or timeline"></textarea></label>
            <button type="submit" class="btn btn-primary full">Continue to Send</button>
          </form>
        </div>
        <section class="quote-steps reveal" aria-label="Quotation process steps">
          <h3>What Happens After You Submit</h3>
          <div class="quote-steps-grid">
            ${steps
              .map(
                (step) => `
              <article class="quote-step-card">
                <span class="step-pill">${step[0]}</span>
                <h4>${step[1]}</h4>
                <p>${step[2]}</p>
              </article>
            `
              )
              .join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}
