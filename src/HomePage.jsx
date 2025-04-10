export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="w-full bg-white shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:fixed sm:top-0 sm:z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="https://i.ibb.co/35khfPg8/Chat-GPT-Image-9-de-abr-de-2025-13-14-31.png" alt="Logo Neura Studio" className="w-8 h-8" />
            <span className="text-lg font-bold">Neura Studio</span>
          </div>
        </div>
        <nav className="flex flex-col sm:flex-row flex-wrap sm:space-x-4 items-center w-full sm:w-auto mt-4 sm:mt-0">
          <a href="#testimonials" className="text-sm hover:text-blue-600">Depoimentos</a>
          <a href="#how-it-works" className="text-sm hover:text-blue-600">Como Funciona</a>
          <a href="#features" className="text-sm hover:text-blue-600">O Que Ele Faz</a>
          <a href="#plans" className="text-sm hover:text-blue-600">Planos</a>
          <a href="#contact" className="text-sm hover:text-blue-600">Contato</a>
        </nav>
        <a
          href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer."
          className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700"
        >
          Quero Criar Meu Agente
        </a>
      </header>

      <main className="pt-4 sm:pt-24 px-4 scroll-smooth">
        <section className="text-center py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl mx-auto leading-snug">
            <span className="block">Conteúdo para redes sociais feito com um comendo.</span>
            <span className="block">Gerado por uma IA que entende a sua marca.</span>
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto mb-6">
            Criamos um agente de IA personalizado, treinado com a identidade da sua marca,
            que gera posts prontos, ideias visuais e campanhas inteiras — direto no seu tom, do seu jeito.
          </p>
          <a
            href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer."
            className="px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow hover:bg-blue-700"
          >
            Quero meu agente criativo
          </a>
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

        <section id="how-it-works" className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">Como seu agente de IA ganha vida</h2>
          <div className="max-w-3xl mx-auto text-sm text-gray-700">
            <p className="mb-6">
              Tudo começa com a sua marca. Coletamos seu guia visual, tom de voz, cores, fontes,
              campanhas anteriores, e transformamos isso em instruções que a IA entende.
            </p>
            <p>
              Depois, criamos seu agente dentro do ChatGPT Plus — pronto para gerar ideias,
              escrever textos e sugerir imagens com a sua cara. Você acessa via link, sem precisar instalar nada.
            </p>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-100 text-center">
          <h2 className="text-2xl font-semibold mb-6">Seu novo social media está sempre disponível</h2>
          <p className="text-gray-600 text-sm mb-10 max-w-2xl mx-auto">
            Seu agente é mais que um gerador de textos. Ele entende seu branding, seu público e o que funciona. Ele entrega:
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-left text-sm">
            <div><strong>🎨 Criação de artes:</strong> Cria artes visuais completas com base no estilo da sua marca.</div>
            <div><strong>📝 Legendas prontas:</strong> Sempre com o tom da sua marca, sem blá-blá-blá genérico.</div>
            <div><strong>✔️ Sugestões visuais:</strong> Descreve imagens ideais com cor, tipografia e estilo.</div>
            <div><strong>📆 Campanhas:</strong> Cria conteúdos para datas e temas como Black Friday, lançamentos etc.</div>
            <div><strong>🔄 Adaptação por rede:</strong> Ajusta o mesmo conteúdo para Instagram, LinkedIn e mais.</div>
            <div><strong>🧐 Análise de artes:</strong> Avalia se está coerente com sua identidade visual e tom.</div>
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

        <section id="contact" className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">Vamos conversar?</h2>
          <p className="text-sm mb-4">Fale com a gente no WhatsApp e comece a usar seu agente criativo:</p>
          <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
            Falar no WhatsApp
          </a>
        </section>
      </main>

      <a
        href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer."
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg"
        aria-label="Fale no WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="Ícone WhatsApp"
          className="w-6 h-6"
        />
      </a>

      <footer className="text-center text-xs text-gray-500 py-6">
        Neura Studio © {new Date().getFullYear()} – Soluções de IA para marcas criativas.
      </footer>
    </div>
  );
}
