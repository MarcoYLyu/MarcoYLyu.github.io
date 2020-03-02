const tags = ["an Applied Math student", "a Data Analyzer", "a Programmer"];
let tagIndex = 0;

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
            myTag.replaceChild(tag, oldTag);
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

(function() {
    tagIndex = Math.floor(Math.random() * tags.length);
    let myTag = document.getElementById("tags");
    let tag = createTag(tagIndex);

    $(document).ready(function() {
        myTag.appendChild(tag);
        setInterval(changeTag, 3000);
    });
})();