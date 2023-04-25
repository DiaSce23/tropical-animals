const tabs = document.getElementsByClassName("tab")
const h1 = document.querySelector("h1")
// for (let i = 0; i < tabs.length; i++){
//     tabs[i].style.display = "none"
// }

tabs[0].style.display = "block"

function showTab(evt ,id) {
    for (let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none"
        // buttons[i].classList.remove("selected")
    }
    document.getElementById(id).style.display = "block"   
    
    evt.currentTarget.classList.add("selected")
    console.log(evt.currentTarget)
}