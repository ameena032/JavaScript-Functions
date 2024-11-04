var humanYearsCatYearsDogYears = function(humanYears){
    let catsAge;
    let dogsAge;

    if(humanYears === 1){
        return [humanyears, 15, 15];
    }
    if(humanYears === 2){
        return [humanYears, 24, 24];
    }

    const excessYears = humanYears-2;
    const excessCatYears = excessYears*4;
    const extraDogyears = excessYears*5;

    return [humanYears,24 + excessCatYears,24 + extraDogyears];
}