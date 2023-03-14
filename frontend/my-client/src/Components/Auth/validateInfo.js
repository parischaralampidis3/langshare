
function validateInfo(values){
    let errors = {}
    
    if(!values.first_name){
        errors.first_name = 'First name is required'
    }

    if(!values.last_name){
        errors.last_name  = 'Last name is required'
    }

    if(!values.user_name){
        errors.user_name = 'User name is required'
    }

    if(!values.user_email){
        errors.user_email = "Email required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.user_email)){
        errors.user_email = "Email address is invalid"
    }
    if(!values.user_password){
        errors.user_password = "Password is required"
    }else if(values.user_password.length <= 8){
        errors.user_password = "Password needs to be 8 characters"
    }else if (values.user_password.lenghth >= 15){
        errors.user_password = "Password can't be more than 15 characters"
    }
    


}
export default validateInfo;