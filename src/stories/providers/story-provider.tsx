import '@/index.css';

interface StoryProviderProps {
  children?: React.ReactNode;
}

export const StoryProvider = ({ children }: StoryProviderProps) => children;
