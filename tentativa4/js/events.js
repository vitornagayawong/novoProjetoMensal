function Event(title, description, date, initialTime, finalTime, urgency, records) {
   this.title = title
   this.description = description
   this.date = date
   this.initialTime = initialTime
   this.finalTime = finalTime
   this.urgency = urgency
   this.records = records
   this.id = generateId()   
   // this.editBtn = createEditButton()
}

// function createEditButton() {
//    const btnEdit = document.createElement('button')
//    btnEdit.textContent = 'CRiadooooooooooo'
//    const divPrincipal = document.querySelector(".lista-eventos")
//    const btnAttached = divPrincipal.appendChild(btnEdit)
//    return btnAttached
// }

// function generateId() {
//    let firstNumber = 0
//    // return firstNumber
//    let getEventsFromLocalStorage = JSON.parse(localStorage.getItem('eventsListabc'))
//    for(firstNumber; i < getEventsFromLocalStorage; firstNumber++) {
//       getEventsFromLocalStorage[i].id = firstNumber
//    }
// }

function generateId() {
   let eventsList = JSON.parse(localStorage.getItem('eventsListabc')) || [];
   let nextId = 0;
   
   // Encontrar o maior ID existente
   if (eventsList.length > 0) {
      const maxId = Math.max(...eventsList.map(event => event.id));
      nextId = maxId + 1;
   }
   
   return nextId;
}

var eventsList = []
let searchResults = []

let urgencia;
function setUrgencia(status) {
   urgencia = status
}

function saveEventsLocalStorage(eventsList) {
   console.log(eventsList)
   let eventsListStringfy = JSON.stringify(eventsList)
   localStorage.setItem("eventsListabc", eventsListStringfy)
   console.log(eventsListStringfy)
}

function appendListCards() {
   let events = JSON.parse(localStorage.getItem("eventsListabc"));
   console.log(events)
   console.log(events[0])
   console.log(typeof events)

   // console.log(events)  
   // console.log(events[0].id)  
   // console.log(eventsList)
   // console.log(searchResults)   

   for (let i = 0; i < events.length; i++) {
      createEventCard(events[i]);
      // events[i].editBtn
   }  
   
   

   for (let i = 0; i < events.length; i++) {
      // console.log(events[i].id)          
   }   
}

var indexCard = 0

function createEventCard(event) {
   const card = document.createElement("div")

   const btnDelete = document.createElement("button")
   btnDelete.textContent = "Excluir"
   btnDelete.setAttribute("onclick", `excludeEvent(${event.id})`)

   const btnEdit = document.createElement("button")
   btnEdit.textContent = "Editar"
   // btnEdit.setAttribute("id", event.id)
   btnEdit.setAttribute("onclick", `editEvent(${event.id})`)

   const title = document.createElement("h1")
   title.textContent = `Título: ${event.title}`

   const description = document.createElement("h2")
   description.textContent = `Descrição: ${event.description}`

   const date = document.createElement("p")
   date.textContent = `Data: ${event.date}`

   const initialTime = document.createElement("p")
   initialTime.textContent = `Hora do Início: ${event.initialTime}`

   const finalTime = document.createElement("p")
   finalTime.textContent = `Hora do Fim: ${event.finalTime}`

   const urgency = document.createElement("p")
   urgency.textContent = `Urgência: ${event.urgency}`

   const records = document.createElement("p")
   records.textContent = `Lembretes: ${event.records}`

   card.appendChild(btnEdit)
   card.appendChild(btnDelete)
   card.appendChild(title)
   card.appendChild(description)
   card.appendChild(date)
   card.appendChild(initialTime)
   card.appendChild(finalTime)
   card.appendChild(urgency)
   card.appendChild(records)
   
   // card.classList.add(`lista-eventos${indexCard}`)   

   const divPrincipal = document.querySelector(".lista-eventos")
   divPrincipal.appendChild(card)
}

// function deleteSelectedEvent() {
//    let events = JSON.parse(localStorage.getItem("eventsListabc"));
//    console.log(events[0])
//    console.log(events.id)
// }

function excludeEvent(eventId) {   
   
   let eventsList = JSON.parse(localStorage.getItem('eventsListabc')) || [];

   let indexToFind = eventsList.findIndex( object => object.id === eventId)

   console.log("o indice agora é esse: " + indexToFind)
   
   if(indexToFind !== -1) {
      eventsList.splice(indexToFind, 1)
      
      localStorage.setItem('eventsListabc', JSON.stringify(eventsList));
   }
   
   console.log("OOOO indice agora é esse: " + indexToFind)

   // console.log(eventsList)
   
   // eventsList.splice(eventId, 1, null)
   
   // console.log(eventsList)

   // localStorage.setItem('eventsListabc', JSON.stringify(eventsList))

   // console.log(eventsList)

}


