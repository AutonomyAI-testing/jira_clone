import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  width: PropTypes.string,
};

const defaultProps = {
  width: '340px',
};

// Decorative wizard robot illustration with CRT monitor head for the 404 error page.
// Styled as a retro computer character with multiple arms and a wizard hat.
const WizardSvg = ({ width = '340px', ...props }) => (
  <svg
    width={width}
    viewBox="0 0 500 540"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Wizard robot character with CRT monitor head"
    {...props}
  >
    <defs>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A8CC40" />
        <stop offset="40%" stopColor="#7CB342" />
        <stop offset="100%" stopColor="#4A7C20" />
      </linearGradient>
      <linearGradient id="hatGrad" x1="0%" y1="0%" x2="20%" y2="100%">
        <stop offset="0%" stopColor="#4A6FA5" />
        <stop offset="100%" stopColor="#1A3558" />
      </linearGradient>
    </defs>

    {/* LAYER 1: Vitruvian background guides (semi-transparent) */}
    <circle cx="250" cy="300" r="190" fill="none" stroke="#8B6B7B" strokeWidth="2.5" opacity="0.35" />
    <rect x="120" y="120" width="260" height="360" fill="none" stroke="#8B6B7B" strokeWidth="1.5" opacity="0.2" />
    <line x1="60" y1="300" x2="440" y2="300" stroke="#8B6B7B" strokeWidth="1" opacity="0.15" />

    {/* LAYER 2: Legs (drawn before body so body covers tops) */}
    {/* Left leg */}
    <rect x="195" y="420" width="44" height="80" rx="5" fill="#8B6747" />
    {/* Left boot */}
    <rect x="178" y="492" width="72" height="28" rx="6" fill="#6B4F37" />
    {/* Right leg */}
    <rect x="261" y="420" width="44" height="80" rx="5" fill="#8B6747" />
    {/* Right boot */}
    <rect x="250" y="492" width="72" height="28" rx="6" fill="#6B4F37" />

    {/* LAYER 3: Body panel (below monitor) */}
    <rect x="185" y="355" width="130" height="80" rx="6" fill="#8B6747" stroke="#5D4430" strokeWidth="2" />
    {/* Inner panel */}
    <rect x="200" y="370" width="100" height="45" rx="4" fill="#A07855" stroke="#5D4430" strokeWidth="1" />
    {/* Button circle */}
    <circle cx="250" cy="397" r="14" fill="#FFD700" stroke="#5D4430" strokeWidth="2" />
    {/* Button inner */}
    <circle cx="250" cy="397" r="10" fill="#E5C100" />

    {/* LAYER 4: Monitor frame (large, brown, prominent) */}
    {/* Outer frame */}
    <rect x="135" y="170" width="230" height="195" rx="12" fill="#8B6747" stroke="#5D4430" strokeWidth="3" />
    {/* Inner bezel */}
    <rect x="148" y="183" width="204" height="169" rx="8" fill="none" stroke="#A07855" strokeWidth="2" />
    {/* Screen area */}
    <rect x="158" y="193" width="184" height="149" rx="6" fill="url(#screenGrad)" stroke="#3D2D1D" strokeWidth="2" />
    {/* Screen cloudy highlight */}
    <ellipse cx="215" cy="218" rx="55" ry="40" fill="#FFFFFF" opacity="0.22" />
    <ellipse cx="195" cy="205" rx="30" ry="22" fill="#FFFFFF" opacity="0.3" />
    {/* Bottom bezel bar */}
    <rect x="145" y="350" width="210" height="18" rx="5" fill="#7A5C3A" stroke="#5D4430" strokeWidth="1" />
    {/* Red power LED */}
    <circle cx="320" cy="360" r="5" fill="#FF4444" stroke="#3D2D1D" strokeWidth="1" />

    {/* LAYER 5: All 4 arms */}

    {/* UPPER-LEFT ARM */}
    {/* Arm tube */}
    <line x1="155" y1="215" x2="65" y2="155" stroke="#3E4E5C" strokeWidth="18" strokeLinecap="round" />
    {/* Cuff ring */}
    <circle cx="68" cy="157" r="12" fill="#C8C8C8" stroke="#3E4E5C" strokeWidth="2" />
    {/* Glove palm */}
    <circle cx="52" cy="142" r="22" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="2" />
    {/* Fingers (pointing up-left) */}
    <rect x="30" y="112" width="9" height="28" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />
    <rect x="40" y="104" width="9" height="34" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />
    <rect x="50" y="107" width="9" height="30" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />
    <rect x="60" y="116" width="9" height="24" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />

    {/* UPPER-RIGHT ARM */}
    {/* Arm tube */}
    <line x1="345" y1="215" x2="435" y2="155" stroke="#3E4E5C" strokeWidth="18" strokeLinecap="round" />
    {/* Cuff ring */}
    <circle cx="432" cy="157" r="12" fill="#C8C8C8" stroke="#3E4E5C" strokeWidth="2" />
    {/* Glove palm */}
    <circle cx="448" cy="142" r="22" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="2" />
    {/* Fingers (pointing up-right) */}
    <rect x="461" y="112" width="9" height="28" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />
    <rect x="451" y="104" width="9" height="34" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />
    <rect x="441" y="107" width="9" height="30" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />
    <rect x="431" y="116" width="9" height="24" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />

    {/* LOWER-LEFT ARM */}
    {/* Arm tube */}
    <line x1="148" y1="295" x2="48" y2="320" stroke="#3E4E5C" strokeWidth="18" strokeLinecap="round" />
    {/* Cuff ring */}
    <circle cx="50" cy="322" r="12" fill="#C8C8C8" stroke="#3E4E5C" strokeWidth="2" />
    {/* Glove palm */}
    <circle cx="32" cy="332" r="22" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="2" />
    {/* Fingers (pointing left) */}
    <rect x="2" y="312" width="9" height="22" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" transform="rotate(-10 6 323)" />
    <rect x="2" y="324" width="9" height="22" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />
    <rect x="2" y="336" width="9" height="22" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" transform="rotate(10 6 347)" />
    <rect x="2" y="348" width="9" height="18" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" transform="rotate(20 6 357)" />

    {/* LOWER-RIGHT ARM */}
    {/* Arm tube */}
    <line x1="352" y1="295" x2="452" y2="320" stroke="#3E4E5C" strokeWidth="18" strokeLinecap="round" />
    {/* Cuff ring */}
    <circle cx="450" cy="322" r="12" fill="#C8C8C8" stroke="#3E4E5C" strokeWidth="2" />
    {/* Glove palm */}
    <circle cx="468" cy="332" r="22" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="2" />
    {/* Fingers (pointing right) */}
    <rect x="489" y="312" width="9" height="22" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" transform="rotate(10 493 323)" />
    <rect x="489" y="324" width="9" height="22" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" />
    <rect x="489" y="336" width="9" height="22" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" transform="rotate(-10 493 347)" />
    <rect x="489" y="348" width="9" height="18" rx="4.5" fill="#E8E8E8" stroke="#2D3A47" strokeWidth="1.5" transform="rotate(-20 493 357)" />

    {/* LAYER 6: WIZARD HAT */}

    {/* Hat cone - drooping wizard hat tip */}
    <path
      d="M 240,15 C 260,5 310,50 340,90 C 360,120 365,155 380,170 L 120,170 C 135,155 140,120 160,90 C 190,50 220,25 240,15 Z"
      fill="url(#hatGrad)"
      stroke="#0A2035"
      strokeWidth="3"
    />

    {/* Hat brim - wider and more prominent */}
    <ellipse cx="250" cy="170" rx="145" ry="26" fill="#1E3558" stroke="#0A2035" strokeWidth="2" />
    <ellipse cx="250" cy="167" rx="138" ry="21" fill="#3D5A80" />

    {/* HAT STARS (5-pointed, gold) */}
    {/* Star at (250, 80) size 14 */}
    <polygon
      points="250,66 253,77 264,77 255,84 258,95 250,88 242,95 245,84 236,77 247,77"
      fill="#FFD700"
      stroke="#0A2035"
      strokeWidth="1"
    />
    {/* Star at (295, 105) size 11 */}
    <polygon
      points="295,94 298,103 309,103 301,109 303,118 295,112 287,118 289,109 281,103 292,103"
      fill="#FFD700"
      stroke="#0A2035"
      strokeWidth="1"
    />
    {/* Star at (205, 105) size 11 */}
    <polygon
      points="205,94 208,103 219,103 211,109 213,118 205,112 197,118 199,109 191,103 202,103"
      fill="#FFD700"
      stroke="#0A2035"
      strokeWidth="1"
    />
    {/* Star at (320, 138) size 10 */}
    <polygon
      points="320,128 323,137 334,137 326,142 328,151 320,146 312,151 314,142 306,137 317,137"
      fill="#FFD700"
      stroke="#0A2035"
      strokeWidth="1"
    />
    {/* Star at (180, 138) size 10 */}
    <polygon
      points="180,128 183,137 194,137 186,142 188,151 180,146 172,151 174,142 166,137 177,137"
      fill="#FFD700"
      stroke="#0A2035"
      strokeWidth="1"
    />

    {/* HAT CRESCENT MOONS */}
    {/* Left moon on cone */}
    <circle cx="195" cy="132" r="15" fill="#FFD700" />
    <circle cx="202" cy="126" r="14" fill="#2A4570" />

    {/* Right moon on cone */}
    <circle cx="305" cy="132" r="15" fill="#FFD700" />
    <circle cx="298" cy="126" r="14" fill="#2A4570" />

    {/* Left moon on brim */}
    <circle cx="150" cy="167" r="11" fill="#FFD700" />
    <circle cx="155" cy="163" r="10" fill="#1E3558" />

    {/* Right moon on brim */}
    <circle cx="350" cy="167" r="11" fill="#FFD700" />
    <circle cx="345" cy="163" r="10" fill="#1E3558" />
  </svg>
);

WizardSvg.propTypes = propTypes;
WizardSvg.defaultProps = defaultProps;

export default WizardSvg;
