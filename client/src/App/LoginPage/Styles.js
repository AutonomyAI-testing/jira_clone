import styled, { keyframes, createGlobalStyle } from 'styled-components';

// ─── Keyframes ───────────────────────────────────────────────────────────────

export const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// ─── Global / Film-grain overlay ─────────────────────────────────────────────

export const FilmGrainOverlay = createGlobalStyle`
  body.login-page::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.045;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
`;

// ─── Shell ────────────────────────────────────────────────────────────────────

export const Shell = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  min-height: 100vh;
  background: #0d0f14;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: #e8eaf0;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

// ─── Brand Panel (left) ───────────────────────────────────────────────────────

export const BrandPanel = styled.section`
  position: relative;
  overflow: hidden;
  background: #0f1117;
  border-right: 1px solid #1e2130;
  padding: clamp(36px, 4.5vw, 64px);
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(60% 55% at 18% 8%, rgba(94, 84, 82, 0.45), transparent 60%),
      radial-gradient(50% 50% at 92% 100%, rgba(242, 87, 48, 0.10), transparent 62%);
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

// ─── Wordmark ─────────────────────────────────────────────────────────────────

export const Wordmark = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 800;
  font-size: 19px;
  letter-spacing: -0.01em;
`;

export const WordmarkGlyph = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  flex: none;
  background: linear-gradient(150deg, #f25730, #f8a07a);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px rgba(242, 87, 48, 0.35), 0 6px 18px rgba(242, 87, 48, 0.25);

  svg {
    width: 16px;
    height: 16px;
    stroke: #fff;
    fill: none;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const WordmarkAI = styled.span`
  color: #f25730;
`;

export const WordmarkDivider = styled.span`
  width: 1px;
  height: 18px;
  background: #2a2d3e;
  margin: 0 3px;
`;

export const WordmarkProduct = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #6b7280;
  letter-spacing: 0;
`;

// ─── Brand Middle Content ─────────────────────────────────────────────────────

export const BrandMid = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding: 48px 0;
  max-width: 480px;
`;

export const Eyebrow = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #f25730;
  margin: 0 0 22px;
`;

export const BrandHeadline = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 800;
  font-size: clamp(32px, 3.6vw, 48px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
  color: #e8eaf0;
`;

export const HeadlineGrad = styled.span`
  background: linear-gradient(95deg, #f25730, #f8a07a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const BrandLede = styled.p`
  font-size: 18px;
  line-height: 1.55;
  color: #6b7280;
  margin: 22px 0 0;
  max-width: 420px;
`;

// ─── Pipeline ─────────────────────────────────────────────────────────────────

export const Pipeline = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const PlRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  padding: 11px 0;

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    height: 100%;
    width: 1px;
    background: #1e2130;
  }
`;

export const PlNode = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  flex: none;
  position: relative;
  z-index: 1;

  ${({ variant }) => variant === 'blue' && `
    background: #9fd2ed;
    box-shadow: 0 0 0 4px rgba(159, 210, 237, 0.12);
  `}

  ${({ variant }) => variant === 'amber' && `
    background: #e8a13c;
    box-shadow: 0 0 0 4px rgba(232, 161, 60, 0.12);
  `}

  ${({ variant }) => variant === 'ok' && `
    background: #4fb477;
    box-shadow: 0 0 0 4px rgba(79, 180, 119, 0.14);
  `}
`;

export const PlLabel = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: 12.5px;
  letter-spacing: 0.02em;
  color: #6b7280;

  b {
    color: #e8eaf0;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
`;

export const PlTime = styled.span`
  margin-left: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 11px;
  color: #3a3d50;
`;

// ─── Brand Footer ─────────────────────────────────────────────────────────────

export const BrandFoot = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: #3a3d50;
`;

export const BrandFootDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #2a2d3e;
`;

// ─── Auth Panel (right) ───────────────────────────────────────────────────────

export const AuthPanel = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(28px, 5vw, 64px);
  background: #0f1117;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 392px;
`;

// Mobile wordmark (shown only on small screens)
export const MobileWordmark = styled.div`
  display: none;
  align-items: center;
  gap: 11px;
  font-weight: 800;
  font-size: 19px;
  letter-spacing: -0.01em;
  margin-bottom: 30px;

  @media (max-width: 920px) {
    display: flex;
  }
`;

// ─── Auth Header ──────────────────────────────────────────────────────────────

export const AuthHead = styled.div`
  margin-bottom: 30px;
`;

export const AuthEyebrow = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #3a3d50;
  margin: 0 0 14px;
`;

export const AuthTitle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
  color: red;
`;

export const AuthSubtitle = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #6b7280;
  margin: 9px 0 0;
`;

// ─── SSO Buttons ─────────────────────────────────────────────────────────────

export const SSOContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
`;

export const SSOButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  font-size: 14px;
  background: #1a1d27;
  color: #e8eaf0;
  border: 1px solid #2a2d3e;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: border-color 0.18s ease-out, background 0.18s ease-out;

  svg {
    width: 17px;
    height: 17px;
    flex: none;
  }

  &:hover {
    border-color: #3a3d50;
    background: #1e2130;
  }
`;

// ─── Divider ─────────────────────────────────────────────────────────────────

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 22px;
  color: #3a3d50;

  &::before,
  &::after {
    content: "";
    height: 1px;
    flex: 1;
    background: #1e2130;
  }

  span {
    font-family: 'Courier New', Courier, monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
`;

// ─── Form ─────────────────────────────────────────────────────────────────────

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.div``;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
`;

export const ForgotLink = styled.a`
  font-size: 12.5px;
  color: #f25730;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const FieldInput = styled.input`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 15px;
  color: #e8eaf0;
  background: #1a1d27;
  border: 1px solid #2a2d3e;
  border-radius: 8px;
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.15s ease-out, box-shadow 0.15s ease-out;

  &::placeholder {
    color: #3a3d50;
  }

  &:focus {
    border-color: #f25730;
    box-shadow: 0 0 0 3px rgba(242, 87, 48, 0.18);
  }

  &[type="password"] {
    padding-right: 42px;
  }
`;

export const RevealButton = styled.button`
  position: absolute;
  right: 6px;
  background: none;
  border: 0;
  cursor: pointer;
  color: #3a3d50;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  transition: color 0.15s;

  &:hover {
    color: #6b7280;
  }

  svg {
    width: 17px;
    height: 17px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

// ─── Remember Checkbox ───────────────────────────────────────────────────────

export const RememberLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13.5px;
  color: #6b7280;
  cursor: pointer;
  user-select: none;
  margin-top: 2px;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const CheckBox = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 5px;
  border: 1px solid ${({ checked }) => (checked ? '#f25730' : '#2a2d3e')};
  background: ${({ checked }) => (checked ? '#f25730' : '#1a1d27')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  transition: all 0.15s ease-out;

  svg {
    width: 11px;
    height: 11px;
    stroke: #fff;
    fill: none;
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: opacity 0.12s;
  }
`;

// ─── Submit Button ────────────────────────────────────────────────────────────

export const SubmitButton = styled.button`
  margin-top: 4px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  font-size: 15px;
  background: ${({ loading }) => (loading ? '#c44325' : '#f25730')};
  color: #fff;
  border: 0;
  border-radius: 8px;
  padding: 13px 16px;
  cursor: ${({ loading }) => (loading ? 'wait' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  box-shadow: 0 0 0 0 rgba(242, 87, 48, 0);
  transition: background 0.15s ease-out, transform 0.12s ease-out, box-shadow 0.15s ease-out;

  &:hover:not(:disabled) {
    background: #ff6b46;
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(242, 87, 48, 0.4);
  }

  &:active:not(:disabled) {
    background: #c44325;
    transform: translateY(0);
  }

  &:disabled {
    cursor: wait;
  }
`;

export const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-right-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.65s linear infinite;
  flex: none;
`;

// ─── Footnote & Security ──────────────────────────────────────────────────────

export const Footnote = styled.p`
  margin-top: 26px;
  text-align: center;
  font-size: 13.5px;
  color: #6b7280;

  a {
    color: #f25730;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SecureNotice = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
  color: #3a3d50;

  svg {
    width: 13px;
    height: 13px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #e05c4a;
  margin: 5px 0 0;
`;
