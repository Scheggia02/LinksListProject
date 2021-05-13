let sites = [];

const site2li = (site) => {
  const aElem = $("<a>").attr("href", site.url).text(site.title);
  const trashElem = $("<img>")
    .addClass("action-icon")
    .addClass("trash-icon")
    .attr("src", "trash.png")
    .attr("alt", "trash icon")
    .data("id", site.id);
  const liElem = $("<li>")
    .append(aElem)
    .append(trashElem);
  console.log("trashElem id: " + trashElem.data("id"));

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
    
    // Tengo tutti gli elementi tranne quello con questo id
    sites = sites.filter(function(site) { return site["id"] != id;})

    deleteSites(sitesList);
    filterSites();
  // aggiorno la lista visualizzata a schermo
}

const deleteSites = function (siteElementsList) {
  siteElementsList.empty();
}

const resetSiteForms = function (form) {
  form.children(":input[type=text],:input[type=url]").val("");
}

const filterSites = function () {
  event.preventDefault();
  var category = $("#filter-category").val();
  var sitesList = $("#site-list");
  deleteSites(sitesList);
  writeSiteList(sitesList, category == "categoria" ? sites : sites.filter(function (site) { return site.category == category; }));
  console.log("filtering sites, category: " + category);
}

let init = function () {
  console.log("inside init");
  $("#add-site-form").submit(addNewSite);
  $("#filter-form").submit(filterSites);
  $("#site-list").on("click", ".action-icon", deleteSite);
  console.log();
}

$(document).ready(init);