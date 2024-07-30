import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { ThemeDefault } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <Button variant="primary" />
      <Button variant="secundary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
