
import React from 'react';
import { Activity, Thermometer, UserCheck, Apple } from 'lucide-react';

const Treatments: React.FC = () => {
  const specialities = [
    {
      icon: <Activity className="text-sage" size={32} />,
      title: '통증 및 재활',
      desc: '디스크, 거북목, 오십견 등 근골격계 질환의 근본 원인을 해결합니다.',
      methods: ['침 치료', '약침', '추나 요법']
    },
    {
      icon: <Apple className="text-sage" size={32} />,
      title: '비만 및 다이어트',
      desc: '단순한 체중 감량이 아닌, 체질 개선을 통해 요요 없는 건강한 몸을 만듭니다.',
      methods: ['체질 분석', '다이어트 한약', '부분 비만 관리']
    },
    {
      icon: <UserCheck className="text-sage" size={32} />,
      title: '성장 및 소아',
      desc: '우리아이의 숨은 키를 찾고 면역력을 높여 튼튼하게 자라도록 돕습니다.',
      methods: ['성장판 자극', '성장 한약', '체형 교정']
    },
    {
      icon: <Thermometer className="text-sage" size={32} />,
      title: '보약 및 만성피로',
      desc: '기력을 보충하고 오장육부의 균형을 맞추어 활기를 되찾아 드립니다.',
      methods: ['공진단', '경옥고', '맞춤 보약']
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-20 bg-warm-beige/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl serif-font mb-4">진료 과목</h2>
            <p className="text-stone-500">각 분야별 전문성을 바탕으로 1:1 맞춤 진료를 제공합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialities.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-warm-beige hover:shadow-xl transition-all flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-sage/10 p-4 rounded-2xl mb-6">
                  {item.icon}
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
