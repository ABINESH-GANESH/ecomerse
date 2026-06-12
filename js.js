var bar=document.getElementById("bars")
var sidenavbar=document.getElementById("sidenavbar")
var xmark=document.getElementById("xmark")
bar.addEventListener("click",function()
{
 sidenavbar.style.left="0%"
}
)

xmark.addEventListener("click",function()
{
 sidenavbar.style.left="-45%"
}
)


var search=document.getElementById("usersearch-1")
var product=document.getElementById("img")
var container=product.querySelectorAll("div")
var para
var enteredvalue


search.addEventListener("keyup",function(event)
{
     enteredvalue=event.target.value.toUpperCase()
    
    for(var count=0;count < container.length;count=count+1) {
      para=container[count].querySelector("p").textContent
        if(para.toUpperCase().indexOf(enteredvalue)<0)
        {
            container[count].style.display="none"
        }
        else{
             container[count].style.display="block"
        }
    }
})
