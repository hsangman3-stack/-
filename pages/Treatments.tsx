
import React from 'react';
import { Activity, Thermometer, UserCheck, Apple, PlusCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const iconMap: Record<string, React.ReactNode> = {
  '통증 및 재활': <Activity className="text-sage" size={32} />,
  '비만 및 다이어트': <Apple className="text-sage" size={32} />,
  '성장 및 소아': <UserCheck className="text-sage" size={32} />,
  '보약 및 만성피로': <Thermometer className="text-sage" size={32} />,
};

const treatmentImages: Record<string, string> = {
  '통증 및 재활': 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=600',
  '비만 및 다이어트': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600',
  '성장 및 소아': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600',
  '보약 및 만성피로': 'https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=600',
};

const Treatments: React.FC = () => {
  const { treatments } = useContent();

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl serif-font mb-6 text-stone-800">진료 과목</h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              풍부한 임상 경험과 정성스러운 손길로 <br />
              환자 한 분 한 분의 건강한 일상을 되찾아 드립니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {treatments.map((item, idx) => (
              <div key={idx} className="group bg-white rounded-[3rem] border border-warm-beige overflow-hidden hover:shadow-2xl transition-all flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img src={treatmentImages[item.title] || 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600'} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white p-4 rounded-2xl text-sage shadow-lg">
                    {iconMap[item.title] || <PlusCircle size={32} />}
                  </div>
                </div>
                <div className="p-12 flex-grow">
                  <h3 className="text-3xl font-bold mb-6 serif-font text-stone-800">{item.title}</h3>
                  <p className="text-stone-600 mb-8 leading-relaxed font-light text-lg">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.methods.map((m, i) => (
                      <span key={i} className="px-5 py-2 bg-sage/5 text-sage text-sm font-bold rounded-full border border-sage/10">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick Booking CTA */}
      <section className="relative py-32 bg-sage overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=1600" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl serif-font text-white mb-10 leading-tight">당신의 회복을 위해 진심을 다하겠습니다</h2>
          <button className="bg-white text-sage px-12 py-5 rounded-full text-xl font-bold hover:bg-ivory hover:scale-105 transition-all shadow-2xl">
            진료 예약 문의하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
