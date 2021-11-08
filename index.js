const owners = [{
  name: "Linda",
  id: 1
}]

/* Render owners from owners array */
const renderOwners = () => {
  const ownersContainer = document.querySelector('#owners')
  ownersContainer.innerHTML = ""
  owners.forEach((owner) => {
    const ownerContainer = document.createElement('div')

    const nameElement = document.createElement('h3')
    nameElement.textContent = owner.name

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', () => {
      console.log('deleting owner')
    })

    ownerContainer.append(nameElement, deleteButton)
    ownersContainer.append(ownerContainer)
  })
}

renderOwners()

/*
Listen for clicks on add button, take the input value 
and push the new owner into owners array
*/
const addButton = document.querySelector('#add-owner')

addButton.addEventListener('click', () => {
  const name = document.querySelector('input').value
  const newOwner = { name: name }
  owners.push(newOwner)
  renderOwners()
})

