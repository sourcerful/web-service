export const validate = (type: string, value: string): boolean => {
    if(type === "IP"){
        let regEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

        if(value.match(regEx)){
            return true
        }
        else{
            return false
        }
    }
    else if (type === "Port"){
        if(parseInt(value) > 0 && parseInt(value) < 65535){
            return true
        }
        else{
            return false
        }
    }

    return false
} 