const starNumber = +(prompt("Enter the number of stars you want to see i.e 5, 6, 10"))
if (isNaN(starNumber)) {
    alert("make sure you enter number first")
        + (prompt("Enter the number of stars you want to see i.e 5, 6, 10"))
}
const item = prompt("enter what you want to write")

for (var i = 0; i <= starNumber; i++) {
    document.write((item + " ").repeat(i));

    document.write("<br />");
}

let str5 = "";
