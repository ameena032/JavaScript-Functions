function getAverage(scoreArray){
    //Average sum(all the numbers)/count(all the numbers)
    const count = scoreArray.length;
    let sum=0;

    for(let i=0; i<count;i++){
        sum=sum+scoreArray[i];
    }
    const avg = sum/count;
    const roundedDown = Math.floor(avg);
    return roundedDown;
}