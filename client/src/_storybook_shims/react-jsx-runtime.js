// Shim for React 16 jsx-runtime compatibility.
// React 17+ uses the automatic JSX runtime via react/jsx-runtime.
// React 16.12 doesn't have this module, so we provide it via module aliasing in Storybook's Vite config.
// This shim exports jsx and jsxs as React.createElement to maintain compatibility.
const React = require('react');

const jsx = React.createElement;
const jsxs = React.createElement;
const Fragment = React.Fragment;

module.exports = { jsx, jsxs, Fragment };
