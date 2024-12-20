import { CompanyPage, GoBackButton } from "../styles";
import { useNavigate } from "react-router-dom";

function Facebook() {
  const navigate = useNavigate();

  return (
    <CompanyPage>
      <h2>Facebook</h2>
      <p>Welcome to the Facebook company page!</p>
      <GoBackButton onClick={() => navigate(-1)}>Go back</GoBackButton>
    </CompanyPage>
  );
}

export default Facebook;
