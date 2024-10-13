 function whatRole(data) {
    switch (data) {
        case 1:
            return 'User';
        case 2:
            return 'Staff';
        case 3:
            return 'Manager';
        default:
            return 'User';
    }
}
function isVerified(data) {
    switch (data) {
        case 1:
            return true;
        case 0:
            return false;
        default:
            return 'Unkown';
    }
}
function isAddress(data){
    if (data === null) {
      
        return false;
    }
    else if (data === undefined) {
       
        return false;
    }
    else if (data === '') {
       
        return false;
    }
    return true;
}
function countCategory(data, field, category) {
    return 
}
export { whatRole, isVerified,isAddress,countCategory };