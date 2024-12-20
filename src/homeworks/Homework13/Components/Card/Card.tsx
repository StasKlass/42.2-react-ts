import React from "react";
import Message from "../Message/Message";
import { CardWrapper, UserName } from "../../styles";
import { useBlogContext } from "../BlogManagement/BlogManagement";

const Card = () => {
  const { posts } = useBlogContext();

  return (
    <>
      {posts.map((post, index) => (
        <CardWrapper key={index}>
          <UserName>Unknown</UserName>
          <Message text={post} />
        </CardWrapper>
      ))}
    </>
  );
};

export default Card;
