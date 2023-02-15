class Validations {
    
    static validateDate(date,isValid){ // this isValid must be a function from date-fns
        const arr = date.split('-');
        if(arr.length === 3){
            if(arr[0]>=1 && arr[0]<=31){
                if(arr[1]>=1 && arr[1]<=12){
                    if(arr[2]>=1 && arr[2]<=9999){
                        if(isValid(new Date(arr[2],arr[1],arr[0]))){
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    static validateName(name){
        if(name.length >= 1 && name.length <=50){
            if(name.match(/^[a-zA-Z0-9 .]+$/)){
                return true;
            }
        }
        return false;
    }

    static validateDesc(desc){
        if(desc.length >= 1 && desc.length <=140){
            return true;
        }
        return false;
    }
}

export default Validations;