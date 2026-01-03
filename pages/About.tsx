
import React from 'react';
import { MapPin, Clock, CheckCircle, Award, Users, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Intro Section with Background Image */}
      <section className="relative py-32 bg-ivory overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 hidden lg:block">
           <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Pattern" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-sage font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-6 h-px bg-sage"></span>
                Philosophy
              </h2>
              <h3 className="text-5xl mb-10 leading-tight text-stone-800">
                기본에 충실한 진료, <br />
                강대근한의원의 고집입니다.
              </h3>
              <div className="space-y-6 text-stone-600 leading-loose text-lg font-light">
                <p>
                  안녕하십니까. 강대근한의원 원장 강대근입니다. 
                  우리가 겪는 통증은 몸의 신호일 뿐만 아니라, 그간 고생해온 우리 삶의 기록이기도 합니다.
                </p>
                <p>
                  저는 단순히 증상을 지우는 치료사가 아니라, 여러분의 몸이 스스로 회복할 수 있는 길을 함께 찾아가는 가이드가 되고 싶습니다. 
                  과잉 진료 없는 <strong>'정직한 진단'</strong>, 마음까지 보듬는 <strong>'따뜻한 치료'</strong>를 약속드립니다.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-sage">
                    <Award size={28} />
                  </div>
                  <p className="text-xs font-bold text-stone-800">풍부한 경험</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-sage">
                    <Users size={28} />
                  </div>
                  <p className="text-xs font-bold text-stone-800">환자 중심</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-sage">
                    <HeartHandshake size={28} />
                  </div>
                  <p className="text-xs font-bold text-stone-800">진실한 마음</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                  alt="강대근 원장 진료" 
                  className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-warm-beige rounded-[2rem] -z-10 border border-sage/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl mb-16 text-center">편안한 치유의 공간</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 lg:row-span-2 rounded-[2rem] overflow-hidden shadow-lg h-full">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Reception" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-lg h-64">
              <img src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Treatment Room" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-lg h-64">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Waiting Area" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-lg h-64">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Equipment" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-lg h-64">
              <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Pharmacy" />
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-24 bg-ivory/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-12 rounded-[3rem] border border-warm-beige flex flex-col items-center text-center shadow-sm">
              <Clock className="text-sage mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-8 text-stone-800">진료 시간</h3>
              <div className="space-y-4 w-full text-stone-600">
                <div className="flex justify-between border-b border-warm-beige pb-2">
                  <span>평 일</span>
                  <span className="font-bold text-stone-800">09:30 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-warm-beige pb-2">
                  <span>토요일</span>
                  <span className="font-bold text-stone-800">09:30 - 14:00</span>
                </div>
                <div className="flex justify-between text-red-500/80">
                  <span>일요일/공휴일</span>
                  <span className="font-bold">휴 진</span>
                </div>
                <p className="text-xs text-stone-400 mt-4">* 점심시간 : 13:00 - 14:00</p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] border border-warm-beige flex flex-col items-center text-center shadow-sm">
              <MapPin className="text-sage mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-8 text-stone-800">오시는 길</h3>
              <div className="space-y-6 text-stone-600 text-sm">
                <p className="font-bold text-lg text-stone-800">충청북도 청주시 북문로</p>
                <div className="text-left space-y-2 bg-ivory/50 p-4 rounded-2xl">
                  <p>• <strong>위치:</strong> 청주시 북문로 인근</p>
                  <p>• <strong>대중교통:</strong> 인근 버스 정류장 이용</p>
                  <p>• <strong>주차:</strong> 한의원 전용 주차장 완비</p>
                </div>
                <button className="bg-sage text-white px-8 py-4 rounded-2xl font-bold mt-4 w-full shadow-lg hover:bg-[#5d6b2e] transition-all">네이버 지도 보기</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
