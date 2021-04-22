function promptName() {
    let name = prompt("Lütfen İsminizi Giriniz?");
    document.getElementById("myName").innerHTML = name;
 }
 
 function localTime() {
   let date = new Date();
   let hour = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds(); 
   let weekday = new Array(7);

   weekday[0] = "Pazar";
   weekday[1] = "Pazartesi";
   weekday[2] = "Salı";
   weekday[3] = "Çarşamba";
   weekday[4] = "Perşembe";
   weekday[5] = "Cuma" ;
   weekday[6] = "Cumartesi";

   let realWeekday = weekday[date.getDay()];
 
   
 
   hour = hour < 10 ? "0" + hour: hour;
   min = min < 10 ? "0" + min : min;
   sec = sec < 10 ? "0" + sec : sec;
 
   var time = hour + ":" + min + ":" + sec + " " + realWeekday;
   document.getElementById("myClock").innerText = time;
   document.getElementById("myClock").textContent = time;
 
   setTimeout(localTime, 1000);
 }
 
 promptName();
 localTime();
 