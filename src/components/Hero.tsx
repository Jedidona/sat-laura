import { GraduationCap, Award, ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col">
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-navy-700 rounded-sm flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-navy-700 font-semibold text-sm tracking-wide uppercase">SAT Adventista</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#o-que-e-sat" className="text-sm text-gray-500 hover:text-navy-700 transition-colors duration-200 font-medium">O que é o SAT?</a>
          <a href="#conheca-laura" className="text-sm text-gray-500 hover:text-navy-700 transition-colors duration-200 font-medium">Conheça a Laura</a>
          <a href="#proposta" className="text-sm bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium">Começar agora</a>
        </div>
      </nav>

      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <div className="h-px w-10 bg-academic-600"></div>
                <span className="text-academic-600 text-xs font-semibold uppercase tracking-widest">Educação Internacional</span>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-800 text-navy-800 leading-tight tracking-tight">
                  O SAT na
                  <br />
                  <span className="text-navy-700">Educação</span>
                  <br />
                  <span className="relative inline-block">
                    Adventista
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-academic-600 rounded-full"></span>
                  </span>
                </h1>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-light">
                A <span className="font-bold text-gray-700">educação da rede adventista é bilíngue</span>, mas existe <span className="font-bold text-gray-700">um fator que está impedindo</span> que nossos alunos brasileiros ocupem vagas nas{' '}
                <span className="text-navy-700 font-medium">faculdades mais prestigiadas do mundo.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#o-que-e-sat"
                  className="group flex items-center justify-center gap-2 bg-navy-700 text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-navy-800 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  O que é o SAT?
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
                <a
                  href="#conheca-laura"
                  className="group flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3.5 rounded-lg text-sm font-semibold hover:border-navy-300 hover:text-navy-700 hover:bg-navy-50 transition-all duration-200"
                >
                  Conheça a Laura
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div id="laura" className="relative bg-white rounded-2xl border border-gray-100 shadow-lg p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-academic-600 rounded-l-2xl"></div>
                <div className="absolute top-4 right-4 opacity-5">
                  <Award className="w-24 h-24 text-navy-700" />
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/IMG_1556_(1).jpg" alt="Laura" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-navy-800 font-bold text-lg leading-tight">Laura</h3>
                    <p className="text-gray-400 text-sm font-medium">Aluna Adventista</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-navy-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Pontuação SAT</p>
                    <p className="text-3xl font-800 text-navy-700">1500</p>
                    <p className="text-xs text-navy-500 font-medium mt-0.5">de 1600 pontos</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Bolsa obtida</p>
                    <p className="text-3xl font-800 text-green-600">100%</p>
                    <p className="text-xs text-green-600 font-medium mt-0.5">bolsa de estudos</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-navy-700 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-navy-800 font-semibold text-sm">Andrews University</p>
                    <p className="text-gray-400 text-xs">Berrien Springs, Michigan — EUA</p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    Laura estudou do fundamental ao médio na rede adventista. E com o SAT, em 1 ano conquistou uma bolsa de estudos na Andrews University de mais de 140 mil dólares.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8 animate-bounce">
        <a href="#o-que-e-sat" className="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-400 transition-colors duration-200">
          <span className="text-xs font-medium tracking-wide uppercase">Explorar</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-navy-50 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-academic-50 rounded-full opacity-40 blur-3xl"></div>
      </div>
    </section>
  );
}