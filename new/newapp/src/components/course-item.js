import {useState} from "react"

const CourseItem = (props) => {
     const [likes, setLikes] = useState(0);


     return <div className="course-item">
               <img src={props.img} alt=""/>
               <h2>{props.name}</h2>
               <span>All likes: {likes}</span>
               <button onClick={() => setLikes(likes+1)}>Change</button>
                    </div>
}

export default CourseItem;