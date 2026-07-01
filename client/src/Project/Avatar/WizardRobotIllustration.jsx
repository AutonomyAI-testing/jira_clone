import React from 'react';
import PropTypes from 'prop-types';

const WizardRobotIllustration = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Wizard Robot Avatar"
  >
    {/* Parchment background circle */}
    <circle cx="100" cy="105" r="88" fill="#e8dcc8" opacity="0.6" />

    {/* Vitruvian Man square */}
    <rect x="28" y="60" width="144" height="120" fill="none" stroke="#8b6a5a" strokeWidth="1" opacity="0.5" />

    {/* Vitruvian Man circle */}
    <circle cx="100" cy="105" r="72" fill="none" stroke="#8b6a5a" strokeWidth="1" opacity="0.5" />

    {/* ===== WIZARD HAT ===== */}
    {/* Hat brim */}
    <ellipse cx="100" cy="68" rx="52" ry="10" fill="#1a3a6b" />
    <ellipse cx="100" cy="68" rx="52" ry="10" fill="none" stroke="#0d2244" strokeWidth="1.5" />

    {/* Hat cone */}
    <path d="M100 14 L65 68 L135 68 Z" fill="#1e4080" />
    <path d="M100 14 L65 68 L135 68 Z" fill="none" stroke="#0d2244" strokeWidth="1.5" />

    {/* Hat highlight */}
    <path d="M100 14 L88 55 L95 68" fill="#2a5aaa" opacity="0.5" />

    {/* Stars on hat */}
    <text x="75" y="62" fontSize="10" fill="#f0c030">★</text>
    <text x="108" y="55" fontSize="8" fill="#f0c030">★</text>
    <text x="118" y="65" fontSize="9" fill="#f0c030">★</text>
    <text x="63" y="70" fontSize="9" fill="#f0c030">★</text>
    <text x="130" y="72" fontSize="8" fill="#f0c030">★</text>

    {/* Moon crescent on hat */}
    <text x="88" y="48" fontSize="9" fill="#f0c030">☽</text>
    <text x="104" y="68" fontSize="8" fill="#f0c030">☽</text>

    {/* ===== ROBOT BODY / HEAD ===== */}
    {/* Main body (monitor head) */}
    <rect x="66" y="70" width="68" height="58" rx="6" ry="6" fill="#b08060" />
    <rect x="66" y="70" width="68" height="58" rx="6" ry="6" fill="none" stroke="#7a5535" strokeWidth="2" />

    {/* Screen (green CRT) */}
    <rect x="74" y="76" width="52" height="36" rx="3" ry="3" fill="#4ab840" />
    <rect x="74" y="76" width="52" height="36" rx="3" ry="3" fill="none" stroke="#2d7a20" strokeWidth="1.5" />

    {/* Screen glow/highlight */}
    <ellipse cx="91" cy="87" rx="14" ry="9" fill="#80e060" opacity="0.6" />
    <ellipse cx="88" cy="84" rx="7" ry="4" fill="white" opacity="0.35" />

    {/* Body lower section */}
    <rect x="72" y="126" width="56" height="24" rx="4" ry="4" fill="#9a7050" />
    <rect x="72" y="126" width="56" height="24" rx="4" ry="4" fill="none" stroke="#7a5535" strokeWidth="1.5" />

    {/* Belly button / power button */}
    <circle cx="100" cy="138" r="7" fill="#7a5535" />
    <circle cx="100" cy="138" r="5" fill="#c09040" />
    <circle cx="100" cy="138" r="3" fill="#e0b050" />

    {/* Side bolts */}
    <circle cx="70" cy="140" r="3" fill="#7a5535" />
    <circle cx="130" cy="140" r="3" fill="#7a5535" />

    {/* ===== ARMS ===== */}
    {/* Left arm */}
    <line x1="66" y1="110" x2="34" y2="120" stroke="#6a6a7a" strokeWidth="7" strokeLinecap="round" />
    <line x1="34" y1="120" x2="20" y2="128" stroke="#6a6a7a" strokeWidth="6" strokeLinecap="round" />

    {/* Left glove */}
    <circle cx="17" cy="130" r="9" fill="#f0f0f0" />
    {/* Left fingers */}
    <line x1="10" y1="122" x2="7" y2="116" stroke="#ddd" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="15" y1="120" x2="13" y2="113" stroke="#ddd" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="20" y1="121" x2="19" y2="114" stroke="#ddd" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="25" y1="123" x2="26" y2="116" stroke="#ddd" strokeWidth="3.5" strokeLinecap="round" />

    {/* Right arm */}
    <line x1="134" y1="110" x2="166" y2="120" stroke="#6a6a7a" strokeWidth="7" strokeLinecap="round" />
    <line x1="166" y1="120" x2="180" y2="128" stroke="#6a6a7a" strokeWidth="6" strokeLinecap="round" />

    {/* Right glove */}
    <circle cx="183" cy="130" r="9" fill="#f0f0f0" />
    {/* Right fingers */}
    <line x1="176" y1="122" x2="173" y2="116" stroke="#ddd" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="181" y1="120" x2="180" y2="113" stroke="#ddd" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="186" y1="121" x2="187" y2="114" stroke="#ddd" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="191" y1="123" x2="194" y2="116" stroke="#ddd" strokeWidth="3.5" strokeLinecap="round" />

    {/* ===== LEGS ===== */}
    {/* Left leg */}
    <rect x="78" y="149" width="14" height="18" rx="3" fill="#7a5535" />
    {/* Left foot */}
    <rect x="72" y="163" width="20" height="10" rx="4" fill="#5a3a20" />

    {/* Right leg */}
    <rect x="108" y="149" width="14" height="18" rx="3" fill="#7a5535" />
    {/* Right foot */}
    <rect x="108" y="163" width="20" height="10" rx="4" fill="#5a3a20" />
  </svg>
);

WizardRobotIllustration.propTypes = {
  size: PropTypes.number,
};

WizardRobotIllustration.defaultProps = {
  size: 120,
};

export default WizardRobotIllustration;
