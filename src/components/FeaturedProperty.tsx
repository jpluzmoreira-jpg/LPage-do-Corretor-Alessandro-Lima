import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { brokerData } from '../config/brokerData';

export const FeaturedProperty: React.FC = () => {
  const { featuredProperty, broker } = brokerData;

  if (!featuredProperty.show) return null;

  const message = encodeURIComponent(`Olá ${broker.name}, gostaria de saber mais sobre a oportunidade em Bombinhas.`);
  const whatsappUrl = `https://wa.me/${broker.phone}?text=${message}`;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="empreendimento">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-16">
            {featuredProperty.title}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
          {featuredProperty.images?.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group"
            >
              <img 
                src={img} 
                alt={`Oportunidade Bombinhas ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-10">
            {featuredProperty.description}
          </p>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-bold text-lg rounded-full hover:bg-gold-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {featuredProperty.ctaText}
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
