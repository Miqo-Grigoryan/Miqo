import React from 'react';
import { GraduationCap, Calendar, History, Info, MessageSquare, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
};

export default function Sidebar({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }: SidebarProps) {
  const menuItems = [
    { id: 'chat', label: 'LIA Chat', icon: MessageSquare },
    { id: 'schedule', label: 'Դասացուցակ', icon: Calendar },
    { id: 'history', label: 'Պատմություն', icon: History },
    { id: 'about', label: 'Մեր մասին', icon: Info },
  ];

  return (
    <motion.div 
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
      className="border-r border-lia-border h-full flex flex-col bg-white overflow-hidden relative shadow-xl md:shadow-none"
    >
      <div className="p-4 border-b border-lia-border flex items-center justify-between h-[65px] md:h-[81px]">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 bg-lia-accent rounded-xl flex items-center justify-center text-white flex-shrink-0">
            <GraduationCap size={24} />
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="whitespace-nowrap"
            >
              <h1 className="font-bold text-xl tracking-tight">LIA</h1>
              <p className="text-[10px] uppercase tracking-widest text-lia-muted font-semibold">School №26 Curator</p>
            </motion.div>
          )}
        </div>
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex p-2 hover:bg-gray-100 rounded-lg text-lia-muted transition-colors"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            title={isCollapsed ? item.label : undefined}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
              activeTab === item.id
                ? "bg-lia-accent/5 text-lia-accent"
                : "text-lia-muted hover:bg-gray-50 hover:text-lia-ink"
            )}
          >
            <item.icon size={20} className="flex-shrink-0" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-lia-border">
        {!isCollapsed ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 rounded-xl p-4"
          >
            <p className="text-[11px] text-lia-muted leading-relaxed italic">
              "Կրթությունը ուժ է, իսկ գիտելիքը՝ ազատություն:"
            </p>
          </motion.div>
        ) : (
          <div className="flex justify-center text-lia-muted opacity-30">
            <Menu size={20} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

