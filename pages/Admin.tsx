
import React, { useState } from 'react';
import { useContent, Treatment, Testimonial } from '../context/ContentContext';
import { Lock, Save, Plus, Trash2, LayoutDashboard, LogOut } from 'lucide-react';

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
    setTreatments([...treatments, { title: '새 진료 과목', desc: '상세 설명을 입력하세요.', methods: ['방법 1'] }]);
  };

  const removeTreatment = (index: number) => {
    if (window.confirm('이 진료 과목을 삭제하시겠습니까?')) {
      setTreatments(treatments.filter((_, i) => i !== index));
    }
  };

  const updateTestimonial = (index: number, field: keyof Testimonial, value: string) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setTestimonials(newTestimonials);
  };

  const addTestimonial = () => {
    setTestimonials([...testimonials, { text: '새로운 환자 후기 내용을 입력하세요.', author: '환자 성함' }]);
  };

  const removeTestimonial = (index: number) => {
    if (window.confirm('이 후기를 삭제하시겠습니까?')) {
      setTestimonials(testimonials.filter((_, i) => i !== index));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-ivory p-4">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-3xl shadow-2xl border border-warm-beige w-full max-w-md transition-all">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-sage/10 p-5 rounded-full mb-4">
              <Lock className="text-sage" size={40} />
            </div>
            <h2 className="text-3xl font-bold serif-font text-stone-800">관리자 모드</h2>
            <p className="text-sm text-stone-500 mt-2">포트폴리오 수정을 위해 비밀번호를 입력하세요.</p>
          </div>
          <div className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-warm-beige focus:ring-2 focus:ring-sage focus:outline-none bg-ivory/50 text-center text-xl tracking-widest"
              placeholder="••••"
              autoFocus
            />
            <button type="submit" className="w-full bg-sage text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#5d6b2e] transition-all shadow-lg">
              로그인
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen py-12 animate-in fade-in duration-500">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-sage p-3 rounded-2xl text-white shadow-lg">
              <LayoutDashboard size={28} />
            </div>
            <div>
              <h1 className="text-3xl serif-font font-bold text-stone-800">콘텐츠 관리</h1>
              <p className="text-stone-500 text-sm">한의원의 진료 과목과 환자 후기를 관리합니다.</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-stone-400 hover:text-red-500 transition-colors font-medium"
          >
            <LogOut size={18} /> 로그아웃
          </button>
        </div>

        <div className="grid gap-12">
          {/* Treatments Section */}
          <section className="bg-white p-8 rounded-[2rem] border border-warm-beige shadow-sm">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-warm-beige">
              <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
                <span className="w-2 h-8 bg-sage rounded-full"></span>
                진료 과목 (포트폴리오)
              </h2>
              <button 
                onClick={addTreatment}
                className="flex items-center gap-2 bg-sage text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#5d6b2e] transition-all shadow-md"
              >
                <Plus size={18} /> 항목 추가
              </button>
            </div>
            <div className="grid gap-6">
              {treatments.map((t, i) => (
                <div key={i} className="p-6 bg-ivory/30 border border-warm-beige rounded-2xl relative group hover:border-sage/30 transition-all">
                  <button 
                    onClick={() => removeTreatment(i)}
                    className="absolute top-4 right-4 text-stone-300 hover:text-red-500 transition-colors"
                    title="삭제"
                  >
                    <Trash2 size={20} />
                  </button>
                  <div className="grid gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">과목명</label>
                      <input 
                        className="w-full text-xl font-bold bg-transparent border-b border-warm-beige focus:border-sage outline-none py-1 text-stone-800"
                        value={t.title}
                        onChange={(e) => updateTreatment(i, 'title', e.target.value)}
                        placeholder="과목 제목"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">설명</label>
                      <textarea 
                        className="w-full text-sm text-stone-600 bg-white border border-warm-beige focus:border-sage outline-none p-3 rounded-xl resize-none"
                        value={t.desc}
                        onChange={(e) => updateTreatment(i, 'desc', e.target.value)}
                        rows={2}
                        placeholder="상세 설명"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">치료 방법 (쉼표로 구분)</label>
                      <input 
                        className="w-full text-xs bg-white border border-warm-beige focus:border-sage rounded-xl px-4 py-2 outline-none"
                        value={t.methods.join(', ')}
                        onChange={(e) => updateTreatment(i, 'methods', e.target.value.split(',').map(s => s.trim()))}
                        placeholder="예: 침 치료, 약침, 추나"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-white p-8 rounded-[2rem] border border-warm-beige shadow-sm">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-warm-beige">
              <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
                <span className="w-2 h-8 bg-sage rounded-full"></span>
                환자 후기 관리
              </h2>
              <button 
                onClick={addTestimonial}
                className="flex items-center gap-2 bg-sage text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#5d6b2e] transition-all shadow-md"
              >
                <Plus size={18} /> 후기 추가
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 bg-ivory/30 border border-warm-beige rounded-2xl relative group hover:border-sage/30 transition-all">
                  <button 
                    onClick={() => removeTestimonial(i)}
                    className="absolute top-4 right-4 text-stone-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                  <div className="grid gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">후기 내용</label>
                      <textarea 
                        className="w-full text-sm italic text-stone-600 bg-white border border-warm-beige focus:border-sage outline-none p-4 rounded-xl resize-none"
                        value={t.text}
                        onChange={(e) => updateTestimonial(i, 'text', e.target.value)}
                        rows={3}
                        placeholder="환자의 진솔한 후기를 입력하세요."
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">작성자</label>
                      <input 
                        className="w-full text-sm font-bold text-stone-800 bg-white border border-warm-beige focus:border-sage outline-none px-4 py-2 rounded-xl"
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

          <div className="flex justify-center pb-20">
            <button 
              onClick={() => {
                alert('변경사항이 성공적으로 저장되었습니다.');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 bg-sage text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:bg-[#5d6b2e] hover:scale-105 transition-all text-xl"
            >
              <Save size={24} /> 전체 변경사항 적용하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
