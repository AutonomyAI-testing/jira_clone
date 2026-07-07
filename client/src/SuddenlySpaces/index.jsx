import React, { useState } from 'react';

import {
  PageWrapper,
  Navbar,
  NavLogo,
  LogoIcon,
  LogoText,
  NavRight,
  NavLink,
  NavListButton,
  NavLangSelector,
  FlagIcon,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  SearchCard,
  SearchTabs,
  SearchTab,
  SearchFilters,
  FilterCell,
  FilterLabel,
  FilterInput,
  FilterSelect,
  SelectWrapper,
  SelectArrow,
  RateToggle,
  RateButton,
  PriceRangeWrapper,
  PriceLabels,
  PriceBadge,
  PriceRangeSliderWrapper,
  SliderTrack,
  SliderFill,
  SliderInput,
  SearchButton,
  Footer,
  FooterCopy,
  FooterCenter,
  FooterCompanyLabel,
  FooterLink,
  FooterSocials,
  SocialIcon,
  FooterRight,
  FooterRightLink,
} from './Styles';

// ─── SVG Icons ─────────────────────────────────────────────────────────────────

const SuddenlySpacesLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 8 L16 4 L28 8 L28 16 L16 28 L4 16 Z"
      stroke="#111"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M4 8 L16 4 L28 8"
      stroke="#111"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M10 12 L16 10 L22 12"
      stroke="#111"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4L6 8L10 4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Price Range Slider ────────────────────────────────────────────────────────
const MIN_PRICE = 0;
const MAX_PRICE = 5000;

const PriceRangeSlider = ({ minVal, maxVal, onMinChange, onMaxChange }) => {
  const leftPct = ((minVal - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const rightPct = 100 - ((maxVal - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  return (
    <PriceRangeWrapper>
      <PriceLabels>
        <PriceBadge>${minVal}</PriceBadge>
        <PriceBadge>${maxVal}</PriceBadge>
      </PriceLabels>
      <PriceRangeSliderWrapper>
        <SliderTrack />
        <SliderFill left={leftPct} right={rightPct} />
        <SliderInput
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={50}
          value={minVal}
          onChange={e => {
            const val = Math.min(Number(e.target.value), maxVal - 50);
            onMinChange(val);
          }}
          style={{ zIndex: minVal > MAX_PRICE - 100 ? 5 : 3 }}
        />
        <SliderInput
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={50}
          value={maxVal}
          onChange={e => {
            const val = Math.max(Number(e.target.value), minVal + 50);
            onMaxChange(val);
          }}
          style={{ zIndex: 4 }}
        />
      </PriceRangeSliderWrapper>
    </PriceRangeWrapper>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const SuddenlySpaces = () => {
  const [activeTab, setActiveTab] = useState('commercial');
  const [activeRate, setActiveRate] = useState('hourly');
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(2500);

  return (
    <PageWrapper>
      {/* ── Navbar ── */}
      <Navbar>
        <NavLogo>
          <LogoIcon>
            <SuddenlySpacesLogo />
          </LogoIcon>
          <LogoText>SuddenlySpaces</LogoText>
        </NavLogo>

        <NavRight>
          <NavLink>Switch to Tenant</NavLink>
          <NavListButton>List Your Space</NavListButton>
          <NavLangSelector>
            <FlagIcon>🇺🇸</FlagIcon>
            <span style={{ fontSize: 14 }}>EN</span>
          </NavLangSelector>
          <NavLink>Sign Up</NavLink>
          <NavLink>Login</NavLink>
        </NavRight>
      </Navbar>

      {/* ── Hero ── */}
      <HeroSection>
        <HeroTitle>Let&rsquo;s Find Your Ideal Space</HeroTitle>
        <HeroSubtitle>Discover residential and commercial properties tailored to your needs</HeroSubtitle>

        {/* ── Search Card ── */}
        <SearchCard>
          <SearchTabs>
            <SearchTab
              active={activeTab === 'commercial'}
              onClick={() => setActiveTab('commercial')}
            >
              Commercial
            </SearchTab>
            <SearchTab
              active={activeTab === 'residential'}
              onClick={() => setActiveTab('residential')}
            >
              Residential
            </SearchTab>
          </SearchTabs>

          <SearchFilters>
            {/* Location */}
            <FilterCell flex="2" divider>
              <FilterLabel>Location</FilterLabel>
              <FilterInput placeholder="Type a location" />
            </FilterCell>

            {/* Property Type */}
            <FilterCell flex="1.5" divider>
              <FilterLabel>Property Type</FilterLabel>
              <SelectWrapper>
                <FilterSelect defaultValue="">
                  <option value="" disabled hidden>Select</option>
                  <option value="office">Office</option>
                  <option value="retail">Retail</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="coworking">Co-working</option>
                </FilterSelect>
                <SelectArrow><ChevronDownIcon /></SelectArrow>
              </SelectWrapper>
            </FilterCell>

            {/* Rate Toggle */}
            <FilterCell flex="1.5" divider style={{ alignItems: 'center', justifyContent: 'center' }}>
              <RateToggle>
                <RateButton
                  active={activeRate === 'hourly'}
                  onClick={() => setActiveRate('hourly')}
                >
                  Hourly
                </RateButton>
                <RateButton
                  active={activeRate === 'monthly'}
                  onClick={() => setActiveRate('monthly')}
                >
                  Monthly
                </RateButton>
              </RateToggle>
            </FilterCell>

            {/* Space Type */}
            <FilterCell flex="1.5" divider>
              <FilterLabel>Space Type</FilterLabel>
              <SelectWrapper>
                <FilterSelect defaultValue="">
                  <option value="" disabled hidden>Select</option>
                  <option value="private">Private Office</option>
                  <option value="dedicated">Dedicated Desk</option>
                  <option value="hot-desk">Hot Desk</option>
                  <option value="meeting">Meeting Room</option>
                </FilterSelect>
                <SelectArrow><ChevronDownIcon /></SelectArrow>
              </SelectWrapper>
            </FilterCell>

            {/* Price */}
            <FilterCell flex="2" divider>
              <FilterLabel>Price</FilterLabel>
              <PriceRangeSlider
                minVal={minPrice}
                maxVal={maxPrice}
                onMinChange={setMinPrice}
                onMaxChange={setMaxPrice}
              />
            </FilterCell>

            {/* Search Button */}
            <FilterCell flex="none" style={{ padding: 0 }}>
              <SearchButton>Search</SearchButton>
            </FilterCell>
          </SearchFilters>
        </SearchCard>
      </HeroSection>

      {/* ── Footer ── */}
      <Footer>
        <FooterCopy>© SuddenlySpaces, 2024</FooterCopy>

        <FooterCenter>
          <FooterCompanyLabel>Company</FooterCompanyLabel>
          <FooterLink>About</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Press</FooterLink>
          <FooterLink>Contact Us</FooterLink>

          <FooterSocials>
            <SocialIcon href="#" aria-label="Facebook">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="#" aria-label="YouTube">
              <YouTubeIcon />
            </SocialIcon>
          </FooterSocials>
        </FooterCenter>

        <FooterRight>
          <FooterRightLink>Terms of Use</FooterRightLink>
          <FooterRightLink>Privacy Policy</FooterRightLink>
        </FooterRight>
      </Footer>
    </PageWrapper>
  );
};

export default SuddenlySpaces;
