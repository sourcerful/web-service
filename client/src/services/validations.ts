export const validateIP = (IPaddr: string): boolean => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    
    if(IPaddr.match(ipRegex)){
        return true
    }
    else{
        return false
    }
} 

export const validatePort = (port: string): boolean => {
    if(parseInt(port) > 0 && parseInt(port) < 65535){
        return true
    }
    else{
        return false
    }
}