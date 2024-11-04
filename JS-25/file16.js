function repeatStr(numberOfRepeats, str){
    let starterString ='';

    for(let i=0; i<numberOfRepeats; i++){
        starterString = starterString + str;
    }
    return starterString;
}