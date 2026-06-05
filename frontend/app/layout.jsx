import './globals.css';
import NavBar from '../components/NavBar';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: '1HouseToHome India — Buy & Sell Property',
  description: "India's trusted property platform — buy, sell and invest across 100+ cities.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <header className="topbar">
          <span>List your property free — Zero brokerage</span>
          <a href="/faq">FAQs</a>
        </header>

        <NavBar />

        {children}

        <footer className="footer-main">
          <div className="footer-links-section">
            <div className="footer-links-group">
              <h4 className="footer-links-heading">Selling with 1HouseToHome</h4>
              <div className="footer-links-cols">
                <div className="footer-links-col">
                  <a href="/how-selling-works">How selling works in India</a>
                  <a href="/pricing-plans">Pricing plans</a>
                  <a href="/add-property">Post your property — free</a>
                  <a href="/sell">Find local agents</a>
                  <a href="/property-valuation">Free property valuation</a>
                </div>
                <div className="footer-links-col">
                  <a href="/property-valuation">Property valuation tools</a>
                  <a href="/sell">Nearby agent finder</a>
                  <a href="/sell">Market price trends</a>
                  <a href="/sell">Where 1HouseToHome advertises</a>
                  <a href="/sell">Virtual property tour</a>
                </div>
                <div className="footer-links-col">
                  <a href="/rera-guide">RERA & registry guide</a>
                  <a href="/services">Home inspection services</a>
                  <a href="/sell">Seller property guides</a>
                  <a href="/sell">Read seller reviews</a>
                  <div className="footer-links-trust">⭐ Google — 4.8/5 from 89k+ reviews</div>
                </div>
              </div>
            </div>

            <div className="footer-links-divider" />

            <div className="footer-links-group">
              <h4 className="footer-links-heading">Buying a property</h4>
              <div className="footer-links-cols">
                <div className="footer-links-col">
                  <a href="/listings">Search properties by city</a>
                  <a href="/listings?propertyType=apartment">New launch projects</a>
                  <a href="/listings">Ready-to-move homes</a>
                  <a href="/buy">Book site visit instantly</a>
                </div>
                <div className="footer-links-col">
                  <a href="/property-valuation">Budget calculator (₹)</a>
                  <a href="/home-loans">EMI calculator</a>
                  <a href="/buy">Property price trends</a>
                  <a href="/home-loans">Home loan assistance</a>
                </div>
                <div className="footer-links-col">
                  <a href="/legal-checklist">Legal checklist for buyers</a>
                  <a href="/buyer-guides">Documentation help</a>
                  <a href="/buyer-guides">Buyer property guides</a>
                  <div className="footer-links-trust">⭐ Google — 4.8/5 from 89k+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-main__top">
            <div className="footer-main__brand">
              <div className="footer-main__logo">1HouseTo<span>Home</span></div>
              <p className="footer-main__tagline">Apna Ghar. Apni Marzi.</p>
              <p className="footer-main__follow">Follow us for more</p>
              <div className="footer-main__socials">
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="YouTube">▶</a>
                <a href="#" aria-label="Instagram">◎</a>
              </div>
            </div>
            <div className="footer-main__col">
              <h4>Buy & Sell</h4>
              <a href="/add-property">Post free listing</a>
              <a href="/listings">Search properties</a>
              <a href="#">New launch projects</a>
              <a href="#">Free property valuation</a>
              <a href="#">RERA verified projects</a>
              <a href="#">Commercial properties</a>
            </div>
            <div className="footer-main__col">
              <h4>Useful Links</h4>
              <a href="#">Home loan eligibility</a>
              <a href="#">EMI calculator</a>
              <a href="#">Property guides</a>
              <a href="#">Buyer's guide</a>
              <a href="#">Latest property news</a>
              <a href="#">Legal & documentation</a>
              <a href="#">1HouseToHome SmartMove+</a>
            </div>
            <div className="footer-main__col">
              <h4>Help & Contact</h4>
              <a href="#">Contact us</a>
              <a href="#">Log in / Register</a>
              <a href="/faq">FAQs</a>
              <a href="#">Careers</a>
              <a href="#">Media & Press</a>
              <h4 style={{marginTop:'1.25rem'}}>Trusted & Verified</h4>
              <div className="footer-main__trust">⭐ Google — 4.8/5 from 89k+ reviews</div>
            </div>
          </div>

          <div className="footer-main__bottom">
            <div className="footer-main__legal">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/cookie-policy">Cookie Policy</a>
              <a href="/sitemap">Sitemap</a>
              <a href="/careers">Careers</a>
              <a href="/terms">Terms &amp; Conditions</a>
              <a href="/rera">RERA Registration</a>
            </div>
            <div className="footer-main__payments">
              🇮🇳 UPI &nbsp;|&nbsp; Net Banking &nbsp;|&nbsp; Visa &nbsp;|&nbsp; Mastercard &nbsp;|&nbsp; RuPay
            </div>
          </div>
          <p className="footer-main__copy">
            © 2026 1HouseToHome India Pvt. Ltd. All Rights Reserved. | RERA Registered<br/>
            <span style={{fontSize:'0.75rem', opacity:0.6}}>
              Important: Property transactions involve legal obligations. Please verify RERA registration before booking. Home loans are subject to bank approval and eligibility criteria.
            </span>
          </p>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',marginTop:'1.25rem',paddingTop:'1rem',borderTop:'1px solid rgba(255,255,255,0.08)'}}>
            <span style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.4)',letterSpacing:'0.05em'}}>Powered by</span>
            <img src="/codereflections-logo.png" alt="The Code Reflections" style={{height:'28px',width:'auto',opacity:0.85}} />
            <span style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.6)',fontWeight:600,letterSpacing:'0.03em'}}>The Code Reflections</span>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
