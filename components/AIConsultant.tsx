
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { getHealthConsultation } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    const aiResponse = await getHealthConsultation(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || '죄송합니다. 오류가 발생했습니다.' }]);
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-sage text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">AI 상담하기</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 h-[500px] bg-white rounded-3xl shadow-2xl border border-warm-beige flex flex-col animate-in slide-in-from-bottom-2 duration-300 z-50">
          <div className="p-4 bg-sage text-white rounded-t-3xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm">진심 AI 건강상담</h3>
                <p className="text-[10px] text-white/70">무엇이든 물어보세요</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-ivory/30">
            {messages.length === 0 && (
              <div className="text-center mt-10">
                <div className="bg-sage/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-sage" size={24} />
                </div>
                <p className="text-sm text-stone-500">
                  어디가 불편하신가요?<br />
                  증상을 말씀해주시면 한의학적으로<br />도움을 드릴게요.
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-sage text-white rounded-tr-none' 
                    : 'bg-white text-stone-700 border border-warm-beige rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-warm-beige">
                  <Loader2 className="animate-spin text-sage" size={20} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-warm-beige">
            <div className="relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="예: 허리가 뻐근해요."
                className="w-full px-4 py-2 pr-12 rounded-full bg-ivory border border-warm-beige focus:outline-none focus:border-sage text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-sage hover:bg-sage/10 rounded-full disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
