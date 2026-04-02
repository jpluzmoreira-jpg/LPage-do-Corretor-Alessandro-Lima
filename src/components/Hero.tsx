import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { brokerData } from '../config/brokerData';

export function Hero() {
  const { hero, company, broker } = brokerData;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Autoplay failed:", e));
    }
  }, []);

  const message = encodeURIComponent(`Olá ${broker.name}! Gostaria de uma consultoria gratuita para investir no litoral de SC.`);
  const whatsappUrl = `https://wa.me/${broker.phone}?text=${message}`;

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = hero.backgroundVideo ? getYoutubeId(hero.backgroundVideo) : null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-dark">
      <div className="absolute inset-0 z-0">
        {/* Renderiza o vídeo se existir, senão usa a imagem como fallback */}
        {youtubeId ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh' }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ) : hero.backgroundVideo ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster={hero.backgroundImage}
          >
            <source src={hero.backgroundVideo} type="video/mp4" />
          </video>
        ) : hero.backgroundImage ? (
          <img
            src={hero.backgroundImage}
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
            
          />
        ) : null}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 px-4 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-lg"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-md"
        >
          {hero.subheadline}
        </motion.p>
        
        {company.show && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-3 text-white/80 font-medium mb-10 drop-shadow-md"
          >
            <span className="text-sm tracking-wider uppercase">Associado</span>
            {company.logo ? (
              <img src={company.logo} alt={company.name} className="h-[72px] w-auto object-contain"  />
            ) : (
              <span className="text-lg font-display text-gold font-bold">{company.name}</span>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f3bf70] hover:bg-[#e0ae60] text-dark font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
          >
            {hero.ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
