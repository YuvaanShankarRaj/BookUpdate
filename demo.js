
var popupoverlap=document.querySelector(".popup-overlap")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("addpopup")
addpopupbutton.addEventListener("click",function(){
    popupoverlap.style.display="block"
    popupbox.style.display="block"
})
var cancel=document.getElementById("cancelpop")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlap.style.display="none"
    popupbox.style.display="none"

})
var cont=document.querySelector(".cont")
var addbookg =document.getElementById("add-book")
var booktitle = document.getElementById("book-title")
var auth=document.getElementById("bookauthori")
var area=document.getElementById("bookarea") 

addbookg.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${auth.value}</h5>
            <p>${area.value}</p>
            <button onclick="delee(event)">Delete</button>`

    cont.append(div)
    popupoverlap.style.display="none"
    popupbox.style.display="none"
})
function delee(event){
    event.target.parentElement.remove()
}