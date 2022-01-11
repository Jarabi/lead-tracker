let myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value)
  inputEl.value = ""

  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()
})

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems +=
    `<li>
        <a href="${myLeads[i]}" target="_blank">
          ${myLeads[i]}
        </a>
    </li>`
  }

  ulEl.innerHTML = listItems
}