// validate email format
export function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//validate required inputs
export function validateRequired(value){
    return value.trim() !== '';
}

// validate  length 
export function validateLength(value){
    return value.length > 9 ;
}