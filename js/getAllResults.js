$(document).ready(function(){
			 
			 
			 $.post( "cgi-bin/getAllResults.py", function( data ) {
			     
				var innerhtml = "";
				var i;
				 $('#tableResults').html();
				 for(i=0;i<data.length;i++)
					 {
					 
					 	innerhtml +='<tr><td>'+data[i].id+'</td><td>'+data[i].ticketId+'</td><td>'+data[i].phoneNumber+'</td><td>'+data[i].registrationNumber+'</td><td>'+data[i].inTime+'</td><td>'+data[i].outTime+'</td>';
					 }
				
				 $('#tableResults').html(innerhtml);
				 		
			   
			 
			 
			},"json");
		});