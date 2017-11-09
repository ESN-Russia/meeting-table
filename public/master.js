// SOCKETS

var socket = io();

var SetTimer = function () {
    var data = {
        t_hour: $("#t_hour").val(),
        t_min: $("#t_min").val(),
        event_name: $("#t_event").val()
    };
    socket.emit("set_timer", data);
};

var AddQuestion = function() {
    $("#q_list").append("<li contenteditable=true>Asker</li>");
};

var UpdatePresenter = function() {
    socket.emit("set_presenter", {p_name: $("#p_name").val(), p_title: $("#p_title").val()});
}

$(document).ready(function() {
    $("input[name=mode]").on("change", function() {
        console.log(this.id);
        socket.emit("update_mode", this.id);
    });
});

socket.on('sync_active_displays', function(msg) {
    $('#display-count').text(msg);
});

socket.on("set_timer", function(msg) {
    console.log(msg);
    $("#t_hour").val(msg.t_hour);
    $("#t_min").val(msg.t_min);
    $("#t_event").val(msg.event_name);
});

socket.on("update_mode", function(msg) {
    $(".mode_label").removeClass('active');
    $("#" + msg).prop('checked', true);
    $("#" + msg).parent().addClass("active");
});

socket.on("set_presenter", function(msg) {
    console.log(msg);
    $("#p_name").val(msg.p_name);
    $("#p_title").val(msg.p_title);
});
