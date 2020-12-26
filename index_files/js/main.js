window.onload = function(){

 	var w1 = document.getElementById('temp');
 	w1.onmouseover = function(){
 		document.getElementById('w1').style.visibility="visible";
 	}

 	w1.onmouseout = function(){
 		document.getElementById('w1').style.visibility="hidden";
 	}

 	function fillTime(s){
		if(s<10){
			return "0"+s;
		}else{
			return s;
		}
	}

 	function timeDis() {
 		var sNow = new Date();
 		var iYear = sNow.getFullYear();
 		var iMoth = sNow.getMonth()+1;
 		var iDay = sNow.getDate();
 		var iHour = sNow.getHours();
 		var iMinute = sNow.getMinutes();
 		var iSeconds = sNow.getSeconds();

 		var sTime = iYear + "年" + iMoth + "月" + iDay + "日 " + fillTime(iHour) + "时" + fillTime(iMinute) + "分" + fillTime(iSeconds) + "秒";
 		document.getElementById("timeCon").innerHTML = sTime;
 	}

 	timeDis();
	setInterval(timeDis,1000);
	
 }

 function addCon(){

    var ut = document.getElementById("ut");
    

    var content = document.getElementById("addc").value;

    var beTag = document.getElementsByTagName("li");

    var newT = document.createElement("li");
    newT.innerHTML = content;
    newT.style.color = "orange";
    document.getElementById("addc").value = "";

    ut.insertBefore(newT,beTag[beTag.length]);
}

function delCon(){

        var num = document.getElementById("deleind").value;
        num = parseInt(num);

        var ut = document.getElementById("ut");
        var beTag = ut.getElementsByTagName("li");
        
        ut.removeChild(beTag[num]);
   }