 function whatRole(data) {
    switch (data) {
        case 1:
            return 'User';
        case 2:
            return 'Staff';
        case 3:
            return 'Manager';
        default:
            return 'Unknown';
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
        console.log('data is null');
        return false;
    }
    else if (data === undefined) {
        console.log('data is undefined');
        return false;
    }
    else if (data === '') {
        console.log('data is empty');
        return false;
    }
    return true;
}
function countCategory(data, field, category) {
    return data.filter((item) => item[field] === category).length;
}
export { whatRole, isVerified,isAddress,countCategory };