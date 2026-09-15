import React from 'react';
import PropTypes from 'prop-types';

import { AvatarWrapper } from './Styles';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 40,
};

const WizardAvatar = ({ className, size, ...otherProps }) => (
  <AvatarWrapper className={className} size={size} {...otherProps}>
    <svg
      viewBox="30 -6 212 364"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={Math.round(size * 364 / 212)}
      aria-label="Wizard Robot Avatar"
      role="img"
    >
      {/* ─── WAND STICK (behind left hand) ─── */}
      <line x1="38" y1="116" x2="98"  y2="202"
        stroke="#5C3A1E" strokeWidth="5.5" strokeLinecap="round"/>
      <circle cx="36" cy="113" r="6" fill="#FFF8DC" stroke="#C8A84B" strokeWidth="2"/>

      {/* ─── LEFT ARM (raised diagonally) ─── */}
      <rect x="58" y="158" width="28" height="54" rx="14" ry="14"
        fill="#A07840" stroke="#3A2008" strokeWidth="4.5"
        transform="rotate(-36 72 185)"/>
      <ellipse cx="66" cy="204" rx="17" ry="16"
        fill="#F5F0E8" stroke="#3A2008" strokeWidth="4.5"/>
      <ellipse cx="52" cy="197" rx="9"  ry="7"
        fill="#F5F0E8" stroke="#3A2008" strokeWidth="3"/>
      <ellipse cx="50" cy="187" rx="8"  ry="6"
        fill="#F5F0E8" stroke="#3A2008" strokeWidth="3"/>
      <ellipse cx="56" cy="177" rx="8"  ry="6"
        fill="#F5F0E8" stroke="#3A2008" strokeWidth="3"/>

      {/* ─── RIGHT ARM (hanging) ─── */}
      <rect x="214" y="188" width="28" height="54" rx="14" ry="14"
        fill="#A07840" stroke="#3A2008" strokeWidth="4.5"/>
      <ellipse cx="228" cy="248" rx="17" ry="16"
        fill="#F5F0E8" stroke="#3A2008" strokeWidth="4.5"/>

      {/* ─── BODY ─── */}
      <rect x="88" y="186" width="124" height="112" rx="20" ry="20"
        fill="#D4B483" stroke="#3A2008" strokeWidth="5.5"/>
      <ellipse cx="94"  cy="200" rx="16" ry="13"
        fill="#B89060" stroke="#3A2008" strokeWidth="4.5"/>
      <ellipse cx="206" cy="200" rx="16" ry="13"
        fill="#B89060" stroke="#3A2008" strokeWidth="4.5"/>
      {/* chest medallion */}
      <circle cx="150" cy="252" r="24" fill="#C8A060" stroke="#3A2008" strokeWidth="4.5"/>
      <circle cx="150" cy="252" r="14" fill="#9E7040" stroke="#3A2008" strokeWidth="3.5"/>
      <ellipse cx="128" cy="252" rx="8" ry="7"
        fill="#8B6030" stroke="#3A2008" strokeWidth="3"/>
      <ellipse cx="172" cy="252" rx="8" ry="7"
        fill="#8B6030" stroke="#3A2008" strokeWidth="3"/>

      {/* ─── WIZARD HAT ─── */}

      {/* HAT CONE — left edge rises, tip curls right (droopy wizard style) */}
      <path
        d="M 96 122
           C 102 98, 118 62, 134 34
           C 142 18, 154 4, 168 2
           C 182 -1, 193 10, 198 24
           C 203 38, 196 52, 188 64
           C 174 84, 162 104, 158 118
           L 200 122
           Z"
        fill="#3A5A8C" stroke="#1A2E4A" strokeWidth="5"/>

      {/* CRESCENT MOON 1 — left/upper part of cone */}
      <circle cx="116" cy="56"  r="16" fill="#F5C842"/>
      <circle cx="124" cy="50"  r="13" fill="#3A5A8C"/>

      {/* CRESCENT MOON 2 — right part of cone, clearly above brim */}
      <circle cx="178" cy="78"  r="13" fill="#F5C842"/>
      <circle cx="185" cy="73"  r="11" fill="#3A5A8C"/>

      {/* STAR 1 — near top-right of cone */}
      <polygon
        points="190,12 192,20 200,20 194,25 196,33 190,28 184,33 186,25 180,20 188,20"
        fill="#F5C842"/>

      {/* STAR 2 — mid-left of cone */}
      <polygon
        points="118,88 120,96 128,96 122,101 124,109 118,104 112,109 114,101 108,96 116,96"
        fill="#F5C842"/>

      {/* HAT BRIM */}
      <ellipse cx="148" cy="122" rx="76" ry="17"
        fill="#3A5A8C" stroke="#1A2E4A" strokeWidth="5"/>
      <ellipse cx="148" cy="118" rx="70" ry="12" fill="#4A6AA0"/>

      {/* HAT BAND */}
      <rect x="90" y="110" width="116" height="16" rx="5" ry="5"
        fill="#1A3060" stroke="#1A2E4A" strokeWidth="4"/>

      {/* ─── HEAD (over hat base) ─── */}
      <rect x="96" y="110" width="108" height="90" rx="18" ry="18"
        fill="#D4B483" stroke="#3A2008" strokeWidth="5.5"/>
      {/* ear panels */}
      <rect x="78"  y="124" width="20" height="36" rx="8" ry="8"
        fill="#B89060" stroke="#3A2008" strokeWidth="4.5"/>
      <rect x="202" y="124" width="20" height="36" rx="8" ry="8"
        fill="#B89060" stroke="#3A2008" strokeWidth="4.5"/>
      {/* green visor */}
      <rect x="106" y="118" width="88" height="64" rx="10" ry="10"
        fill="#7DC46E" stroke="#3A2008" strokeWidth="4.5"/>
      {/* eyes */}
      <circle cx="132" cy="148" r="11" fill="#1A1A1A"/>
      <circle cx="137" cy="143" r="4"  fill="#fff" opacity="0.7"/>
      <circle cx="168" cy="148" r="11" fill="#1A1A1A"/>
      <circle cx="173" cy="143" r="4"  fill="#fff" opacity="0.7"/>
      {/* smile */}
      <path d="M 132 167 Q 150 180 168 167"
        stroke="#1A1A1A" strokeWidth="4" fill="none" strokeLinecap="round"/>

      {/* ─── LEGS ─── */}
      <rect x="106" y="292" width="40" height="52" rx="12" ry="12"
        fill="#7A5232" stroke="#3A2008" strokeWidth="5.5"/>
      <rect x="95"  y="330" width="54" height="24" rx="10" ry="10"
        fill="#5C3A1E" stroke="#3A2008" strokeWidth="4.5"/>

      <rect x="154" y="292" width="40" height="52" rx="12" ry="12"
        fill="#7A5232" stroke="#3A2008" strokeWidth="5.5"/>
      <rect x="151" y="330" width="54" height="24" rx="10" ry="10"
        fill="#5C3A1E" stroke="#3A2008" strokeWidth="4.5"/>
    </svg>
  </AvatarWrapper>
);

WizardAvatar.propTypes = propTypes;
WizardAvatar.defaultProps = defaultProps;

export default WizardAvatar;
