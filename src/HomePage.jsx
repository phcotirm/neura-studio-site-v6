export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="fixed top-0 w-full z-50 bg-white shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-2">
          <img src="https://i.ibb.co/35khfPg8/Chat-GPT-Image-9-de-abr-de-2025-13-14-31.png" alt="BrandBot Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">Neura Studio</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:space-x-6">
          <a href="#how-it-works" className="hover:text-blue-600 scroll-smooth">Como Funciona</a>
          <a href="#features" className="hover:text-blue-600 scroll-smooth">O Que Ele Faz</a>
          <a href="#plans" className="hover:text-blue-600 scroll-smooth">Planos</a>
          <a href="#testimonials" className="hover:text-blue-600 scroll-smooth">Depoimentos</a>
          <a href="#contact" className="hover:text-blue-600 scroll-smooth">Contato</a>
        </nav>
        <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="ml-6 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          Quero Criar Meu Agente
        </a>
      </header>

      <main className="pt-24">
        <section className="text-center py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
          <h1 className="text-4xl font-bold mb-4 max-w-3xl mx-auto">
            Sua marca no controle. Sua identidade no conteúdo.<br />Com o poder criativo de uma IA personalizada.
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Criamos um agente de IA personalizado, treinado com a identidade da sua marca, que gera posts prontos, ideias visuais e campanhas inteiras — direto no seu tom, do seu jeito.
          </p>
          <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700">
            Quero meu agente criativo
          </a>
        </section>

        <section id="testimonials" className="py-20 px-6 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-6">Já estamos acelerando outras marcas</h2>
          <p className="max-w-xl mx-auto text-lg text-gray-700 mb-10">
            Marcas de diferentes segmentos já estão usando seus agentes de IA para gerar conteúdo com agilidade, consistência e identidade visual. Veja alguns exemplos reais:
          </p>

          <div className="mt-12 max-w-3xl mx-auto p-6 border border-gray-200 rounded-xl bg-white shadow-lg">
            <img src="https://i.ibb.co/yFPd4sZy/case.png" alt="Case Catedral Transportadora" className="rounded-xl shadow mb-4 w-full" />
            <p className="text-lg font-semibold text-gray-800">🚛 Case: Catedral Transportadora</p>
            <p className="text-gray-700 mt-2">
              "Com o agente da Neura Studio, conseguimos gerar artes e textos com agilidade, economizando tempo no dia a dia. Ele virou um apoio estratégico para manter nossa comunicação visual padronizada, mesmo com a correria da operação."
              <br />
              <span className="font-semibold block mt-2">— Marcelo Rodrigues, CEO da Catedral Transportadora</span>
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto p-6 border border-gray-200 rounded-xl bg-white shadow-lg">
            <img src="https://i.ibb.co/60wqG6Bk/case-2.png" alt="Case Cléo Cabeleireiros" className="rounded-xl shadow mb-4 w-full" />
            <p className="text-lg font-semibold text-gray-800">💇‍♀️ Case: Cléo Cabeleireiros</p>
            <p className="text-gray-700 mt-2">
              "Ter um agente de IA com o estilo da Cléo agilizou nossa rotina e manteve o padrão visual impecável. As sugestões de arte e texto parecem feitas por alguém que já conhece o salão há anos."
              <br />
              <span className="font-semibold block mt-2">— Cleonice C., CEO da Cléo Cabeleireiros</span>
            </p>
          </div>
        </section>

        <section id="how-it-works" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Como seu agente de IA ganha vida</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16">
            Tudo começa com a sua marca. Coletamos seu guia visual, tom de voz, cores, fontes, campanhas anteriores, e transformamos isso em instruções que a IA entende.<br /><br />
            Depois, criamos seu agente dentro do ChatGPT Plus — pronto para gerar ideias, escrever textos e sugerir imagens com a sua cara. Você acessa via link, sem precisar instalar nada.
          </p>
        </section>

        <section id="features" className="py-20 px-6 bg-gray-50">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-blue-600">
            Seu social media com inteligência artificial
          </h2>
          <p className="text-center text-lg max-w-2xl mx-auto mb-12 text-gray-700 leading-relaxed">
            Um agente que entende sua marca e cria conteúdo sob demanda, com o tom certo e agilidade real.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <p><strong>Criação de artes personalizadas com IA:</strong><br />Seu agente descreve a composição da imagem e pode gerar arquivos visuais que combinam com sua identidade.</p>
            <p><strong>Legendas prontas para Instagram, LinkedIn e mais:</strong><br />Sempre com o tom da sua marca, sem blá-blá-blá genérico.</p>
            <p><strong>Sugestões visuais e de layout para posts e carrosséis:</strong><br />O agente descreve as imagens ideais, com orientação de cor, tipografia e estilo.</p>
            <p><strong>Campanhas completas por data ou tema:</strong><br />Precisa de conteúdo para Black Friday, lançamento de produto ou “semana do orgulho”? Ele cria.</p>
            <p><strong>Adaptação de linguagem por plataforma:</strong><br />Um conteúdo para o LinkedIn não é igual ao do Instagram. O agente ajusta tudo pra você.</p>
            <p><strong>Análise de artes e revisão de peças:</strong><br />Mostre uma arte e ele avalia se está coerente com sua identidade visual e tom.</p>
          </div>
        </section>

        <section id="plans" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Planos simples, entrega rápida e conteúdo de verdade</h2>
          <p className="text-center text-lg max-w-2xl mx-auto mb-12">
            Você não precisa contratar uma equipe inteira para ter conteúdo bem feito. Com nosso processo, criamos e treinamos seu agente em até 7 dias. Confira os planos:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="border p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Start</h3>
              <p className="mb-2">Reformulação visual + agente + onboarding e tutorial</p>
              <p className="text-2xl font-bold mb-4">R$ 499,90</p>
            </div>
            <div className="border p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Social Pro</h3>
              <p className="mb-2">Em breve</p>
              <p className="text-2xl font-bold mb-4">Em breve</p>
            </div>
            <div className="border p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Manutenção</h3>
              <p className="mb-2">Em breve</p>
              <p className="text-2xl font-bold mb-4">Em breve</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700">
              Escolher meu plano
            </a>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto pra ter conteúdo alinhado com sua marca todos os dias?</h2>
          <p className="text-lg mb-8">Preencha o formulário e vamos criar seu agente personalizado.</p>
          <form className="max-w-lg mx-auto grid gap-4 text-left" action="https://formsubmit.co/pedro.henrique.cotrim@hotmail.com" method="POST">
            <input type="text" placeholder="Nome" className="border p-3 rounded-md w-full" />
            <input type="email" placeholder="E-mail" className="border p-3 rounded-md w-full" />
            <input type="text" placeholder="Nome da empresa" className="border p-3 rounded-md w-full" />
            <input type="text" placeholder="Qual rede social você mais usa?" className="border p-3 rounded-md w-full" />
            <textarea placeholder="Que tipo de conteúdo você gostaria que seu agente criasse?" className="border p-3 rounded-md w-full" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700">
              Criar meu agente de IA
            </button>
          </form>
          <p className="mt-4">
            ou <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." className="text-blue-600 underline">Falar agora pelo WhatsApp</a>
          </p>
        </section>

        <footer className="py-10 bg-gray-900 text-white text-center">
          <img src="https://i.ibb.co/35khfPg8/Chat-GPT-Image-9-de-abr-de-2025-13-14-31.png" alt="Logo" className="mx-auto mb-2 w-10 h-10" />
          <nav className="space-x-4 mb-4">
            <a href="#how-it-works" className="hover:underline">Como Funciona</a>
            <a href="#features" className="hover:underline">O Que Ele Faz</a>
            <a href="#plans" className="hover:underline">Planos</a>
            <a href="#testimonials" className="hover:underline">Depoimentos</a>
            <a href="#contact" className="hover:underline">Contato</a>
          </nav>
          <p className="text-sm max-w-md mx-auto">
            Desenvolvemos agentes criativos com IA treinada para gerar conteúdo visual e escrito em total sintonia com sua marca.<br />
            Menos tempo com briefing, mais tempo com resultado.
          </p>
          <p className="mt-4 text-xs">Instagram | LinkedIn | WhatsApp</p>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} Neura Studio. Todos os direitos reservados. Termos de Uso</p>
        </footer>
      <a href="https://wa.me/5561999167627?text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20sobre%20o%20agente%20designer." target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12.001 2.001c-5.514 0-9.999 4.484-9.999 9.999a9.935 9.935 0 0 0 1.389 5.094L2 22l4.979-1.309a9.96 9.96 0 0 0 5.021 1.309c5.515 0 10-4.485 10-10 0-5.515-4.485-10-10-10zm.103 17.954c-1.38 0-2.722-.369-3.902-1.068l-.28-.165-2.956.777.79-2.882-.183-.296a7.926 7.926 0 0 1-1.228-4.272c0-4.407 3.588-7.994 7.993-7.994 4.405 0 7.993 3.587 7.993 7.994 0 4.405-3.588 7.994-7.993 7.994zm4.246-5.914c-.231-.116-1.365-.675-1.578-.752-.212-.078-.367-.116-.522.116s-.6.752-.736.905c-.135.153-.27.173-.5.058-.231-.115-.975-.359-1.857-1.144-.686-.612-1.147-1.367-1.281-1.598-.135-.23-.015-.354.101-.47.104-.104.231-.27.347-.405.116-.135.154-.231.231-.385.077-.154.038-.289-.02-.405-.058-.116-.522-1.261-.715-1.729-.188-.452-.38-.39-.522-.398l-.444-.008c-.135 0-.353.05-.538.23s-.706.69-.706 1.68 1.095 1.953 1.247 2.089c.153.135 2.16 3.303 5.238 4.63.732.316 1.302.504 1.745.644.732.233 1.398.2 1.924.122.587-.086 1.365-.557 1.56-1.095.192-.538.192-.999.135-1.095-.058-.096-.211-.153-.444-.27z"/>
  </svg>
</a>
</main>
    </div>
  );
}
