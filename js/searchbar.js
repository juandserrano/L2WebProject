

var ol = document.getElementById("products");
event.preventDefault();


function searchArrResult(filter)
{
	var term = [];
	for(var i = 0; i < products.length; i++)
	{
		if(products[i].name.toLowerCase().includes(filter) === true)
		{
			term.push(products[i].name);
		}
	}
	
	return term;
}



//===============================================

function create_select_option()
{


	var input = document.getElementsByClassName("search_bar")[0];
	var filter = document.getElementsByClassName("search_bar")[0].value.toString().toLowerCase();
	var li_search = ol.childNodes;

	


	 if(filter === "")
 {
	 document.getElementById("products").style.display = "none";
 }


else
{
	
	while (ol.hasChildNodes()) 
	{  
  		ol.removeChild(ol.firstChild);
	}


	document.getElementById("products").style.display = "block";
        var result = searchArrResult(filter);
	
	for(var i =0; i < result.length;i++)
	{
	         var li = document.createElement("li"); //create select element
		 var a = document.createElement("a");

                 a.href = "search_results.html?search=" + result[i];
	

		 a.appendChild(document.createTextNode(result[i]));
    		 li.appendChild(a);
		 ol.appendChild(li);
	}
		 ol.style.listStyleType="circle";

}
}