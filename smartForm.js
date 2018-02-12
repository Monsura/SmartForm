// Your jQuery goes here

var userData = {
	name: '',
	email: ''
};

$('#start').click(function(){
	console.log("start");
	$('#welcome').hide();
	$('#q1').show();
});

$('#name').change(function(event)
{
	console.log(event);
	console.log($('name').val());
});

$('#q1next').click(function(){
	if($('#name').val() && $('email').val()){
	userData.name = $('#name').val();
	userData.email = $('#email').val();
	$('#q2').hide();
	$('#q1').show();
	}
	else{
		console.log('please enter name & email');
	}

	});