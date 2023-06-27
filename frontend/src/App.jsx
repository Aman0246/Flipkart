import { Header } from './components/Header'
import './App.css'
import { Home } from './components/home/Home'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { Login } from './components/LoginDialog' 

function App() {

const Homemargin=styled(Box)({
  marginTop:"55px"
})


  return (
    <>

<Header/>
<Homemargin>
<Home/>
</Homemargin>
<Login />

    </>
  )
}   

export default App
