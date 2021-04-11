const init = function() {
    $("#form-submit-button").on("click", function() 
    {
        var urlText = document.getElementById("url-input").value;
        var titleText = document.getElementById("title-input").value;
        if(urlText == null || titleText == null) return;

        var listItem = document.createElement("li");
        var itemContent = document.createElement("a");
        itemContent.href = urlText;
        itemContent.innerText = titleText;
        listItem.appendChild(itemContent);
        document.getElementById("links-list").appendChild(listItem);
    });
}

$(document).ready(init);