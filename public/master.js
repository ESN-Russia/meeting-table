// SOCKETS

var socket = io();

var SetTimer = function () {
    var data = {
        t_hour: $("#t_hour").val(),
        t_min: $("#t_min").val(),
        event_name: $("#t_event").val()
    };
    socket.emit("set_timer", data);
}
