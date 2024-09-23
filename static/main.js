
const mainContent = document.querySelector("#mainContent");

const frontPage = document.createElement("div")
const searchWrapper = document.createElement("div")
const searchInput = document.createElement("input")
searchInput.type = "text"
searchInput.id = "search"
searchInput.placeholder = "Enter location to search . . ."
searchWrapper.appendChild(searchInput)
frontPage.appendChild(searchWrapper)

mainContent.appendChild(frontPage)