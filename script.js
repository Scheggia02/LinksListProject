var sites = [];

const site2li = (site) => {
  const aElem = $("<a>").attr("href", site.url).text(site.title);
  const trashElem = $("<img>")
    .addClass("action-icon")
    .attr("src", "data:image/png;base64,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")
    .attr("alt", "trash icon")
    .data("id", site.id);
  const actionContainerElem = $("<div>")
    .addClass("action-container")
    .append(trashElem);
  const liElem = $("<li>")
    .append(aElem)
    .append(actionContainerElem);
  console.log("trashElem id: " + trashElem.data("id"));

  //liElem.addClass("site-element");
  return liElem;
}

const li2list = (newList, li) => newList.append(li)

const writeSiteList = (listElement, sites) =>
  sites
    .map(site2li)
    .reduce(li2list, listElement.html(""))

const generateId = () => Math.floor(Math.random() * 100000)

const addNewSite = function (event) {
  event.preventDefault();
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();
  
  if(category == "categoria")
  {
    alert("Please insert a valid category to add a new site");
    return
  }
  
  console.log("inside addNewSite");
  const newSite = {
    id: generateId(),
    url: url,
    title: title,
    category: category
  };

  console.log("new site with ID: " + newSite.id)

  sites.push(newSite); // fino a qui OK

  writeSiteList($("#site-list"), sites);
  resetSiteForms($("form"));
}

const deleteSite = function () {
    const id = $(this).data("id");
    console.log('site id: ' + id);
    var sitesList = $("#site-list");
    
    sites = sites.filter(function(site) { return site.id != id;})

    deleteSites(sitesList);
    writeSiteList(sitesList, sites);
  // elimino il sito con questo id
  // aggiorno la lista visualizzata a schermo
}

const deleteSites = function (siteElementsList) {
  siteElementsList.empty();
}

const resetSiteForms = function (form) {
  form.children(":input[type=text],:input[type=url]").val("");
}

const filterSites = function () {
  console.log("filtering sites, category: " + category);
  var category = $("#filter-category").val();
  var sitesList = $("#site-list");
  deleteSites(sitesList);
  writeSiteList(sitesList, category == "categoria" ? sites : sites.filter(function (site) { return site.category == category; }));
}

let init = function () {
  console.log("inside init");
  $("form").submit(addNewSite);
  $("#button-filter").click(filterSites);
  $("#site-list").on("click", ".action-icon", deleteSite);
  console.log();
}

$(document).ready(init);