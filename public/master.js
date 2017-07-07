// SOCKETS

var socket = io();

var SetTimer = function () {
    var data = {
        time: $("#time").val(),
        event_name: $("#event").val()
    };
    socket.emit("set_timer", data);
}
