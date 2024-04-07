
document.addEventListener('click', function(event) {
    // Check if the clicked element or any of its ancestors have a class of "navbar"
    if (!event.target.closest('.navbar')) {
        var sentence = "Oops, you didn't click on any link..."
        alert(sentence);
    }
});
