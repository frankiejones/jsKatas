/** 2
 * Write a function that accepts an array of 11 integers (between 0 and 9), 
 * that returns a string of those numbers in the form of a phone number.
 * For the UK - 07000 000 000
 * For the US - (123) 456-7890
 */

const phoneConverter = (phone, areaCode) => {

    let stringNo = phone.toString(); // converts the numbers into a string
    let splitA = stringNo.split(""); // splitting the string of numbers into the array

    if (areaCode === "UK") {
        // console.log(splitA);
        let phoneUK = splitA[0] + splitA[1]  + splitA[2] + splitA[3] + splitA[4]+ " " + splitA[5]+splitA[6]+splitA[7]+ " " + splitA[8]+splitA[9]+splitA[10];// not sure this is correct
        console.log(phoneUK);
    } else if (areaCode === "US" ) {
        let phoneUS = "(" +splitA[0] + splitA[1]  + splitA[2] +")"+ " " + splitA[3] + splitA[4] + splitA[5]+ "-" +splitA[6]+splitA[7]+ splitA[8]+splitA[9];// not sure this is correct
        console.log(phoneUS);
    }
}

phoneConverter("07123456789", "UK");
phoneConverter("0764322347", "US");