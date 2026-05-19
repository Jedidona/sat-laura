import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const STATES = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
  'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
];

const UNIONS = [
  'União Central Brasileira (UCB)',
  'União Nordeste Brasileira (UNB)',
  'União Sul Brasileira (USB)',
  'Missão Paulista',
  'Outras',
];

interface FormData {
  school_name: string;
  contact_name: string;
  email: string;
  whatsapp: string;
  state: string;
  adventist_union: string;
  student_count: string;
  message: string;
}

const emptyForm: FormData = {
  school_name: '',
  contact_name: '',
  email: '',
  whatsapp: '',
  state: '',
  adventist_union: '',
  student_count: '',
  message: '',
};

export default function Proposta() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert({
      school_name: form.school_name,
      contact_name: form.contact_name,
      email: form.email,
      whatsapp: form.whatsapp,
      state: form.state,
      adventist_union: form.adventist_union,
      student_count: form.student_count ? parseInt(form.student_count) : null,
      message: form.message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Ocorreu um erro ao enviar. Tente novamente.');
    } else {
      setStatus('success');
      setForm(emptyForm);
    }
  };

  return (
    <section id="proposta" className="bg-white py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-academic-500 to-green-400"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-50 rounded-full opacity-60 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex items-center gap-2 mb-6">
          <div className="h-px w-10 bg-academic-500"></div>
          <span className="text-academic-500 text-xs font-semibold uppercase tracking-widest">A Proposta</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-800 leading-tight mb-6">
              Leve o sonho de{' '}
              <span className="text-academic-500">estudar fora</span>{' '}
              para sua escola
            </h2>

            <p className="text-navy-500 text-lg leading-relaxed mb-5">
              Podemos trazer para a rede adventista uma tutoria de SAT e guiar os alunos nos seus sonhos, criar um diferencial e estar presentes nas melhores faculdades do mundo.
            </p>

            <p className="text-navy-600 text-base leading-relaxed mb-8">
              De forma online, com uma tutora disposta a ajudar de forma pessoal cada aluno — independentemente de onde sua escola esteja.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 space-y-4">
              {[
                'Tutoria online personalizada de SAT',
                'Guia completo de estratégias para o exame',
                'Acompanhamento de cada aluno',
                'Suporte no processo de candidatura às universidades',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-navy-700 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-1">Entre em contato</h3>
              <p className="text-navy-400 text-sm mb-6">Preencha o formulário e entraremos em contato em breve.</p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <p className="text-navy-800 text-xl font-bold">Mensagem enviada!</p>
                  <p className="text-navy-500 text-sm">Entraremos em contato em breve.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-academic-500 text-sm underline underline-offset-2 hover:text-academic-600 transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1">
                      Nome da Escola <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="school_name"
                      value={form.school_name}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Colégio Adventista de São Paulo"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-navy-800 placeholder-gray-400 focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1">
                      Seu Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contact_name"
                      value={form.contact_name}
                      onChange={handleChange}
                      required
                      placeholder="Nome completo"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-navy-800 placeholder-gray-400 focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-navy-800 placeholder-gray-400 focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-navy-800 placeholder-gray-400 focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1">
                        Estado <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-navy-800 focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition bg-white"
                      >
                        <option value="">Selecione...</option>
                        {STATES.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1">
                        Alunos no E.M. (aprox.)
                      </label>
                      <input
                        type="number"
                        name="student_count"
                        value={form.student_count}
                        onChange={handleChange}
                        min={0}
                        placeholder="Ex: 120"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-navy-800 placeholder-gray-400 focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1">
                      União Adventista
                    </label>
                    <select
                      name="adventist_union"
                      value={form.adventist_union}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-navy-800 focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition bg-white"
                    >
                      <option value="">Selecione...</option>
                      {UNIONS.map(u => (
                        <option key={u} value={u}>{u}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Alguma dúvida ou informação adicional?"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-navy-800 placeholder-gray-400 focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-academic-500 hover:bg-academic-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}