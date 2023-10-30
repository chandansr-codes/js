

//stack=>used for primitive datatypes
//heap=>used for non-primitive datatypes

let myyoutubename = "rajputdotcom"
let anothername = myyoutubename
anothername = "chaiaurcode"

console.log(myyoutubename)
console.log(anothername)

//non-primitive
let userone = {
email: "user@goggle.com",
upi: "user@ybl"
}

let usertwo = userone

usertwo.email= "chandan@google.com"
console.log(userone.email)
console.log(usertwo.email)