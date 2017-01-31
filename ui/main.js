console.log('Loaded!');
function Login() {
   var loggedInUser=document.getElementById("user_login").value;
   //document.getElementById("user_Name").innerHTML=loggedInUser;
   window.location="/ui/UserProfile.html" + loggedInUser ;
   
   //alert(loggedInUser);
}

function LoadUserProfile(){
	
	var loggedInUserId=getQueryStringValue("Id");
	
	/*Login Id:-
	Prakash-123;
	Kundan:-124;
	
	*/
	
	
	if(loggedInUserId==="123"){
		document.getElementById("user_Name").innerHTML="Prakash";
		document.getElementById("user_Age").innerHTML="21";
		document.getElementById("user_Gen").innerHTML="Male";
		document.getElementById("user_Dob").innerHTML="19/09/1995";
		document.getElementById("user_Address").innerHTML="#31;R.R.Nagar";
		document.getElementById("user_Mob").innerHTML="7760194506";
		document.getElementById("user_Email").innerHTML="p.tiw191@gmail.com";
		document.getElementById("user_Date").innerHTML=new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
		document.getElementById("user_Time").innerHTML=new Date().getHours() + "-" + new Date().getMinutes()+ "-" + new Date().getSeconds();
		
		document.getElementById("user_Weight").innerHTML="170cm";
		document.getElementById("user_Height").innerHTML="70kg";
		//document.getElementById("user_Age").innerHTML="24";
	}
}

function getQueryStringValue (key) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

function GetMedicalReport(){
	window.location="https://thingspeak.com/apps/plugins/122389";
}
