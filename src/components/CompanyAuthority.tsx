import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, TrendingUp } from 'lucide-react';
import { brokerData } from '../config/brokerData';

export const CompanyAuthority: React.FC = () => {
  const { company } = brokerData;

  if (!company.show) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-200" id="empresa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
              {company.name}
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-dark mb-6 leading-tight">
              {company.title}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              {company.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {company.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-4xl font-display text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] lg:aspect-[4/5] rounded-2xl overflow-hidden relative shadow-xl border border-slate-200">
              {company.image ? (
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : null}
              <div className="absolute inset-0 bg-dark/10 mix-blend-multiply" />
              
              {/* Floating Badges */}
              <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/90 backdrop-blur-md border border-slate-200 p-2 md:p-4 rounded-xl flex items-center gap-2 md:gap-4 animate-bounce shadow-lg" style={{ animationDuration: '3s' }}>
                <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-gold" />
                <div>
                  <div className="text-xs md:text-base text-dark font-medium">Segurança</div>
                  <div className="text-[10px] md:text-xs text-slate-500">Jurídica 100%</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md border border-slate-200 p-2 md:p-4 rounded-xl flex items-center gap-2 md:gap-4 animate-bounce shadow-lg" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <TrendingUp className="w-5 h-5 md:w-8 md:h-8 text-gold" />
                <div>
                  <div className="text-xs md:text-base text-dark font-medium">Rentabilidade</div>
                  <div className="text-[10px] md:text-xs text-slate-500">Acima da Média</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
