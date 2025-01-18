function RatingCircle({ rating }) {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;

    const strokeDashoffset = circumference *  (1 - rating / 100);

    const getColor = (rating) => {
        if (rating > 75) return '#00ff00'; // Green
        if (rating > 50) return '#ffcc00'; // Yellow
        return '#ff0000'; // Red
    };
    return (
        <div className="rating-circle" style={{ width: '80px', height: '80px' }}>
            <svg className="progress-ring" width="80" height="80">
                <circle
                    className="progress-ring__background"
                    cx="40"
                    cy="40"
                    r="35"
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth="6"
                />
                <circle
                    className="progress-ring__circle"
                    cx="40"
                    cy="40"
                    r="35"
                    fill="none"
                    stroke={getColor(rating)}
                    strokeWidth="6"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>
            <span className="rating-text">{rating.toFixed(1)}%</span>
        </div>
    )
}

export default RatingCircle