
import React from 'react';
import { MapPin, Phone, MessageSquare, Instagram, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A3728] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-8">강대근한의원</h2>
            <p className="text-stone-400 max-w-sm mb-10 leading-relaxed font-light">
              증상보다는 사람을, 기술보다는 진심을 먼저 생각합니다. <br />
              당신의 건강한 일상을 위해 묵묵히 곁을 지키겠습니다.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-sage transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-sage transition-all"><MessageSquare size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-8 text-lg">Contact</h3>
            <div className="space-y-6 text-stone-400 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0 text-sage" size={20} />
                <span className="leading-relaxed">충청북도 청주시 북문로 <br />(한의원 전용 주차장 완비)</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="flex-shrink-0 text-sage" size={20} />
                <span className="text-lg font-bold text-white">02-1234-5678</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-8 text-lg">Menu</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">한의원 소개</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">진료 과목</Link></li>
              <li><Link to="/herbs" className="hover:text-white transition-colors">한약 이야기</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">커뮤니티</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-[11px] tracking-wider">
          <div className="text-center md:text-left">
            <p>© 2024 강대근한의원. All rights reserved. | 대표: 강대근 | 사업자번호: 123-45-67890</p>
            <p className="mt-1">의료법을 준수하여 작성되었습니다. | 주소: 청주시 북문로</p>
          </div>
          <Link to="/admin" className="flex items-center gap-2 text-stone-500 hover:text-white transition-all bg-white/5 px-4 py-2 rounded-lg">
            <Settings size={14} /> 관리자
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
