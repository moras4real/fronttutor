let baseUr;

if (process.env.NODE_ENV === "production") {    
    baseUr = "https://backtutor.onrender.com/signin";
} else {
    baseUr =     "http:/localhost:4250/signin"
    
}

export default baseUr;