const Header = (course) => {
    console.log(course.course.name);
    return (
        <h1>{course.course.name}</h1>
    )
}

export default Header