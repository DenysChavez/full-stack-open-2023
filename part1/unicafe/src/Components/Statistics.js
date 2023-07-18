import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {

    const total = good + neutral + bad;

    if (total === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    const average = total / 3;
    const positive = (good / total) * 100;
    return (
        <div>
            <StatisticLine text={'Good'} value={good} />
            <StatisticLine text={'Neutral'} value={neutral} />
            <StatisticLine text={'Bad'} value={bad} />
            <StatisticLine text={'Total'} value={total} />
            <StatisticLine text={'Average'} value={average} />
            <StatisticLine text={'Positive'} value={positive} />
        </div>
    )
}

export default Statistics;