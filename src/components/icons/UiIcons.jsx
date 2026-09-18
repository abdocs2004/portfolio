// Small, hand-authored UI icons (not brand logos) — kept as plain inline SVG
// so there's zero dependency on an icon font or external request for these.
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} {...base} {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} {...base} {...props}>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} {...base} {...props}>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </svg>
);

export const ExternalLinkIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} {...base} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} {...base} {...props}>
    <path d="M12 3v12" />
    <polyline points="7 10 12 15 17 10" />
    <path d="M4 19h16" />
  </svg>
);

export const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} {...base} {...props}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} fill="currentColor" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.78.83-3.03-.2-.31a8.17 8.17 0 0 1-1.26-4.4c0-4.53 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.28-8.25 8.28Zm4.52-6.19c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.22.24-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} fill="currentColor" {...props}>
    <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5v11.5H3.2V8.75Zm6.4 0h3.35v1.57h.05c.47-.87 1.6-1.79 3.3-1.79 3.53 0 4.18 2.29 4.18 5.27v6.45h-3.5v-5.72c0-1.36-.02-3.11-1.9-3.11-1.9 0-2.19 1.48-2.19 3.01v5.82h-3.29V8.75Z" />
  </svg>
);

export const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const MostaqlIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} {...base} {...props}>
    <path d="M4 16V8l4 4 4-6 4 6 4-4v8" />
  </svg>
);
