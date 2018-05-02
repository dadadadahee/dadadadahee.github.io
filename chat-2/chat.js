var closed_block = document.getElementById('closed_block');
      var wrapper = document.getElementById('wrapper');

      var d = new Date();
      var hours = d.getHours();

      if (hours >= 0 && hours <= 4) {
        wrapper.style.display = 'none';
        closed_block.style.display = 'block';
      }

// CHAT ENGINE

var instanse = false;
var state;
var mes;
var file;

function Chat () {
    this.update = updateChat;
    this.send = sendChat;
	this.getState = getStateOfChat;
}

//gets the state of the chat
function getStateOfChat(){
	if(!instanse){
		 instanse = true;
		 $.ajax({
			   type: "POST",
			   url: "process.php",
			   data: {  
			   			'function': 'getState',
						'file': file
						},
			   dataType: "json",
			
			   success: function(data){
				   state = data.state;
				   instanse = false;
			   },
			});
	}	 
}

//Updates the chat
function updateChat(){
	 if(!instanse){
		 instanse = true;
	     $.ajax({
			   type: "POST",
			   url: "process.php",
			   data: {  
			   			'function': 'update',
						'state': state,
						'file': file
						},
			   dataType: "json",
			   success: function(data){
				   if(data.text){
						for (var i = 0; i < data.text.length; i++) {
                            $('#chat-area').append($("<p>"+ data.text[i] +"</p>"));
                        }								  
				   }
				   document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
				   instanse = false;
				   state = data.state;
			   },
			});
	 }
	 else {
		 setTimeout(updateChat, 1500);
	 }
}

//send the message
function sendChat(message, nickname)
{       
    updateChat();
     $.ajax({
		   type: "POST",
		   url: "process.php",
		   data: {  
		   			'function': 'send',
					'message': message,
					'nickname': nickname,
					'file': file
				 },
		   dataType: "json",
		   success: function(data){
			   updateChat();
		   },
		});
}



//button click to chatbox FUNCTION

function inputFunction() {
    document.getElementById("sendie").value = document.getElementById("field1").value;
}
function inputFunction2() {
    document.getElementById("sendie").value = document.getElementById("field2").value;
}
function inputFunction3() {
    document.getElementById("sendie").value = document.getElementById("field3").value;
}
function inputFunction4() {
    document.getElementById("sendie").value = document.getElementById("field4").value;
}
function inputFunction5() {
    document.getElementById("sendie").value = document.getElementById("field5").value;
}
function inputFunction6() {
    document.getElementById("sendie").value = document.getElementById("field6").value;
}
function inputFunction7() {
    document.getElementById("sendie").value = document.getElementById("field7").value;
}
function inputFunction8() {
    document.getElementById("sendie").value = document.getElementById("field8").value;
}
function inputFunction9() {
    document.getElementById("sendie").value = document.getElementById("field9").value;
}
function inputFunction10() {
    document.getElementById("sendie").value = document.getElementById("field10").value;
}
function inputFunction11() {
    document.getElementById("sendie").value = document.getElementById("field11").value;
}
function inputFunction12() {
    document.getElementById("sendie").value = document.getElementById("field12").value;
}
function inputFunction13() {
    document.getElementById("sendie").value = document.getElementById("field13").value;
}
function inputFunction14() {
    document.getElementById("sendie").value = document.getElementById("field14").value;
}
function inputFunction15() {
    document.getElementById("sendie").value = document.getElementById("field15").value;
}
function inputFunction16() {
    document.getElementById("sendie").value = document.getElementById("field16").value;
}
function inputFunction17() {
    document.getElementById("sendie").value = document.getElementById("field17").value;
}
function inputFunction18() {
    document.getElementById("sendie").value = document.getElementById("field18").value;
}
function inputFunction19() {
    document.getElementById("sendie").value = document.getElementById("field19").value;
}
function inputFunction20() {
    document.getElementById("sendie").value = document.getElementById("field20").value;
}
function inputFunction21() {
    document.getElementById("sendie").value = document.getElementById("field21").value;
}
function inputFunction22() {
    document.getElementById("sendie").value = document.getElementById("field22").value;
}
function inputFunction23() {
    document.getElementById("sendie").value = document.getElementById("field23").value;
}


//FUNCTION FOR TIME

function getSeconds() {
var now = new Date();
var time = now.getTime();  // time now in milliseconds
var midnight = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0); // midnight 0000 hrs
// midnight - change time hh,mm,ss to whatever time required, e.g. 7,50,0 (0750)
var ft = midnight.getTime() + 86400000;  // add one day
var diff = ft - time;  
diff = parseInt(diff/1000);
if (diff > 86400) {diff = diff - 86400}
startTimer (diff);
}


var timeInSecs;
var ticker;

function startTimer(secs){
	timeInSecs = parseInt(secs);
	ticker = setInterval("tick()",1000); 
	tick(); // to start counter display right away
}

function tick() {
	var secs = timeInSecs;
		if (secs>0) {
		timeInSecs--;
}
else {
	clearInterval(ticker); // stop counting at zero
	//getSeconds();  // and start again if required
}

var hours= Math.floor(secs/3600);
secs %= 3600;
var mins = Math.floor(secs/60);
secs %= 60;
var result = ((hours < 10 ) ? "0" : "" ) + hours + " hours " + ( (mins < 10) ? "0" : "" ) + mins
                  + " minutes " + ( (secs < 10) ? "0" : "" ) + secs + " seconds";
document.getElementById("countdown").innerHTML = " It's a new dawn It's a new day It's a new life and a new convo in " + result;
}


jQuery(document).ready(function() {    
    setInterval('chat.update()', 1000);
    getSeconds();
    setInterval('getCurrentTime()', 1000);
	

});



//UPDATE HOMEPAGE AT MIDNIGHT
function getCurrentTime()
{
	var myDate = new Date();
	var mySecs = myDate.getSeconds();
	var curHour = myDate.getHours();
	var curMin = myDate.getMinutes();
	var suffix = "AM";

	if(mySecs < 10)
		mySecs = "0" + mySecs;

	if(curMin < 10)
		curMin = "0" + curMin;

	if(curHour == 12 && curMin >= 1)
	{
		suffix = "PM";
	}
	if(curHour == 24 && curMin >= 1)
	{
		curHour-= 12;
		suffix = "AM";
	}
	if(curHour > 12)
	{
		curHour-= 12;
		suffix = "PM";
	}

	var time = curHour + ":" + curMin + ":" + mySecs + " " + suffix;
	document.getElementById('time').innerHTML=(time);

		if(time == "12:00:00 AM") //Change this to whatever time you want
			location.reload();
}
