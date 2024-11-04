class SmallestIntegerFinder{
    findSmallestInt(arrayOfNumbers){
        let smallestNumber;

        for(let i=0; i<arrayOfNumbers.length; i++){
            const arrNumber = arrayOfNumbers[i];
            if(i === 0){
                smallestNumber = arrNumber;
            }
            if(arrNumber < smallestNumber){
                smallestNumber = arrNumber;
            }
        }
        return smallestNumber;
    }
}