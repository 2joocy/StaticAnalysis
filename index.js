import {add, constant, equal, lessThan, lessThanEquals, moreThan, moreThanEquals, subtract, unaryMinus} from './expressions'


(() => {
    let x = constant(10);
    let y = constant(20);
    if(lessThan(x, y)){
        console.log("Less than")
    }else{
        console.log("Greater than")
    }
})()