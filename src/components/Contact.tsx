import React, { useState } from 'react';
import { motion } from 'motion/react';
import { brokerData } from '../config/brokerData';

export function Contact() {
  const { broker, contact } = brokerData;
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá ${broker.name}! Meu nome é ${formData.name}. Gostaria de mais informações sobre investimentos no litoral. Meu email é ${formData.email} e telefone ${formData.phone}.`;
    window.open(`https://wa.me/${broker.phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Imagem Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] md:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {contact.image ? (
              <img 
                src={contact.image} 
                alt="Contato" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
          </motion.div>

          {/* Formulário Direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 relative"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-dark/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-8 leading-tight">
                {contact.title}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-dark hover:bg-darker text-white font-semibold text-lg py-4 rounded-lg transition-all hover:shadow-lg mt-6"
                >
                  {contact.buttonText}
                </button>
              </form>
              <p className="text-xs text-center text-slate-400 mt-6">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
