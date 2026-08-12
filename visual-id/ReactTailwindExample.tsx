import React from 'react';

/**
 * IMPORTANTE: Para usar este componente, adicione as cores no seu tailwind.config.ts:
 * 
 * module.exports = {
 *   theme: {
 *     extend: {
 *       colors: {
 *         'unesp-black': '#0d0d0d',
 *         'unesp-blue': '#004e9a',
 *         'cacco-pink': '#ed157b',
 *         'cacco-pink-hover': '#c90e66'
 *       },
 *       fontFamily: {
 *         sans: ['Inter', 'sans-serif'],
 *       }
 *     }
 *   }
 * }
 */

export const VisualIdentityGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-unesp-black text-slate-100 font-sans p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cacco-pink to-unesp-blue bg-clip-text text-transparent mb-2">
            Guia de Identidade Visual
          </h1>
          <p className="text-slate-400 text-lg">React + Tailwind CSS TypeScript Example</p>
        </header>

        {/* Paleta de Cores */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Cores (Paleta)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ColorCard name="UNESP Black" hex="#0d0d0d" bgClass="bg-[#0d0d0d]" />
            <ColorCard name="CACCo Pink (Primary)" hex="#ed157b" bgClass="bg-[#ed157b]" />
            <ColorCard name="UNESP Blue (Secondary)" hex="#004e9a" bgClass="bg-[#004e9a]" />
          </div>
        </section>

        {/* Botões */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Botões</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg font-semibold bg-cacco-pink text-white hover:bg-cacco-pink-hover transition-colors shadow-md">
              Botão Primário
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold bg-transparent border-2 border-cacco-pink text-cacco-pink hover:bg-cacco-pink/10 transition-colors">
              Botão Secundário
            </button>
          </div>
        </section>

        {/* Efeito Glassmorphism */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Efeito Glassmorphism</h2>
          
          <div className="relative p-8 rounded-2xl overflow-hidden">
            {/* Gradientes Radiais no Fundo */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-cacco-pink/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-unesp-blue/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            {/* Painel de Vidro */}
            <div className="relative bg-[#0f0f0f]/70 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Painel de Vidro</h3>
              <p className="text-slate-300">
                Usando fundo translúcido <code>bg-[#0f0f0f]/70</code>, desfoque <code>backdrop-blur-md</code> e bordas finas <code>border-white/10</code> sobre gradientes das cores institucionais.
              </p>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

// Sub-componente para as cores
const ColorCard = ({ name, hex, bgClass }: { name: string, hex: string, bgClass: string }) => (
  <div className="border border-white/10 rounded-lg overflow-hidden shadow-md">
    <div className={`h-24 w-full ${bgClass}`}></div>
    <div className="p-4 bg-black/20">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-slate-400 mt-1">{hex}</div>
    </div>
  </div>
);

export default VisualIdentityGuide;
