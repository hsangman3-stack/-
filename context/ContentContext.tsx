
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Treatment {
  title: string;
  desc: string;
  methods: string[];
}

export interface Testimonial {
  text: string;
  author: string;
}

interface ContentContextType {
  treatments: Treatment[];
  setTreatments: (t: Treatment[]) => void;
  testimonials: Testimonial[];
  setTestimonials: (t: Testimonial[]) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 초기 데이터 (포트폴리오)
  const [treatments, setTreatments] = useState<Treatment[]>([
    {
      title: '통증 및 재활',
      desc: '디스크, 거북목, 오십견 등 근골격계 질환의 근본 원인을 해결합니다.',
      methods: ['침 치료', '약침', '추나 요법']
    },
    {
      title: '비만 및 다이어트',
      desc: '단순한 체중 감량이 아닌, 체질 개선을 통해 요요 없는 건강한 몸을 만듭니다.',
      methods: ['체질 분석', '다이어트 한약', '부분 비만 관리']
    },
    {
      title: '성장 및 소아',
      desc: '우리아이의 숨은 키를 찾고 면역력을 높여 튼튼하게 자라도록 돕습니다.',
      methods: ['성장판 자극', '성장 한약', '체형 교정']
    },
    {
      title: '보약 및 만성피로',
      desc: '기력을 보충하고 오장육부의 균형을 맞추어 활기를 되찾아 드립니다.',
      methods: ['공진단', '경옥고', '맞춤 보약']
    }
  ]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    { text: "원장님이 정말 친절하게 상담해주셔서 마음까지 치료받는 기분이었습니다. 허리 통증도 금방 좋아졌어요.", author: "김OO 환자님" },
    { text: "한약이 쓰지 않고 아이가 잘 먹어서 좋아요. 감기도 덜 걸리는 것 같아 안심입니다.", author: "이OO 환자님" },
    { text: "만성 피로 때문에 힘들었는데 보약 먹고 아침에 일어나는 게 가벼워졌어요.", author: "박OO 환자님" }
  ]);

  return (
    <ContentContext.Provider value={{ treatments, setTreatments, testimonials, setTestimonials }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
