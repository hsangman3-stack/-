
import React from 'react';
import { Calendar, Heart, ShieldCheck, ArrowRight, Star, MessageSquare, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Home: React.FC = () => {
  const { testimonials } = useContent();

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=2000" 
            alt="Oriental Clinic Background" 
            className="w-full h-full object-cover opacity-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl fade-in-up">
            <h2 className="text-sage font-bold mb-4 tracking-widest flex items-center gap-3">
              <span className="w-10 h-[1px] bg-sage"></span>
              사람을 향한 진심어린 치유
            </h2>
            <h1 className="text-6xl md:text-8xl serif-font leading-[1.1] mb-8 text-stone-800">
              <span className="text-sage">강대근</span> 한의원
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-12 leading-relaxed font-light">
              증상을 넘어 당신의 삶을 이해합니다. <br />
              따뜻한 한약 냄새가 마음까지 어루만지는 곳.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-sage text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:bg-[#5d6b2e] hover:translate-y-[-3px] transition-all flex items-center gap-2">
                네이버 예약 <ArrowRight size={20} />
              </button>
              <a href="https://pf.kakao.com" target="_blank" rel="noreferrer" className="bg-[#FEE500] text-[#3c1e1e] px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:translate-y-[-3px] transition-all flex items-center gap-2">
                <MessageSquare size={20} fill="currentColor" /> 카톡 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl serif-font mb-4 text-stone-800">강대근 한의원의 3가지 약속</h2>
            <div className="w-12 h-1 bg-sage mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-[2.5rem] overflow-hidden bg-ivory border border-warm-beige hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800" alt="정성 진료" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-10">
                <Heart className="text-sage mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4 serif-font">정성 어린 진료</h3>
                <p className="text-stone-500 text-sm leading-relaxed">환자 한 분 한 분의 목소리에 깊이 공감하며 통증의 뿌리를 찾아냅니다.</p>
              </div>
            </div>
            <div className="group rounded-[2.5rem] overflow-hidden bg-ivory border border-warm-beige hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563483783225-bc53ad978511?auto=format&fit=crop&q=80&w=800" alt="청정 약재" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-10">
                <ShieldCheck className="text-sage mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4 serif-font">투명한 한약재</h3>
                <p className="text-stone-500 text-sm leading-relaxed">우리아이도 안심하고 먹을 수 있는 GAP 인증 청정 약재만을 고집합니다.</p>
              </div>
            </div>
            <div className="group rounded-[2.5rem] overflow-hidden bg-ivory border border-warm-beige hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=800" alt="편안한 공간" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-10">
                <Calendar className="text-sage mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4 serif-font">환자 중심 시스템</h3>
                <p className="text-stone-500 text-sm leading-relaxed">대기 시간을 최소화하고 진료에 집중할 수 있는 편안한 환경을 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Philosophy Section */}
      <section className="py-24 bg-ivory/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 text-sage/10">
                <Quote size={160} />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                alt="강대근 원장" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-sage text-white p-8 rounded-3xl shadow-xl z-20">
                <p className="serif-font text-2xl mb-1">강대근</p>
                <p className="text-xs opacity-80 uppercase tracking-widest">대표원장 / 한의학박사</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl serif-font mb-8 text-stone-800 leading-tight">
                "치료의 기술보다 중요한 것은 <br />환자를 향한 진실한 마음입니다."
              </h2>
              <div className="space-y-6 text-stone-600 leading-loose font-light text-lg">
                <p>
                  안녕하십니까, 강대근 한의원 원장 강대근입니다. 
                  우리가 겪는 통증은 몸이 보내는 SOS 신호이자, 삶의 균형이 잠시 흐트러졌음을 알리는 목소리입니다.
                </p>
                <p>
                  저는 환자분들을 뵐 때 단순히 '어디가 아프신가요?'를 넘어 '무엇이 당신의 일상을 힘들게 하나요?'를 고민합니다. 
                  마음의 응어리가 몸의 병이 되기도 하기에, 따뜻한 대화와 세심한 진찰로 치유를 시작합니다.
                </p>
                <p className="font-medium text-sage">
                  내 가족을 치료한다는 고집스러운 원칙으로, 정직하고 바르게 진료하겠습니다.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 mt-10 text-stone-800 font-bold border-b-2 border-sage pb-1 hover:text-sage transition-colors">
                원장님 스토리 더보기 <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl serif-font text-stone-800">나아진 일상의 기록</h2>
              <p className="text-stone-500 mt-2">환자분들이 전해주신 진심 어린 후기입니다.</p>
            </div>
            <Link to="/community" className="text-sage font-bold hover:underline">전체보기</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-ivory p-10 rounded-[2.5rem] border border-warm-beige relative hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} fill="currentColor" size={16} />
                  ))}
                </div>
                <p className="text-stone-700 mb-8 italic leading-loose font-light flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                   <div className="w-6 h-[1px] bg-sage"></div>
                   <span className="text-xs font-bold text-stone-500">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
