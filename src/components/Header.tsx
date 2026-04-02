import React from 'react';
import { motion } from 'motion/react';
import { brokerData } from '../config/brokerData';

export function Header() {
  const { broker, featuredProperty, company } = brokerData;

  // Helper to split name for styling
  const nameParts = broker.name.split(' ');
  const firstName = nameParts[0]?.toUpperCase() || '';
  const lastName = nameParts.slice(1).join(' ')?.toUpperCase() || '';

  const message = encodeURIComponent(`Olá ${broker.name}! Estava navegando no seu site e gostaria de conversar sobre investimentos.`);
  const whatsappUrl = `https://wa.me/${broker.phone}?text=${message}`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1a2d4e] to-[#123254] shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {broker.logoSymbol && (
            <img src={broker.logoSymbol} alt="Logo Alessandro Lima" className="h-12 w-auto object-contain"  />
          )}
          <div className="font-display font-bold text-xl md:text-2xl tracking-wider text-white">
            {firstName}<span className="text-[#f3bf70]">{lastName ? ` ${lastName}` : ''}</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
          <a href="#diferenciais" className="hover:text-[#f3bf70] transition-colors">Diferenciais</a>
          <a href="#sobre" className="hover:text-[#f3bf70] transition-colors">Sobre</a>
          {featuredProperty.show && (
            <a href="#empreendimento" className="hover:text-[#f3bf70] transition-colors">Destaque</a>
          )}
          <a href="#masterplan" className="hover:text-[#f3bf70] transition-colors">Região</a>
          {company.show && (
            <a href="#empresa" className="hover:text-[#f3bf70] transition-colors">Empresa</a>
          )}
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#1a2d4e] hover:bg-[#f3bf70] hover:text-white hover:border-[#f3bf70] border border-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors shadow-md"
        >
          Contato
        </a>
      </div>
    </motion.header>
  );
}
