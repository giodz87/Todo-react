import { useEffect, useState } from "react"
import img from "../imiges/img.png"
import styled from "styled-components"


export default function DateTime(props) {

const [weekend, setWeekend] = useState();

useEffect(() =>  {  
    const updateTimeAndDate = () =>{
    const currentDate = new Date();

    const currentMinute = currentDate.getMinutes();
    const currentHour = currentDate.getHours();
    const timePeriod = currentHour >= 12 ? 'PM' : 'AM'

    const currentDay = currentDate.getDate();
    const options = { weekday: 'long' }

    
    const dayName = currentDate.toLocaleString('en-US', options)

  props.setTime(`${currentHour}:${currentMinute} ${timePeriod} `)
    
    setWeekend(`${dayName.substring(0, 4)} ${currentDay}`)
}
updateTimeAndDate();
const intervalId = setInterval(updateTimeAndDate, 1000);
return () => clearInterval(intervalId);
    },[props])
 const BackgroundImg = styled.img `

 width: 430px;
height: 202px;
 border-radius: 10px 10px 0px 0px;
     background-image: url(${img});
 `

return (
    
    <Section>
        <div>
          <div>
    {weekend}
    </div>
        <div>
        {props.time}
        </div>
        </div>
 < BackgroundImg alt=""/>
       
    
    </Section>
)

}


const Section = styled.section `
   width: 430px;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
div {
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: end;
    transform: translate(-15px, 92px);
}
div div:nth-child(1) {
    color: #fff;
font-family: Russo One;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

div div:nth-child(2) {
color: #fff;
font-family: Russo One;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`

