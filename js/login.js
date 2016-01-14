function login()
{
	var mobileNumber = document.getElementById("mobileNumber").value;
	var password = document.getElementById("password").value;
	var mallName = document.getElementById("mall").value;
	$('#status').html('<center><img src="images/loader.gif" width="2%" height="2%"></center>');
	$(document).ready(function(data){
		
		$.post('cgi-bin/login.py',{mobileNumber : mobileNumber , password : password , mallName : mallName},function(data){
			
			if(data.error == 1)
				{
				 $('#status').html('<center><font color="red">Please enter correct details</font></center>');
				}
			else if(data.role == 'in')
				{
					window.open('in.html','_self');
				}
			else if(data.role == 'out')
				{
					window.open('out.html','_self');
				}
			else
				{
				window.open('manager.html','_self');
				}
			
		},'json');
	});
}