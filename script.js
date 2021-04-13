const sitesList = [];

const addSiteElement = function(site)
{
    sitesList.push(site);

    //Clear the list
    $("#links-list").empty();

    //Rewrite all the elements
    sitesList.forEach(element => {
        const listItem = $("<a>").attr("href",  element.url).text(element.title);
        const itemContent = $("<li>").append(listItem);
        $("#links-list").append(itemContent);
    });
}

const init = function() {
    $("form").submit(function(event) 
    {
        event.preventDefault();
        var urlText = $("#url-input").val();
        var titleText = $("#title-input").val();
        var categoryText = $("#category-input").val();
        if(urlText == null || titleText == null) return;

        addSiteElement({
            url: urlText,
            title: titleText,
            category: categoryText
        });    
    });
}

$(document).ready(init);