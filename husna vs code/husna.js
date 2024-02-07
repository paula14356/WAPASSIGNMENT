function validateCredentials(email,password){
    const validEmail ="hussinahnaturinda@gmail.com";
    const validPassword ="22/U/6691";
    if (email === validEmail && password === validPassword) {
        console.log(`User email is $ {email}, login successfully!`);
    }else{
        console.log ("correct user credentials");
        console.log("incorrect user credentials!");
    
    }
    
    }
    validateCredentials();