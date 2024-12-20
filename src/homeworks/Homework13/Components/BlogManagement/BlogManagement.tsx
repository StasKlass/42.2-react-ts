import React, { createContext, useContext, useState } from "react";
import { InputArea, PostButton } from "../../styles";

// Типы для контекста
type BlogContextType = {
  posts: string[];
  addPost: (message: string) => void;
};

// Создание контекста
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Хук для использования контекста
export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};

// Провайдер контекста
export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<string[]>([]);

  const addPost = (message: string) => {
    setPosts((prevPosts) => [...prevPosts, message]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};

// Компонент BlogManagement
const BlogManagement: React.FC = () => {
    const [input, setInput] = useState<string>(""); // Локальное состояние для textarea
    const { addPost } = useBlogContext(); // Доступ к функции addPost из контекста
  
    const handlePost = () => {
      if (input.trim()) {
        addPost(input); // Добавление сообщения в контекст
        setInput(""); // Очистка textarea
      }
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        if (e.shiftKey) {
          // Добавляем новую строку при Shift+Enter
          setInput((prev) => prev + "\n");
        } else {
          // Отправляем сообщение при Enter
          e.preventDefault(); // Останавливаем стандартное поведение Enter
          handlePost();
        }
      }
    };
  
    return (
      <div>
        <InputArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Обработка нажатия клавиш
          placeholder="Write your message here..."
        />
        <PostButton onClick={handlePost}>Post</PostButton>
      </div>
    );
  };

export default BlogManagement;
