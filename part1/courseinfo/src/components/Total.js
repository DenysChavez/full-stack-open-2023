const Total = (course) => {
    const exercises = course.course.parts.map(value => value.exercises);
    const total = exercises.reduce((total, num) => total + num, 0);
    return (
        <p>
            Number of exercises { total }
        </p>
    )
}

export default Total