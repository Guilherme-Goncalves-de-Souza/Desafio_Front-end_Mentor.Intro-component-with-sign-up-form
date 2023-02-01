import { Content } from "./components/leftSide"
import { Form } from './components/rightSide'
import styled from 'styled-components'

const Main = styled.main`
  padding: 0px 25px;

  @media(max-width: 360px){
    padding: 0px 20px;
  }

  @media(min-width: 800px){
    display: flex;
    gap: 70px;
    padding: 0px 80px;
  }

  @media(min-width: 1000px){
    padding: 0px 160px;
  }
`

function App() {
  return (
    <Main>
      <Content />
      <Form /> 
    </Main>
  )
}

export default App
