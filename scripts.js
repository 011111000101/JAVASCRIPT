// 4th part

$('div').css('background', 'purple');








//from 1st part to the 3rd
console.log("Break until 17:10")
console.log("This is JavaScript");
let colors = ["orange", "blue", "green", "black", "white", "red"];

let post = {
     title : "My post",
     description : "My firs post, awesome!",
     likeCount : 50,
     comments : ["cool!", "nice job!"]
};

let posts = [{
    title: "First post.",
    likeCount: 12},
{
    title: "Second post.",
    likeCount: 222
}];

console.log(colors);
console.log(post);

let age = 50;

if (post.likeCount == 50) {
    console.log("Hovno");
} else {
    console.log("prdel");
};

let greeter = name => {
    console.log(`Hello, ${name}`+".");
    if (name === "Adam"){
        console.log("he is an adult");
    }
}

greeter("Adam");
greeter("Peter");
greeter("Kuba");
greeter("Michal");

console.log(colors);

colors.forEach(kanal => {
    console.log(kanal);
}
    );


console.log("This is the end of the web")
