// let tableBody = document.getElementById("pagination");
// let currentPage = 1;
// const items = [];
// const itemsPerPage = 10;
// let totalPages = Math.ceil(items.length / itemsPerPage);

// function displayItems(page) {
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const pageItems = items.slice(startIndex, endIndex);
//     totalPages = Math.ceil(items.length / itemsPerPage);
//     // Clear the table body
//     tableBody.innerHTML = "";

//     // Create table rows for each item
//     pageItems.forEach((item, index) => {
//         let row = tableBody.insertRow(index);

//         let idCell = row.insertCell(0);
//         idCell.innerText = item.Id;

//         let firstNameCell = row.insertCell(1);
//         firstNameCell.innerText = item.FirstName;

//         let lastNameCell = row.insertCell(2);
//         lastNameCell.innerText = item.LastName;

//         let emailCell = row.insertCell(3);
//         emailCell.innerText = item.Email;

//         let ageCell = row.insertCell(4);
//         ageCell.innerText = item.Age;

//         let heightCell = row.insertCell(5);
//         heightCell.innerText = item.Height;
//     });
// };

// function createPaginationLinks(currentPage) {
//     const paginationContainer = document.getElementById("pagination");
//     paginationContainer.innerHTML = "";
  
//     for (let i = 1; i <= totalPages; i++) {
//       const link = document.createElement("a");
//       link.href = "#";
//       link.textContent = i;
//       if (i === currentPage) {
//         link.classList.add("active");
//       }
//       link.addEventListener("click", (event) => {
//         event.preventDefault();
//         displayItems(i);
//         createPaginationLinks(i);
//       });
  
//       paginationContainer.appendChild(link);
//     }
//   }

// async function DataCall() {
//     const promise = await fetch("./data/data.json");
//     const data = await promise.json();

//     items.push(...data.People.map((person) => {
//         return {
//             Id: person.Id,
//             FirstName: person.FirstName,
//             LastName: person.LastName,
//             Email: person.Email,
//             Age: person.Age,
//             Height: person.Height
//         };
        
//     }));

//     createPaginationLinks();
//     displayItems(1);
//     console.log(items);
// }

//   export { createPaginationLinks, displayItems, DataCall, currentPage, totalPages, items }
