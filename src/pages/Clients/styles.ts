import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

export const ClientsLink = styled(Link)`
  text-decoration: none;
  color: #4a90e2;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
    color: #357ab7;
  }
`;
