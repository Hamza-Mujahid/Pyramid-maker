const makePyramid = () => {
    const starNumber = document.getElementById("times").value
    console.log(starNumber)
    if (isNaN(starNumber)) {
        alert("make sure you enter a number in the number box")
    }
    const item = document.getElementById("TextName").value
    console.log(item)

    for (var i = 0; i <= starNumber; i++) {
        document.write((item + " ").repeat(i));

        document.write("<br />");
    }

}