function isEven(number) {
    const remainer = number % 2;
    
    if(remainer === 0) {
        return true;
    } else {
        return false;
    }
}

export default isEven; 