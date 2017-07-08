var timer_time = (new Date).getTime() / 1000 + 20,
    is_timer_on = true;

var tick_timer = function () {
    if (!is_timer_on) return;

    var _secs_left = Math.round(timer_time - ((new Date).getTime() / 1000));
    console.log(_secs_left);
    if (String(_secs_left % 60).length == 1) {
        document.getElementById("t_sec").innerHTML = "0" + String(_secs_left % 60);
    } else {
        document.getElementById("t_sec").innerHTML = _secs_left % 60;
    }

    var _mins_left = Math.round(_secs_left / 60);
    console.log(_mins_left);
    if (String(_mins_left % 60).length == 1) {
        document.getElementById("t_min").innerHTML = "0" + String(_mins_left % 60);
    } else {
        document.getElementById("t_min").innerHTML = _mins_left % 60;
    }

    if (_secs_left <= 0) is_timer_on = false;
};

setInterval(tick_timer, 1000);

// SOCKETS

var socket = io();

socket.on("set_timer", function(msg) {
    var _time = Math.round((new Date).getTime() / 1000);
    _time_day_start = _time - _time % (60 * 60 * 24) - 3 * 3600;
    timer_time = _time_day_start + parseInt(msg.t_hour) * 60 * 60 + parseInt(msg.t_min) * 60;
    $("#t_event_name").text(msg.event_name);
    tick_timer();
    is_timer_on = true;
});
