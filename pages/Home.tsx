
import React from 'react';
import { Calendar, Heart, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Oriental Clinic Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h2 className="text-sage font-bold mb-4 tracking-wider">따뜻한 마음으로 빚은 치유</h2>
            <h1 className="text-5xl md:text-6xl serif-font leading-tight mb-6">
              당신의 아픔을 <br />
              <span className="text-sage">진심</span>으로 마주합니다
            </h1>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              차가운 기계보다 따뜻한 손길로, <br />
              증상만이 아닌 당신의 마음까지 살피는 진료를 약속합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-sage text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:translate-y-[-2px] transition-all">
                네이버 예약하기
              </button>
              <Link to="/about" className="bg-white text-stone-700 px-8 py-4 rounded-full text-lg font-bold border border-warm-beige hover:bg-stone-50 transition-all flex items-center gap-2">
                한의원 둘러보기 <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl serif-font mb-16">강대근 한의원만의 3가지 약속</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-ivory border border-warm-beige hover:shadow-xl transition-all">
              <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-sage" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">정성 어린 진료</h3>
              <p className="text-stone-500 leading-relaxed">
                바쁜 진료 시간에 쫓기지 않고 환자 한 분 한 분의 목소리에 귀를 기울입니다.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-ivory border border-warm-beige hover:shadow-xl transition-all">
              <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-sage" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">투명한 한약재</h3>
              <p className="text-stone-500 leading-relaxed">
                GAP 인증을 받은 엄선된 청정 약재만을 사용하여 원내에서 직접 조제합니다.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-ivory border border-warm-beige hover:shadow-xl transition-all">
              <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-sage" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">환자 중심 시스템</h3>
              <p className="text-stone-500 leading-relaxed">
                복잡한 절차 없이 모바일로 간편하게 예약하고 대기 시간을 최소화합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Infographic */}
      <section className="py-20 bg-warm-beige/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl serif-font mb-4">처음 오시는 분을 위한 진료 과정</h2>
            <p className="text-stone-500">불안함은 덜고, 신뢰는 더하는 진심의 4단계</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-sage/20 -z-10"></div>
            {[
              { step: '01', title: '심층 상담', desc: '불편한 부위와 평소 생활 습관을 면밀히 파악합니다.' },
              { step: '02', title: '정밀 검사', desc: '체성분, 스트레스 검사 등을 통해 몸의 상태를 확인합니다.' },
              { step: '03', title: '맞춤 치료', desc: '침, 약침, 물리치료 등 최적의 치료를 진행합니다.' },
              { step: '04', title: '처방 및 관리', desc: '필요 시 한약 처방과 함께 생활 관리법을 안내합니다.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-warm-beige w-full md:w-64">
                <span className="text-sage font-bold text-lg mb-4">{item.step}</span>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-stone-500 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Testimonial Slider Preview */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl serif-font mb-12 text-center">환자분들이 전해주신 진심</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-ivory p-6 rounded-2xl border border-warm-beige relative">
                <Star className="text-yellow-500 mb-4 inline-block" fill="currentColor" size={16} />
                <Star className="text-yellow-500 mb-4 inline-block" fill="currentColor" size={16} />
                <Star className="text-yellow-500 mb-4 inline-block" fill="currentColor" size={16} />
                <Star className="text-yellow-500 mb-4 inline-block" fill="currentColor" size={16} />
                <Star className="text-yellow-500 mb-4 inline-block" fill="currentColor" size={16} />
                <p className="text-stone-600 mb-4 italic">"원장님이 정말 친절하게 상담해주셔서 마음까지 치료받는 기분이었습니다. 허리 통증도 금방 좋아졌어요."</p>
                <span className="text-sm text-stone-400">- 김OO 환자님</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
