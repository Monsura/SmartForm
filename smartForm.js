// Your jQuery goes here

var userData = {
  name:'',
  email:'',
  html:{likes:[], dislikes:[]},
  css:{likes:[], dislikes:[]},
  js:{likes:[], dislikes:[]},
  strength: {css:'', js:'', html:''},
  currentQuestion: '#welcome'
};
if(localStorage.getItem('userData')){
  userData=JSON.parse(localStorage.getItem('userData'));
   $("#welcome").hide();
    $(userData.currentQuestion).show();
   $('#name').val(userData.name);
   $('#email').val(userData.email);
}else{
  localStorage.setItem('userData',JSON.stringify(userData));
}


$("#start").click(function(){
  $("#welcome").hide();
  $("#q1").show();
  userData.currentQuestion ="#q1";
  localStorage.setItem('userData',JSON.stringify(userData));
});

$("#name").change(function(event){
  //console.log(event);
  console.log($("#name").val());
});
$("#q1next").click(function(){
  if($('#name').val() && $('#email').val()){
    userData.name = $('#name').val();
    userData.email = $('#email').val();
    console.log(userData);
    localStorage.setItem('userData',JSON.stringify(userData));
    $("#q2").show();
    $("#q1").hide();
  }else {
    alert("Please enter name and email");
  }
});

  
$("#htmlq2").click(function(event){
  //$("#q2").hide();
  //Shows htmlQ
  $("#q2a").show();
  $("#q2b").hide();
  $("#q2c").hide();
  
  }); 
$
("#lhtml1").click(function(event){
    userData.html.likes[0] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  });





  $("#cssq2").click(function(event){
  //$("#q2").hide();
  //Shows htmlQ
  $("#q2a").show();
  $("#q2b").hide();
  $("#q2c").hide();
  
  }); 

  $("#jsq2").click(function(event){
  //$("#q2").hide();
  //Shows htmlQ
  $("#q2a").show();
  $("#q2b").hide();
  $("#q2c").hide();
  
  });  


  $("#hprev").click(function(event){
  $("#q1").show();
  $("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
});

 $("#hnex").click(function(event){
  $("#q3").show();
  $("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
});
 
 $("#cprev").click(function(event){
  $("#q1").show();
  $("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
});

 $("#cnex").click(function(event){
  $("#q3").show();
  $("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
});  

 $("#jprev").click(function(event){
  $("#q1").show();
  $("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
});

 $("#jnex").click(function(event){
  $("#q3").show();
  $("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
});

 $("#q3prev").click(function(event){
  $("#q2").show();
  $("#q3").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
  
  }); 
  
$("#q3next").click(function(event){
  $("#thanks").show();
  $("#q3").hide();
  
  
  }); 


  
  








