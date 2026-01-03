
import React from 'react';
import { Leaf, Droplets, ShieldCheck, Microscope, Thermometer } from 'lucide-react';

const HerbalMedicine: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Visual Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1563483783225-bc53ad978511?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Herbs" />
        <div className="absolute inset-0 bg-stone-900/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-sage font-bold mb-4 uppercase tracking-[0.3em] text-sm">Our Tradition</h2>
          <h3 className="text-5xl md:text-7xl serif-font mb-6">정성을 달이는 시간</h3>
          <p className="text-lg md:text-xl font-light opacity-90">강대근 한의원의 한약은 자연의 생명력을 그대로 담습니다.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                alt="한약재" 
                className="rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-warm-beige max-w-xs">
                <ShieldCheck className="text-sage mb-4" size={48} />
                <p className="font-bold text-xl mb-2">원내 직접 조제</p>
                <p className="text-stone-500 text-sm leading-relaxed">강대근 원장이 모든 조제 과정을 직접 감독하고 최종 검수합니다.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-12">
              <div className="flex gap-8">
                <div className="flex-shrink-0 bg-sage/10 w-20 h-20 rounded-2xl flex items-center justify-center text-sage">
                  <Leaf size={36} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 serif-font">엄격한 산지 관리</h4>
                  <p className="text-stone-500 text-lg leading-relaxed font-light">
                    전국의 청정 지역에서 자란 GAP 인증 약재만을 엄선합니다. 자연의 기운이 가장 좋을 때 채취한 약재가 최고의 효능을 발휘합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-shrink-0 bg-sage/10 w-20 h-20 rounded-2xl flex items-center justify-center text-sage">
                  <Microscope size={36} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 serif-font">철저한 성분 검사</h4>
                  <p className="text-stone-500 text-lg leading-relaxed font-light">
                    잔류 농약, 중금속 검사를 통과한 의약품용 규격 약재만을 사용하여, 우리 아이에게도 안심하고 먹일 수 있는 안전을 담습니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-shrink-0 bg-sage/10 w-20 h-20 rounded-2xl flex items-center justify-center text-sage">
                  <Thermometer size={36} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 serif-font">정성이 깃든 조제</h4>
                  <p className="text-stone-500 text-lg leading-relaxed font-light">
                    약재마다 다른 최적의 추출 온도와 시간을 준수합니다. 서두르지 않고 묵묵히 기다리는 시간 속에 진정한 효능이 배어납니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-[3rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover" alt="Brewing" />
            <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover" alt="Natural" />
            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover" alt="Care" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HerbalMedicine;
