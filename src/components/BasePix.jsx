let basePix;

if (process.env.NODE_ENV === "production") {   
    basePix = "https://backtutor.onrender.com/pix";
} else {
    basePix =     "http:/localhost:4250/pix"
}

export default basePix