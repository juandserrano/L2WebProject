// Grab url query string form search results
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var term = urlParams.get('search')

// Make array of HTML tags to be able to manipulate them
var result_list = document.querySelector(".search_list")
var sort_selection = document.querySelector("#sort")
var price_filter = document.querySelector("#price-filter")
var rating_filter = document.querySelector("#rating-filter")

// initialize an empty result array and add products that contain the query string
var search_results = []
for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(term.toLowerCase())) {
        search_results.push(products[i])
    }
}

// Call function to re-render results
render_results(search_results)

// Function that builds the DOM and renders the result
function render_results(list){
    result_list.innerHTML = ""
    list.forEach(element => {
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
        qinput.min = '1'
        quantity.appendChild(qinput)
        div_details.appendChild(quantity)

        qinput.addEventListener('change', event => {
            price.innerHTML = "Price: $" + element.price * qinput.value + " CAD"
        })

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
    })
}


// EVENT LISTENERS

// sort
sort_selection.addEventListener('change', event => {
    if (sort_selection.value == 'ascending') {
        sort_ascending()
    } else if (sort_selection.value == 'descending') {
        sort_descending()
    }
})

// price
price_filter.addEventListener('change', event => {
    if (price_filter.value == 'less50') {
        filter_search_price(50)
    } else if (price_filter.value == '50to100') {
        filter_search_price(100)
    } else if (price_filter.value == '100to200'){
        filter_search_price(200)
    } else if (price_filter.value == 'more200'){
        filter_search_price(999)
    } else if (price_filter.value == 'all'){
        filter_search_price(0)
    }
})

// rating
rating_filter.addEventListener('change', event => {
    if (rating_filter.value == 'one') {
        filter_search_rating(1)
        
    } else if (rating_filter.value == 'two') {
        filter_search_rating(2)
        
    } else if (rating_filter.value == 'three'){
        filter_search_rating(3)
        
    } else if (rating_filter.value == 'four'){
        filter_search_rating(4)
        
    } else if (rating_filter.value == 'five'){
        filter_search_rating(5)
        
    } else if (rating_filter.value == 'all'){
        filter_search_rating(0)
       
    }
})

// helper functions to sort
function compare_asc(a, b) {
    
    let comparison = 0;
    if (a.price > b.price) {
      comparison = 1;
    } else if (a.price < b.price) {
      comparison = -1;
    }
    return comparison;
  }

function compare_desc(a, b) {
    
    let comparison = 0;
    if (a.price > b.price) {
      comparison = 1;
    } else if (a.price < b.price) {
      comparison = -1;
    }
    return comparison * -1;
}

function sort_ascending() {
    search_results.sort(compare_asc)
    render_results(search_results)
   
}

function sort_descending() {
    search_results.sort(compare_desc)
    render_results(search_results)
}


// Function to filter based on price
function filter_search_price(price) {
    var filtered_list = []

    if (price == 0) {
        return render_results(search_results)
    }
    if (price == 999) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].price >= 200) {
                filtered_list.push(search_results[i])
            }
        }
    } else if (price == 200) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].price < 200 && search_results[i].price >= 100) {
                filtered_list.push(search_results[i])
            }
        }
    } else if (price == 100) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].price < 100 && search_results[i].price > 51) {
                filtered_list.push(search_results[i])
            }
        }
    } else if (price == 50) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].price <= 50) {
                filtered_list.push(search_results[i])
            }
        }
    } 
    render_results(filtered_list)
}

// Function to filter based on rating
function filter_search_rating(rating) {
    var filtered_list = []

    if (rating == 0) {
        return render_results(search_results)
    }
    if (rating == 5) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].rating == 5) {
                filtered_list.push(search_results[i])
            }
        }
    } else if (rating == 4) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].rating >= 4) {
                filtered_list.push(search_results[i])
            }
        }
    } else if (rating == 3) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].rating >= 3) {
                filtered_list.push(search_results[i])
            }
        }
    } else if (rating == 2) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].rating >= 2) {
                filtered_list.push(search_results[i])
            }
        }
    } else if (rating == 1) {
        for (var i = 0; i < search_results.length; i++) {
            if (search_results[i].rating >= 1) {
                filtered_list.push(search_results[i])
            }
        }
    } 
    render_results(filtered_list)
}