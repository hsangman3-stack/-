
import React from 'react';
import { Activity, Thermometer, UserCheck, Apple } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const iconMap: Record<string, React.ReactNode> = {
  '통증 및 재활': <Activity className="text-sage" size={32} />,
  '비만 및 다이어트': <Apple className="text-sage" size={32} />,
  '성장 및 소아': <UserCheck className="text-sage" size={32} />,
  '보약 및 만성피로': <Thermometer className="text-sage" size={32} />,
};

const Treatments: React.FC = () => {
  const { treatments } = useContent();

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-20 bg-warm-beige/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl serif-font mb-4">진료 과목</h2>
            <p className="text-stone-500">각 분야별 전문성을 바탕으로 1:1 맞춤 진료를 제공합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-warm-beige hover:shadow-xl transition-all flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-sage/10 p-4 rounded-2xl mb-6">
                  {iconMap[item.title] || <Activity className="text-sage" size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-600 mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {item.methods.map((m, i) => (
                    <span key={i} className="px-4 py-1 bg-ivory text-sage text-sm rounded-full border border-sage/20">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
