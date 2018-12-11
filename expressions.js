export function constant(number){
    return Math.floor(number)
}

export function add(number, number2){
    return (constant(number) + constant(number2))
}

export function subtract(number, number2){
    return (constant(number) - constant(number2))
}

export function unaryMinus(number){
    return (constant(number) * -1)
}

export function lessThan(number, equals){
    return (constant(number) < constant(equals))
}

export function lessThanEquals(number, equals){
    return (constant(number) <= constant(equals))
}

export function equal(number, equals){
    return (constant(number) === constant(equals))
}

export function moreThanEquals(number, equals){
    return (constant(number) >= constant(equals))
}

export function moreThan(number, equals){
    return (constant(number) > constant(equals))
}

export function range(start, end){
    
}


