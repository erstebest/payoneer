export const defineOnePercentValue = (selectedCard) => {
    let maxDegree = 0;

    selectedCard.segments.forEach((segment) => {
        if (segment.temp > maxDegree) maxDegree = segment.temp;
    });

    return 100 / maxDegree;
};
