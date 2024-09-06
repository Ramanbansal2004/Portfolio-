import React ,{ useState }from 'react';
import '../Styles/Courses.css';
import CourseCard from '../components/CourseCard.js';
import {CourseInfo} from '../Helpers/CourseInfo.js';
import CourseModal_1 from '../components/CourseModal_1.js';
import CourseModal_2 from '../components/CourseModal_1.js';

const Courses=()=>{
    const [showModal_1,setModal_1]=useState(false);
    const [showModal_2,setModal_2]=useState(false);
    const [transiton ,setTransition]=useState('');
   const [buttonText1, setButtonText1] = useState('KNOW MORE');
   

    

  return(
    <>    
    <div className="courses">
      <div className="main_container">
              {/**Course1**/}
   <div className="card_container" >
      <h2 className="course_heading">Current Course</h2>
      <CourseCard id={CourseInfo[0].id}
      img={CourseInfo[0].img} heading={CourseInfo[0].heading} subheading={CourseInfo[0].subheading} info={CourseInfo[0].info} setModal_1={setModal_1} setButtonText1={setButtonText1} buttonText1={buttonText1}/>
         {/*Hidden CourseModal  1*/}
     { showModal_1 &&<CourseModal_1 AddId={setTransition ? 'transition' : 'notransition'} onClose={()=>{
     setModal_1(false)
     }}/>}     
   </div>          

     {/**course2**/}
     <div className="card_container">
      <h2 className="course_heading">Recently Concluded Course</h2>
      <CourseCard id={CourseInfo[1].id}
      img={CourseInfo[1].img} heading={CourseInfo[1].heading} subheading={CourseInfo[1].subheading} info={CourseInfo[1].info} setModal_1={setModal_2} setButtonText1={setButtonText1} buttonText1={buttonText1}/>
         {/*Hidden CourseModal  1*/}
     { showModal_2 &&<CourseModal_1 AddId={setTransition ? 'transition' : 'notransition'} onClose={()=>{
     setModal_2(false)
     }}/>}
                     
     </div>        
      </div>
   


     

        
   

     
     
      </div>



      


      </>

    )
}
export default Courses;