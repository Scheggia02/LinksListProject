const init = function() {
    $("form").submit(function(event) 
    {
        event.preventDefault();
        var urlText = $("#url-input").val();
        var titleText = $("#title-input").val();
        if(urlText == null || titleText == null) return;

        const listItem = $("<a>").attr("href",  urlText).text(titleText);
        const itemContent = $("<li>").append(listItem);
        $("#links-list").append(itemContent);
    });
}

$(document).ready(init);