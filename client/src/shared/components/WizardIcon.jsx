import React from 'react';
import PropTypes from 'prop-types';

// SVG color constants
const COLORS = {
  outlineRed: '#FF0000',
  bootsBrown: '#7B4A2B',
  outlineDark: '#333333',
  bodyBrown: '#A0826D',
  bodyDarkBrown: '#8B6F5F',
  buttonGold: '#F5D547',
  gloveWhite: '#F5F5F5',
  hatNavy: '#2C3E50',
  hatDarkNavy: '#1B2A3E',
  gloveShine: '#FFFFFF',
  gold: '#D4A947',
  messageGray: '#B0BEC5',
};

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 48,
};

const WizardIcon = ({ className, size }) => (
  <span className={className}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      {/* RED OUTLINE CIRCLE - around avatar */}
      <circle cx="96" cy="96" r="90" fill="none" stroke={COLORS.outlineRed} strokeWidth="4" />

      {/* FEET/BOOTS - Bottom */}
      <rect
        x="65"
        y="168"
        width="18"
        height="16"
        rx="2"
        fill={COLORS.bootsBrown}
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
      />
      <rect
        x="109"
        y="168"
        width="18"
        height="16"
        rx="2"
        fill={COLORS.bootsBrown}
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
      />

      {/* TORSO/BODY - Brown rectangular body */}
      <rect
        x="60"
        y="118"
        width="72"
        height="50"
        rx="4"
        fill={COLORS.bodyBrown}
        stroke={COLORS.outlineDark}
        strokeWidth="2"
      />
      {/* Body shading/darker side */}
      <rect
        x="120"
        y="118"
        width="12"
        height="50"
        rx="4"
        fill={COLORS.bodyDarkBrown}
        opacity="0.7"
      />

      {/* BODY BUTTON - Yellow/gold circular button on torso */}
      <circle
        cx="96"
        cy="145"
        r="6"
        fill={COLORS.buttonGold}
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
      />
      {/* Button shine */}
      <circle cx="94" cy="143" r="2" fill={COLORS.gloveShine} opacity="0.6" />

      {/* LEFT ARM - Extended outward horizontally */}
      <line
        x1="60"
        y1="135"
        x2="18"
        y2="120"
        stroke={COLORS.outlineDark}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* RIGHT ARM - Extended outward horizontally */}
      <line
        x1="132"
        y1="135"
        x2="174"
        y2="120"
        stroke={COLORS.outlineDark}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* LEFT GLOVE/HAND - White glove at end of left arm */}
      <circle
        cx="10"
        cy="115"
        r="10"
        fill={COLORS.gloveWhite}
        stroke={COLORS.outlineDark}
        strokeWidth="2"
      />
      {/* Left glove fingers - radiating lines */}
      <line
        x1="3"
        y1="108"
        x2="0"
        y2="100"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="106"
        x2="2"
        y2="96"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="105"
        x2="10"
        y2="94"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="15"
        y1="106"
        x2="18"
        y2="96"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="108"
        x2="20"
        y2="100"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* RIGHT GLOVE/HAND - White glove at end of right arm */}
      <circle
        cx="182"
        cy="115"
        r="10"
        fill={COLORS.gloveWhite}
        stroke={COLORS.outlineDark}
        strokeWidth="2"
      />
      {/* Right glove fingers - radiating lines */}
      <line
        x1="189"
        y1="108"
        x2="192"
        y2="100"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="187"
        y1="106"
        x2="190"
        y2="96"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="182"
        y1="105"
        x2="182"
        y2="94"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="177"
        y1="106"
        x2="174"
        y2="96"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="175"
        y1="108"
        x2="172"
        y2="100"
        stroke={COLORS.outlineDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* TV/MONITOR HEAD - Brown bezel/frame */}
      <rect
        x="55"
        y="72"
        width="82"
        height="58"
        rx="6"
        fill={COLORS.bodyBrown}
        stroke={COLORS.outlineDark}
        strokeWidth="2"
      />

      {/* TV/MONITOR FRAME - Inner brown frame/bezel */}
      <rect
        x="62"
        y="80"
        width="68"
        height="42"
        rx="4"
        fill={COLORS.bodyDarkBrown}
        stroke="#5A4A3A"
        strokeWidth="2"
      />

      {/* TV SCREEN - Bright green display area */}
      <rect x="65" y="83" width="62" height="36" rx="3" fill="#52C41A" />

      {/* SCREEN GLARE/REFLECTION - White shine on upper left of screen */}
      <ellipse cx="78" cy="93" rx="14" ry="10" fill={COLORS.gloveShine} opacity="0.5" />
      <ellipse cx="80" cy="91" rx="8" ry="6" fill={COLORS.gloveShine} opacity="0.3" />

      {/* TV STAND CONNECTOR - Connection point on bottom of TV */}
      <rect
        x="92"
        y="130"
        width="8"
        height="6"
        rx="2"
        fill={COLORS.bodyDarkBrown}
        stroke={COLORS.outlineDark}
        strokeWidth="1"
      />

      {/* WIZARD HAT - Navy blue cone with gold stars and moons */}
      <g>
        {/* Hat brim - Wide dark navy ellipse */}
        <ellipse
          cx="96"
          cy="72"
          rx="48"
          ry="10"
          fill={COLORS.hatNavy}
          stroke={COLORS.hatDarkNavy}
          strokeWidth="2"
        />
        {/* Brim shadow */}
        <ellipse cx="96" cy="75" rx="48" ry="6" fill={COLORS.hatDarkNavy} opacity="0.4" />

        {/* Hat cone - Tall pointed cone */}
        <path
          d="M 70 72 L 96 18 L 122 72 Z"
          fill={COLORS.hatNavy}
          stroke={COLORS.hatDarkNavy}
          strokeWidth="2"
        />

        {/* Hat cone inner shading */}
        <path d="M 80 55 L 96 18 L 88 55 Z" fill={COLORS.hatDarkNavy} opacity="0.5" />

        {/* Hat tip - Small yellow star at very tip */}
        <g transform="translate(96, 15)">
          <path
            d="M 0,-4.5 L 1.3,-1.5 L 4.5,-1.2 L 2.2,1.2 L 2.8,4.5 L 0,2.5 L -2.8,4.5 L -2.2,1.2 L -4.5,-1.2 L -1.3,-1.5 Z"
            fill={COLORS.buttonGold}
            stroke={COLORS.gold}
            strokeWidth="0.5"
          />
        </g>

        {/* Stars on hat - Top center star */}
        <g transform="translate(96, 40)">
          <path
            d="M 0,-6.5 L 2,-2.5 L 6.5,-2 L 3.5,1.5 L 4.5,6 L 0,3.5 L -4.5,6 L -3.5,1.5 L -6.5,-2 L -2,-2.5 Z"
            fill={COLORS.buttonGold}
            stroke={COLORS.gold}
            strokeWidth="0.8"
          />
        </g>

        {/* Left side star on hat */}
        <g transform="translate(75, 55)">
          <path
            d="M 0,-6 L 1.8,-2.2 L 6,-1.8 L 3.2,1.5 L 4.2,5.8 L 0,3.2 L -4.2,5.8 L -3.2,1.5 L -6,-1.8 L -1.8,-2.2 Z"
            fill={COLORS.buttonGold}
            stroke={COLORS.gold}
            strokeWidth="0.8"
          />
        </g>

        {/* Right side star on hat */}
        <g transform="translate(117, 55)">
          <path
            d="M 0,-6 L 1.8,-2.2 L 6,-1.8 L 3.2,1.5 L 4.2,5.8 L 0,3.2 L -4.2,5.8 L -3.2,1.5 L -6,-1.8 L -1.8,-2.2 Z"
            fill={COLORS.buttonGold}
            stroke={COLORS.gold}
            strokeWidth="0.8"
          />
        </g>

        {/* Moon on left side of hat */}
        <path
          d="M 78 48 Q 74 46 74 52 Q 74 58 78 56"
          fill={COLORS.buttonGold}
          stroke={COLORS.gold}
          strokeWidth="1"
        />

        {/* Moon on right side of hat */}
        <path
          d="M 114 48 Q 118 46 118 52 Q 118 58 114 56"
          fill={COLORS.buttonGold}
          stroke={COLORS.gold}
          strokeWidth="1"
        />
      </g>
    </svg>
  </span>
);

WizardIcon.propTypes = propTypes;
WizardIcon.defaultProps = defaultProps;

export default WizardIcon;
