let myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value)
})