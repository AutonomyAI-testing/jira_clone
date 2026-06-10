import React from 'react';

import Modal from './index';

export default {
  title: 'Shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
};

// Centered modal (default variant) - shown open with realistic issue detail content
export const CenteredOpen = {
  render: () => (
    <div style={{ position: 'relative', height: '100vh', background: '#f4f5f7' }}>
      <Modal
        isOpen
        variant="center"
        width={600}
        withCloseIcon
        onClose={() => {}}
        renderContent={() => (
          <div style={{ padding: '32px 40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: 'red', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '22px',
                  lineHeight: '1',
                  flexShrink: 0,
                }}
                role="img"
                aria-label="warning"
              >
                ⚠️
              </span>
              Fix login redirect loop on OAuth callback
            </h2>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '12px',
                  padding: '2px 8px',
                  background: '#E44D42',
                  color: '#fff',
                  borderRadius: '3px',
                  fontWeight: '600',
                }}
              >
                BUG
              </span>
              <span
                style={{
                  fontSize: '12px',
                  padding: '2px 8px',
                  background: '#dfe1e6',
                  color: '#42526E',
                  borderRadius: '3px',
                }}
              >
                HIGH PRIORITY
              </span>
              <span
                style={{
                  fontSize: '12px',
                  padding: '2px 8px',
                  background: '#0052cc',
                  color: '#fff',
                  borderRadius: '3px',
                }}
              >
                IN PROGRESS
              </span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#5E6C84', textTransform: 'uppercase', marginBottom: '8px' }}>
                Description
              </h3>
              <p style={{ fontSize: '14px', color: '#172b4d', lineHeight: '1.6' }}>
                Users are experiencing an infinite redirect loop when logging in via Google OAuth. The
                callback URL is not properly handled when the session token is expired. This affects
                all OAuth providers (Google, GitHub, Slack).
              </p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#5E6C84', textTransform: 'uppercase', marginBottom: '8px' }}>
                Assignee
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#0052cc',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  LT
                </div>
                <span style={{ fontSize: '14px', color: '#172b4d' }}>Lisa Thompson</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid #dfe1e6', paddingTop: '16px' }}>
              <button
                type="button"
                style={{
                  padding: '8px 16px',
                  borderRadius: '3px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  background: '#f4f5f7',
                  color: '#42526E',
                  border: '1px solid #dfe1e6',
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                style={{
                  padding: '8px 16px',
                  borderRadius: '3px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  background: '#0052cc',
                  color: '#fff',
                  border: 'none',
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      />
    </div>
  ),
};

// Aside modal variant - shown open as a side panel with issue details
export const AsideOpen = {
  render: () => (
    <div style={{ position: 'relative', height: '100vh', background: '#f4f5f7' }}>
      <Modal
        isOpen
        variant="aside"
        width={480}
        withCloseIcon
        onClose={() => {}}
        renderContent={() => (
          <div style={{ padding: '32px 32px 40px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#5E6C84',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                JIRA-247
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#172b4d', marginTop: '8px', lineHeight: '1.3' }}>
                Implement dark mode toggle in user preferences
              </h2>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    padding: '2px 8px',
                    background: '#65BA43',
                    color: '#fff',
                    borderRadius: '3px',
                    fontWeight: '600',
                  }}
                >
                  STORY
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    padding: '2px 8px',
                    background: '#ebecf0',
                    color: '#42526E',
                    borderRadius: '3px',
                  }}
                >
                  MEDIUM PRIORITY
                </span>
              </div>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#5E6C84', textTransform: 'uppercase', marginBottom: '8px' }}>
                Description
              </h3>
              <p style={{ fontSize: '14px', color: '#172b4d', lineHeight: '1.6', marginBottom: '12px' }}>
                Add a dark mode toggle to the user preferences panel. The toggle should persist the user&apos;s preference using localStorage and apply the theme across all pages.
              </p>
              <p style={{ fontSize: '14px', color: '#172b4d', lineHeight: '1.6' }}>
                <strong>Acceptance Criteria:</strong>
              </p>
              <ul style={{ fontSize: '14px', color: '#172b4d', lineHeight: '1.8', paddingLeft: '20px', marginTop: '4px' }}>
                <li>Toggle appears in user preferences sidebar</li>
                <li>Theme persists across page reloads</li>
                <li>Smooth transition animation on theme switch</li>
              </ul>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#5E6C84', textTransform: 'uppercase', marginBottom: '12px' }}>
                Details
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', fontSize: '14px' }}>
                <span style={{ color: '#5E6C84' }}>Status</span>
                <span style={{ color: '#172b4d', fontWeight: '500' }}>Selected for Development</span>
                <span style={{ color: '#5E6C84' }}>Assignee</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#F89C1C',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: '600',
                    }}
                  >
                    MK
                  </div>
                  <span>Marcus Kim</span>
                </div>
                <span style={{ color: '#5E6C84' }}>Reporter</span>
                <span style={{ color: '#172b4d' }}>Sarah Chen</span>
                <span style={{ color: '#5E6C84' }}>Due Date</span>
                <span style={{ color: '#172b4d' }}>Nov 28, 2024</span>
                <span style={{ color: '#5E6C84' }}>Estimate</span>
                <span style={{ color: '#172b4d' }}>5 story points</span>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#5E6C84', textTransform: 'uppercase', marginBottom: '12px' }}>
                Comments
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { initials: 'SC', color: '#0052cc', name: 'Sarah Chen', time: '2 hours ago', text: "Let's make sure to also update the documentation to reflect the new dark mode option." },
                  { initials: 'MK', color: '#F89C1C', name: 'Marcus Kim', time: '1 hour ago', text: "Already on it — I've drafted the theming approach using CSS variables. Should be straightforward." },
                ].map((comment, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: comment.color,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600',
                        flexShrink: 0,
                      }}
                    >
                      {comment.initials}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontWeight: '600', fontSize: '14px', color: '#172b4d' }}>{comment.name}</span>
                        <span style={{ fontSize: '12px', color: '#8993a4' }}>{comment.time}</span>
                      </div>
                      <p style={{ fontSize: '14px', color: '#172b4d', lineHeight: '1.5', margin: 0 }}>{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      />
    </div>
  ),
};

// Modal with renderLink - demonstrates uncontrolled (self-managing) mode
export const WithTriggerLink = {
  render: () => (
    <div style={{ padding: '60px', background: '#f4f5f7', minHeight: '400px' }}>
      <p style={{ marginBottom: '20px', color: '#42526E', fontSize: '14px' }}>
        Click the button below to open the modal (uncontrolled mode using renderLink):
      </p>
      <Modal
        variant="center"
        width={500}
        withCloseIcon
        renderLink={({ open }) => (
          <button
            type="button"
            onClick={open}
            style={{
              padding: '8px 16px',
              borderRadius: '3px',
              fontSize: '14px',
              cursor: 'pointer',
              background: '#0052cc',
              color: '#fff',
              border: 'none',
            }}
          >
            Open Confirmation Dialog
          </button>
        )}
        renderContent={({ close }) => (
          <div style={{ padding: '32px 40px', textAlign: 'center' }}>
            <span
              role="img"
              aria-label="warning"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#FFF3CD',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '28px',
              }}
            >
              ⚠️
            </span>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#172b4d', marginBottom: '12px' }}>
              Delete this issue?
            </h2>
            <p style={{ fontSize: '14px', color: '#5E6C84', lineHeight: '1.6', marginBottom: '24px' }}>
              This action cannot be undone. The issue and all of its comments, attachments, and
              history will be permanently deleted.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={close}
                style={{
                  padding: '8px 20px',
                  borderRadius: '3px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  background: '#f4f5f7',
                  color: '#42526E',
                  border: '1px solid #dfe1e6',
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                style={{
                  padding: '8px 20px',
                  borderRadius: '3px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  background: '#E13C3C',
                  color: '#fff',
                  border: 'none',
                }}
              >
                Delete Issue
              </button>
            </div>
          </div>
        )}
      />
    </div>
  ),
};
