const CourseItem = (props) =>{
    const {courseInfo}= props
    return(
        <div>
            <p>Nom du plat : {courseInfo.name}</p>
            <p>prix : {courseInfo.prix}</p>
            <p>description : {courseInfo.description}</p>
        </div>
    )
}
export default CourseItem