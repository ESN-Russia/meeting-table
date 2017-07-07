var timer_time = (new Date).getTime() / 1000 + 20,
    is_timer_on = true;

var tick_timer = function () {
    if (!is_timer_on) return;

    var _secs_left = Math.round(timer_time - ((new Date).getTime() / 1000));
    if (String(_secs_left % 60).length == 1) {
        document.getElementById("t_sec").innerHTML = "0" + String(_secs_left % 60);
    } else {
        document.getElementById("t_sec").innerHTML = _secs_left % 60;
    }

    var _mins_left = parseInt(_secs_left / 60);
    if (String(_mins_left % 60).length == 1) {
        document.getElementById("t_min").innerHTML = "0" + String(_mins_left % 60);
    } else {
        document.getElementById("t_min")._mins_left = minutes_left % 60;
    }

    if (_secs_left <= 0) is_timer_on = false;
};

setInterval(tick_timer, 1000);
