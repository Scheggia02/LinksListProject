let sites = [];
let categories = [
  {
    "value": "categoria",
    "text": "Categoria"
  },
  {
    "value": "scuola",
    "text": "Scuola"
  },
  {
    "value": "gioco",
    "text": "Gioco"
  },
  {
    "value": "ricette",
    "text": "Ricette"
  }
];

let sitesListElement;
let addSiteSelectElement;
let filterSiteSelectElement;
let addSiteFormElement;
let filterSiteFormElement;

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
  
  const newSite = {
    id: generateId(),
    url: url,
    title: title,
    category: category
  };

  sites.push(newSite); // fino a qui OK

  writeSiteList(sitesListElement, sites);
  resetSiteForms($("form"));
}

const deleteSite = function () {
    const id = $(this).data("id");
    // Tengo tutti gli elementi tranne quello con questo id
    sites = sites.filter(function(site) { return site["id"] != id;})
    filterSites();
}

const resetSiteForms = function (form) {
  form.children(":input[type=text],:input[type=url]").val("");
}

const filterSites = function () {
  event.preventDefault();
  var category = filterSiteSelectElement.val();
  writeSiteList(sitesListElement, category == "categoria" ? sites : sites.filter((site) => site.category == category));
}

const initCategorySelect = function (elements, categs) {
  categs.reduce(
    (elem, cat) => elem.append($("<option>").attr("value", cat.value).text(cat.text)),
    elements
  )
}

let init = function () {
  sitesListElement =  $("#site-list");
  sitesListElement.on("click", ".action-icon", deleteSite);
  addSiteFormElement = $("#add-site-form");
  addSiteFormElement.submit(addNewSite);
  filterSiteFormElement = $("#filter-form");
  filterSiteFormElement.submit(filterSites);

  addSiteSelectElement = $("#form-category");
  filterSiteSelectElement = $("#filter-category");
  initCategorySelect(addSiteSelectElement, categories);
  initCategorySelect(filterSiteSelectElement, categories);
}

$(document).ready(init);