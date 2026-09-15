import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Styles';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  animated: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  size: 120,
  animated: false,
};

/**
 * WizardAvatar — cute robot wizard mascot character.
 * Used for onboarding screens, empty states, and branding.
 *
 * Props:
 *   size      — pixel width (height scales proportionally), default 120
 *   animated  — if true, the character floats and wiggles on hover
 */
const WizardAvatar = ({ className, size, animated, ...otherProps }) => (
  <Wrapper className={className} size={size} data-animated={animated} {...otherProps}>
    {/* viewBox: 240 wide × 270 tall — extra space for wide hat brim and raised arm */}
    <svg
      viewBox="0 0 240 270"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wizard robot mascot"
      role="img"
    >
      {/* ══════════════════════════════════
          WAND — drawn first so hat/arm sit on top
         ══════════════════════════════════ */}
      {/* Long diagonal stick — steep angle upper-left to glove */}
      <line x1="28" y1="48" x2="76" y2="165" stroke="#3A2010" strokeWidth="4.5" strokeLinecap="round" />
      {/* Wand tip star-glow */}
      <circle cx="28" cy="48" r="6" fill="#F5C518" stroke="#3A2010" strokeWidth="2" />

      {/* ══════════════════════════════════
          WIZARD HAT
         ══════════════════════════════════ */}
      {/* Hat brim — very wide, extends well past head */}
      <ellipse cx="118" cy="120" rx="74" ry="17" fill="#2B3C54" stroke="#1A2530" strokeWidth="4" />
      {/* Hat cone — tall with slight rightward droop at tip */}
      <path
        d="M118,120 L58,120 Q50,114 74,62 Q92,18 116,8 Q126,5 122,42 Q118,84 178,120 Z"
        fill="#2D4A6B"
        stroke="#1A2530"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Hat inner highlight / band near brim */}
      <ellipse cx="118" cy="120" rx="67" ry="11" fill="#35537A" stroke="none" />
      {/* Re-draw brim edge on top */}
      <ellipse cx="118" cy="120" rx="74" ry="17" fill="none" stroke="#1A2530" strokeWidth="4" />

      {/* Hat decorations — stars */}
      {/* Large star lower-left of hat */}
      <polygon
        points="88,106 91,95 94,106 105,106 97,113 100,124 88,117 76,124 79,113 71,106"
        fill="#F5C518"
        stroke="#C49500"
        strokeWidth="1.2"
      />
      {/* Medium star upper-right */}
      <polygon
        points="135,56 137.5,48 140,56 148,56 142,61 144.5,69 135,64 125.5,69 128,61 122,56"
        fill="#F5C518"
        stroke="#C49500"
        strokeWidth="1"
      />
      {/* Small star mid-left */}
      <polygon
        points="97,72 98.5,67 100,72 105,72 101,75 102.5,80 97,77 91.5,80 93,75 89,72"
        fill="#F5C518"
        stroke="#C49500"
        strokeWidth="0.8"
      />
      {/* Tip star */}
      <polygon
        points="118,12 120,6 122,12 128,12 123,16 125,22 118,18 111,22 113,16 108,12"
        fill="#F5C518"
        stroke="#C49500"
        strokeWidth="0.8"
      />

      {/* Crescent moon 1 — upper-right (large) */}
      <path d="M148,42 a13,13 0 1,0 17,-7 a9,9 0 1,1 -17,7" fill="#F5C518" />
      {/* Crescent moon 2 — mid-left (medium) */}
      <path d="M76,84 a10,10 0 1,0 13,-6 a7,7 0 1,1 -13,6" fill="#F5C518" />

      {/* ══════════════════════════════════
          ROBOT HEAD
         ══════════════════════════════════ */}
      {/* Head shell — chunky wide rounded rectangle */}
      <rect x="64" y="118" width="108" height="78" rx="18" ry="18" fill="#E8D5B0" stroke="#5A3A18" strokeWidth="4" />
      {/* Side ear / panel — left */}
      <rect x="50" y="130" width="16" height="38" rx="7" ry="7" fill="#B8894A" stroke="#5A3A18" strokeWidth="3" />
      {/* Side ear / panel — right */}
      <rect x="174" y="130" width="16" height="38" rx="7" ry="7" fill="#B8894A" stroke="#5A3A18" strokeWidth="3" />
      {/* Face screen (green visor) — wide rectangular */}
      {/* Face screen (green visor) — wide tall rectangle */}
      <rect x="73" y="127" width="90" height="58" rx="13" ry="13" fill="#7DC820" stroke="#4A7A10" strokeWidth="3" />
      {/* Screen inner lighter highlight */}
      <rect x="79" y="133" width="78" height="46" rx="10" ry="10" fill="#93DC2A" />
      {/* Eyes — large circles */}
      <circle cx="103" cy="150" r="10" fill="#1A1A1A" />
      <circle cx="133" cy="150" r="10" fill="#1A1A1A" />
      {/* Eye shine */}
      <circle cx="107" cy="145" r="4" fill="#FFFFFF" />
      <circle cx="137" cy="145" r="4" fill="#FFFFFF" />
      {/* Smile — cat-like w-shape */}
      <path
        d="M99,165 Q107,174 118,168 Q129,174 137,165"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ══════════════════════════════════
          BODY
         ══════════════════════════════════ */}
      {/* Main torso — wide chunky rectangle */}
      <rect x="62" y="194" width="116" height="62" rx="15" ry="15" fill="#E8D5B0" stroke="#5A3A18" strokeWidth="4" />
      {/* Body vertical seams */}
      <line x1="78" y1="204" x2="78" y2="246" stroke="#D4BB90" strokeWidth="2" strokeLinecap="round" />
      <line x1="162" y1="204" x2="162" y2="246" stroke="#D4BB90" strokeWidth="2" strokeLinecap="round" />
      {/* Chest dial — large prominent circle */}
      <circle cx="120" cy="222" r="18" fill="#B8894A" stroke="#5A3A18" strokeWidth="3" />
      <circle cx="120" cy="222" r="12" fill="#CA9A55" />
      <circle cx="120" cy="222" r="6.5" fill="#E0B060" />

      {/* ══════════════════════════════════
          LEFT ARM (raised, holding wand)
         ══════════════════════════════════ */}
      {/* Upper arm — angled steeply up-left (-55°) */}
      <rect
        x="30" y="175" width="24" height="46"
        rx="11" ry="11"
        fill="#B8894A" stroke="#5A3A18" strokeWidth="3"
        transform="rotate(-55 42 198)"
      />
      {/* Left glove — white, near wand handle */}
      <ellipse
        cx="55" cy="162"
        rx="15" ry="13"
        fill="#F0EAD6" stroke="#5A3A18" strokeWidth="3"
      />
      {/* Glove thumb nub */}
      <ellipse cx="67" cy="155" rx="7" ry="6" fill="#F0EAD6" stroke="#5A3A18" strokeWidth="2.5" />

      {/* ══════════════════════════════════
          RIGHT ARM (hanging down)
         ══════════════════════════════════ */}
      {/* Upper arm — hangs nearly straight down */}
      <rect
        x="178" y="194" width="24" height="44"
        rx="11" ry="11"
        fill="#B8894A" stroke="#5A3A18" strokeWidth="3"
        transform="rotate(6 190 216)"
      />
      {/* Right glove — white, large mitten shape */}
      <ellipse
        cx="187" cy="241"
        rx="16" ry="14"
        fill="#F0EAD6" stroke="#5A3A18" strokeWidth="3"
      />
      {/* Right glove thumb nub */}
      <ellipse cx="173" cy="235" rx="7" ry="6" fill="#F0EAD6" stroke="#5A3A18" strokeWidth="2.5" />

      {/* ══════════════════════════════════
          LEGS & BOOTS
         ══════════════════════════════════ */}
      {/* Left leg */}
      <rect x="79" y="253" width="30" height="35" rx="9" ry="9" fill="#8A5F2A" stroke="#5A3A18" strokeWidth="3" />
      {/* Left boot — wide rounded */}
      <rect x="70" y="278" width="40" height="16" rx="8" ry="8" fill="#5A3A18" stroke="#3A2010" strokeWidth="3" />
      {/* Boot toe cap — left */}
      <ellipse cx="101" cy="286" rx="11" ry="7" fill="#4A2E10" />

      {/* Right leg */}
      <rect x="131" y="253" width="30" height="35" rx="9" ry="9" fill="#8A5F2A" stroke="#5A3A18" strokeWidth="3" />
      {/* Right boot — wide rounded */}
      <rect x="130" y="278" width="40" height="16" rx="8" ry="8" fill="#5A3A18" stroke="#3A2010" strokeWidth="3" />
      {/* Boot toe cap — right */}
      <ellipse cx="161" cy="286" rx="11" ry="7" fill="#4A2E10" />
    </svg>
  </Wrapper>
);

WizardAvatar.propTypes = propTypes;
WizardAvatar.defaultProps = defaultProps;

export default WizardAvatar;
