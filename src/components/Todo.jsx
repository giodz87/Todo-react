import styled from "styled-components"
import circle from "../imiges/circle.svg"
import iconOk from "../imiges/icon-ok.svg"
import trash from "../imiges/icon-trash.svg"
import vectro from "../imiges/icon-vector.svg"
import { useEffect, useState } from "react"
export default function TodoItem(props) {
const [note, setNote ] = useState("")
const [saveNote, setSaveNote] = useState([])

const [isCircle, setIsCircle] = useState(false);


console.log(props.time)
const addNote = () => {
 
    setSaveNote([...saveNote, {name:note,isDone:isCircle,time:props.time}]);
}

const changeIsDone = (index) => {
  const clone = saveNote;
   clone[index].isDone = !clone[index].isDone 
 setSaveNote([...clone])

}
const clickRemove = (index) => {
    const  deleteNotes = [...saveNote]; 
    deleteNotes.splice(index, 1); 
    setSaveNote(deleteNotes); 
  };

    return (
        <Section>
       <div>
       <img onClick={()=> setIsCircle(!isCircle)} src={!isCircle ? circle : iconOk} alt="" />
        <input type="text" placeholder="Note" value={note} 
        onChange={(e) => setNote(e.target.value)}  
        />
        <button><img src={vectro} alt="" onClick={addNote}/></button>
   
       </div>
       <nav>
       {saveNote.map((item,index) => (
        <p>
          <p>
             <p>{item.name} <br/> <p>Today at {item.time}</p></p>
              
             </p>
                  <img onClick={() => changeIsDone(index)  }  src={!item.isDone ? circle : iconOk} alt="" />
              
                    
                    <img onClick={() => clickRemove(index)}
                   
                  src={trash} alt="" />
                
                 </p>
      ))}
      
      
      </nav>
        </Section>
    )
}

const Section  =styled.section`
border-radius: 10px;
background: #FFF;
  height: 500px;
    overflow-y: auto;
 div  {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 23px 28px 0 29px;
    width: 100%;
    
 } 
input {
 display: flex;
padding: 12px 12px 13px 60px;
align-items: center;
align-self: stretch;
border-radius: 5px;
background: #EBEFF2;
width: 259px;

border: none;
}

div img:nth-child(1) {
    position: absolute;
    margin-left: 15px;
    cursor: pointer;
}
button{ 
border-radius: 5px;
background: #20EEB0;
height: 41px;
display: flex;
width: 88px;
padding: 10px;
justify-content: center;
align-items: center;
border: none;
cursor: pointer;

}
button img:nth-child(1) {
    margin: 0;
}
nav {
    padding: 23px 28px 0 29px;

}
p {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
    color: #0D0D0D;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
    
}
p p p:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0;
    margin: 0;
   

}

p p:nth-child(2) {
    color: #888;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-top: 10px;
}
p  img:nth-child(2) {
margin-top: 5px;
    margin-right: 14px;
    cursor: pointer;
}
p img:nth-child(3) {
 cursor: pointer;
background: none;
margin-top: 5px;
    
}

`