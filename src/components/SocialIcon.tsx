type SocialIconProps = {
  name: 'whatsapp' | 'instagram' | 'facebook';
};

export function SocialIcon({ name }: SocialIconProps) {
  if (name === 'whatsapp') {
    return (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2a9.83 9.83 0 0 0-8.42 14.91L2.3 22l5.23-1.37A9.9 9.9 0 1 0 12.04 2Zm0 17.99a8.1 8.1 0 0 1-4.12-1.12l-.3-.18-3.1.81.83-3.02-.2-.31a8.1 8.1 0 1 1 6.89 3.82Zm4.45-6.07c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    );
  }

  if (name === 'instagram') {
    return (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.4 21v-8.2h2.76l.41-3.2H13.4V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.3-.04-1.34-.14-2.55-.14-2.52 0-4.24 1.54-4.24 4.37V9.6H7.05v3.2h2.85V21h3.5Z" />
    </svg>
  );
}