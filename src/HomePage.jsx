export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="fixed top-0 w-full z-50 bg-white shadow-md p-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <div className="flex items-center space-x-2">
          <img src="https://i.ibb.co/35khfPg8/Chat-GPT-Image-9-de-abr-de-2025-13-14-31.png" alt="BrandBot Logo" className="w-8 h-8" />
          <span className="text-lg font-bold">Neura Studio</span>
        </div>
        <nav className="flex flex-col sm:flex-row flex-wrap sm:space-x-4 items-center w-full sm:w-auto mt-4 sm:mt-0">
          <a href="#how-it-works" className="text-sm hover:text-blue-600">Como Funciona</a>
          <a href="#features" className="text-sm hover:text-blue-600">O Que Ele Faz</a>
          <a href="#plans" className="text-sm hover:text-blue-600">Planos</a>
          <a href="#testimonials" className="text-sm hover:text-blue-600">Depoimentos</a>
          <a href="#contact" className="text-sm hover:text-blue-600">Contato</a>
        </nav>
        <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700">
          Quero Criar Meu Agente
        </a>
      </header>

      <main className="pt-32 px-4">
        <section className="text-center py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl mx-auto leading-snug">
            Sua marca no controle. Sua identidade no conteúdo.<br />Com o poder criativo de uma IA personalizada.
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto mb-6">
            Criamos um agente de IA personalizado, treinado com a identidade da sua marca, que gera posts prontos, ideias visuais e campanhas inteiras — direto no seu tom, do seu jeito.
          </p>
          <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow hover:bg-blue-700">
            Quero meu agente criativo
          </a>
        </section>

        <section id="how-it-works" className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">Como Funciona</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div>
              <h3 className="font-bold mb-2">1. Coleta da marca</h3>
              <p className="text-sm">Reunimos guia visual, tom de voz e materiais da empresa.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. Adaptação para IA</h3>
              <p className="text-sm">Transformamos os dados em linguagem que a IA compreende.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">3. Criação do agente</h3>
              <p className="text-sm">Montamos um GPT exclusivo com a sua identidade de marca.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">4. Onboarding</h3>
              <p className="text-sm">Você recebe o link e aprende a usar o agente como parte do time.</p>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-100 text-center">
          <h2 className="text-2xl font-semibold mb-6">O que o Agente faz por você</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-left">
            <div><strong>📝 Textos:</strong> Legendas, chamadas e CTAs no seu tom.</div>
            <div><strong>🎨 Layouts:</strong> Sugestões visuais para posts, carrosséis e stories.</div>
            <div><strong>🗓️ Pautas:</strong> Ideias semanais, mensais e por campanha.</div>
            <div><strong>🔄 Adaptação:</strong> Ajusta o conteúdo para cada rede social.</div>
            <div><strong>🧐 Análises:</strong> Avalia se uma arte está de acordo com sua marca.</div>
            <div><strong>✨ Criação visual:</strong> Sugere ideias e composições de arte com base na identidade visual.</div>
          </div>
        </section>

        <section id="plans" className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-8">Planos</h2>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Start</h3>
              <p className="text-sm mb-4">Reformulação visual + agente + onboarding e tutorial</p>
              <p className="text-lg font-bold mb-4">R$ 499,90</p>
              <a href="https://wa.me/5561999167627?text=Quero%20o%20plano%20Start" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Escolher plano
              </a>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">Social Pro</h3>
              <p className="text-sm mb-4">Em breve</p>
              <p className="text-lg font-bold text-gray-400">—</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">Manutenção</h3>
              <p className="text-sm mb-4">Em breve</p>
              <p className="text-lg font-bold text-gray-400">—</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-gray-100 text-center">
          <h2 className="text-2xl font-semibold mb-6">Depoimentos</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded shadow">
              <img src="https://i.ibb.co/yFPd4sZy/case.png" alt="Case Capital" className="mb-4 rounded" />
              <p className="text-sm italic">“O agente agilizou nosso dia a dia. Gera artes com a identidade da empresa sem a gente perder tempo com briefing.”</p>
              <p className="mt-2 font-bold">Marcelo Rodrigues, CEO – Catedral Transportadora</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="https://i.ibb.co/60wqG6Bk/case-2.png" alt="Case Cleo" className="mb-4 rounded" />
              <p className="text-sm italic">“Crio as ideias no meu estilo, ele escreve e sugere as artes. Nunca postamos com tanta constância.”</p>
              <p className="mt-2 font-bold">Cleonice C., CEO – Cléo Cabeleireiros</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">Vamos conversar?</h2>
          <p className="text-sm mb-4">Fale com a gente no WhatsApp e comece a usar seu agente criativo:</p>
          <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
            Falar no WhatsApp
          </a>
        </section>
      </main>

      <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
      </a>
    </div>
  );
}
