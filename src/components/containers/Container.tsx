import React from "react";
import styled from "styled-components";

const Container: React.FC = ({ children }): React.ReactElement => {
  return <SContainer>{children}</SContainer>;
};

const SContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export default Container;
