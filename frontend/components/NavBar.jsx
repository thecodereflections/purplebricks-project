'use client';

import { useState } from 'react';
import NavDropdown from './NavDropdown';
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

const NAV_MENUS = [
  {
    label: 'Buy',
    sections: [
      {
        heading: 'Search & Discover',
        icon: '🔍',
        links: [
          { icon: '🏙️', label: 'Search properties by city', sub: 'Mumbai, Delhi, Bengaluru & more', href: '/listings' },
          { icon: '🏗️', label: 'New launch projects', sub: 'RERA registered, under construction', href: '/listings?propertyType=apartment', tag: 'New' },
          { icon: '🏠', label: 'Ready-to-move homes', sub: 'Move in immediately', href: '/listings' },
          { icon: '📅', label: 'Book site visit instantly', href: '/buy' },
        ],
      },
      {
        heading: 'Plan Your Budget',
        icon: '💰',
        links: [
          { icon: '🧮', label: 'Budget calculator (₹)', sub: 'Find homes in your range', href: '/buy' },
          { icon: '📊', label: 'EMI calculator', sub: 'Plan your monthly payments', href: '/home-loans' },
          { icon: '📈', label: 'Property price trends', sub: 'City-wise market data', href: '/buy' },
          { icon: '🏦', label: 'Home loan assistance', sub: 'Compare 50+ banks', href: '/home-loans' },
        ],
      },
      {
        heading: 'Buyer Guidance',
        icon: '📋',
        links: [
          { icon: '✅', label: 'Legal checklist for buyers', sub: 'Title, RERA, encumbrance', href: '/legal-checklist' },
          { icon: '📖', label: 'Buyer property guides', href: '/buyer-guides' },
          { icon: '⚖️', label: 'Documentation help', sub: 'Sale deed, registration', href: '/rera-guide' },
          { icon: '⭐', label: 'Read buyer reviews', href: '/buy' },
        ],
      },
    ],
  },
  {
    label: 'Sell',
    sections: [
      {
        heading: 'Start Selling',
        icon: '🚀',
        links: [
          { icon: '❓', label: 'How selling works in India', sub: 'Step-by-step guide', href: '/how-selling-works' },
          { icon: '💸', label: 'Pricing plans', sub: 'Zero brokerage options', href: '/pricing-plans' },
          { icon: '📋', label: 'Post your property', sub: 'Free listing in 5 minutes', href: '/add-property', tag: 'Free' },
          { icon: '👥', label: 'Find local agents', sub: 'Verified agents near you', href: '/sell' },
        ],
      },
      {
        heading: 'Sell Smarter',
        icon: '📊',
        links: [
          { icon: '🏷️', label: 'Property valuation tools', sub: 'Get accurate market price', href: '/property-valuation' },
          { icon: '📍', label: 'Nearby agent finder', href: '/sell' },
          { icon: '📈', label: 'Market price trends', sub: 'Mumbai, Delhi, Bengaluru', href: '/sell' },
          { icon: '🎥', label: 'Virtual property tour', sub: '3D walkthrough service', href: '/sell' },
        ],
      },
      {
        heading: 'Legal & Support',
        icon: '⚖️',
        links: [
          { icon: '📜', label: 'RERA & registry guide', sub: 'Stay legally compliant', href: '/rera-guide' },
          { icon: '🔍', label: 'Home inspection services', href: '/services' },
          { icon: '📣', label: 'Where we advertise', sub: 'MagicBricks, 99acres & more', href: '/sell' },
          { icon: '⭐', label: 'Seller reviews', href: '/sell' },
        ],
      },
    ],
  },
  {
    label: 'Home Loans',
    sections: [
      {
        heading: 'Find a Loan',
        icon: '🏦',
        links: [
          { icon: '⚖️', label: 'Compare loan offers', sub: '50+ banks & NBFCs', href: '/home-loans' },
          { icon: '🧮', label: 'EMI calculator', sub: 'Plan your repayments', href: '/home-loans' },
          { icon: '✅', label: 'Eligibility checker', sub: 'Know your loan amount', href: '/home-loans' },
          { icon: '🔄', label: 'Balance transfer', sub: 'Switch to lower rates', href: '/home-loans' },
        ],
      },
      {
        heading: 'Partner Banks',
        icon: '🏛️',
        links: [
          { icon: '🏦', label: 'SBI Home Loans', sub: 'From 8.5% p.a.', href: '/home-loans' },
          { icon: '🏦', label: 'HDFC Bank', sub: 'From 8.75% p.a.', href: '/home-loans' },
          { icon: '🏦', label: 'ICICI Bank', sub: 'From 8.75% p.a.', href: '/home-loans' },
          { icon: '🏦', label: 'Axis & Kotak Bank', href: '/home-loans' },
          { icon: '🏦', label: 'LIC Housing Finance', href: '/home-loans' },
        ],
      },
      {
        heading: 'Loan Guidance',
        icon: '📋',
        links: [
          { icon: '📄', label: 'Documents required', sub: 'Checklist for salaried & self-employed', href: '/home-loans' },
          { icon: '📊', label: 'Interest rate trends', sub: 'RBI repo rate impact', href: '/home-loans' },
          { icon: '📖', label: 'Home loan guide', href: '/home-loans' },
          { icon: '💬', label: 'Speak to a loan expert', href: '/home-loans' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    sections: [
      {
        heading: 'Home Services',
        icon: '🏠',
        links: [
          { icon: '🎨', label: 'Interior design', sub: 'Modular kitchens, full home', href: '/services' },
          { icon: '🚛', label: 'Packers & movers', sub: 'Verified, insured movers', href: '/services' },
          { icon: '🔧', label: 'Home maintenance', sub: 'Plumbing, electrical, AC', href: '/services' },
          { icon: '🧹', label: 'Deep cleaning services', href: '/services' },
        ],
      },
      {
        heading: 'Legal & Verification',
        icon: '⚖️',
        links: [
          { icon: '📜', label: 'Legal services', sub: 'Sale deed, title search', href: '/services' },
          { icon: '🔍', label: 'Property verification', sub: 'Encumbrance & RERA check', href: '/services' },
          { icon: '📋', label: 'Property registration', sub: 'End-to-end assistance', href: '/services' },
          { icon: '🏛️', label: 'Stamp duty calculator', href: '/services' },
        ],
      },
      {
        heading: 'Property Management',
        icon: '🔑',
        links: [
          { icon: '🏢', label: 'Property management', sub: 'For NRIs & landlords', href: '/services' },
          { icon: '📸', label: 'Professional photography', sub: 'Boost your listing', href: '/services' },
          { icon: '⚡', label: '1HouseToHome SmartMove+', sub: 'Energy, broadband & more', href: '/services', tag: 'New' },
          { icon: '💬', label: 'Speak to an expert', href: '/services' },
        ],
      },
    ],
  },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <a href="/" className="nav__logo" aria-label="1HouseToHome Home">1HouseTo<span>Home</span></a>

      {/* Desktop + Mobile nav links */}
      <div className={`nav__links${mobileOpen ? ' nav__links--mobile-open' : ''}`} role="menubar">
        {NAV_MENUS.map(item => (
          <NavDropdown
            key={item.label}
            label={item.label}
            sections={item.sections}
            badge={item.badge}
            onClose={() => setMobileOpen(false)}
          />
        ))}
      </div>

      <div className="nav__actions">
        <a href="/listings" className="nav__find">🔍 Find property</a>
        <a href="/add-property" className="nav__login">➕ List Free</a>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="nav__cta" style={{cursor:'pointer',fontFamily:'inherit',background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.3)'}}>👤 Log in</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="nav__cta" style={{cursor:'pointer',fontFamily:'inherit'}}>Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <a href="#valuation" className="nav__cta">Free Valuation</a>

        {/* Hamburger — visible only on mobile */}
        <button
          className="nav__burger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
        >
          <span className={`nav__burger-bar${mobileOpen ? ' nav__burger-bar--open' : ''}`} />
          <span className={`nav__burger-bar${mobileOpen ? ' nav__burger-bar--open' : ''}`} />
          <span className={`nav__burger-bar${mobileOpen ? ' nav__burger-bar--open' : ''}`} />
        </button>
      </div>
    </nav>
  );
}
