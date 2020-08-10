const tags = ["Math of Computation", "Data Analysis", "Software Engineering"];
let tagIndex = 0;
let standardHeight = 1080.0;
let emptyHeight = 300;
let docPadBottom = 50;
let contentTop = 680;
let videosrc = "./files/background-small.mp4"

function changeTag() {
    let myTag = document.getElementById("tags");
    let oldTag = document.getElementById("tag");

    ++tagIndex;
    if (tagIndex === tags.length) {
        tagIndex = 0;
    }

    let tag = createTag(tagIndex);
    $(document).ready(function() {
        $("#tag").fadeOut("slow", function() {
            if (oldTag) {
                myTag.replaceChild(tag, oldTag);
            } else {
                myTag.appendChild(tag);
            }
        }).fadeIn("slow");
    });
}

function createTag(index) {
    let tag = document.createElement("span");
    tag.id = "tag";
    tag.class = "bold";
    tag.appendChild(document.createTextNode(tags[tagIndex]));
    return tag;
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
    let is_mobile = false;

    /*
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
    let myTag = document.getElementById("tags");
    let tag = createTag(tagIndex);

    AOS.init({once: true, startEvent: 'load',});
    addBackground();

    $(document).ready(function() {
        myTag.appendChild(tag);
        setInterval(changeTag, 3000);
    });
    adjustIntro();
})();