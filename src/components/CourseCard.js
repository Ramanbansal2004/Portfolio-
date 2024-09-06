import React from 'react';
import '../Styles/CourseCard.css';
const CourseCard=({img ,heading ,subheading, info ,setModal_1 ,setButtonText1,buttonText1})=>{
  return(
       <div className="course_cards">
        <div className="couse_card_item">
          <img src={img} className="course_img"/>
          <div className="course_card_info">
            <h2 className='course_card_heading'>
              {heading}
            </h2>
            <h3 className="course_card_subheading">{subheading}</h3>
            <ul className="courselinks">
              <li>{info[0]}</li>
              <li>{info[1]}</li>
              <li>{info[2]}</li>

            </ul>
            <div className="knowbtn" onClick={()=>{setModal_1(true)
                setButtonText1(buttonText1 === 'KNOW MORE' ? 'CLOSE' : 'KNOW MORE');

              }} >KNOW MORE</div>
          </div>
        </div>
        
      </div> 
   
      
    )
}
export default CourseCard;