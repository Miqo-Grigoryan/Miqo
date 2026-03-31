import React from 'react';
import { MapPin, School, Download, Share2, Github, FileJson } from 'lucide-react';

export default function About() {
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-lia-bg">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 tracking-tight">Գյումրու №26 դպրոց</h2>
          <p className="text-lia-muted text-base md:text-lg">Ավանդույթներ, որակ և ապագա:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-lia-border shadow-sm">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <MapPin size={20} className="md:hidden" />
              <MapPin size={24} className="hidden md:block" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Հասցե</h3>
            <p className="text-lia-muted text-[13px] md:text-sm leading-relaxed">
              ք. Գյումրի, Շիրակի մարզ, Հայաստան:<br />
              Մեր դպրոցը գտնվում է քաղաքի սրտում:
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-lia-border shadow-sm">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 text-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <School size={20} className="md:hidden" />
              <School size={24} className="hidden md:block" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Առաքելություն</h3>
            <p className="text-lia-muted text-[13px] md:text-sm leading-relaxed">
              Ստեղծել միջավայր, որտեղ յուրաքանչյուր աշակերտ կարող է բացահայտել իր ներուժը:
            </p>
          </div>
        </div>

        <div className="bg-white border border-lia-border rounded-3xl md:rounded-[40px] p-6 md:p-10 mb-8 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-lia-accent text-white rounded-xl md:rounded-2xl flex items-center justify-center">
              <Download size={20} className="md:hidden" />
              <Download size={24} className="hidden md:block" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold">Ներբեռնում</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-bold text-lia-ink flex items-center gap-2 text-sm md:text-base">
                <Share2 size={16} className="text-lia-accent" />
                Որպես հավելված (PWA)
              </h4>
              <p className="text-[13px] md:text-sm text-lia-muted leading-relaxed">
                Տեղադրեք LIA-ն ձեր հեռախոսի վրա: Սեղմեք բրաուզերի <b>«Install»</b> կամ <b>«Add to Home Screen»</b>:
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="font-bold text-lia-ink flex items-center gap-2 text-sm md:text-base">
                <FileJson size={16} className="text-lia-accent" />
                Source Code
              </h4>
              <p className="text-[13px] md:text-sm text-lia-muted leading-relaxed">
                Ներբեռնեք կոդը AI Studio-ի <b>Settings</b> մենյուից՝ ընտրելով <b>«Export to ZIP»</b>:
              </p>
            </div>
          </div>
        </div>

        <div className="bg-lia-ink text-white p-8 md:p-12 rounded-3xl md:rounded-[40px] relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 italic font-serif">"Մենք կերտում ենք վաղվա օրը"</h3>
            <div className="grid grid-cols-3 gap-4 md:gap-12">
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1">500+</div>
                <div className="text-[9px] md:text-xs uppercase tracking-widest opacity-60">Աշակերտներ</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1">40+</div>
                <div className="text-[9px] md:text-xs uppercase tracking-widest opacity-60">Ուսուցիչներ</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1">26</div>
                <div className="text-[9px] md:text-xs uppercase tracking-widest opacity-60">Դպրոց</div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-lia-accent/20 rounded-full blur-3xl -mr-24 -mt-24 md:-mr-32 md:-mt-32"></div>
        </div>
      </div>
    </div>
  );
}


