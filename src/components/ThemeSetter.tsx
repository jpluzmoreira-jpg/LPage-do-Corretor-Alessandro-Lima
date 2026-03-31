import React, { useEffect } from 'react';
import { brokerData } from '../config/brokerData';

export const ThemeSetter: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const { theme } = brokerData;

    root.style.setProperty('--color-gold', '#f3bf70');
    root.style.setProperty('--color-gold-hover', '#e0ae60');
    root.style.setProperty('--color-dark', theme.primary);
    root.style.setProperty('--color-darker', theme.primaryHover);
    root.style.setProperty('--color-card', theme.cardBg);

    // Optional: If you want to dynamically inject Google Fonts based on config
    // For now, we assume Inter and Playfair Display are loaded in index.html
    // but we can set the CSS variables for them
    root.style.setProperty('--font-sans', theme.fontPrimary);
    root.style.setProperty('--font-display', theme.fontSecondary);

  }, []);

  return null;
};
