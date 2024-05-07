function Event(title, description, date, initialTime, finalTime, urgency, records) {
   this.title = title
   this.description = description
   this.date = date
   this.initialTime = initialTime
   this.finalTime = finalTime
   this.urgency = urgency
   this.records = records
}

var eventsList = []
let urgencia;

function setUrgencia(status) {
   urgencia = status
}

function saveEventsLocalStorage(eventsList) {
   let eventsListStringfy = JSON.stringify(eventsList)
   localStorage.setItem("eventsListabc", eventsListStringfy)
}

function appendListCards() {
   let events = JSON.parse(localStorage.getItem("eventsListabc"));

   console.log(events)

   for (let i = 0; i < events.length; i++) {
      createEventCard(events[i]);
   }   
}

function createEventCard(event) {
   const card = document.createElement("div")

   const btnDelete = document.createElement("button")
   btnDelete.textContent = "Excluir"

   const btnEdit = document.createElement("button")
   btnEdit.textContent = "Editar"

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

   var indexCard = 0
   card.classList.add(`lista-eventos${indexCard}`)
   

   const divPrincipal = document.querySelector(".lista-eventos")
   divPrincipal.appendChild(card)
}

function listarEventos(eventos, idList) {

   const divListaEventos = document.getElementById(idList)

   eventos.forEach(evento => {
      createEventCard(evento)
      //colocar aqui  const divPrincipal = document.querySelector(".lista-eventos")
      //divPrincipal.appendChild(card) 
   });
}

// function pesquisarEvento(){
//    let textSearch = ""

//    let eventosFiltrados = eventos.filter("")

//    listarEventos(eventosFiltrados, "lista-id")
// }

// listarEventos([...], "lista-eventos")

