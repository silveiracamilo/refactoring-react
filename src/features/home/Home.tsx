import React from 'react';

const Home: React.FC = () => {
    return (
        <section className="w-full bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Bem-vindo ao <span className="text-sky-400">Refactoring React</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 text-center mb-12">
                <strong>Refactoring React</strong> é um espaço criado para quem busca escrever código mais limpo, sustentável e de alta qualidade utilizando <strong>React com paradigmas funcionais</strong>. Aqui você vai aprender, de forma clara, visual e didática, como aplicar na prática conceitos fundamentais como <strong>Design Patterns</strong>, <strong>SOLID</strong>, <strong>Clean Code</strong> e diversas <strong>boas práticas de desenvolvimento frontend</strong>.
                </p>

                <div className="space-y-8">
                <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-sky-400">
                    Se você já se perguntou:
                    </h2>
                    <ul className="space-y-3 text-slate-300 list-disc list-inside">
                        <li>
                            <em>“Como estruturar meu código React para que ele seja fácil de entender, escalar e manter?”</em>
                        </li>
                        <li>
                            <em>“Quais padrões de projeto fazem sentido no desenvolvimento frontend moderno?”</em>
                        </li>
                        <li>
                            <em>“Como aplicar princípios de código limpo e arquitetura no React?”</em>
                        </li>
                    </ul>
                    <p className="mt-4 text-slate-300">
                    Então você está no lugar certo.
                    </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-sky-400">
                    O que você vai encontrar aqui:
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-slate-300">
                        <li>Padrões de Projeto aplicados no React com exemplos práticos e ilustrações.</li>
                        <li>Princípios de Design como SOLID, Clean Code e boas práticas no contexto do desenvolvimento React funcional.</li>
                        <li>Paradigmas Funcionais na prática, aprendendo a criar componentes e hooks mais previsíveis, seguros e reutilizáveis.</li>
                        <li>Técnicas de refatoração guiada, com antes e depois do código.</li>
                        <li>Estudos de caso reais, para aplicar imediatamente no seu dia a dia.</li>
                    </ul>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-sky-400">
                    Agradecimentos especiais
                    </h2>
                    <p className="text-slate-300">
                    Nos inspiramos profundamente no trabalho incrível realizado pelo site{" "}
                    <a
                        href="https://refactoring.guru/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 underline hover:text-yellow-300"
                    >
                        Refactoring Guru
                    </a>
                    , que tornou o aprendizado sobre padrões de projeto algo acessível, didático e prazeroso. Este projeto não existiria sem essa referência de excelência.
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Home;