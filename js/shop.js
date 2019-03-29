// creating a prototype for my products

function Products(type, price, info, img) {
  this.type = type;
  this.price = price;
  this.info = info;
  this.img = img;
}

var jeans = new Products( "Black Jeans", "R250", "Womens Black Skinny Jeans", '<img src="images/shop/black jeans.jpg">' );

document.getElementById("image").innerHTML = jeans.img;  
document.getElementById("type").innerHTML = jeans.type;
document.getElementById("price").innerHTML = jeans.price;
document.getElementById("info").innerHTML = jeans.info;

var coat = new Products("Engineers Coat", "R1799", "Take your denim options to the next level with this striking jacket. Inspired by the fabrication of blazers, it’s crafted with an elegant cut and two waist pockets.",'<img src="images/shop/engineers coat.jpg" alt="">');

document.getElementById("image2").innerHTML = coat.img;  
document.getElementById("type2").innerHTML = coat.type;
document.getElementById("price2").innerHTML = coat.price;
document.getElementById("info2").innerHTML = coat.info;

 var shacket = new Products("Militarty Shack", "R1299", "Is it a shirt or is it a jacket? It’s the best of both. The shacket will be your new favourite layering garment, thanks to its easy fit and practical design in a bold camouflage print.", '<img src="images/shop/military shacket.jpg" alt="">')

document.getElementById("image3").innerHTML = shacket.img;  
document.getElementById("type3").innerHTML = shacket.type;
document.getElementById("price3").innerHTML = shacket.price;
document.getElementById("info3").innerHTML = shacket.info;

var cap = new Products("9FIFTY NY Yankees", "R419", "Get your hands on this official New York Yankees snapback cap by New Era. The 9FIFTY is a classic adjustable snapback with a firm structure and a flat yet curvable visor.", '<img src="images/shop/NYYankees cap.jpg" alt="">')

document.getElementById("image4").innerHTML = cap.img;  
document.getElementById("type4").innerHTML = cap.type;
document.getElementById("price4").innerHTML = cap.price;
document.getElementById("info4").innerHTML = cap.info;




