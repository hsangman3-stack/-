
import React from 'react';
import { MapPin, Phone, MessageSquare, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A3728] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl serif-font font-bold mb-6">진심 한의원</h2>
            <p className="text-stone-400 max-w-sm mb-8 leading-relaxed">
              우리는 환자 한 분 한 분의 건강한 삶을 위해 <br />
              오늘도 정성을 다해 한약재를 고르고 침을 놓습니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-sage transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-sage transition-all"><MessageSquare size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-6">Contact</h3>
            <div className="space-y-4 text-stone-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <span>서울특별시 강남구 테헤란로 123 <br />진심빌딩 3층 (주차 가능)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="flex-shrink-0" size={18} />
                <span>02-1234-5678</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6">Sitemap</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="#/about" className="hover:text-white transition-colors">한의원 소개</a></li>
              <li><a href="#/treatments" className="hover:text-white transition-colors">진료 과목</a></li>
              <li><a href="#/herbs" className="hover:text-white transition-colors">한약 이야기</a></li>
              <li><a href="#/community" className="hover:text-white transition-colors">커뮤니티</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-stone-500 text-xs">
          <p>© 2024 진심 한의원. All rights reserved. | 대표: 홍길동 | 사업자번호: 123-45-67890</p>
          <p className="mt-2">의료법을 준수하여 작성되었습니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
