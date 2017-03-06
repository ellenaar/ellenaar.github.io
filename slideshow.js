window.onload = function() {
    
var sisalto = null;
var current = 0;
var x = null;
var onplay = true;


function setCurrent() {
    if(localStorage.getItem("storage")===null || localStorage.getItem("storage")===undefined){
        
    }else{
        current = parseInt(localStorage.getItem("storage"));
    }
} 

setCurrent();


    
$.getJSON("https://aarinee1-84660.firebaseio.com/.json", function(data){
         
    sisalto = data;
    
    myFunction();
    
    pauseFunction();
    
    previous();
    
    next();
    
          });


    
function myFunction () {
    
    
    x = setInterval(function() { 
        $("#otsikko").hide().html(sisalto.uutiset[current].otsikko).fadeIn(1500); $("#paivamaara").hide().html(sisalto.uutiset[current].päivämäärä).fadeIn(1500); $("#sisalto").hide().html(sisalto.uutiset[current].sisältö).fadeIn(1500);
                         if(current<2){ 
                             current = (current + 1);
                         } else { 
                             current = 0;}
                           }, 3000);

    localStorage.setItem("storage", current);
   console.log("localStorage: " + parseInt(localStorage.getItem('storage')));

}
 
  
    
function pauseFunction(){
   
$( "#playpause" ).click(function() { 
               console.log("hihii" + onplay);

    if(onplay===true){
   
  clearInterval(x);
    onplay = false;
      document.getElementById("playpause").innerHTML = ("play");

}
     else {
        myFunction();
        onplay = true;
        document.getElementById("playpause").innerHTML = ("pause");
    }
    
    
});
    
     localStorage.setItem("storage", current);
   console.log("localStorage: " + parseInt(localStorage.getItem('storage')));
}
    
  
    
function previous(){
    
    $( "#prev" ).click(function() { 

        clearInterval(x);
        onplay = false;
        document.getElementById("playpause").innerHTML = ("play");
        
         console.log(current);
   
      if(current === 0){
          
          console.log(current);
          
         current = 2;
         
          console.log(current);                       
      
        
      }  else {
          
          current = current - 1;
       
      }
            $("#otsikko").hide().html(sisalto.uutiset[current].otsikko).fadeIn(1500); $("#paivamaara").hide().html(sisalto.uutiset[current].päivämäärä).fadeIn(1500);$("#sisalto").hide().html(sisalto.uutiset[current].sisältö).fadeIn(1500);
    });
    
  
    
     localStorage.setItem("storage", current);
   console.log("localStorage: " + parseInt(localStorage.getItem('storage')));
}
  
function next(){
    
    $( "#next" ).click(function(){
      
    clearInterval(x);
    onplay = false;
    document.getElementById("playpause").innerHTML = ("play");

        
         console.log(onplay);
   
      if(current == 2){
          current = 0;
      } else{
          current = current + 1;
      }
         
            $("#otsikko").hide().html(sisalto.uutiset[current].otsikko).fadeIn(1500); $("#paivamaara").hide().html(sisalto.uutiset[current].päivämäärä).fadeIn(1500);$("#sisalto").hide().html(sisalto.uutiset[current].sisältö).fadeIn(1500);
    });  
     localStorage.setItem("storage", current);
   console.log("localStorage: " + parseInt(localStorage.getItem('storage')));
}
    

    
    
};