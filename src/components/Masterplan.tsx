import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { brokerData } from '../config/brokerData';

// Helper to dynamically render Lucide icons
const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.CheckCircle className={className} />;
  return <Icon className={className} />;
};

export function Masterplan() {
  const [isMobile, setIsMobile] = useState(false);
  const { region } = brokerData;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-dark">
              {region.title} <span className="text-gold">{region.highlight}</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              {region.description}
            </p>
            
            <div className="space-y-6 mb-8">
              {region.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <IconComponent name={feature.icon} className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-dark">{feature.title}</h4>
                    <p className="text-slate-500 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gold/20 mb-8 relative overflow-hidden group shadow-sm">
              <motion.div 
                initial={isMobile ? { opacity: 0 } : {}}
                whileInView={isMobile ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 1 }}
                className={`absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent transition-opacity ${!isMobile ? 'opacity-0 group-hover:opacity-100' : ''}`}
              ></motion.div>
              <h4 className="text-gold font-bold mb-2 relative z-10">{region.opportunityBox.title}</h4>
              <p className="text-sm text-slate-600 relative z-10">
                {region.opportunityBox.description}
              </p>
            </div>

            {region.masterplanLink && (
              <a 
                href={region.masterplanLink}
                target="_blank"
                rel="noopener noreferrer"
                download="Masterplan_Pereque.pdf"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-hover transition-colors font-semibold"
              >
                Baixar o Masterplan Completo <LucideIcons.Download className="w-5 h-5" />
              </a>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col gap-6 justify-center"
          >
            {region.images?.map((img, idx) => (
              <div key={idx} className="relative rounded-3xl overflow-hidden w-full aspect-video shadow-xl group">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <h4 className="text-white font-display font-bold text-xl mb-1">{img.title}</h4>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{img.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
