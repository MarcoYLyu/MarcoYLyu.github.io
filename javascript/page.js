const tags = ["Computer Science", "Machine Learning", "Software Engineering"];
let tagIndex = 0;

const standardHeight = 1080.0;
const emptyHeight = 300;
const docPadBottom = 50;
const contentTop = 680;
const videosrc = "./files/background-small.mp4"

function changeTag() {
    let tag = document.getElementById("tag");

    tagIndex = (tagIndex + 1) % tags.length;

    $(document).ready(function() {
        $("#tag").fadeOut("slow", function() {
            tag.innerHTML = tags[tagIndex];
        }).fadeIn("slow");
    });
}

function adjustIntro() {
    let height = window.innerHeight;
    let ratio = height / standardHeight;
    let emptyspacePtr = document.getElementById("emptyspace");
    let contentPtr = document.getElementById("content");
    newHeight = emptyHeight * ratio;
    difference = newHeight - emptyHeight;
    emptyspacePtr.setAttribute("style", "height:" + emptyHeight * ratio.toString() + "px");
    contentPtr.setAttribute("style", "top:" + (contentTop + difference).toString() + "px");
}

function addBackground() {
    /*
    let is_mobile = false;
    if ($(".laptop").css("display") == "none") {
        is_mobile = true;
    }
    */

    let intro = document.getElementById("introduction");
    let footerItr = document.getElementById("footer");
    footerItr.setAttribute("style", "background-color: rgb(2, 17, 58);");
    intro.setAttribute("style", "background-image: url('./files/background.jpg');");
}

(function() {
    tagIndex = Math.floor(Math.random() * tags.length);

    AOS.init({once: true, startEvent: 'load',});
    addBackground();

    $(document).ready(() => {
        setInterval(changeTag, 3000);
    });
    adjustIntro();
})();