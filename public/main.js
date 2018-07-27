var timer_time = moment(),
    is_timer_on = true;

console.log(window.location);

var tick_timer = function() {
    if (!is_timer_on) return;

    document.getElementById("t_sec").innerHTML = timer_time.format("ss");
    document.getElementById("t_min").innerHTML = timer_time.format("mm");
    //console.log(_mins_left);
    if (String(_mins_left % 60).length == 1) {
            "0" + String(_mins_left % 60);
    } else {
        document.getElementById("t_min").innerHTML = _mins_left % 60;
    }

    if (_secs_left <= 0) is_timer_on = false;
};

setInterval(tick_timer, 500);

// SOCKETS

var socket = io();

socket.on("set_timer", function(msg) {
    timer_time = moment()
        _time_day_start +
        parseInt(msg.t_hour) * 60 * 60 +
        parseInt(msg.t_min) * 60;
    $("#t_event_name").text(msg.event_name);
    tick_timer();
    is_timer_on = true;
});

socket.on("set_presenter", function(msg) {
    console.log(msg);
    $("#p_name").text(msg.p_name);
    $("#p_title").text(msg.p_title);
});

socket.on("update_mode", function(msg) {
    if (msg == "_mode_timer") {
        $("#top_cnt,#logo_cnt").addClass("_smalled");
        $("#timer_cnt,#top_cnt,#background_container,#logo_cnt,#bridge_cnt").removeClass(
            "_hidden"
        );
        $("#presenter_cnt").addClass("_hidden");
    } else if (msg == "_mode_presenter") {
        $("#presenter_cnt").removeClass("_hidden");
        $("#top_cnt,#logo_cnt").removeClass("_smalled");
        $("#timer_cnt,#background_container,#top_cnt,#logo_cnt,#bridge_cnt").addClass(
            "_hidden"
        );
    } else if (msg == "_mode_hide_all") {
        $("#top_cnt,#logo_cnt").removeClass("_smalled");
        $(
            "#timer_cnt,#presenter_cnt,#top_cnt,#logo_cnt,#background_container,#bridge_cnt"
        ).addClass("_hidden");
    } else {
        $("#top_cnt,#logo_cnt").removeClass("_smalled");
        $("#top_cnt,#logo_cnt,#background_container,#bridge_cnt").removeClass("_hidden");
        $("#timer_cnt,#presenter_cnt").addClass("_hidden");
    }
});
