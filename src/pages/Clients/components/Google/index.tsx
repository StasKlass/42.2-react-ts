import { CompanyPage, GoBackButton } from "../styles";
import { useNavigate } from "react-router-dom";

function Google() {
  const navigate = useNavigate();

  return (
    <CompanyPage>
      <h2>Google</h2>
      <p>Welcome to the Google company page!</p>
      <GoBackButton onClick={() => navigate(-1)}>Go back</GoBackButton>
    </CompanyPage>
  );
}

export default Google;
