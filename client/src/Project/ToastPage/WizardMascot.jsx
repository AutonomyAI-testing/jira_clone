import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  width: 280,
  height: 320,
};

const WizardMascot = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 280 320"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#9B7B52', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6B4E2D', stopOpacity: 1 }} />
          </linearGradient>
          <radialGradient id="screenHighlight" cx="35%" cy="30%" r="60%">
            <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#90EE90', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Background - Vitruvian Man style circle and square reference */}
        <circle cx="140" cy="160" r="125" fill="none" stroke="#9B8B7E" strokeWidth="2" />
        <rect x="40" y="35" width="200" height="200" fill="none" stroke="#9B8B7E" strokeWidth="2" />

        {/* Wizard hat with stars and moons decoration */}
        <g>
          <path
            d="M 140 25 L 115 95 L 165 95 Z"
            fill="#1e3a5f"
            stroke="#0f2236"
            strokeWidth="2.5"
          />
          <path
            d="M 140 25 Q 145 15 138 8 Q 135 12 135 20"
            fill="#1e3a5f"
            stroke="#0f2236"
            strokeWidth="2"
          />
          <ellipse
            cx="140"
            cy="96"
            rx="92"
            ry="22"
            fill="#243d6a"
            stroke="#0f2236"
            strokeWidth="2.5"
          />

          {/* Stars and moons on cone section */}
          {/* Top star - center cone */}
          <g>
            <polygon
              points="140,45 143,55 154,55 145,62 148,72 140,65 132,72 135,62 126,55 137,55"
              fill="#F9C74F"
              stroke="#DAA520"
              strokeWidth="0.5"
            />
          </g>

          <g>
            <polygon
              points="120,60 122,68 131,68 124,73 126,81 120,76 114,81 116,73 109,68 118,68"
              fill="#F9C74F"
              stroke="#DAA520"
              strokeWidth="0.5"
            />
          </g>

          <g>
            <polygon
              points="160,60 162,68 171,68 164,73 166,81 160,76 154,81 156,73 149,68 158,68"
              fill="#F9C74F"
              stroke="#DAA520"
              strokeWidth="0.5"
            />
          </g>

          <path
            d="M 110 70 Q 102 77 110 84 Q 115 77 110 70"
            fill="#F9C74F"
            stroke="#DAA520"
            strokeWidth="0.5"
          />

          <path
            d="M 170 70 Q 162 77 170 84 Q 175 77 170 70"
            fill="#F9C74F"
            stroke="#DAA520"
            strokeWidth="0.5"
          />

          <g>
            <polygon
              points="90,92 93,102 104,102 95,109 98,119 90,112 82,119 85,109 76,102 87,102"
              fill="#F9C74F"
              stroke="#DAA520"
              strokeWidth="0.5"
            />
          </g>

          <path
            d="M 70 98 Q 62 103 70 108 Q 77 103 70 98"
            fill="#F9C74F"
            stroke="#DAA520"
            strokeWidth="0.5"
          />

          <g>
            <polygon
              points="190,92 193,102 204,102 195,109 198,119 190,112 182,119 185,109 176,102 187,102"
              fill="#F9C74F"
              stroke="#DAA520"
              strokeWidth="0.5"
            />
          </g>

          <path
            d="M 210,98 Q 202,103 210,108 Q 217,103 210,98"
            fill="#F9C74F"
            stroke="#DAA520"
            strokeWidth="0.5"
          />
        </g>

        {/* Monitor/Screen Head */}
        <g>
          {/* Screen body - brown frame */}
          <rect
            x="85"
            y="100"
            width="110"
            height="100"
            rx="8"
            fill="#8B6F47"
            stroke="#0f2236"
            strokeWidth="2.5"
          />
          <rect
            x="92"
            y="108"
            width="96"
            height="85"
            rx="4"
            fill="#6B4E2D"
            stroke="#5a4a3a"
            strokeWidth="1.5"
          />
          <rect x="95" y="111" width="90" height="79" rx="2" fill="#4CAF50" stroke="none" />
          <ellipse cx="115" cy="130" rx="32" ry="28" fill="url(#screenHighlight)" opacity="0.7" />
          <path
            d="M 120 125 Q 135 115 145 125 Q 145 140 130 145 Q 115 145 120 125"
            fill="#FFFFFF"
            opacity="0.4"
          />
          <rect
            x="105"
            y="200"
            width="70"
            height="25"
            rx="4"
            fill="#8B6F47"
            stroke="#0f2236"
            strokeWidth="2"
          />
          <circle cx="140" cy="212.5" r="7" fill="#DAA520" stroke="#0f2236" strokeWidth="1.5" />
          <circle cx="140" cy="212.5" r="2" fill="#0f2236" />
        </g>

        {/* Left arm with white gloves */}
        <g>
          <line
            x1="85"
            y1="155"
            x2="35"
            y2="195"
            stroke="#4a3728"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <line
            x1="35"
            y1="195"
            x2="15"
            y2="235"
            stroke="#4a3728"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <g>
            <circle cx="15" cy="245" r="18" fill="#F0F0F0" stroke="#0f2236" strokeWidth="2" />

            {/* Finger bumps - 4 visible fingers */}
            {/* Top finger */}
            <circle cx="8" cy="220" r="5" fill="#F0F0F0" stroke="#0f2236" strokeWidth="1.5" />
            <circle cx="-2" cy="235" r="5" fill="#F0F0F0" stroke="#0f2236" strokeWidth="1.5" />
            <circle cx="5" cy="260" r="5" fill="#F0F0F0" stroke="#0f2236" strokeWidth="1.5" />
            <circle cx="28" cy="255" r="5" fill="#F0F0F0" stroke="#0f2236" strokeWidth="1.5" />
          </g>
        </g>

        {/* Right Arm - positioned lower and angled downward */}
        <g>
          {/* Upper arm - angled down */}
          <line
            x1="195"
            y1="155"
            x2="245"
            y2="195"
            stroke="#4a3728"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <line
            x1="245"
            y1="195"
            x2="265"
            y2="235"
            stroke="#4a3728"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <g>
            <circle cx="265" cy="245" r="18" fill="#F0F0F0" stroke="#0f2236" strokeWidth="2" />
            <circle cx="272" cy="220" r="5" fill="#F0F0F0" stroke="#0f2236" strokeWidth="1.5" />
            <circle cx="282" cy="235" r="5" fill="#F0F0F0" stroke="#0f2236" strokeWidth="1.5" />
            <circle cx="275" cy="260" r="5" fill="#F0F0F0" stroke="#0f2236" strokeWidth="1.5" />
            <circle cx="252" cy="255" r="5" fill="#F0F0F0" stroke="#0f2236" strokeWidth="1.5" />
          </g>
        </g>

        {/* Body - brown steampunk rectangular with gradient */}
        <g>
          {/* Main torso - taller and more rectangular */}
          <rect
            x="80"
            y="200"
            width="120"
            height="70"
            rx="8"
            fill="url(#bodyGradient)"
            stroke="#0f2236"
            strokeWidth="2.5"
          />
          <rect x="80" y="240" width="120" height="30" rx="8" fill="#5a3e28" opacity="0.4" />
          <rect
            x="105"
            y="215"
            width="70"
            height="40"
            rx="4"
            fill="#6B4E2D"
            stroke="#0f2236"
            strokeWidth="1.5"
          />
          <g>
            <circle cx="95" cy="215" r="5" fill="#DAA520" stroke="#0f2236" strokeWidth="1" />
            <rect x="92.5" y="212.5" width="5" height="5" fill="#c0a060" />
          </g>

          <g>
            <circle cx="225" cy="215" r="5" fill="#DAA520" stroke="#0f2236" strokeWidth="1" />
            <rect x="222.5" y="212.5" width="5" height="5" fill="#c0a060" />
          </g>

          <circle cx="140" cy="260" r="6" fill="#DAA520" stroke="#0f2236" strokeWidth="1.5" />
        </g>

        {/* Left boot */}
        <g>
          <rect
            x="95"
            y="268"
            width="22"
            height="18"
            rx="3"
            fill="#9B7B52"
            stroke="#0f2236"
            strokeWidth="1.5"
          />

          <rect
            x="82"
            y="283"
            width="48"
            height="32"
            rx="6"
            fill="#5a3e28"
            stroke="#0f2236"
            strokeWidth="2.5"
          />
          <rect x="82" y="305" width="48" height="10" rx="3" fill="#3d2818" stroke="none" />
          <rect x="82" y="304" width="48" height="3" fill="#7a5a38" />
        </g>

        {/* Right boot */}
        <g>
          <rect
            x="163"
            y="268"
            width="22"
            height="18"
            rx="3"
            fill="#9B7B52"
            stroke="#0f2236"
            strokeWidth="1.5"
          />
          <rect
            x="150"
            y="283"
            width="48"
            height="32"
            rx="6"
            fill="#5a3e28"
            stroke="#0f2236"
            strokeWidth="2.5"
          />
          <rect x="150" y="305" width="48" height="10" rx="3" fill="#3d2818" stroke="none" />
          <rect x="150" y="304" width="48" height="3" fill="#7a5a38" />
        </g>
      </svg>
    </Container>
  );
};

WizardMascot.propTypes = propTypes;
WizardMascot.defaultProps = defaultProps;

export default WizardMascot;
