const StatisticLine = ({ text, value }) => {
    
    if (text === 'Positive') {
        return (
            <div>
                <p>{text} {value} %</p>
            </div>
        )
    }
    
    return (
        <div>
            <p>{text} {value}</p>
        </div>
    )

}

export default StatisticLine