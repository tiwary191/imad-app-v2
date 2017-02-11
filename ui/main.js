//console.log('Loaded!');
var button = document.getElementById('counter');

button.onclick= function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
    // process the server response
    if (request.readyState === XMLHttpRequest.DONE) {
        if(request.status==200){
          var counter=request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();
            
            
        }
    // everything is good, the response is received
} else {
    // still not ready
}
};
    
  request.open('GET','http://tiwary191.imad.hasura-app.io/counter',true);
  request.send(null);
  
    
};
var nameInput =document.getElementById("name");
var name= nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    
     var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
    // process the server response
    if (request.readyState === XMLHttpRequest.DONE) {
        if(request.status==200){
          var names=request.responseText;
          names=JSON.parse(names);
var list='';
for(var i=0;i<names.length;i++){
    
    list+='<li>'+ names[i]+'</li>';
    
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;
            
        }
    // everything is good, the response is received
} else {
    // still not ready
}
};
    var nameInput =document.getElementById("name");
    var name= nameInput.value;
        
  request.open('GET','http://tiwary191.imad.hasura-app.io/submit-name?name='+name,true);
  request.send(null);
    
    


    


    
}

