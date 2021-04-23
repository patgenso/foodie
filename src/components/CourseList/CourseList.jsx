import { useState} from "react"
import CourseItem from "./CourseItem"
const CourseList = () =>{
const [courses, setCourses]= useState([])

    const fetchCourses = async () => { 
        const response = await fetch('http://localhost:4000/courses')
        const data = await response.json()
        console.log(data)
        setCourses(data)
        }
    return(
        <section>
            <h2>Liste des plats</h2>
            <button onClick={fetchCourses}>Récupère liste des plats</button>
            <div>
                {courses.map(course => 
                    <CourseItem  courseInfo={course}/>
                    
                    )}
            </div>
        </section>       
    )
}

export default CourseList