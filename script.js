let results = document.querySelector(".result");
let body =document.querySelector("body");
let button = document.querySelector("button");
button.onclick = function() {
    let answer1 = document.querySelector(".answerInput1").value;
    let answer2 = document.querySelector(".answerInput2").value;
    if (answer1 <= 15 && answer2 === "water") {
        results.style.display = "block";
        results.innerHTML = "You are Blue!";
        body.style.backgroundColor="#0390fc";
         body.style.color="#030303";
    }
else if (answer1 >= 15 && answer2 === "water") {
        results.style.display = "block";
        results.innerHTML = "You are Green!";
        body.style.backgroundColor="#039114";
    body.style.color="#030303";
    }
else if (answer1 <= 10 && answer2 === "coffee") {
        results.style.display = "block";
        results.innerHTML = "You are Purple!";
    body.style.backgroundColor="#521dc4";
    body.style.color="#ffffff";
    }
else if (answer1 >= 10 && answer2 === "coffee") {
        results.style.display = "block";
        results.innerHTML = "You are Black!";
     body.style.backgroundColor="#0a0a0a";
    body.style.color= "#ffffff";
    }
else if (answer1 <= 15 && answer2 === "juice") {
        results.style.display = "block";
        results.innerHTML = "You are Yellow!";
     body.style.backgroundColor="#f7e00a";
     body.style.color="#030303";
    }
else if (answer1 >= 15 && answer2 === "juice") {
        results.style.display = "block";
        results.innerHTML = "You are Pink!";
     body.style.backgroundColor="#fc9fd2";
     body.style.color="#030303";
    }
else if (answer1 <= 10 && answer2 === "soda") {
        results.style.display = "block";
        results.innerHTML = "You are Orange!";
     body.style.backgroundColor="#ff8205";
    body.style.color="#030303";
    
    }
else if (answer1 >= 10 && answer2 === "soda") {
        results.style.display = "block";
        results.innerHTML = "You are Red!";
     body.style.backgroundColor="#b50502";
    body.style.color="#ffffff";
    }
    else if (answer1 <= 10 && answer2 === "smoothie") {
        results.style.display = "block";
        results.innerHTML = "You are Brown!";
         body.style.backgroundColor="#6e321a";
        body.style.color="#ffffff";
    }
else if (answer1 >= 10 && answer2 === "smoothie") {
        results.style.display = "block";
        results.innerHTML = "You are White!";
     body.style.backgroundColor="#fcfcfc";
     body.style.color="#030303";
    }
    else if (answer1 <= 10 && answer2 === "slushy") {
        results.style.display = "block";
        results.innerHTML = "You are Indigo!";
         body.style.backgroundColor="#020675";
        body.style.color="#ffffff";
    }
else if (answer1 >= 10 && answer2 === "slushy") {
        results.style.display = "block";
        results.innerHTML = "You are Magenta!";
     body.style.backgroundColor="#ac07e3";
    body.style.color="#ffffff";
    }
    else if (answer1 <= 10 && answer2 === "tea") {
        results.style.display = "block";
        results.innerHTML = "You are Beige!";
         body.style.backgroundColor="#d4be90";
         body.style.color="#030303";
    }
else if (answer1 >= 10 && answer2 === "tea") {
        results.style.display = "block";
        results.innerHTML = "You are Creme!";
     body.style.backgroundColor="#ebdfc7";
    body.style.color="#030303";
    }
    else if (answer1 <= 10 && answer2 === "hot cocoa") {
        results.style.display = "block";
        results.innerHTML = "You are Teal!";
         body.style.backgroundColor="#045440";
        body.style.color="#ffffff";
    }
else if (answer1 >= 10 && answer2 === "hot cocoa") {
        results.style.display = "block";
        results.innerHTML = "You are Turquoise!";
     body.style.backgroundColor="#21deaf";
     body.style.color="#030303";
    }
     else if (answer1 <= 10 && answer2 === "boba") {
        results.style.display = "block";
        results.innerHTML = "You are Dandelion Yellow!";
          body.style.backgroundColor="#eda51f";
          body.style.color="#030303";
    }
else if (answer1 >= 10 && answer2 === "boba") {
        results.style.display = "block";
        results.innerHTML = "You are Mauve!";
     body.style.backgroundColor="#9e6087";
     body.style.color="#030303";
    }
     else if (answer1 <= 10 && answer2 === "milk") {
        results.style.display = "block";
        results.innerHTML = "You are Cobalt Blue!";
          body.style.backgroundColor="#0540ad";
         body.style.color="#ffffff";
    }
else if (answer1 >= 10 && answer2 === "milk") {
        results.style.display = "block";
        results.innerHTML = "You are Royal Blue!";
     body.style.backgroundColor="#042c78";
    body.style.color="#ffffff";
    }
     else if (answer1 <= 10 && answer2 === "iced tea") {
        results.style.display = "block";
        results.innerHTML = "You are Silver!";
          body.style.backgroundColor="#aaa9ad";
         body.style.color="#030303";
    }
else if (answer1 >= 10 && answer2 === "iced tea") {
        results.style.display = "block";
        results.innerHTML = "You are Gold!";
     body.style.backgroundColor="#D4AF37";
     body.style.color="#030303";
    }
};