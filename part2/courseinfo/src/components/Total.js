const Total = ({exercises}) => {
    const total = (exercises.map(exercise => exercise.exercises)).reduce((s,p) => s+p);
    // console.log(sum);
    // console.log(exercises);
    // const total = 10;
    return (
        <p>Total of { total } exercises </p>
    )
}

export default Total