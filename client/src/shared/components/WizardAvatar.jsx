import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 128,
};

/**
 * WizardAvatar - A decorative SVG illustration of a cartoon robot wizard.
 * Renders a whimsical steampunk character with a wizard hat, monitor screen head,
 * mechanical body, arms with gloves, and mechanical feet.
 * 
 * The component is fully scalable via the `size` prop and maintains aspect ratio
 * regardless of container size. Suitable for use as branding, decoration, or mascot
 * across the application at any size from 24px to 200px+.
 * 
 * @param {string} className - Optional CSS class for styling the wrapper span
 * @param {number} size - Width/height in pixels (default: 128). SVG scales proportionally.
 */
const WizardAvatar = ({ className, size }) => {
  // Defensive: ensure size is a positive number. Fallback to default if invalid.
  const validSize = (typeof size === 'number' && size > 0) ? size : defaultProps.size;

  return (
    <span className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 240"
        width={validSize}
        height={validSize}
        role="img"
        aria-label="Wizard Robot Avatar"
      >
        {/* ── BOOTS / FEET ── */}
        <g id="feet">
        {/* Left boot outer */}
        <rect x="56" y="202" width="40" height="28" rx="6" fill="#3C2515" />
        {/* Left boot toe overhang */}
        <ellipse cx="76" cy="232" rx="22" ry="8" fill="#2A1A0F" />
        {/* Left boot highlight */}
        <ellipse cx="76" cy="208" rx="18" ry="6" fill="#4A3020" />
        {/* Right boot outer */}
        <rect x="104" y="202" width="40" height="28" rx="6" fill="#3C2515" />
        {/* Right boot toe overhang */}
        <ellipse cx="124" cy="232" rx="22" ry="8" fill="#2A1A0F" />
        {/* Right boot highlight */}
        <ellipse cx="124" cy="208" rx="18" ry="6" fill="#4A3020" />
      </g>

      {/* ── LEGS ── */}
      <g id="legs">
        {/* Left leg cylinder */}
        <rect x="68" y="178" width="16" height="28" rx="8" fill="#5C4033" />
        {/* Left knee joint */}
        <circle cx="76" cy="190" r="8" fill="#8B7355" />
        {/* Right leg cylinder */}
        <rect x="116" y="178" width="16" height="28" rx="8" fill="#5C4033" />
        {/* Right knee joint */}
        <circle cx="124" cy="190" r="8" fill="#8B7355" />
      </g>

      {/* ── BODY / TORSO ── */}
      <g id="body">
        {/* Main body */}
        <rect x="62" y="140" width="76" height="62" rx="6" fill="#C9A881" />
        {/* Left side shading */}
        <rect x="62" y="140" width="20" height="62" rx="6" fill="#8B7355" opacity="0.3" />
        {/* Top body line detail */}
        <line x1="62" y1="148" x2="138" y2="148" stroke="#8B7355" strokeWidth="1" opacity="0.4" />
        {/* Bottom body line detail */}
        <line x1="62" y1="195" x2="138" y2="195" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
        {/* Panel area - darker section */}
        <rect x="72" y="164" width="56" height="26" rx="4" fill="#8B7355" />
        {/* Panel detail lines */}
        <line x1="86" y1="164" x2="86" y2="190" stroke="#6B5B47" strokeWidth="1" opacity="0.6" />
        <line x1="100" y1="164" x2="100" y2="190" stroke="#6B5B47" strokeWidth="1" opacity="0.6" />
        <line x1="114" y1="164" x2="114" y2="190" stroke="#6B5B47" strokeWidth="1" opacity="0.6" />
        {/* Gold button center */}
        <circle cx="100" cy="177" r="8" fill="#D4A547" />
        <circle cx="100" cy="177" r="6" fill="#F7C948" />
        <circle cx="100" cy="177" r="3" fill="#FFD966" />
        {/* Side bolts - left */}
        <circle cx="67" cy="155" r="3" fill="#8B7355" />
        <circle cx="67" cy="175" r="3" fill="#8B7355" />
        {/* Side bolts - right */}
        <circle cx="133" cy="155" r="3" fill="#8B7355" />
        <circle cx="133" cy="175" r="3" fill="#8B7355" />
      </g>

      {/* ── ARMS ── */}
      <g id="arms">
        {/* Left arm cylinder */}
        <rect x="12" y="152" width="52" height="14" rx="7" fill="#3C3C3C" />
        {/* Left shoulder joint */}
        <circle cx="62" cy="159" r="8" fill="#5C4033" />
        {/* Left wrist joint */}
        <circle cx="18" cy="159" r="8" fill="#5C4033" />
        {/* Left glove palm */}
        <ellipse cx="10" cy="162" rx="13" ry="11" fill="#F0F0F0" />
        {/* Left glove fingers - 5 bumps */}
        <ellipse cx="5" cy="151" rx="4" ry="5" fill="#F0F0F0" />
        <ellipse cx="10" cy="148" rx="4" ry="6" fill="#F0F0F0" />
        <ellipse cx="15" cy="150" rx="4" ry="5" fill="#F0F0F0" />
        <ellipse cx="18" cy="155" rx="4" ry="5" fill="#F0F0F0" />
        <ellipse cx="14" cy="168" rx="4" ry="5" fill="#F0F0F0" />
        {/* Left glove outline */}
        <ellipse cx="10" cy="162" rx="13" ry="11" fill="none" stroke="#E0E0E0" strokeWidth="1" />

        {/* Right arm cylinder */}
        <rect x="136" y="152" width="52" height="14" rx="7" fill="#3C3C3C" />
        {/* Right shoulder joint */}
        <circle cx="138" cy="159" r="8" fill="#5C4033" />
        {/* Right wrist joint */}
        <circle cx="182" cy="159" r="8" fill="#5C4033" />
        {/* Right glove palm */}
        <ellipse cx="190" cy="162" rx="13" ry="11" fill="#F0F0F0" />
        {/* Right glove fingers - 5 bumps */}
        <ellipse cx="195" cy="151" rx="4" ry="5" fill="#F0F0F0" />
        <ellipse cx="190" cy="148" rx="4" ry="6" fill="#F0F0F0" />
        <ellipse cx="185" cy="150" rx="4" ry="5" fill="#F0F0F0" />
        <ellipse cx="182" cy="155" rx="4" ry="5" fill="#F0F0F0" />
        <ellipse cx="186" cy="168" rx="4" ry="5" fill="#F0F0F0" />
        {/* Right glove outline */}
        <ellipse cx="190" cy="162" rx="13" ry="11" fill="none" stroke="#E0E0E0" strokeWidth="1" />
      </g>

      {/* ── HEAD / MONITOR ── */}
      <g id="head">
        {/* Monitor outer frame - dark brown/copper */}
        <rect x="62" y="95" width="76" height="54" rx="8" fill="#8B7355" />
        {/* Monitor frame face - slightly lighter */}
        <rect x="65" y="98" width="70" height="48" rx="7" fill="#A0826D" />
        {/* Corner bolts */}
        <circle cx="68" cy="101" r="2.5" fill="#6B5B47" />
        <circle cx="132" cy="101" r="2.5" fill="#6B5B47" />
        <circle cx="68" cy="141" r="2.5" fill="#6B5B47" />
        <circle cx="132" cy="141" r="2.5" fill="#6B5B47" />
        {/* Screen bezel/housing */}
        <rect x="70" y="104" width="60" height="36" rx="5" fill="#2A2A2A" />
        {/* Green screen base */}
        <rect x="73" y="107" width="54" height="30" rx="3" fill="#5CB84A" />
        {/* Screen glow - lighter green */}
        <rect x="73" y="107" width="54" height="30" rx="3" fill="#A8D63E" opacity="0.4" />
        {/* Screen highlight - top-left bright spot */}
        <ellipse cx="85" cy="117" rx="12" ry="8" fill="#FFFFFF" opacity="0.35" />
        {/* Screen highlight - additional spot */}
        <polygon points="105,118 115,120 110,128" fill="#FFFFFF" opacity="0.25" />
        {/* Display text */}
        <text x="100" y="125" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#FF0000" fontWeight="bold">MAGIC</text>
        {/* Neck connector */}
        <rect x="85" y="138" width="30" height="8" rx="4" fill="#8B7355" />
      </g>

      {/* ── WIZARD HAT ── */}
      <g id="hat">
        {/* Hat brim shadow underneath */}
        <ellipse cx="100" cy="100" rx="72" ry="12" fill="#1A2548" opacity="0.6" />
        {/* Hat brim main - wide oval */}
        <ellipse cx="100" cy="98" rx="70" ry="11" fill="#1E2D57" />
        {/* Brim top highlight */}
        <ellipse cx="100" cy="96" rx="66" ry="7" fill="#2C3E6F" />
        {/* Hat cone - tilted slightly right */}
        <path d="M108,8 C112,28 125,65 145,98 L55,98 C75,65 88,28 92,8 Z" fill="#2C3E6F" />
        {/* Hat cone shading - right side darker */}
        <path d="M108,8 C112,28 125,65 145,98 L100,98 Z" fill="#1E2D57" opacity="0.4" />
        {/* Hat cone shading - left side lighter */}
        <path d="M92,8 L55,98 L100,98 Z" fill="#3A5A8F" opacity="0.2" />
        {/* Crease line on cone - vertical */}
        <line x1="100" y1="8" x2="100" y2="98" stroke="#1A2548" strokeWidth="0.5" opacity="0.3" />

        {/* STARS (5-pointed) */}
        {/* Star 1 - top cone */}
        <polygon points="100,18 102,24 108,24 103,28 105,34 100,30 95,34 97,28 92,24 98,24" fill="#F7D054" />
        {/* Star 2 - upper left cone */}
        <polygon points="72,38 74,43 80,43 75,47 77,52 72,48 67,52 69,47 64,43 70,43" fill="#F7D054" />
        {/* Star 3 - upper right cone */}
        <polygon points="128,32 130,37 136,37 131,41 133,46 128,42 123,46 125,41 120,37 126,37" fill="#F7D054" />
        {/* Star 4 - mid left brim */}
        <polygon points="50,92 52,97 58,97 53,101 55,106 50,102 45,106 47,101 42,97 48,97" fill="#F7D054" />
        {/* Star 5 - mid right brim */}
        <polygon points="150,92 152,97 158,97 153,101 155,106 150,102 145,106 147,101 142,97 148,97" fill="#F7D054" />

        {/* CRESCENTS (proper D-shapes) */}
        {/* Crescent 1 - left side cone */}
        <path d="M80,62 a7,7 0 1,1 0,10 a4.5,4.5 0 1,0 0,-10" fill="#F7D054" />
        {/* Crescent 2 - right side cone */}
        <path d="M120,50 a8,8 0 1,1 0,12 a5,5 0 1,0 0,-12" fill="#F7D054" />
        {/* Crescent 3 - lower left brim */}
        <path d="M62,94 a6,6 0 1,1 0,8 a3.5,3.5 0 1,0 0,-8" fill="#F7D054" />
      </g>
      </svg>
    </span>
  );
};

WizardAvatar.propTypes = propTypes;
WizardAvatar.defaultProps = defaultProps;

export default WizardAvatar;
