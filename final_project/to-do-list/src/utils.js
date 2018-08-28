export function isLogged (){
    if(localStorage.getItem("token")){
        return true
    }
    else{
        return false
    }
};
