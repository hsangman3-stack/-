
import React from 'react';
import { CheckCircle2, Droplets, Leaf } from 'lucide-react';

const HerbalMedicine: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-sage font-bold mb-4">안전한 한약 이야기</h2>
              <h3 className="text-4xl serif-font mb-8">"내 아이에게도 자신 있게 먹일 수 있는 약재"</h3>
              <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                진심 한의원의 모든 한약은 엄격한 품질 관리를 거친 규격품 한약재만을 사용합니다. 
                산지에서 식탁까지, 모든 과정을 꼼꼼히 체크하여 안심하고 드실 수 있습니다.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Leaf className="text-sage" />, title: '청정 약재 사용', desc: 'GAP 인증 및 잔류 농약 검사를 통과한 안전한 약재' },
                  { icon: <Droplets className="text-sage" />, title: '청정 정수 시스템', desc: '중금속이 없는 깨끗한 물로 정성을 다해 달입니다.' },
                  { icon: <CheckCircle2 className="text-sage" />, title: '원내 직접 조제', desc: '원장님이 직접 모든 과정을 감독하고 검수합니다.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-stone-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                alt="Herbal Medicine" 
                className="rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HerbalMedicine;
