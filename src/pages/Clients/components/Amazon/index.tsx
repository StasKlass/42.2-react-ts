import { CompanyPage, GoBackButton } from "../styles";
import { useNavigate } from "react-router-dom";

function Amazon() {
  const navigate = useNavigate();

  return (
    <CompanyPage>
      <h2>Amazon</h2>
      <p>Welcome to the Amazon company page!</p>
      <GoBackButton onClick={() => navigate(-1)}>Go back</GoBackButton>
    </CompanyPage>
  );
}

export default Amazon;
