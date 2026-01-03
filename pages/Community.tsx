
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Community: React.FC = () => {
  const faqs = [
    { q: "침 맞고 나서 샤워해도 되나요?", a: "침 맞으신 부위에 염증을 예방하기 위해 약 2~3시간 후부터 가벼운 샤워를 하시는 것이 좋습니다. 대중목욕탕이나 찜질방은 당일은 피해주세요." },
    { q: "한의원 진료도 보험 적용이 되나요?", a: "기본적인 침, 뜸, 부항 치료 및 보험용 한약(가루약)은 건강보험 혜택을 받으실 수 있습니다. 추나 요법도 연간 20회까지 건강보험 적용이 가능합니다." },
    { q: "예약을 꼭 해야 하나요?", a: "예약 없이 방문하셔도 진료가 가능하지만, 대기 시간을 줄이기 위해 가급적 네이버 예약이나 전화를 통해 미리 예약하시는 것을 추천드립니다." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl serif-font mb-12 text-center">자주 묻는 질문 (FAQ)</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-warm-beige rounded-2xl overflow-hidden">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-ivory transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openIndex === idx && (
                  <div className="p-6 bg-ivory/50 border-t border-warm-beige text-stone-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-beige/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl serif-font mb-12 text-center">건강 정보 칼럼</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-warm-beige hover:shadow-lg transition-all">
                <img 
                  src={`https://picsum.photos/seed/${i+10}/800/500`} 
                  alt="Post" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sage text-xs font-bold uppercase tracking-wider">건강 팁</span>
                  <h3 className="text-xl font-bold mt-2 mb-4">환절기 면역력을 높이는 차 3가지</h3>
                  <p className="text-stone-500 text-sm mb-6 line-clamp-2">날씨가 쌀쌀해지는 환절기, 체온을 높이고 기관지 건강을 지켜주는 한의학적 차들을 소개합니다.</p>
                  <button className="text-sage font-bold hover:underline">자세히 보기</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
