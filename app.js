function empty(){
 document.getElementById('fname').value="";
document.getElementById('lname').value="";
document.getElementById('uemail').value="";
document.getElementById('upass').value="";
document.getElementById('uage').value="";
}
///////////////////////////////////////  SignUP  ///////////////////////////
function MySignUp(){
var userFirstName=document.getElementById('fname').value;
var userLastName=document.getElementById('lname').value;
var userName=userFirstName+" "+userLastName;
var userEmail=document.getElementById('uemail').value;
var userPass=document.getElementById('upass').value;
var userAge=document.getElementById('uage').value;
var gender = document.getElementsByName('gender'); //start radio button
var male=gender[0].checked;
if(male==true){
gender_value="Male"
}
else{
    gender_value="Female";
}                                              //End Radio button
var user={
uName: userName,
uPass: userPass,
uEmail:userEmail,
userAge:userAge,
userGender:gender_value,
uPersonalInfoData:PersonalInfoData=["","","","","",""],
uQualificationData:QualificationData=["","","","",""],
uCertificationData:CertificationData=["","","",""],
userSkills:userSkills="",
userPortfolio:userPortfolio=""
// userProfilePic:userProfilePic=""
};
// localStorage.removeItem('userNumber');
if(userFirstName===""||userLastName===""||userPass===""||userEmail===""||userAge===""){
alert("Please Enter All Information Those Are Required");
}
else{
    var check;
var getUser=localStorage.getItem('users');
    if(getUser===null){
    var allUser=[];
    allUser=[user];
    localStorage.setItem('users',JSON.stringify(allUser));
    empty();
    }
    else{
            getUser=JSON.parse(getUser);
    for (i=0; i < getUser.length; i++) {
 if(userEmail==getUser[i].uEmail){      //CheckEmail
        check=false;
        alert(userEmail+" is exist!!! please enter another email");
        break;
}
    else{
        check=true;
    }}
if(check===true){
    var UsersArry=[];
    for (i=0; i < getUser.length; i++) {
    UsersArry[i]=getUser[i];
}  
UsersArry[i]=user;
localStorage.setItem('users',JSON.stringify(UsersArry));
empty();
}}}}
////////////////////////////////   SignIn   /////////////////////////////////////////
function MySignIn(){
 var userEmail=document.getElementById('uemail1').value;
var userPass=document.getElementById('upass1').value;
if(userEmail==""||userPass==""){
alert("Please Enter Email & Password");
}
else{
    var check1=false;
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
    for ( k=0; k < getUser.length; k++) {
    if((userEmail==getUser[k].uEmail)&&(userPass==getUser[k].uPass)){
      check1=true;
      break;
}}
if(check1==true){
    // localStorage.setItem("userNumber",k);
  window.location = "startQuiz.html";
}
else{
   alert("Wrong Email And Password");
}
}}