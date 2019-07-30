function search()
{

  
  var element = document.querySelector(".results");
  element.parentNode.removeChild(element);

  blockDiv = document.createElement("div");
  blockDiv.className = "results";
  document.querySelector("body").append(blockDiv);

  var country = document.querySelector("#cname").value;
  
  //to fetch the data respective to the input from the API request
  
  fetch("https://restcountries.eu/rest/v2/name/" + country).then((res)=>{
    res.json().then((data)=>{
      console.log(data);

      var container = document.querySelector(".results");
      for(var i = 0; i < data.length ; i++) {
		
		//to generate the div elements for all the data fetched.
		
        blockDiv = document.createElement("div");
        blockDiv.className = "block";
        blockDiv.setAttribute("onclick" , "getDetail(this)");
        textSpan = document.createElement("span");
        textSpan.className = data[i].name;
        flag = document.createElement("img");
        flag.className = "flagimg";
        flag.setAttribute("src" , data[i].flag);
        textSpan.append(data[i].name); 
        blockDiv.append(textSpan);
        blockDiv.append(flag);
        container.append(blockDiv);
      }


    })
  })

}

function getDetail(ele)
{

  var blk = ele.querySelector("span");
  var fname = blk.className;
  location.href = "UI_page2.html?fname=" + fname;

  

}