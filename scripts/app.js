// import { createPaginationLinks, displayItems, DataCall, currentPage, totalPages, items } from './localstorage.js';

let userID = document.getElementById("userID");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let Email = document.getElementById("Email");
let userHeight = document.getElementById("userHeight");
let userAge = document.getElementById("userAge");
let userIDBtn = document.getElementById("userIDBtn");
let firstNameBtn = document.getElementById("firstNameBtn");
let lastNameBtn = document.getElementById("lastNameBtn");
let userAgeBtn = document.getElementById("userAgeBtn");
let userHeightBtn = document.getElementById("userHeightBtn");
let EmailBtn = document.getElementById("EmailBtn");
let sortTenBtn = document.getElementById("sortTenBtn");
let sortTwentyBtn = document.getElementById("sortTwentyBtn");
let sortThirtyBtn = document.getElementById("sortThirtyBtn");
let sortFortyBtn = document.getElementById("sortFortyBtn");
let sortFiftyBtn = document.getElementById("sortFiftyBtn");
let previousPageBtn = document.getElementById("previousPageBtn");
let nextPageBtn = document.getElementById("nextPageBtn");
let tableBody = document.getElementById("pagination");


let currentPage = 1;
let items = [];
let itemsPerPage = 10;
let totalPages = 0;

function displayItems(page, itemsPerPage) {
    let currentPageElement = document.getElementById("current-page");
    let totalPagesElement = document.getElementById("total-pages");
  
    // Use a default value of 10 for itemsPerPage if it's not provided
    console.log(itemsPerPage);
    itemsPerPage = itemsPerPage || 10;
    console.log(itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const pageItems = items.slice(startIndex, endIndex);
  
    totalPages = Math.ceil(items.length / itemsPerPage);
  
    // Clear the table body
    tableBody.innerHTML = "";
  
    // Create table rows for each item
    pageItems.forEach((item) => {
      let row = tableBody.insertRow();
  
      let idCell = row.insertCell(0);
      idCell.innerText = item.Id;
  
      let firstNameCell = row.insertCell(1);
      firstNameCell.innerText = item.FirstName;
  
      let lastNameCell = row.insertCell(2);
      lastNameCell.innerText = item.LastName;
  
      let emailCell = row.insertCell(3);
      emailCell.innerText = item.Email;
  
      let ageCell = row.insertCell(4);
      ageCell.innerText = item.Age;
  
      let heightCell = row.insertCell(5);
      heightCell.innerText = item.Height;
    });
  
    // Add error handling for null values
    if (currentPageElement != null) {
      currentPageElement.textContent = page;
    }
    if (totalPagesElement != null) {
      totalPagesElement.textContent = totalPages;
    }
  }


function createPaginationLinks(currentPage) {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";
  
    for (let i = 1; i <= totalPages; i++) {
      const link = document.createElement("a");
      link.textContent = i;
      if (i === currentPage) {
        link.classList.add("active");
      }
      link.addEventListener("click", (event) => {
        event.preventDefault();
        displayItems(i);
        createPaginationLinks(i);
      });
  
      paginationContainer.appendChild(link);
    }
  }

async function DataCall() {
    const promise = await fetch("./data/data.json");
    const data = await promise.json();

    items.push(...data.People.map((person) => {
        return {
            Id: person.Id,
            FirstName: person.FirstName,
            LastName: person.LastName,
            Email: person.Email,
            Age: person.Age,
            Height: person.Height
        };
        
    }));

    createPaginationLinks();
    displayItems(1);
};

function updatePaginationLinks(currentPage) {
    const paginationContainer = document.querySelector(".pagination-container");
    const links = paginationContainer.querySelectorAll(".page-link");

    links.forEach((link) => {
        if (link.dataset.page == currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}


userIDBtn.addEventListener('click', function(){
    items.sort((a, b) => a.Id - b.Id);
    currentPage = 1;
    createPaginationLinks();
    displayItems(currentPage, itemsPerPage);
  })


  firstNameBtn.addEventListener('click', function(){
    items.sort((a, b) => a.FirstName.localeCompare(b.FirstName));
    displayItems(currentPage, itemsPerPage)
  })


  lastNameBtn.addEventListener('click', function(){
    items.sort((a, b) => a.LastName.localeCompare(b.LastName));
    displayItems(currentPage, itemsPerPage);
  })


  userAgeBtn.addEventListener('click', function(){
    items.sort((a, b) => a.Age - b.Age);
    displayItems(currentPage, itemsPerPage);
  })


  userHeightBtn.addEventListener('click', function(){
    items.sort((a, b) => a.Height.localeCompare(b.Height));
    displayItems(currentPage, itemsPerPage);
  })

  EmailBtn.addEventListener('click', function(){
    items.sort((a, b) => a.Email.localeCompare(b.Email));
    displayItems(currentPage, itemsPerPage);
  })

previousPageBtn.addEventListener("click", (event) => {

  if (currentPage > 1) {
    currentPage--;
    displayItems(currentPage, itemsPerPage);
    updatePaginationLinks(currentPage);
  }
});

nextPageBtn.addEventListener("click", (event) => {
    if (currentPage < totalPages) {
        currentPage++;
        displayItems(currentPage, itemsPerPage);
        updatePaginationLinks(currentPage);
    }
});


  sortTenBtn.addEventListener('click', function() {
    itemsPerPage = 10;
    currentPage = 1;
    totalPages = Math.ceil(items.length / itemsPerPage);
    createPaginationLinks();
    displayItems(currentPage, itemsPerPage);
});

sortTwentyBtn.addEventListener('click', function() {
    itemsPerPage = 20;
    currentPage = 1;
    totalPages = Math.ceil(items.length / itemsPerPage);
    createPaginationLinks();
    displayItems(currentPage, itemsPerPage);
});

sortThirtyBtn.addEventListener('click', function() {
    itemsPerPage = 30;
    currentPage = 1;
    totalPages = Math.ceil(items.length / itemsPerPage);
    createPaginationLinks();
    displayItems(currentPage, itemsPerPage);
});

sortFortyBtn.addEventListener('click', function() {
    itemsPerPage = 40;
    currentPage = 1;
    totalPages = Math.ceil(items.length / itemsPerPage);
    createPaginationLinks();
    displayItems(currentPage, itemsPerPage);
});

sortFiftyBtn.addEventListener('click', function() {
    itemsPerPage = 50;
    currentPage = 1;
    totalPages = Math.ceil(items.length / itemsPerPage);
    createPaginationLinks();
    displayItems(currentPage, itemsPerPage);
});

DataCall();
createPaginationLinks();
displayItems(1);