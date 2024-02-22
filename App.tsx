import { ThemeProvider } from "styled-components";
import { Groups } from "@screens";

import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
