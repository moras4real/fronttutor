let baseU;

if (process.env.NODE_ENV === "production") {    
    baseU = "https://backtutor.onrender.com/signupp";
} else {
    baseU =     "http:/localhost:4250/signupp"
}

export default baseU;