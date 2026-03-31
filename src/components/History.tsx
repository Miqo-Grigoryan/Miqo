import React from 'react';
import { Landmark, ScrollText, Map } from 'lucide-react';
import { cn } from '../lib/utils';

export default function History() {
  const facts = [
    {
      title: "Կումայրի",
      text: "Գյումրին Հայաստանի հնագույն բնակավայրերից է, որը հիշատակվում է դեռևս մ.թ.ա. 8-րդ դարից:",
      icon: Landmark,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Ալեքսանդրապոլ",
      text: "19-րդ դարում քաղաքը վերանվանվել է Ալեքսանդրապոլ և դարձել Արևելյան Հայաստանի կարևորագույն մշակութային կենտրոնը:",
      icon: ScrollText,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Վարպետների քաղաք",
      text: "Գյումրին հայտնի է իր արհեստներով, հումորով և մեծանուն արվեստագետներով՝ Մհեր Մկրտչյան, Հովհաննես Շիրազ և այլք:",
      icon: Map,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-lia-bg">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-6">Գյումրի. Մշակութային մայրաքաղաք</h2>
          <p className="text-lia-muted text-base md:text-xl leading-relaxed max-w-2xl">
            Բացահայտիր մեր քաղաքի հարուստ պատմությունը, որը կերտվել է դարերի ընթացքում:
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {facts.map((fact, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start group">
              <div className={cn(
                "w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                fact.bg, fact.color
              )}>
                <fact.icon size={24} className="md:hidden" />
                <fact.icon size={32} className="hidden md:block" />
              </div>
              <div className="pt-0 md:pt-2">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{fact.title}</h3>
                <p className="text-lia-muted leading-relaxed text-[15px] md:text-lg">
                  {fact.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 p-8 md:p-12 bg-amber-900 text-amber-50 rounded-[30px] md:rounded-[60px] flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Գիտեի՞ք արդյոք</h3>
          <p className="text-amber-200/80 text-sm md:text-base max-w-xl leading-relaxed mb-6 md:mb-8">
            Գյումրին Հայաստանի առաջին քաղաքն է, որտեղ բեմադրվել է առաջին հայկական օպերան՝ «Անուշը» (1912թ.):
          </p>
          <button className="w-full sm:w-auto px-8 py-3 bg-amber-50 text-amber-900 rounded-full font-bold text-sm hover:bg-white transition-colors">
            Իմանալ ավելին
          </button>
        </div>
      </div>
    </div>
  );
}

