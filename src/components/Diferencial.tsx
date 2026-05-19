import { ArrowRight, Zap } from 'lucide-react';

const itens = [
  { before: '', bold: 'Estratégias eficientes', after: ' para resolver questões de inglês' },
  { before: 'Aulas de como aproveitar ', bold: '100% da calculadora embutida', after: '' },
  { before: 'Como aproveitar os ', bold: 'simulados ao máximo', after: '' },
  { before: 'Guia completo de todo o conteúdo de ', bold: 'gramática do SAT', after: '' },
  { before: 'Como identificar as ', bold: 'pegadinhas nas alternativas', after: '' },
  { before: 'Guia explicando como ', bold: 'resolver cada tipo de questão', after: ' da forma mais eficiente' },
  { before: 'Plano de estudos e ', bold: 'materiais complementares', after: '' },
];

export default function Diferencial() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-academic-500 via-green-400 to-academic-500"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-800 leading-tight mb-6">
            O grande{' '}
            <span className="text-academic-500">diferencial</span>
          </h2>
          <p className="text-navy-500 text-lg max-w-3xl leading-relaxed">
            Já existem cursos caríssimos que ensinam como passar em universidades americanas. Muitos adolescentes sonham em ter acesso a esses cursos.
          </p>
          <p className="text-navy-600 text-lg max-w-3xl leading-relaxed mt-3">
            Podemos falar isso com confiança porque tivemos acesso à uma das mentorias mais famosas (com o custo de mais de R$3 mil).{' '}
            <span className="font-bold text-navy-800">E infelizmente, o curso caro NÃO ofereceu:</span>
          </p>
        </div>

        <div className="max-w-xl mb-6">
          <div className="rounded-2xl border-2 border-green-300 bg-green-50 p-8 shadow-sm">
            <ul className="space-y-4">
              {itens.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-700 text-base leading-relaxed">
                    {item.before}<span className="font-bold text-navy-900">{item.bold}</span>{item.after}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-green-800 border border-green-700 p-7 flex items-start gap-4 mt-4">
            <div className="w-12 h-12 rounded-xl bg-green-600/30 flex items-center justify-center flex-shrink-0 mt-1">
              <Zap className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <p className="text-green-200 text-sm leading-snug mb-2">
                A Laura foi aprendendo e buscando sobre cada um desses tópicos{' '}
                <span className="text-white font-bold">sozinha</span>.
              </p>
              <p className="text-white text-xl font-extrabold leading-snug mb-1">
                E agora, as escolas da nossa rede podem ter tudo isso.
              </p>
              <p className="text-green-200 text-base leading-snug">
                Algo que nem as{' '}
                <span className="text-green-300 font-semibold">mentorias de alto nível</span>{' '}
                para estudar fora oferecem.
              </p>
            </div>
          </div>

          <a
            href="#proposta"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-sm mt-2"
          >
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}