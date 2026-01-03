
import React, { useState } from 'react';
import { useContent, Treatment, Testimonial } from '../context/ContentContext';
import { Lock, Save, Plus, Trash2, LayoutDashboard, LogOut, FileEdit, CheckCircle2 } from 'lucide-react';

const Admin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { treatments, setTreatments, testimonials, setTestimonials } = useContent();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1111') {
      setIsLoggedIn(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
  };

  const updateTreatment = (index: number, field: keyof Treatment, value: any) => {
    const newTreatments = [...treatments];
    newTreatments[index] = { ...newTreatments[index], [field]: value };
    setTreatments(newTreatments);
  };

  const addTreatment = () => {
    setTreatments([...treatments, { title: '새 진료 과목', desc: '상세 내용을 입력하세요.', methods: ['방법 1'] }]);
  };

  const removeTreatment = (index: number) => {
    if (window.confirm('항목을 삭제하시겠습니까?')) {
      setTreatments(treatments.filter((_, i) => i !== index));
    }
  };

  const updateTestimonial = (index: number, field: keyof Testimonial, value: string) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setTestimonials(newTestimonials);
  };

  const addTestimonial = () => {
    setTestimonials([...testimonials, { text: '새 후기 내용을 입력하세요.', author: '환자 성함' }]);
  };

  const removeTestimonial = (index: number) => {
    if (window.confirm('후기를 삭제하시겠습니까?')) {
      setTestimonials(testimonials.filter((_, i) => i !== index));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-ivory p-4">
        <form onSubmit={handleLogin} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-warm-beige w-full max-w-md">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-sage/10 p-6 rounded-full mb-6 text-sage">
              <Lock size={48} />
            </div>
            <h2 className="text-3xl font-bold text-stone-800">관리자 시스템</h2>
            <p className="text-stone-500 mt-2">포트폴리오 수정을 위해 비밀번호를 입력하세요.</p>
          </div>
          <div className="space-y-6">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-warm-beige focus:border-sage focus:outline-none bg-ivory/30 text-center text-2xl tracking-[1em]"
              placeholder="••••"
              autoFocus
            />
            <button type="submit" className="w-full bg-sage text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#5d6b2e] transition-all shadow-xl">
              로그인
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen py-16 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto px-4">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 bg-white p-8 rounded-[2.5rem] shadow-sm border border-warm-beige">
          <div className="flex items-center gap-5">
            <div className="bg-sage p-4 rounded-2xl text-white shadow-lg">
              <LayoutDashboard size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-800">한의원 관리 모드</h1>
              <p className="text-stone-500 text-sm">진료 과목 포트폴리오 및 환자 후기를 실시간으로 수정합니다.</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-stone-400 hover:text-red-500 transition-colors font-bold px-4 py-2"
          >
            <LogOut size={20} /> 로그아웃
          </button>
        </div>

        <div className="grid gap-16">
          {/* Treatments Edit Section */}
          <section className="bg-white p-10 rounded-[3rem] border border-warm-beige shadow-sm">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-warm-beige">
              <div className="flex items-center gap-3">
                <FileEdit className="text-sage" size={28} />
                <h2 className="text-2xl font-bold text-stone-800">진료 과목 포트폴리오</h2>
              </div>
              <button 
                onClick={addTreatment}
                className="flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-[#5d6b2e] transition-all shadow-lg"
              >
                <Plus size={20} /> 새 과목 추가
              </button>
            </div>
            <div className="grid gap-8">
              {treatments.map((t, i) => (
                <div key={i} className="p-8 bg-ivory/20 border-2 border-warm-beige/50 rounded-[2rem] relative group hover:border-sage transition-all">
                  <button 
                    onClick={() => removeTreatment(i)}
                    className="absolute top-6 right-6 text-stone-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={24} />
                  </button>
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-sage uppercase tracking-tighter">진료 과목명</label>
                      <input 
                        className="w-full text-2xl font-bold bg-transparent border-b-2 border-warm-beige focus:border-sage outline-none py-2 text-stone-800"
                        value={t.title}
                        onChange={(e) => updateTreatment(i, 'title', e.target.value)}
                        placeholder="과목 제목"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-sage uppercase tracking-tighter">상세 설명</label>
                      <textarea 
                        className="w-full text-sm text-stone-600 bg-white border-2 border-warm-beige/30 focus:border-sage outline-none p-4 rounded-2xl resize-none font-light leading-relaxed"
                        value={t.desc}
                        onChange={(e) => updateTreatment(i, 'desc', e.target.value)}
                        rows={3}
                        placeholder="상세 설명"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-sage uppercase tracking-tighter">치료 방법 (쉼표로 구분)</label>
                      <input 
                        className="w-full text-xs font-bold text-stone-700 bg-white border-2 border-warm-beige/30 focus:border-sage rounded-2xl px-6 py-3 outline-none"
                        value={t.methods.join(', ')}
                        onChange={(e) => updateTreatment(i, 'methods', e.target.value.split(',').map(s => s.trim()))}
                        placeholder="예: 침 치료, 약침, 한약 처방"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Edit Section */}
          <section className="bg-white p-10 rounded-[3rem] border border-warm-beige shadow-sm">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-warm-beige">
               <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sage" size={28} />
                <h2 className="text-2xl font-bold text-stone-800">환자 후기 관리</h2>
              </div>
              <button 
                onClick={addTestimonial}
                className="flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-[#5d6b2e] transition-all shadow-lg"
              >
                <Plus size={20} /> 새 후기 추가
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="p-8 bg-ivory/20 border-2 border-warm-beige/50 rounded-[2rem] relative group hover:border-sage transition-all">
                  <button 
                    onClick={() => removeTestimonial(i)}
                    className="absolute top-6 right-6 text-stone-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={24} />
                  </button>
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-sage uppercase tracking-tighter">후기 본문</label>
                      <textarea 
                        className="w-full text-sm italic text-stone-600 bg-white border-2 border-warm-beige/30 focus:border-sage outline-none p-5 rounded-2xl resize-none font-light leading-loose"
                        value={t.text}
                        onChange={(e) => updateTestimonial(i, 'text', e.target.value)}
                        rows={4}
                        placeholder="후기 내용"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-sage uppercase tracking-tighter">작성자 정보</label>
                      <input 
                        className="w-full text-sm font-bold text-stone-800 bg-white border-2 border-warm-beige/30 focus:border-sage outline-none px-6 py-3 rounded-2xl"
                        value={t.author}
                        onChange={(e) => updateTestimonial(i, 'author', e.target.value)}
                        placeholder="예: 김OO 환자님"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Save Action */}
          <div className="flex justify-center pb-24">
            <button 
              onClick={() => {
                alert('모든 변경사항이 안전하게 적용되었습니다.');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-4 bg-sage text-white px-20 py-6 rounded-[2rem] font-black shadow-2xl hover:bg-[#5d6b2e] hover:scale-105 transition-all text-2xl tracking-tight"
            >
              <Save size={32} /> 전체 데이터 업데이트
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
