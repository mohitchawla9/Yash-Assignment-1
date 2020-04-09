function digitalClock(){
    var date = new Date();
    var hour = date.getHours(); 
    var minute = date.getMinutes(); 
    var second = date.getSeconds();
    var session = "AM";
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
    var time = hour + ":" + minute + ":" + second + " " + session;
    console.log('(' + time + ')');
}
digitalClock();
