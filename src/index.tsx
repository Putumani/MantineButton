import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App";

const rootElement = document.getElementById("root")!;
ReactDOM.render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  rootElement
);


