const tags = ["Mathematics of Computation", "Data Analysis", "Software Engineering"];
let tagIndex = 0;
let standardHeight = 1080.0;

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
    let height = screen.height;
    let ratio = height / standardHeight;
    let docPtr = document.getElementById("documents");
    let emptyspacePtr = document.getElementById("emptyspace");
    let contentPtr = document.getElementById("content");
    emptyspacePtr["height"] *= ratio;
    docPtr["padding-bottom"] *= ratio;
    contentPtr["top"] *= ratio;
}

(function() {
    tagIndex = Math.floor(Math.random() * tags.length);
    let myTag = document.getElementById("tags");
    let tag = createTag(tagIndex);

    $(document).ready(function() {
        myTag.appendChild(tag);
        setInterval(changeTag, 3000);
    });
    adjustIntro();
})();