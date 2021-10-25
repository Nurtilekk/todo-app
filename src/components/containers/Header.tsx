import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./Container";

const Header: React.FC = (): React.ReactElement => {
  return (
    <SHeader>
      <Container>
        <SHeaderInner>
          <SLogo>
            <Link to="/">Todo App</Link>
          </SLogo>
          <SNav>
            <SUl>
              <SLi>
                <Link to="/">Home</Link>
              </SLi>
              <SLi>
                <Link to="/todos">Todos</Link>
              </SLi>
            </SUl>
          </SNav>
        </SHeaderInner>
      </Container>
    </SHeader>
  );
};

const SHeader = styled.header`
  width: 100%;
  padding: 20px 5px;
  border-bottom: 1px solid #ccc;
`;

const SLogo = styled.div`
  margin-right: auto;
`;

const SLi = styled.li``;

const SNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const SUl = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const SHeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
