import React from 'react';
import { motion } from 'motion/react';
import { Percent, Waves, Umbrella, Building, Smartphone } from 'lucide-react';
import { brokerData } from '../config/brokerData';

export const InvestmentHighlights: React.FC = () => {
  const { investmentHighlights } = brokerData as any;

  if (!investmentHighlights || !investmentHighlights.show) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Percent': return <Percent className="w-6 h-6 text-gold" />;
      case 'Waves': return <Waves className="w-6 h-6 text-gold" />;
      case 'Umbrella': return <Umbrella className="w-6 h-6 text-gold" />;
      case 'Building': return <Building className="w-6 h-6 text-gold" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-gold" />;
      default: return <Percent className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="destaques-investimento">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
              {investmentHighlights.image ? (
                <img 
                  src={investmentHighlights.image} 
                  alt="Fechando negócio"
                  className="w-full h-full object-cover"
                  
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-gold/30 rounded-tl-[2.5rem] -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-gold/30 rounded-br-[2.5rem] -z-10" />
          </motion.div>

          {/* Content Side (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col gap-8">
              {investmentHighlights.items.map((item: any, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <p className="text-xl md:text-2xl text-slate-800 font-medium">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
