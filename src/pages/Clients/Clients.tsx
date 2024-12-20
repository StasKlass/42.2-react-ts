import { ClientsPage, ClientsLink } from "./styles";

function Clients() {
  return (
    <ClientsPage>
      <h2>Clients</h2>
      <ClientsLink to="/clients/facebook">Facebook</ClientsLink>
      <ClientsLink to="/clients/google">Google</ClientsLink>
      <ClientsLink to="/clients/amazon">Amazon</ClientsLink>
    </ClientsPage>
  );
}

export default Clients;
