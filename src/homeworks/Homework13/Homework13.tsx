import React from "react";
import { BlogProvider } from "./Components/BlogManagement/BlogManagement";
import BlogManagement from "./Components/BlogManagement/BlogManagement";
import Card from "./Components/Card/Card";
import { BlogWrapper } from "./styles";


const Homework13 = () => {
  return (
    <BlogProvider>
      <BlogWrapper>
        <BlogManagement />
        <Card />
      </BlogWrapper>
    </BlogProvider>
  );
};

export default Homework13;
