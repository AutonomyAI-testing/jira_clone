import styled, { css } from 'styled-components';

// ─── Colors ────────────────────────────────────────────────────────────────────
const ssColor = {
  black: '#111111',
  white: '#FFFFFF',
  grey: '#666666',
  lightGrey: '#F5F5F5',
  border: '#E5E5E5',
  pillBg: '#111111',
  pillText: '#FFFFFF',
  tabActive: '#111111',
  tabInactive: '#888888',
};

// ─── Layout ────────────────────────────────────────────────────────────────────
export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${ssColor.white};
  font-family: 'CircularStdBook', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: ${ssColor.black};
`;

// ─── Navbar ────────────────────────────────────────────────────────────────────
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 72px;
  border-bottom: none;
  background: ${ssColor.white};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  svg {
    width: 32px;
    height: 32px;
  }
`;

export const LogoText = styled.span`
  font-family: 'CircularStdBold', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${ssColor.black};
  white-space: nowrap;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const NavLink = styled.span`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 15px;
  color: ${ssColor.black};
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavListButton = styled.button`
  background: ${ssColor.black};
  color: ${ssColor.white};
  font-family: 'CircularStdBold', sans-serif;
  font-size: 15px;
  padding: 10px 24px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: #333;
  }
`;

export const NavLangSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  color: ${ssColor.black};
`;

export const FlagIcon = styled.span`
  font-size: 16px;
  line-height: 1;
`;

// ─── Hero ──────────────────────────────────────────────────────────────────────
export const HeroSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 48px 48px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-family: 'CircularStdBlack', sans-serif;
  font-size: 64px;
  line-height: 1.1;
  font-weight: 900;
  color: red;
  margin-bottom: 16px;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 18px;
  color: #333;
  margin-bottom: 28px;
  line-height: 1.5;
`;

// ─── Search Card ───────────────────────────────────────────────────────────────
export const SearchCard = styled.div`
  width: 100%;
  max-width: 1080px;
  background: ${ssColor.white};
  border: 1px solid ${ssColor.border};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 0;
  overflow: hidden;
`;

export const SearchTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${ssColor.border};
  padding: 0 24px;
  gap: 28px;
`;

export const SearchTab = styled.button`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 16px;
  color: ${({ active }) => (active ? ssColor.tabActive : ssColor.tabInactive)};
  background: none;
  border: none;
  border-bottom: ${({ active }) => (active ? `3px solid ${ssColor.black}` : '3px solid transparent')};
  padding: 16px 0;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  margin-bottom: -1px;
  transition: color 0.15s;

  &:hover {
    color: ${ssColor.black};
  }
`;

export const SearchFilters = styled.div`
  display: flex;
  align-items: stretch;
  padding: 0;
`;

const filterDivider = css`
  border-right: 1px solid ${ssColor.border};
`;

export const FilterCell = styled.div`
  flex: ${({ flex }) => flex || 1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 20px;
  ${({ divider }) => divider && filterDivider}
  min-width: 0;
`;

export const FilterLabel = styled.span`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #555555;
  text-transform: capitalize;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
  display: block;
`;

export const FilterInput = styled.input`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 15px;
  color: ${ssColor.black};
  background: none;
  border: none;
  outline: none;
  width: 100%;
  padding: 0;

  &::placeholder {
    color: #aaa;
  }
`;

export const FilterSelect = styled.select`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 15px;
  color: ${ssColor.black};
  background: none;
  border: none;
  outline: none;
  width: 100%;
  padding: 0;
  appearance: none;
  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SelectArrow = styled.span`
  position: absolute;
  right: 0;
  pointer-events: none;
  color: ${ssColor.black};
  font-size: 12px;
`;

// ─── Rate Toggle ───────────────────────────────────────────────────────────────
export const RateToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  background: #f0f0f0;
  border-radius: 24px;
  padding: 4px;
`;

export const RateButton = styled.button`
  font-family: ${({ active }) => (active ? "'CircularStdBold'" : "'CircularStdBook'")}, sans-serif;
  font-size: 14px;
  padding: 8px 18px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${({ active }) => (active ? ssColor.black : 'transparent')};
  color: ${({ active }) => (active ? ssColor.white : ssColor.black)};
  white-space: nowrap;
`;

// ─── Price Range ───────────────────────────────────────────────────────────────
export const PriceRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PriceLabels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceBadge = styled.span`
  background: ${ssColor.black};
  color: ${ssColor.white};
  font-family: 'CircularStdBold', sans-serif;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 4px;
`;

export const PriceRangeSliderWrapper = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
`;

export const SliderTrack = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  height: 4px;
  background: ${ssColor.border};
  border-radius: 2px;
`;

export const SliderFill = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  background: ${ssColor.black};
  border-radius: 2px;
  left: ${({ left }) => left}%;
  right: ${({ right }) => right}%;
`;

export const SliderInput = styled.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 4px;
  background: transparent;
  appearance: none;
  pointer-events: none;
  margin: 0;
  padding: 0;
  left: 0;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    background: ${ssColor.white};
    border: 2px solid ${ssColor.black};
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    position: relative;
    z-index: 2;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: ${ssColor.white};
    border: 2px solid ${ssColor.black};
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
`;

// ─── Search Button ─────────────────────────────────────────────────────────────
export const SearchButton = styled.button`
  background: ${ssColor.black};
  color: ${ssColor.white};
  font-family: 'CircularStdBold', sans-serif;
  font-size: 16px;
  padding: 0 36px;
  border: none;
  cursor: pointer;
  height: 100%;
  min-height: 56px;
  border-radius: 0 0 8px 0;
  min-width: 140px;
  transition: background 0.15s;
  white-space: nowrap;

  &:hover {
    background: #333;
  }
`;

// ─── Footer ────────────────────────────────────────────────────────────────────
export const Footer = styled.footer`
  border-top: 1px solid ${ssColor.border};
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${ssColor.white};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const FooterCopy = styled.span`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 14px;
  color: ${ssColor.grey};
`;

export const FooterCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FooterCompanyLabel = styled.span`
  font-family: 'CircularStdBold', sans-serif;
  font-size: 14px;
  color: ${ssColor.black};
  margin-right: 8px;
`;

export const FooterLink = styled.span`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 14px;
  color: ${ssColor.black};
  cursor: pointer;
  padding: 0 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 8px;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ssColor.black};
  text-decoration: none;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: ${ssColor.black};
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FooterRightLink = styled.span`
  font-family: 'CircularStdBook', sans-serif;
  font-size: 14px;
  color: ${ssColor.grey};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
