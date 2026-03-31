import React from 'react';
import { Clock, BookOpen } from 'lucide-react';

export default function Schedule() {
  const days = [
    { name: 'Երկուշաբթի', lessons: ['Մաթեմատիկա', 'Հայոց լեզու', 'Ֆիզիկա', 'Պատմություն', 'Անգլերեն'] },
    { name: 'Երեքշաբթի', lessons: ['Քիմիա', 'Կենսաբանություն', 'Գրականություն', 'Ֆիզկուլտուրա', 'Ինֆորմատիկա'] },
    { name: 'Չորեքշաբթի', lessons: ['Մաթեմատիկա', 'Աշխարհագրություն', 'Հայոց լեզու', 'Ռուսաց լեզու', 'Երգ'] },
    { name: 'Հինգշաբթի', lessons: ['Ֆիզիկա', 'Պատմություն', 'Գրականություն', 'Անգլերեն', 'Նկարչություն'] },
    { name: 'Ուրբաթ', lessons: ['Մաթեմատիկա', 'Հայոց լեզու', 'Քիմիա', 'Ֆիզկուլտուրա', 'Դասղեկի ժամ'] },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-lia-bg">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-1 md:mb-2">Դասացուցակ</h2>
            <p className="text-lia-muted text-sm md:text-base">2025-2026 ուսումնական տարի</p>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-lia-accent bg-lia-accent/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full w-fit">
            <Clock size={14} />
            <span>Դասերը սկսվում են 08:30</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {days.map((day) => (
            <div key={day.name} className="bg-white border border-lia-border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-gray-50 p-3 md:p-4 border-b border-lia-border">
                <h3 className="font-bold text-xs md:text-sm text-center">{day.name}</h3>
              </div>
              <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                {day.lessons.map((lesson, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[9px] md:text-[10px] font-mono text-lia-muted mt-0.5 md:mt-1">{idx + 1}.</span>
                    <span className="text-[13px] md:text-sm font-medium text-lia-ink">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 p-6 md:p-8 bg-white border border-lia-border rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-lia-accent/10 text-lia-accent rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
            <BookOpen size={24} className="md:hidden" />
            <BookOpen size={32} className="hidden md:block" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg mb-1">Հիշեցում</h4>
            <p className="text-lia-muted text-[13px] md:text-sm leading-relaxed">
              Մի մոռացեք ստուգել տնային առաջադրանքները: LIA-ն միշտ պատրաստ է օգնել:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

