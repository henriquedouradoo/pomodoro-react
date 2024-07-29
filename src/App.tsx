import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { ThemeDefault } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={ThemeDefault}>
    <Button variant="primary" />
    <Button variant="secundary" />
    <Button variant="danger" />
    <Button variant="success" />
    <Button />
    </ThemeProvider>
  )
}


