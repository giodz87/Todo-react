import GlobalStyled from "./styles-component/GlobalStyle";
import Data from "./components/Data"
import Todo from "./components/Todo"
import styled from "styled-components"
import { useState } from "react";
function App() {
  const [time , setTime] = useState()
  return (
    <Section>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet"></link>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet"></link>
   
   <h1>Todo</h1>
   <div>
    <Data 
    time={time}
    setTime ={setTime}     
     />
    <Todo time={time} 
    />
    </div>
    <GlobalStyled/>
    </Section>
  )
}

export default App

const Section = styled.section`

display: inline-flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 100%;


  h1 {
    color: #007FDB;
font-family: Inter;
font-size: 96px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-right: 30%;
  }
  div {
  width: 100%;
   
  }

`