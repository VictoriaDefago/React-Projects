import styled from "@emotion/styled"
import CryptoImg from './img/imagen-criptos.png'

const Container = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
`

function App() {

  return (

    <Container>
      <Image src={CryptoImg} alt="crypto-image" />
      <Heading>Desde App</Heading>
    </Container>

  )
}

export default App
