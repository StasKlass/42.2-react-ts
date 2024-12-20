
import { Footer, Header, LayoutComponent, NavContainer, LogoContainer, Main, StyledNavLink } from "./styles"
import { LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <LogoContainer>
          <StyledNavLink to="/">
            <img src="/favicon.ico" alt="Logo" width="40" height="40" />
          </StyledNavLink>
        </LogoContainer>

        <NavContainer>
          <StyledNavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Home
          </StyledNavLink>
          <StyledNavLink to='/about' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            About
          </StyledNavLink>
          <StyledNavLink to='/users' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Users
          </StyledNavLink>
          <StyledNavLink to='/clients' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Clients
          </StyledNavLink>

        </NavContainer>
      </Header>
      <Main>
        {/* вместо prop children происходит подстановка различного контента в Layout при изменении url */}
        {children}
      </Main>
      <Footer><LogoContainer>
          <img src="/favicon.ico" alt="Logo" width="40" height="40" />
        </LogoContainer></Footer>
    </LayoutComponent>
  )
}

export default Layout