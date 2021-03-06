// Current Times \\
var today = $("#currentDay");
var inputHour = (moment().format('H'));

// console.log(today);


setInterval(function() {
    var currentDate = moment();
    var date = currentDate.format('MMMM Do YYYY, h:mm:ss a')
    today.text(date);
}, 1000);


$(".saveBtn").click(function () {
    $('input[type="text"]').each(function () {
        var saveId = $(this).attr('id');
        var saveValue = $(this).val();
        localStorage.setItem(saveId, saveValue);
    });
});

$('input[type="text"]').each(function () {
    var pullId = $(this).attr('id');
    var pullStored = localStorage.getItem(pullId);
    document.getElementById(pullId).value = pullStored;
});

function calTime (time, id) {
    if (inputHour > time) {
        $(id).addClass('past');
    }else if (inputHour < time){
        $(id).addClass('future');
    }else {
        $(id).addClass('present');
    }
}


calTime(9, '#nine');
calTime(10, '#ten');
calTime(11, '#eleven');
calTime(12, '#twelve');
calTime(13, '#thirteen');
calTime(14, '#fourteen');
calTime(15, '#fifteen');
calTime(16, '#sixteen');
calTime(17, '#seventeen');
calTime(18, '#eighteen');
