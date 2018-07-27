let active_displays = 0;
const data = {
    mode: "_mode_question",
    timer: {
        t_hour: "04",
        t_min: "20",
        t_sec: "00",
        event_name: "Party time"
    },
    presenter: {
        p_name: "Philip K. Dick",
        p_title: "Man in the High Castle"
    }
};

module.exports = io => {
    io.on("connection", function(socket) {
        active_displays += 1;
        console.log("New connection, active displays: " + active_displays);
        io.emit("sync_active_displays", active_displays);

        socket.emit("set_timer", data.timer);
        socket.emit("set_presenter", data.presenter);
        socket.emit("update_mode", data.mode);

        socket.on("set_timer", msg => {
            console.log("set_timer");
            console.log(msg);
            data.timer = msg;
            io.emit("set_timer", msg);
        });

        // socket.on('q_list update', (msg) => {
        //     console.log("q_list update");
        //     console.log(msg);
        //     io.emit("q_list update", msg);
        // });

        socket.on("set_presenter", msg => {
            console.log("set_presenter");
            console.log(msg);
            data.presenter = msg;
            io.emit("set_presenter", msg);
        });

        // socket.on('set_presenter', (msg) => {
        //     console.log("set_presenter");
        //     console.log(msg);
        //     io.emit("set_presenter", msg);
        // });

        socket.on("update_mode", msg => {
            console.log("update_mode");
            console.log(msg);
            data.mode = msg;
            io.emit("update_mode", msg);
        });

        socket.on("disconnect", msg => {
            active_displays -= 1;
            console.log("Disconnect, active displays: " + active_displays);
            io.emit("sync_active_displays", active_displays);
        });
    });
};
