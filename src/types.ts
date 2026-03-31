export type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
};

export type ChatState = {
  messages: Message[];
  isLoading: boolean;
};
