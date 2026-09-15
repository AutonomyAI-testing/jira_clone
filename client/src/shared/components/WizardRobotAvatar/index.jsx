import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Styles';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 200,
};

const WizardRobotAvatar = ({ className, size, ...otherProps }) => {
  return (
    <Container className={className} size={size} {...otherProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG Gradients and Filters */}
        <defs>
          {/* CRT Screen radial gradient - bright yellow core fading to green */}
          <radialGradient id="crtScreenGradient" cx="45%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#EEFF80" />
            <stop offset="20%" stopColor="#E8F880" />
            <stop offset="40%" stopColor="#88DD44" />
            <stop offset="100%" stopColor="#4CAF50" />
          </radialGradient>

          {/* CRT reflection/cloud overlay - enhanced for more glow */}
          <radialGradient id="crtReflection" cx="35%" cy="25%" r="45%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#F0FFF0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
          </radialGradient>

          {/* Additional cloud blob highlights for CRT glow */}
          <radialGradient id="crtCloudLeft" cx="30%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#F0FFF0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="crtCloudRight" cx="70%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#F0FFF0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
          </radialGradient>

          {/* Hat cone linear gradient - 3D depth */}
          <linearGradient id="hatConeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a2a3f" />
            <stop offset="50%" stopColor="#2B3E50" />
            <stop offset="100%" stopColor="#3d5a7f" />
          </linearGradient>

          {/* Boot gradient - 3D shading */}
          <linearGradient id="bootGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A3728" />
            <stop offset="50%" stopColor="#5C4033" />
            <stop offset="100%" stopColor="#3E2723" />
          </linearGradient>

          {/* Body gradient - richer, more saturated warm brown */}
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9B7E56" />
            <stop offset="50%" stopColor="#8B5E3C" />
            <stop offset="100%" stopColor="#7B4F2E" />
          </linearGradient>

          {/* Power button glow - radial for glowing effect */}
          <radialGradient id="powerButtonGlow" cx="50%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#FFE680" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>

          {/* Glove gradient - pure white with light gray shadows */}
          <linearGradient id="gloveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>
        </defs>
        {/* Background parchment circle */}
        <circle
          cx="200"
          cy="200"
          r="195"
          fill="#E8DCC8"
          stroke="#FF0000"
          strokeWidth="8"
        />

        {/* Parchment texture - subtle noise speckles */}
        <g opacity="0.15">
          <circle cx="120" cy="110" r="1.5" fill="#8B7355" />
          <circle cx="280" cy="140" r="1" fill="#8B7355" />
          <circle cx="95" cy="280" r="1.2" fill="#8B7355" />
          <circle cx="310" cy="270" r="1" fill="#8B7355" />
          <circle cx="150" cy="80" r="1.5" fill="#8B7355" />
          <circle cx="320" cy="100" r="0.8" fill="#8B7355" />
          <circle cx="70" cy="200" r="1" fill="#8B7355" />
          <circle cx="330" cy="320" r="1.2" fill="#8B7355" />
          <circle cx="140" cy="340" r="0.9" fill="#8B7355" />
          <circle cx="260" cy="350" r="1.1" fill="#8B7355" />
          <circle cx="100" cy="150" r="0.8" fill="#8B7355" />
          <circle cx="300" cy="210" r="1" fill="#8B7355" />
        </g>

        {/* Vitruvian Man circle and square guides */}
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="#B8A395"
          strokeWidth="2"
        />

        {/* Horizontal guide line */}
        <line x1="60" y1="200" x2="340" y2="200" stroke="#B8A395" strokeWidth="2" />

        {/* Vertical guide line */}
        <line x1="200" y1="60" x2="200" y2="340" stroke="#B8A395" strokeWidth="2" />

        {/* Square guides */}
        <rect
          x="80"
          y="80"
          width="240"
          height="240"
          fill="none"
          stroke="#B8A395"
          strokeWidth="2"
        />

        {/* LEGS */}
        {/* Left leg */}
        <g>
          {/* Left boot with gradient */}
          <ellipse cx="140" cy="330" rx="22" ry="18" fill="url(#bootGradient)" />
          <path
            d="M 130 318 L 135 308 L 145 308 L 150 318 Z"
            fill="url(#bootGradient)"
            stroke="#2C1810"
            strokeWidth="1.5"
          />
          {/* Ankle seam/rivet details */}
          <rect x="128" y="320" width="24" height="8" fill="#2C1810" rx="1" />
          <circle cx="135" cy="324" r="1.5" fill="#5C4033" />
          <circle cx="145" cy="324" r="1.5" fill="#5C4033" />
          {/* Boot toe highlight facet - lighter area */}
          <ellipse cx="142" cy="335" rx="14" ry="8" fill="#7A5E54" opacity="0.6" />
          {/* Boot sole - darker strip at bottom */}
          <rect x="128" y="343" width="24" height="3" fill="#1C0F0A" />
        </g>

        {/* Right leg */}
        <g>
          {/* Right boot with gradient */}
          <ellipse cx="260" cy="330" rx="22" ry="18" fill="url(#bootGradient)" />
          <path
            d="M 250 318 L 255 308 L 265 308 L 270 318 Z"
            fill="url(#bootGradient)"
            stroke="#2C1810"
            strokeWidth="1.5"
          />
          {/* Ankle seam/rivet details */}
          <rect x="248" y="320" width="24" height="8" fill="#2C1810" rx="1" />
          <circle cx="255" cy="324" r="1.5" fill="#5C4033" />
          <circle cx="265" cy="324" r="1.5" fill="#5C4033" />
          {/* Boot toe highlight facet - lighter area */}
          <ellipse cx="262" cy="335" rx="14" ry="8" fill="#7A5E54" opacity="0.6" />
          {/* Boot sole - darker strip at bottom */}
          <rect x="248" y="343" width="24" height="3" fill="#1C0F0A" />
        </g>

        {/* MAIN BODY - Torso */}
        <g>
          {/* Body base - with darker, richer brown gradient */}
          <rect x="130" y="220" width="140" height="100" fill="url(#bodyGradient)" rx="8" />

          {/* Body highlight - lighter top with richer tones */}
          <ellipse cx="200" cy="240" rx="70" ry="30" fill="#A68258" opacity="0.7" />

          {/* Panel detail - dark brown panel */}
          <rect x="160" y="280" width="80" height="25" fill="#6B5344" rx="3" />

          {/* Panel lines - wood texture */}
          <line x1="170" y1="280" x2="170" y2="305" stroke="#4A3728" strokeWidth="1" />
          <line x1="200" y1="280" x2="200" y2="305" stroke="#4A3728" strokeWidth="1" />
          <line x1="230" y1="280" x2="230" y2="305" stroke="#4A3728" strokeWidth="1" />

          {/* Power button glow background */}
          <circle cx="200" cy="295" r="12" fill="url(#powerButtonGlow)" />

          {/* Power button - golden circle */}
          <circle cx="200" cy="295" r="8" fill="#D4AF37" stroke="#9B8B2F" strokeWidth="1.5" />

          {/* Button shine */}
          <circle cx="198" cy="292" r="3" fill="#FFEB99" opacity="0.9" />
        </g>

        {/* TV SCREEN HEAD */}
        <g>
          {/* Screen frame - brown bezel with gradient */}
          <rect x="110" y="130" width="180" height="130" fill="url(#bodyGradient)" rx="8" />

          {/* Screen frame darker edges */}
          <rect
            x="110"
            y="130"
            width="180"
            height="130"
            fill="none"
            stroke="#5C4033"
            strokeWidth="3"
            rx="8"
          />

          {/* Inner bezel shadow */}
          <rect x="125" y="150" width="150" height="100" fill="#6B5344" rx="4" />

          {/* CRT Screen glass - with radial gradient for depth */}
          <rect x="130" y="155" width="140" height="90" fill="url(#crtScreenGradient)" rx="2" />

          {/* Screen reflection/cloud highlight - simulates CRT depth */}
          <ellipse cx="155" cy="170" rx="50" ry="35" fill="url(#crtReflection)" />

          {/* Refined white specular highlight - cloud-like shape */}
          <path
            d="M 165 160 Q 175 155 180 165 Q 185 170 175 180 Q 165 175 165 160 Z"
            fill="#FFFFFF"
            opacity="0.8"
          />

          {/* Knobs on sides */}
          {/* Left knob */}
          <circle cx="115" cy="195" r="5" fill="#7B5E3C" stroke="#4A3728" strokeWidth="1" />
          <circle cx="115" cy="195" r="3" fill="#5C4033" />

          {/* Right knob */}
          <circle cx="285" cy="195" r="5" fill="#7B5E3C" stroke="#4A3728" strokeWidth="1" />
          <circle cx="285" cy="195" r="3" fill="#5C4033" />

          {/* Additional cloud-like highlights on CRT screen */}
          <ellipse cx="160" cy="180" rx="45" ry="28" fill="url(#crtCloudLeft)" />
          <ellipse cx="230" cy="172" rx="50" ry="32" fill="url(#crtCloudRight)" />
        </g>

        {/* WIZARD HAT */}
        <g>
          {/* Hat brim - MUCH wider and flatter, like classic witch hat */}
          <ellipse cx="200" cy="125" rx="130" ry="38" fill="#2B3E50" stroke="#1a1a1a" strokeWidth="2.5" />

          {/* Hat brim shadow/depth - inner darker area */}
          <ellipse cx="200" cy="127" rx="125" ry="33" fill="#1F2B38" opacity="0.5" />

          {/* Hat brim rim highlight */}
          <ellipse cx="200" cy="123" rx="128" ry="36" fill="none" stroke="#3d5a7f" strokeWidth="1.5" />

          {/* Cone/tall part of hat with gradient */}
          <path
            d="M 130 125 L 200 15 L 270 125 Z"
            fill="url(#hatConeGradient)"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />

          {/* Hat cone shadow for 3D depth */}
          <path d="M 165 125 L 200 25 L 200 125 Z" fill="#1a2a3f" opacity="0.6" />

          {/* Drooping/curled tip at top of cone */}
          <path
            d="M 200 15 Q 210 5 215 12 Q 213 18 205 20"
            fill="url(#hatConeGradient)"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
          {/* Tip curve shadow for 3D effect */}
          <path
            d="M 200 15 Q 208 8 213 14"
            fill="none"
            stroke="#0f1820"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* HAT DECORATIONS - Moons (bigger and more prominent) and Stars */}
          {/* Crescent moon - left side brim */}
          <g>
            <circle cx="140" cy="125" r="15" fill="#F5D547" />
            <circle cx="145" cy="125" r="15" fill="#2B3E50" />
          </g>

          {/* Crescent moon - right side brim */}
          <g>
            <circle cx="260" cy="125" r="15" fill="#F5D547" />
            <circle cx="255" cy="125" r="15" fill="#2B3E50" />
          </g>

          {/* Crescent moon - left mid-cone */}
          <g>
            <circle cx="155" cy="65" r="14" fill="#F5D547" />
            <circle cx="159" cy="65" r="14" fill="#2B3E50" />
          </g>

          {/* Crescent moon - right mid-cone */}
          <g>
            <circle cx="245" cy="65" r="14" fill="#F5D547" />
            <circle cx="241" cy="65" r="14" fill="#2B3E50" />
          </g>

          {/* Star - top of cone (larger) */}
          <g transform="translate(200, 22)">
            <polygon
              points="0,-13 4,-5 13,-3 8,3 9,13 0,7.5 -9,13 -8,3 -13,-3 -4,-5"
              fill="#F5D547"
              stroke="#D4A017"
              strokeWidth="1"
            />
          </g>

          {/* Star - left-center of cone */}
          <g transform="translate(145, 55)">
            <polygon
              points="0,-11 3.5,-3.5 11,-1.5 6,2.5 7,11 0,6.5 -7,11 -6,2.5 -11,-1.5 -3.5,-3.5"
              fill="#F5D547"
              stroke="#D4A017"
              strokeWidth="0.9"
            />
          </g>

          {/* Star - right-center of cone */}
          <g transform="translate(255, 55)">
            <polygon
              points="0,-11 3.5,-3.5 11,-1.5 6,2.5 7,11 0,6.5 -7,11 -6,2.5 -11,-1.5 -3.5,-3.5"
              fill="#F5D547"
              stroke="#D4A017"
              strokeWidth="0.9"
            />
          </g>

          {/* Star - center front on brim (larger) */}
          <g transform="translate(200, 148)">
            <polygon
              points="0,-9 3,-3 9,-1 5,2.5 6,9 0,4.5 -6,9 -5,2.5 -9,-1 -3,-3"
              fill="#F5D547"
              stroke="#D4A017"
              strokeWidth="0.9"
            />
          </g>

          {/* Star - left front brim */}
          <g transform="translate(150, 143)">
            <polygon
              points="0,-8 2.5,-2.5 8,-0.5 4.5,2 5.5,8 0,4 -5.5,8 -4.5,2 -8,-0.5 -2.5,-2.5"
              fill="#F5D547"
              stroke="#D4A017"
              strokeWidth="0.8"
            />
          </g>

          {/* Star - right front brim */}
          <g transform="translate(250, 143)">
            <polygon
              points="0,-8 2.5,-2.5 8,-0.5 4.5,2 5.5,8 0,4 -5.5,8 -4.5,2 -8,-0.5 -2.5,-2.5"
              fill="#F5D547"
              stroke="#D4A017"
              strokeWidth="0.8"
            />
          </g>


        </g>

        {/* ARMS - Four arms (2 pairs) spread wide with enhanced gloves */}
        {/* Left upper arm */}
        <g>
          {/* Arm tube - dark gray with gradient */}
          <rect x="50" y="200" width="80" height="18" fill="#4A4A4A" rx="9" />
          <rect x="50" y="200" width="80" height="8" fill="#5A5A5A" rx="9" opacity="0.6" />

          {/* Left upper glove with separated fingers */}
          <g>
            {/* Hand base with gradient */}
            <ellipse cx="35" cy="209" rx="18" ry="20" fill="url(#gloveGradient)" />
            <ellipse cx="35" cy="209" rx="18" ry="20" fill="none" stroke="#9B8B7E" strokeWidth="1.5" />

            {/* Thumb - separated, pure white with gray shadow */}
            <ellipse cx="52" cy="215" rx="5" ry="13" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Index finger - separated */}
            <ellipse cx="42" cy="195" rx="5" ry="14" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Middle finger - separated */}
            <ellipse cx="32" cy="188" rx="5" ry="15" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Ring finger - separated */}
            <ellipse cx="22" cy="195" rx="5" ry="14" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Pinky finger - separated */}
            <ellipse cx="15" cy="210" rx="4" ry="12" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Wrist band */}
            <rect x="28" y="225" width="14" height="7" fill="#4A4A4A" rx="1" />
          </g>
        </g>

        {/* Left lower arm */}
        <g>
          {/* Arm tube */}
          <rect x="50" y="245" width="80" height="18" fill="#4A4A4A" rx="9" />
          <rect x="50" y="245" width="80" height="8" fill="#5A5A5A" rx="9" opacity="0.6" />

          {/* Left lower glove with separated fingers */}
          <g>
            {/* Hand base with gradient */}
            <ellipse cx="35" cy="254" rx="18" ry="20" fill="url(#gloveGradient)" />
            <ellipse cx="35" cy="254" rx="18" ry="20" fill="none" stroke="#9B8B7E" strokeWidth="1.5" />

            {/* Thumb - separated */}
            <ellipse cx="52" cy="260" rx="5" ry="13" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Index finger - separated */}
            <ellipse cx="42" cy="240" rx="5" ry="14" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Middle finger - separated */}
            <ellipse cx="32" cy="233" rx="5" ry="15" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Ring finger - separated */}
            <ellipse cx="22" cy="240" rx="5" ry="14" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Pinky finger - separated */}
            <ellipse cx="15" cy="255" rx="4" ry="12" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Wrist band */}
            <rect x="28" y="270" width="14" height="7" fill="#4A4A4A" rx="1" />
          </g>
        </g>

        {/* Right upper arm */}
        <g>
          {/* Arm tube */}
          <rect x="270" y="200" width="80" height="18" fill="#4A4A4A" rx="9" />
          <rect x="270" y="200" width="80" height="8" fill="#5A5A5A" rx="9" opacity="0.6" />

          {/* Right upper glove with separated fingers */}
          <g>
            {/* Hand base with gradient */}
            <ellipse cx="365" cy="209" rx="18" ry="20" fill="url(#gloveGradient)" />
            <ellipse cx="365" cy="209" rx="18" ry="20" fill="none" stroke="#9B8B7E" strokeWidth="1.5" />

            {/* Thumb - separated */}
            <ellipse cx="348" cy="215" rx="5" ry="13" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Index finger - separated */}
            <ellipse cx="358" cy="195" rx="5" ry="14" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Middle finger - separated */}
            <ellipse cx="368" cy="188" rx="5" ry="15" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Ring finger - separated */}
            <ellipse cx="378" cy="195" rx="5" ry="14" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Pinky finger - separated */}
            <ellipse cx="385" cy="210" rx="4" ry="12" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Wrist band */}
            <rect x="358" y="225" width="14" height="7" fill="#4A4A4A" rx="1" />
          </g>
        </g>

        {/* Right lower arm */}
        <g>
          {/* Arm tube */}
          <rect x="270" y="245" width="80" height="18" fill="#4A4A4A" rx="9" />
          <rect x="270" y="245" width="80" height="8" fill="#5A5A5A" rx="9" opacity="0.6" />

          {/* Right lower glove with separated fingers */}
          <g>
            {/* Hand base with gradient */}
            <ellipse cx="365" cy="254" rx="18" ry="20" fill="url(#gloveGradient)" />
            <ellipse cx="365" cy="254" rx="18" ry="20" fill="none" stroke="#9B8B7E" strokeWidth="1.5" />

            {/* Thumb - separated */}
            <ellipse cx="348" cy="260" rx="5" ry="13" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Index finger - separated */}
            <ellipse cx="358" cy="240" rx="5" ry="14" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Middle finger - separated */}
            <ellipse cx="368" cy="233" rx="5" ry="15" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Ring finger - separated */}
            <ellipse cx="378" cy="240" rx="5" ry="14" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Pinky finger - separated */}
            <ellipse cx="385" cy="255" rx="4" ry="12" fill="url(#gloveGradient)" stroke="#C0C0C0" strokeWidth="1.5" />

            {/* Wrist band */}
            <rect x="358" y="270" width="14" height="7" fill="#4A4A4A" rx="1" />
          </g>
        </g>
      </svg>
    </Container>
  );
};

WizardRobotAvatar.propTypes = propTypes;
WizardRobotAvatar.defaultProps = defaultProps;

export default WizardRobotAvatar;
