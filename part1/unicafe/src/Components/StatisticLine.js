const StatisticLine = ({ text, value }) => {
    
    if (text === 'Positive') {
        return (
                <p>{text} {value} %</p>
        )
    }

    return (
            <p>{text} {value}</p>
    )

}

export default StatisticLine