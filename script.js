document.getElementById("greeting").textContent = "Hi there!";
document.getElementById("h1").textContent = "The Header";

let items = document.getElementsByClassName("redclass");
for(let i =0; i < items.length; i++)
{
    items[i].textContent = "Text change";
}

/*"The Header"*/


/*
run this first: php -S localhost:3006 -t ./
*/