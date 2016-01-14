
function GetVehicleNumbers()
{

	var mobileNumber = document.getElementById("mobileNumber").value;
	document.getElementById('state').disabled = true;
	$('#status').html('&nbsp;');
	var i;
	
	if(mobileNumber.length >= 10)
		{
		
		$('#status').html('<center><img src="images/loader.gif" width="2%" height="2%"></center>');
		$(document).ready(function(){
			 
			 
			 $.post( "cgi-bin/getVehicleNumbers.py", {mobileNumber : mobileNumber},function( data ) {
			   
				var innerhtml = "";
				
				$('#status').html('&nbsp;');

				 if(data.error != 1)
					 {
					 	for(i=0;i<data.length;i++)
						{
							innerhtml +='<option style="color:green">'+data[i].number+'</option>';
						}
				 		innerhtml +='<option style="color:red">Add New Number</option>';
				 		document.getElementById('state').disabled = false;
				 		
				 		$('#state').html(innerhtml);
					 }
				 else
					 {
					 
					 	$('#state').html('<option style="color:red">No Numbers</option>');
					 	document.getElementById('state').disabled = true;
					 	document.getElementById('registrationNumberPartOne').disabled = false;
						document.getElementById('registrationNumberPartTwo').disabled = false;
						document.getElementById('registrationNumberPartThree').disabled = false;
						document.getElementById('registrationNumberPartFour').disabled = false;

					 }
				 		
			   
			 
			 
			},"json");
		});

		}
	}



function Disable()
{
	if(document.getElementById('state').value == 'Add New Number')
		{
			document.getElementById('state').disabled = true;
			document.getElementById('registrationNumberPartOne').focus();
			document.getElementById('registrationNumberPartOne').disabled = false;
			document.getElementById('registrationNumberPartTwo').disabled = false;
			document.getElementById('registrationNumberPartThree').disabled = false;
			document.getElementById('registrationNumberPartFour').disabled = false;
		}
		
	else
		{
			document.getElementById('state').disabled = false;
			document.getElementById('state').focus();
			document.getElementById('registrationNumberPartOne').disabled = true;
			document.getElementById('registrationNumberPartTwo').disabled = true;
			document.getElementById('registrationNumberPartThree').disabled = true;
			document.getElementById('registrationNumberPartFour').disabled = true;
		
		}
	
	
}

	

function In()
{
	var mobileNumber = document.getElementById("mobileNumber").value;
	var registrationNumber = "";
	$('#status').html('<center><img src="images/loader.gif" width="10px" height="10px"></center>');
	
	if(mobileNumber == "")
		{
			document.getElementById("mobileNumber").focus();
			$('#status').html('<center><font color="red">Please enter Mobile number</font></center>');
			return;
		}
	if(mobileNumber.length < 10)
		{
			document.getElementById("mobileNumber").focus();
			$('#status').html('<center><font color="red">Please enter Correct Mobile number</font></center>');
			return;
		}
	if(document.getElementById('registrationNumberPartTwo').disabled == false)
	{
		
		$('#status').html('<center><font color="red">Please enter the required value</font></center>');
		if(document.getElementById('registrationNumberPartTwo').value == "")
			{
			document.getElementById('registrationNumberPartTwo').focus();
			return;
			}
		if(document.getElementById('registrationNumberPartThree').value == "")
			{
			document.getElementById('registrationNumberPartThree').focus();
			return;
			}

		if(document.getElementById('registrationNumberPartFour').value == "")
			{
			document.getElementById('registrationNumberPartFour').focus();
			return;
			}

	}
	
	
	if(document.getElementById("registrationNumberPartTwo").value == "" || document.getElementById("registrationNumberPartThree").value=="" || document.getElementById("registrationNumberPartFour").value == "")
	{
		registrationNumber = document.getElementById('state').value;

	}	
	else
	{
		registrationNumber = document.getElementById("registrationNumberPartOne").value;
		registrationNumber += document.getElementById("registrationNumberPartTwo").value;
		registrationNumber += document.getElementById("registrationNumberPartThree").value;
		registrationNumber += document.getElementById("registrationNumberPartFour").value;
	}
	
	
	
	
		
		$(document).ready(function(){
			 
			 
			 $.post( "cgi-bin/in.py", {mobileNumber : mobileNumber , registrationNumber : registrationNumber},function( data ) {
			   
				
				if(data.error != 1)
					{
						
						$('#status').html('<center><font color="green">Successfully Entered</font></center>');
						document.getElementById("mobileNumber").value = "";
						$('#state').html('<option style="color:red">No Numbers</option>');
					 	document.getElementById('state').disabled = true;
					 	document.getElementById('registrationNumberPartOne').disabled = true;
						document.getElementById('registrationNumberPartTwo').disabled = true;
						document.getElementById('registrationNumberPartThree').disabled = true;
						document.getElementById('registrationNumberPartFour').disabled = true;
					
					}
				  
				  		
			   
			 
			 
			},"json");
		});

		}




