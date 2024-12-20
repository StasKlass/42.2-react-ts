import styled from "@emotion/styled";

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f4f4f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const InputArea = styled.textarea`
  width: 100%;
  max-width: 600px;
  height: 120px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  font-size: 16px;
  font-family: "Arial", sans-serif;
  resize: none;
  background-color: #ffffff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

export const PostButton = styled.button`
  padding: 12px 25px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    background-color: #3e8e41;
    transform: scale(1);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const UserName = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
  font-family: "Arial", sans-serif;
`;

export const MessageContent = styled.p`
  margin: 0;
  font-size: 16px;
  color: #555;
  font-family: "Arial", sans-serif;
  line-height: 1.5;
`;
