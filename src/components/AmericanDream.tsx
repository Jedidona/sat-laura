import { MapPin, Star, AlertTriangle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const otherColleges = [
  {
    name: 'Southern Adventist University',
    location: 'Tennessee (TN)',
    photo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Pacific Union College',
    location: 'Califórnia (CA)',
    photo: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Southwestern Adventist University',
    location: 'Texas (TX)',
    photo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Walla Walla University',
    location: 'Washington (WA)',
    photo: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const andrewsPhoto = '/Picture12.width-500.jpg';

export default function AmericanDream() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="sonho-americano" className="bg-navy-800 py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-navy-700 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-academic-900 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex items-center gap-2 mb-6">
          <div className="h-px w-10 bg-academic-500"></div>
          <span className="text-academic-400 text-xs font-semibold uppercase tracking-widest">A realidade de muitos alunos</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-800 text-white leading-tight mb-6">
              O sonho de muitos alunos: {' '}
              <span className="text-academic-400">estudar fora do Brasil</span>
            </h2>

            <p className="text-navy-200 text-base leading-relaxed mb-5">
              Muitos amigos da Laura, assim como ela, tinham o sonho de estudar em uma universidade que conecta culturas do mundo todo.{' '}
              <span className="block mt-3 text-white font-bold text-lg leading-snug">
                Mas pensavam que era impossível.
              </span>
            </p>

            <p className="text-navy-200 text-base leading-relaxed mb-2">
              Em 2025, a Laura quase desistiu do sonho.{' '}
              <span className="text-white font-bold">Mas foi aí que surgiu o SAT:</span>
            </p>
            <p className="text-navy-200 text-base leading-relaxed mb-6">
              faculdades nos Estados Unidos (incluindo adventistas) valorizam <span className="text-white font-bold uppercase tracking-wide">MUITO</span> o SAT.
            </p>

            <div className="bg-green-900/40 border border-green-700/50 rounded-2xl p-6">
              <p className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-2">E o melhor</p>
              <p className="text-white text-lg md:text-xl font-bold leading-snug">
                A universidade adventista{' '}
                <span className="text-amber-400">#1 dos EUA</span>{' '}
                possui uma{' '}
                <span className="text-green-400">bolsa automática</span>{' '}
                para quem atinge uma pontuação de{' '}
                <span className="text-green-400">1490 ou mais.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
              <div className="h-52 overflow-hidden">
                <img src={andrewsPhoto} alt="Andrews University" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
                      <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-800 text-base">Andrews University</p>
                      <div className="flex items-center gap-1 mt-0.5 text-navy-500">
                        <MapPin className="w-3 h-3" />
                        <p className="text-xs">Michigan (MI) — EUA</p>
                      </div>
                    </div>
                  </div>
                  <span className="flex-shrink-0 text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                    Bolsa automática
                  </span>
                </div>
                <p className="text-sm text-navy-700 font-semibold bg-green-50 rounded-lg px-3 py-2.5">
                  Score +1490 = 100% de tuition
                </p>
                <p className="text-xs text-navy-500 mt-2 px-1">
                  Tuition seria todos os custos de estudo (ou seja, a maior parte dos custos)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-5">
            <p className="text-navy-300 text-sm leading-relaxed max-w-2xl">
              Outras instituições adventistas, assim como a maioria esmagadora das faculdades americanas, também valorizam o SAT:
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full bg-navy-700 border border-navy-600 flex items-center justify-center hover:bg-navy-600 transition-colors duration-200"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full bg-navy-700 border border-navy-600 flex items-center justify-center hover:bg-navy-600 transition-colors duration-200"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {otherColleges.map((college, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 rounded-xl overflow-hidden border border-navy-600/50 bg-navy-700/50 hover:bg-navy-700/80 transition-all duration-200"
              >
                <div className="h-36 overflow-hidden">
                  <img src={college.photo} alt={college.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-white font-semibold text-sm leading-tight mb-1">{college.name}</p>
                  <div className="flex items-center gap-1 text-navy-300">
                    <MapPin className="w-3 h-3" />
                    <p className="text-xs">{college.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl border border-academic-700/60 bg-academic-900/40 p-8 md:p-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-academic-500 rounded-l-2xl"></div>
          <div className="absolute top-4 right-6 opacity-10">
            <AlertTriangle className="w-20 h-20 text-academic-400" />
          </div>

          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mb-6">
            "Muitos alunos dedicados já perderam a oportunidade de estudar fora do Brasil somente por{' '}
            <span className="text-academic-400 font-bold">não saberem como funciona o processo</span>{' '}
            e sempre ouvirem que{' '}
            <span className="text-academic-400 font-bold">'é impossível'.</span>"
          </p>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-academic-700/60 max-w-16"></div>
            <a
              href="#proposta"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Podemos mudar isso
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}