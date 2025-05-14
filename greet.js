//set cookie that expires in 7 days
function greetUser(){
    //check if vistedBefore cookie exist
    const hasVistedBefore = document.cookie.includes('vistedBefore=true');
    if(hasVistedBefore){
        alert("👋 Welcome back to Game Search!");

    }else{
        // sets cookie with 7 days expiry
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate()+ 7);
        document.cookie = `vistedBefore=true;
        expires=${expiryDate.toUTCString()}; path=/`
        alert("⭐ Welcome to Game Search!");

    }
}
greetUser()