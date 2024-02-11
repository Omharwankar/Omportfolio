var tablinks = document.getElementsByClassName("active-links");
var tabcontents = document.getElementsByClassName("content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-content")
    
}   
function scrollToTop() {
    window.scrollTo(0, 0);
}
var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-400px";
}

function validation() { 
    const name = 
        document.myform.Name.value; 
    const email = 
        document.myform.email.value; 
    
    if (name === "" 
        || name.includes('0') || name.includes('1') 
        || name.includes('2') || name.includes('3') 
        || name.includes('4') || name.includes('5') 
        || name.includes('6') || name.includes('7') 
        || name.includes('8') || name.includes('9'))  
    { 
       window.alert
        ("Please enter your name properly.It should not include number"); 
         
        return false; 
    } 
  
  
   
  
  
 
  
  
}