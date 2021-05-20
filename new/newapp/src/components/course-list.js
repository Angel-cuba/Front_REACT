import CourseItem from "./course-item";
import "./course-list.css";
import coursesData from "../data/courses";

const CourseList = (props) => {

     return (
          <div className="course-list-container">
               <p>{props.tituloLista}</p>
              
               {coursesData.map((course, index) => {
               return <CourseItem key={index} name={course.name} img={course.img}/>;
               
                    })}
          </div>
     );
};
export default CourseList;