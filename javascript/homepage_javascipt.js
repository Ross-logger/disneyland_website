let promo_texts = ["DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798", "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379", "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"];
let cur_index = Math.floor(Math.random() * promo_texts.length);

function random_pick_promo_text() {
    document.getElementById("promotion").innerHTML = promo_texts[cur_index];
    cur_index = (cur_index + 1) % 3;
}

setInterval(random_pick_promo_text, 3000);

let video_start = document.getElementById("video");
window.addEventListener("load", () => {
    video_start.play();
})

let n = 1;

function switch_video() {
    if (n === 0) {
        document.getElementById("video_src").src = "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4";
        n = 1;
    } else {
        document.getElementById("video_src").src = "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4";
        n = 0;
    }
    let promo_video = document.getElementById("video");
    promo_video.load();
    promo_video.play();

}

let booking_for = document.querySelector("#booking_form");
booking_for.addEventListener('submit', event => {
    check_form(event);
});

function check_form(event) {
    const error_message = document.getElementById("error_message");
    let date_field = document.getElementById("date").value;
    let time_date = document.getElementById("time").value;
    let visitor_field = document.getElementById("number_of_visitors").value;
    if (!date_field || time_date.trim() === "" || visitor_field.trim() === "") {
        error_message.style.display = "block";
    } else {
        error_message.style.display = "none";
        if (reserve(date_field, time_date, visitor_field)) {
            alert("Reservation done. Thank you.");
        } else {
            alert("Disneyland has reached the maximum number of visitors for the day");
        }
    }
    event.preventDefault(); //we cancel the form sumission

}