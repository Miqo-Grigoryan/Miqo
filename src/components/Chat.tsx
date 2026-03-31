import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../types';
import { chatWithLIA } from '../services/gemini';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'Ողջույն, ես LIA-ն եմ՝ քո ավագ ընկերը և դպրոցի կուրատորը: Ինչո՞վ կարող եմ օգնել քեզ այսօր:',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithLIA([...messages, userMessage]);
      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-lia-bg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-3 md:gap-4 max-w-3xl mx-auto",
                message.role === 'user' ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                message.role === 'user' ? "bg-lia-ink text-white" : "bg-lia-accent text-white"
              )}>
                {message.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className={cn(
                "px-4 py-2.5 md:px-5 md:py-3 rounded-2xl text-[13px] md:text-sm leading-relaxed shadow-sm max-w-[85%] md:max-w-none",
                message.role === 'user' 
                  ? "bg-white border border-lia-border text-lia-ink rounded-tr-none" 
                  : "bg-white border border-lia-border text-lia-ink rounded-tl-none"
              )}>
                <div className="prose prose-sm max-w-none prose-headings:mb-2 prose-p:mb-2 last:prose-p:mb-0">
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
                <div className="mt-2 text-[10px] text-lia-muted font-mono uppercase tracking-tighter opacity-50">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex gap-4 max-w-3xl mx-auto">
            <div className="w-8 h-8 rounded-lg bg-lia-accent text-white flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div className="bg-white border border-lia-border px-5 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
              <Loader2 size={16} className="animate-spin text-lia-accent" />
              <span className="text-xs text-lia-muted font-medium">LIA-ն մտածում է...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 md:p-6 bg-white border-t border-lia-border">
        <form onSubmit={handleSend} className="max-w-3xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Հարցրու ինձ..."
            className="w-full bg-gray-50 border border-lia-border rounded-2xl px-4 py-3 md:px-6 md:py-4 pr-12 md:pr-14 text-[13px] md:text-sm focus:outline-none focus:ring-2 focus:ring-lia-accent/20 focus:border-lia-accent transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-1.5 top-1.5 bottom-1.5 w-9 md:w-10 bg-lia-accent text-white rounded-xl flex items-center justify-center hover:bg-lia-accent/90 disabled:opacity-50 transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
        <p className="text-center mt-3 text-[10px] text-lia-muted uppercase tracking-widest font-semibold">
          LIA - Գյումրու №26 դպրոցի պաշտոնական օգնական
        </p>
      </div>
    </div>
  );
}
