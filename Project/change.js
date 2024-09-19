function btn(){
    debugger;
    let image = document.getElementById('image');
    let images= ['image/product-6.jpg','image/product-7.jpg','image/product-9jpg','image/product-6.jpg','image/product-6.jpg','image/product-7.jpg','image/product-9.jpg'];

     let random = Math.floor(Math.random() * 6);
     image.src =images[random];

}  

    