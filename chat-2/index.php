<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet">

    <title>converse with me</title>
    
    <link rel="stylesheet" href="style.css" type="text/css">
    
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="chat.js"></script>
    <script type="text/javascript">
    
        // ask user for name with popup prompt    
        var name = prompt("what's your name?", "Guest");
        
        // default name is 'Guest'
        if (!name || name === ' ') {
           name = "Guest";  
        }
        
        // strip tags
        name = name.replace(/(<([^>]+)>)/ig,"");
        
        // display name on page
        $("#name-area").html("You are: <span>" + name + "</span>");
        
        // kick off chat
        var chat =  new Chat();
        $(function() {
        
             chat.getState(); 
             
             // watch textarea for key presses
             $("#sendie").keydown(function(event) {  
             
                 var key = event.which;  
           
                 //all keys including return.  
                 if (key >= 33) {
                   
                     var maxLength = $(this).attr("maxlength");  
                     var length = this.value.length;  
                     
                     // don't allow new content if length is maxed out
                     if (length >= maxLength) {  
                         event.preventDefault();  
                     }  
                  }  
                                                                                                                                                                                                            });
             // watch textarea for release of key press
             $('#sendie').keyup(function(e) {   
                                 
                  if (e.keyCode == 13) { 
                  
                    var text = $(this).val();
                    var maxLength = $(this).attr("maxlength");  
                    var length = text.length; 
                     
                    // send 
                    if (length <= maxLength + 1) { 
                     
                        chat.send(text, name);  
                        $(this).val("");
                        
                    } else {
                    
                        $(this).val(text.substring(0, maxLength));
                        
                    }   
                    
                    
                  }
             });
            
        });
    </script>

</head>
<body>
    <div id='closed_block'>
        <span id="countdown"></span>
    </div>
	<div id='wrapper'>

		<div class="typewriter">
	    	<h1>converse with me.</h1>
		</div>

    	<div class="menu">
            <a href="#" alt="">CHAT</a>
            <a href="./inspo.html" alt="">INSPO</a>
            <a href="#" alt="">ARCHIVE</a>
        </div>

	    <div id="page-wrap">
	    	<p id="name-area"></p>
	    	<div id="chat-wrap">
	        	<div id="chat-area"></div>
	        	<form id="send-message-area">
	            	<textarea id="sendie" maxlength = '1000' style="margin: 0px; width: 242px; height: 35px;"></textarea>
	        	</form>
	    	</div>
	    </div>

		<div class="buttonz">
			<button onclick="inputFunction()"><input type="submit" id="field1" value="hi"></button>
			<button onclick="inputFunction2()"><input type="submit" id="field2" value="get past the past"></button>
			<button onclick="inputFunction3()"><input type="submit" id="field3" value="live in love not in fear"></button>
			<button onclick="inputFunction4()"><input type="submit" id="field4" value="the world is our office"></button>
			<button onclick="inputFunction5()"><input type="submit" id="field5" value="the beauty is in the imperfection(s)"></button>
			<button onclick="inputFunction6()"><input type="submit" id="field6" value="it's not where you take things from.  It's where you take them to"></button>
			<button onclick="inputFunction7()"><input type="submit" id="field7" value="don't trade your authenticity for approval"></button>
			<button onclick="inputFunction8()"><input type="submit" id="field8" value="everything you do in life stems from either fear or love"></button>
			<button onclick="inputFunction9()"><input type="submit" id="field9" value="Be here now. Be in the moment."></button>
			<button onclick="inputFunction10()"><input type="submit" id="field10" value="Is time linear?"></button>
			<button onclick="inputFunction11()"><input type="submit" id="field11" value="stay away"></button>
			<button onclick="inputFunction12()"><input type="submit" id="field12" value="I should be leaving, you've given me millions of reasons"></sbutton>
			<button onclick="inputFunction13()"><input type="submit" id="field13" value="how can I make sense when I got millions on my mind"></button>
			<button onclick="inputFunction14()"><input type="submit" id="field14" value="Yes, I'm a mess but I'm blessed to be stuck with you"></button>
			<button onclick="inputFunction15()"><input type="submit" id="field15" value="whoa"></button>
			<button onclick="inputFunction16()"><input type="submit" id="field16" value="I'm coming back home to you"></button>
			<button onclick="inputFunction17()"><input type="submit" id="field17" value="But I'll wait for you"></button>
			<button onclick="inputFunction18()"><input type="submit" id="field18" value="I'm lonely"></button>
			<button onclick="inputFunction19()"><input type="submit" id="field19" value="fuck that"></button>
			<button onclick="inputFunction20()"><input type="submit" id="field20" value="I'm reaching Nirvana"></button>
			<button onclick="inputFunction21()"><input type="submit" id="field21" value="You don't even know me"></button>
			<button onclick="inputFunction22()"><input type="submit" id="field22" value="I just wanna see how beautiful you are"></button>
			<button onclick="inputFunction23()"><input type="submit" id="field23" value="bye"></button>
		</div>

	</div>

</body>

</html>