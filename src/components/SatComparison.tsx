import { Check, X, ArrowRight } from 'lucide-react';

const rows = [
  {
    topic: 'Matérias',
    enem: '+8 matérias (Português, Literatura, História, Geografia, Biologia, Química, Física, Matemática...)',
    sat: '2 matérias (Inglês e Matemática)',
  },
  {
    topic: 'Duração',
    enem: '2 dias, mais de 10h de prova',
    sat: '1 dia, apenas 3h de prova',
  },
  {
    topic: 'Redação',
    enem: 'Redação obrigatória',
    sat: 'Sem redação — somente múltipla escolha',
  },
  {
    topic: 'Quando é possível fazer a prova?',
    enem: '1 vez por ano',
    sat: '6 vezes ao ano',
  },
  {
    topic: 'Formato',
    enem: 'Prova em papel',
    sat: '100% digital, feita no computador',
  },
  {
    topic: 'Calculadora',
    enem: 'Sem calculadora. Matemática e física só com papel e caneta',
    sat: 'Calculadora gráfica DESMOS integrada na prova',
  },
  {
    topic: 'Quantidade de questões',
    enem: '180 questões extremamente cansativas',
    sat: '98 questões em ordem previsível',
  },
  {
    topic: 'O que cai na prova?',
    enem: 'Imprevisível — nunca sabemos ao certo o que vai cair',
    sat: 'Extremamente previsível — o aluno sabe o que será cobrado na questão número 27, por exemplo',
  },
  {
    topic: 'Material de estudo',
    enem: 'Provas antigas e simulados de cursinhos',
    sat: 'Simulados gratuitos feitos pelo próprio SAT e banco de questões',
  },
  {
    topic: 'É possível acertar a prova inteira?',
    enem: 'Há somente 1 caso na história de acertar todas as questões (em 2007)',
    sat: 'Totalmente possivel, embora não seja necessário',
  },
];

export default function SatComparison() {
  return (
    <section id="o-que-e-sat" className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-2 mb-6">
          <div className="h-px w-10 bg-academic-600"></div>
          <span className="text-academic-600 text-xs font-semibold uppercase tracking-widest">O que é o SAT?</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-800 text-navy-800 leading-tight mb-6">
              O "ENEM americano" que
              <br />
              <span className="text-academic-600">abre portas para o mundo</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              De maneira simples, o SAT é o <span className="font-semibold text-gray-700">"ENEM americano"</span> — uma prova que abre portas para as universidades americanas. E o melhor: é o <span className="font-semibold text-gray-700">fator de maior peso para bolsas</span>.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-base leading-relaxed">
              Com ele, o aluno pode conseguir bolsas de até <span className="font-semibold text-green-600">100%</span>, podendo ser até de forma automática — como foi o caso da Laura.
            </p>
            <div className="border-l-4 border-green-500 pl-4 py-1 bg-green-50 rounded-r-xl">
              <p className="text-navy-800 text-base font-bold leading-snug">
                A prova americana, porém, possui vantagens significativas que o ENEM não possui.{' '}
                <span className="text-green-600">Veja a comparação:</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: card stack */}
        <div className="flex flex-col gap-3 md:hidden">
          {rows.map((row, index) => (
            <div key={index} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-navy-700 px-4 py-3">
                <p className="text-xs font-semibold text-white uppercase tracking-widest">{row.topic}</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-4 bg-white flex items-start gap-2 border-r border-gray-100">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">ENEM</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{row.enem}</p>
                  </div>
                </div>
                <div className="px-4 py-4 bg-green-50/40 flex items-start gap-2">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">SAT</p>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">{row.sat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: full table */}
        <div className="hidden md:block rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 bg-navy-700 text-white">
            <div className="px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-200">Critério</p>
            </div>
            <div className="px-6 py-4 border-l border-navy-600">
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-200">ENEM</p>
              </div>
            </div>
            <div className="px-6 py-4 border-l border-navy-600 bg-navy-800">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <p className="text-xs font-semibold uppercase tracking-widest text-green-300">SAT</p>
              </div>
            </div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-t border-gray-100 transition-colors duration-150 hover:bg-gray-50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <div className="px-6 py-4 flex items-center">
                <p className="text-xs font-semibold text-navy-700 uppercase tracking-wide">{row.topic}</p>
              </div>
              <div className="px-6 py-4 border-l border-gray-100 flex items-start gap-2.5">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-3 h-3 text-red-500" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{row.enem}</p>
              </div>
              <div className="px-6 py-4 border-l border-gray-100 flex items-start gap-2.5 bg-green-50/30">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">{row.sat}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">A realidade</p>
            <p className="text-navy-800 text-lg leading-relaxed font-medium">
              "Pergunte para qualquer aluno ou professor: o ENEM é uma prova{' '}
              <span className="text-academic-600 font-bold">extensa, cansativa e imprevisível.</span>"
            </p>
          </div>
          <div className="bg-navy-700 rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <p className="text-navy-300 text-xs font-semibold uppercase tracking-widest mb-4">O diferencial</p>
              <p className="text-white text-lg leading-relaxed">
                O ensino tradicional prepara os alunos somente para o ENEM. A educação adventista pode ter o{' '}
                <span className="text-green-400 font-bold">diferencial de prepará-los também para o SAT.</span>
              </p>
            </div>
            <a
              href="#proposta"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
            >
              Começar agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}