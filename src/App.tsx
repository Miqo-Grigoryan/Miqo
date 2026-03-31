/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Schedule from './components/Schedule';
import History from './components/History';
import About from './components/About';
import { Menu } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return <Chat />;
      case 'schedule':
        return <Schedule />;
      case 'history':
        return <History />;
      case 'about':
        return <About />;
      default:
        return <Chat />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-lia-bg flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-lia-border z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-lia-accent rounded-lg flex items-center justify-center text-white">
            <span className="font-bold text-sm">L</span>
          </div>
          <span className="font-bold text-lg">LIA</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg text-lia-muted"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar - Desktop & Mobile Drawer */}
      <div className={`
        fixed inset-0 z-40 md:relative md:inset-auto
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div 
            className="absolute inset-0 bg-black/20 md:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsMobileMenuOpen(false);
          }} 
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
      </div>

      <main className="flex-1 relative flex flex-col overflow-hidden">
        {renderContent()}
      </main>
    </div>
  );
}



