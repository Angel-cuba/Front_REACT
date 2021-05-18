import "./course-list.css";
import CourseItem from "./course-item";

const CourseList = (props) => {

const courseItems = [];

for (let i = 0; i < props.numero; i++) {
     courseItems.push(<CourseItem indice={i}/>)
}
               
     // const courseItem = <div className="course-item"></div>

     return (
          <div className="course-list-container">
               <p>{props.tituloLista}</p>
              
               {courseItems}
          </div>
     );
};
export default CourseList;