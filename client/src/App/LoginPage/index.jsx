import React, { useState, useEffect } from 'react';
import history from 'browserHistory';
import { storeAuthToken } from 'shared/utils/authToken';

import {
  FilmGrainOverlay,
  Shell,
  BrandPanel,
  Wordmark,
  WordmarkGlyph,
  WordmarkAI,
  WordmarkDivider,
  WordmarkProduct,
  BrandMid,
  Eyebrow,
  BrandHeadline,
  HeadlineGrad,
  BrandLede,
  Pipeline,
  PlRow,
  PlNode,
  PlLabel,
  PlTime,
  BrandFoot,
  BrandFootDot,
  AuthPanel,
  Card,
  MobileWordmark,
  WordmarkGlyph as MobileGlyph,
  AuthHead,
  AuthEyebrow,
  AuthTitle,
  AuthSubtitle,
  SSOContainer,
  SSOButton,
  Divider,
  LoginForm,
  Field,
  LabelRow,
  FieldLabel,
  ForgotLink,
  InputWrap,
  FieldInput,
  RevealButton,
  RememberLabel,
  CheckBox,
  SubmitButton,
  Spinner,
  Footnote,
  SecureNotice,
  ErrorMessage,
} from './Styles';

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const GlyphIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" width="17" height="17">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z" />
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = password => password.length >= 8;

// ─── Component ────────────────────────────────────────────────────────────────

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Add/remove body class for film grain
  useEffect(() => {
    document.body.classList.add('login-page');
    return () => document.body.classList.remove('login-page');
  }, []);

  const validate = () => {
    const errs = {};
    if (!email) errs.email = 'Email is required.';
    else if (!validateEmail(email)) errs.email = 'Enter a valid email address.';
    if (!password) errs.password = 'Password is required.';
    else if (!validatePassword(password)) errs.password = 'Password must be at least 8 characters.';
    return errs;
  };

  const handleBlur = field => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const allTouched = { email: true, password: true };
    setTouched(allTouched);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    // Mock auth: 1600ms delay, then store token and redirect
    await new Promise(resolve => setTimeout(resolve, 1600));
    storeAuthToken('mock-jwt-token-autonomy-ai');
    history.push('/');
  };

  // Compute inline errors only for touched fields
  const displayErrors = {};
  if (touched.email) displayErrors.email = validate().email;
  if (touched.password) displayErrors.password = validate().password;

  return (
    <React.Fragment>
      <FilmGrainOverlay />
      <Shell>
        {/* ── Brand Panel ── */}
        <BrandPanel aria-label="Login · brand panel">
          {/* Wordmark */}
          <Wordmark>
            <WordmarkGlyph aria-hidden="true">
              <GlyphIcon />
            </WordmarkGlyph>
            <span>Autonomy<WordmarkAI>AI</WordmarkAI></span>
            <WordmarkDivider aria-hidden="true" />
            <WordmarkProduct>On-Call Agent</WordmarkProduct>
          </Wordmark>

          {/* Brand content */}
          <BrandMid>
            <Eyebrow>Autonomous incident response</Eyebrow>
            <BrandHeadline>
              Your on-call engineer that{' '}
              <HeadlineGrad>never sleeps.</HeadlineGrad>
            </BrandHeadline>
            <BrandLede>
              From first alert to merged fix — the agent triages, investigates,
              and ships the patch while your team stays asleep.
            </BrandLede>

            <Pipeline aria-hidden="true">
              <PlRow>
                <PlNode variant="blue" />
                <PlLabel>
                  <b>Alert received</b> — latency spike, checkout-svc
                </PlLabel>
                <PlTime>00:00</PlTime>
              </PlRow>
              <PlRow>
                <PlNode variant="amber" />
                <PlLabel>
                  <b>Triaged &amp; root-caused</b> — connection pool exhausted
                </PlLabel>
                <PlTime>00:02</PlTime>
              </PlRow>
              <PlRow>
                <PlNode variant="ok" />
                <PlLabel>
                  <b>Fix merged</b> — PR #1408, verified in staging
                </PlLabel>
                <PlTime>00:09</PlTime>
              </PlRow>
            </Pipeline>
          </BrandMid>

          {/* Brand footer */}
          <BrandFoot>
            <span>SOC 2 Type II</span>
            <BrandFootDot aria-hidden="true" />
            <span>Runs in your infra</span>
            <BrandFootDot aria-hidden="true" />
            <span>150+ teams on-call</span>
          </BrandFoot>
        </BrandPanel>

        {/* ── Auth Panel ── */}
        <AuthPanel aria-label="Login · form">
          <Card>
            {/* Mobile-only wordmark */}
            <MobileWordmark>
              <MobileGlyph aria-hidden="true">
                <GlyphIcon />
              </MobileGlyph>
              <span>Autonomy<WordmarkAI>AI</WordmarkAI></span>
            </MobileWordmark>

            {/* Heading */}
            <AuthHead>
              <AuthEyebrow>Sign in</AuthEyebrow>
              <AuthTitle>Welcome back</AuthTitle>
              <AuthSubtitle>Pick up where the agent left off.</AuthSubtitle>
            </AuthHead>

            {/* SSO buttons */}
            <SSOContainer>
              <SSOButton type="button" onClick={() => {}}>
                <GitHubIcon />
                Continue with GitHub
              </SSOButton>
              <SSOButton type="button" onClick={() => {}}>
                <GoogleIcon />
                Continue with Google
              </SSOButton>
            </SSOContainer>

            {/* Divider */}
            <Divider>
              <span>or</span>
            </Divider>

            {/* Login form */}
            <LoginForm onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Work email</FieldLabel>
                <InputWrap>
                  <FieldInput
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => handleBlur('email')}
                    disabled={loading}
                  />
                </InputWrap>
                {displayErrors.email && (
                  <ErrorMessage>{displayErrors.email}</ErrorMessage>
                )}
              </Field>

              {/* Password */}
              <Field>
                <LabelRow>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <ForgotLink href="#" tabIndex={0} onClick={e => e.preventDefault()}>
                    Forgot password?
                  </ForgotLink>
                </LabelRow>
                <InputWrap>
                  <FieldInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    disabled={loading}
                  />
                  <RevealButton
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword(v => !v)}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </RevealButton>
                </InputWrap>
                {displayErrors.password && (
                  <ErrorMessage>{displayErrors.password}</ErrorMessage>
                )}
              </Field>

              {/* Remember checkbox */}
              <RememberLabel>
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                />
                <CheckBox checked={remember} aria-hidden="true">
                  <CheckIcon />
                </CheckBox>
                Keep me signed in
              </RememberLabel>

              {/* Submit button */}
              <SubmitButton
                type="submit"
                disabled={loading}
                loading={loading}
              >
                {loading && <Spinner aria-hidden="true" />}
                <span>{loading ? 'Signing in…' : 'Sign in'}</span>
              </SubmitButton>
            </LoginForm>

            {/* Footnote */}
            <Footnote>
              New to the On-Call Agent?{' '}
              <button type="button" onClick={() => {}}>Request access</button>
            </Footnote>

            {/* Security notice */}
            <SecureNotice>
              <LockIcon />
              Encrypted &amp; SSO-ready
            </SecureNotice>
          </Card>
        </AuthPanel>
      </Shell>
    </React.Fragment>
  );
};

export default LoginPage;
