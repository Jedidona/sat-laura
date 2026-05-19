export default function ConhecaLaura() {
  return (
    <section id="conheca-laura" className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-2 mb-10">
          <div className="h-px w-10 bg-academic-500"></div>
          <span className="text-academic-600 text-xs font-semibold uppercase tracking-widest">Conheça a Laura</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img
                src="/IMG_1553.JPG"
                alt="Laura Donadeli"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-800 leading-tight mb-2">
                Laura Donadeli
              </h2>
              <p className="text-academic-600 font-semibold text-base tracking-wide uppercase text-sm">
                Andrews University · Bolsista 100%
              </p>
            </div>

            <div className="space-y-5 text-navy-700 text-base leading-relaxed">
              <p>
                Olá! Me chamo Laura Donadeli. Estudei durante toda a minha vida escolar, do ensino fundamental ao médio, na rede adventista. Em 2026, conquistei uma bolsa de estudos de 100% na Andrews University por meio da minha nota no SAT.
              </p>
              <p>
                Durante um ano de preparação dedicada, elevei meu score de{' '}
                <span className="font-bold text-navy-800">1200 para 1500</span>{' '}
                (de um total de 1600). Agora, meu objetivo é transmitir todo esse conhecimento aos alunos do ensino médio da rede que me formou. Somando os quatro anos de tuition (anuidade acadêmica) que garanti, o valor ultrapassa{' '}
                <span className="font-bold text-navy-800">140 mil dólares em bolsa</span>, e acredito que outros alunos também podem alcançar esse resultado.
              </p>
              <p>
                Embora a bolsa cubra integralmente a parte acadêmica (que é a mais cara), ao levar o diferencial da tutoria de SAT para sua escola, você me ajuda a custear despesas de moradia, alimentação e transporte. Isso viabiliza a concretização do meu sonho e, futuramente, o de muitos outros estudantes que desejam seguir esse caminho.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}