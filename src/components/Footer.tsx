import { brokerData } from '../config/brokerData';

export function Footer() {
  const { broker, company } = brokerData;

  return (
    <footer id="contato" className="bg-[#1a2d4e] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          {broker.logoFull ? (
            <img src={broker.logoFull} alt={broker.name} className="h-24 w-auto mb-4" referrerPolicy="no-referrer" />
          ) : (
            <h2 className="font-display text-3xl font-bold mb-2 text-[#f3bf70]">{broker.name}</h2>
          )}
          <p className="text-white/80 text-sm">{broker.bio.title} • CRECI {broker.creci}</p>
        </div>
        <div className="text-left md:text-right text-sm text-white/80 space-y-2">
          <p className="text-white font-medium text-lg mb-4">{broker.phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 $2 $3-$4')} | {broker.email}</p>
          {company.show && <p>{company.name}</p>}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/20 text-center text-xs text-white/60">
        <p>&copy; {new Date().getFullYear()} Mercado imobiliário de imóveis na planta para investimentos em Porto Belo-SC e Itapema-SC.</p>
      </div>
    </footer>
  );
}
