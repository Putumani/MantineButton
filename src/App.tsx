import "./styles.css";
import React from "react";
import { Button } from "@mantine/core";
import styled from "@emotion/styled";

type StyledButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const StyledButton = styled(({ children, ...rest }: StyledButtonProps) => (
  <Button {...rest}>{children}</Button>
))`
  && {
    background-color: #df5d58;
    color: #ffffff;
    border: 2px solid black;
    border-radius: 8px;
    width: 200px;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="center-container">
        <StyledButton onClick={() => console.log("Button clicked")}>
          Add bot
        </StyledButton>
      </div>
    </div>
  );
};

export default App;
