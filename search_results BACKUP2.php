<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/search_results.css">
    <title>AwesomeStuff</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet">

</head>
<body>

  
  <header>
    <div class="navbar-container">
      <nav>
        <ul>
          <li><a href="index.html">HOME</a></li>
          <li><a href="category.html">CATEGORIES</a></li>
          <li><a href="#">LOGIN</a></li>
          <li><a href="#">JOIN</a></li>
          <li><a href="#">CART</a></li>
          <li><form action="search_results.php"><input class="search_bar" name="search" type="text" placeholder="Search..." onkeyup="create_select_option();"><br>
            <ol id="products" style="display:none"></ol>
            </form></li>
        </ul>
      </nav>
    </div>
  </header>
      <div class="main-content">
        <div class="hero-container">
          <img class="hero-image" src="image/logo_image.jpg" alt="AwesomeStuff">
          <div class="hero-text">
            <h1>Awesome<span>Stuff</span></h1>
          </div>
        </div>
        <div class="categories-container">
          <a href="clothes.html">Clothes</a>
          <a href="shoes.html">Shoes</a>
          <a href="cosmetic.html">Cosmetics</a>
          <a href="accessory.html">Accessories</a>
        </div>

        <div class="search-filters">
          <form class='search-filter-form'>
            <label for="sort">Sort price:</label>
            <select id="sort" name="sort">
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            <label for="price-filter">Price:</label>
            <select id="price-filter" name="price-filter">
              <option value="all">All</option>
              <option value="less50"><= 50CAD</option>
              <option value="50to100">50 - 99 CAD</option>
              <option value="100to200">100 - 199 CAD</option>
              <option value="more200">> 200 CAD</option>
            </select>
            <label for="rating-filter">Rating:</label>
            <select id="rating-filter" name="rating-filter">
              <option value="all">All</option>
              <option value="one">at least 1 star</option>
              <option value="two">at least 2 stars</option>
              <option value="three">at least 3 stars</option>
              <option value="four">at least 4 stars</option>
              <option value="five">5 stars</option>
            </select>
          </form>
        </div>
      <div class="search_list">
        <?php require 'connect.php';
          
          $query = $_GET["search"];
          $sql = "SELECT * FROM products_t WHERE name LIKE '%$query%'";
          $result = $conn->query($sql);
          while($row = $result->fetch_assoc()) {
            $calculated_price = $row["PRICE"];
            echo '
            <div class="paper">
              <div class="product-image">
                <img src="'.$row["IMGURL"].'">
                <img src="'.$row["HOVERIMGURL"].'" class="hover-img"">
              </div>
              <div class="product-details">
                <h2 class="result-titel">'.$row["NAME"].'</h2>
                <div class="description">'.$row["DESCRIPTION"].'</div>
                <div class="price">Price: $'.$calculated_price.' CAD</div>
                <div class="quantity"><span class="quantity-text">Quantity: </span><input id="qselector" class="quantity-selector" type="number" value="1" min="1"></div>
                <button class="add-to-cart" type="button">Add to Cart</button>
                <div class="rating">
                ';
                if ($row["RATING"] == 1) {
                  echo '&#10022;&#10023;&#10023;&#10023;&#10023;';
                } elseif ($row["RATING"] == 2) {
                  echo '&#10022;&#10022;&#10023;&#10023;&#10023;';
                } elseif ($row["RATING"] == 3) {
                  echo '&#10022;&#10022;&#10022;&#10023;&#10023;';
                } elseif ($row["RATING"] == 4) {
                  echo '&#10022;&#10022;&#10022;&#10022;&#10023;';
                } else {
                  echo '&#10022;&#10022;&#10022;&#10022;&#10022;';
                }
                echo '
                </div>
                </div>
            </div>
            ';
          }
        ?>
      </div>
        <script type="text/javascript" src="./js/searchbar.js"></script>
        <script>
          var qinputs = document.querySelectorAll(".quantity-selector")
          for (var i = 0; i < qinputs.length; i++){
            qinputs[i].addEventListener('change', event => {
             
            })
            
          }
          </script>
        
</body>
</html>
