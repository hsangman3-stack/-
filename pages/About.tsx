
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=800" 
                alt="Director" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div>
              <h2 className="text-sage font-bold mb-4">원장 인사말</h2>
              <h3 className="text-4xl serif-font mb-8 leading-tight">"당신의 아픔을 가장 가까이에서 듣겠습니다."</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                안녕하세요, 진심 한의원 원장 홍길동입니다. 
                환자분들이 한의원 문을 열고 들어오실 때의 그 무거운 마음을 잘 압니다. 
                저희는 단순히 '병'을 고치는 곳이 아니라, 아픔을 나누고 함께 길을 찾아가는 '동반자'가 되고자 합니다.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                전통적인 한의학의 지혜에 현대적인 정밀함을 더해, 
                가장 편안하고 효과적인 치료를 받으실 수 있도록 매 순간 최선을 다하겠습니다.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-bold border-b border-wood pb-2">약력 및 경력</h4>
                <ul className="text-stone-500 space-y-2">
                  <li>• OO대학교 한의과대학 졸업</li>
                  <li>• 대한한방부인과학회 정회원</li>
                  <li>• 전) OO한방병원 진료부장</li>
                  <li>• 한의학 박사 과정 수료</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl serif-font mb-16">진료 시간 안내</h2>
          <div className="max-w-2xl mx-auto bg-ivory p-10 rounded-3xl border border-warm-beige">
            <div className="grid grid-cols-2 gap-6 text-lg">
              <div className="text-left font-semibold">평 일</div>
              <div className="text-right text-stone-600">09:30 - 19:00</div>
              <div className="text-left font-semibold">토요일</div>
              <div className="text-right text-stone-600">09:30 - 14:00</div>
              <div className="text-left font-semibold text-red-500">일요일/공휴일</div>
              <div className="text-right text-red-400">휴 진</div>
              <div className="col-span-2 border-t border-wood/20 pt-4 mt-2 text-sm text-stone-400">
                * 평일 점심시간 13:00 - 14:00 (토요일은 점심시간 없이 진료)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
