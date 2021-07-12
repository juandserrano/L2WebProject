var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var term = urlParams.get('search')
console.log(term)

var result_list = document.querySelector(".search_list")

var search_results = []

for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(term.toLowerCase())) {
        search_results.push(products[i])
        console.log(products[i].price)
    }
}


search_results.forEach(element => {
    var img1 = document.createElement('img')
    img1.src = element.img_url
    var img2 = document.createElement('img')
    img2.src = element.hoverimg_url
    img2.className = 'hover-img'
    var div_image = document.createElement('div')
    div_image.className = 'product-image'
    div_image.appendChild(img1)
    div_image.appendChild(img2)

    var div_details = document.createElement('div')
    div_details.className = 'product-details'
    
    var h2 = document.createElement('h2')
    h2.className = 'result-titel'
    h2.innerHTML = element.name
    div_details.appendChild(h2)

    var desc = document.createElement('div')
    desc.className = 'description'
    desc.innerHTML = element.description
    div_details.appendChild(desc)

    var price = document.createElement('div')
    price.className = 'price'
    price.innerHTML = "Price: $" + element.price + " CAD"
    div_details.appendChild(price)

    var quantity = document.createElement('div')
    quantity.className = 'quantity'
    var qspan = document.createElement('span')
    qspan.className = 'quantity-text'
    qspan.innerHTML = 'Quantity: '
    quantity.appendChild(qspan)
    var qinput = document.createElement('input')
    qinput.className = 'quantity-selector'
    qinput.type = 'number'
    qinput.value = '1'
    quantity.appendChild(qinput)
    div_details.appendChild(quantity)

    var button = document.createElement('button')
    button.className = 'add-to-cart'
    button.innerHTML = 'Add to Cart'
    button.type = 'button'
    div_details.appendChild(button)

    var rating = document.createElement('div')
    rating.className = 'rating'
    rating.innerHTML = element.rating == 1 ? '&#10022;&#10023;&#10023;&#10023;&#10023;' : element.rating == 2 ? '&#10022;&#10022;&#10023;&#10023;&#10023;' : element.rating == 3 ? '&#10022;&#10022;&#10022;&#10023;&#10023;' : element.rating == 4 ? '&#10022;&#10022;&#10022;&#10022;&#10023;' : '&#10022;&#10022;&#10022;&#10022;&#10022;'
    div_details.appendChild(rating)

    var paper = document.createElement('div')
    paper.className = 'paper'
    paper.appendChild(div_image)
    paper.appendChild(div_details)

    result_list.appendChild(paper)
});




/*
<div class="paper">
            <div class="product-image">
                <img src="image_hover/militaryJacket.jpg" alt="">
                <img class="hover-img" src="image_hover/militaryJacketD.jpg" alt="">
            </div>
            <div class="product-details">
              <h2 class="result-titel">Military Jacket</h2>
              <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsa alias odio quasi tempora minima doloremque fuga, molestiae deleniti dolorem, incidunt commodi vel? Voluptas, culpa, unde minus totam consequuntur tenetur error qui assumenda nulla quas soluta facilis veniam. Praesentium, veritatis saepe deleniti quis, a dolore recusandae aspernatur nam quasi voluptatibus quisquam aperiam nobis quidem eius debitis consectetur? Harum, libero neque.</div>
              <div class="price"><span>Price: </span>$259.99 CAD</div>
              <div class="quantity">
                <span class="quantity-text">Quantity: </span>
                <input class="quantity-selector" type="number" value="1">
              </div>
              <button type="button" class="add-to-cart">Add to Cart</button>
              <div class="rating">&#10022;&#10022;&#10022;&#10022;&#10023;</div>
            </div>
</div>  */