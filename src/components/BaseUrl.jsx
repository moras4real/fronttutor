let baseUrl;

if (process.env.NODE_ENV === "production") {   
    baseUrl = "https://backtutor.onrender.com/";
} else {
    baseUrl =     "http:/localhost:4250"
}

export default baseUrl;