function Event(title, description, date, initialTime, finalTime, urgency, records) {
   this.title = title
   this.description = description
   this.date = date
   this.initialTime = initialTime
   this.finalTime = finalTime
   this.urgency = urgency
   this.records = records
   this.id = generateId()
}

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
   let eventsListStringfy = JSON.stringify(eventsList)
   localStorage.setItem("eventsListabc", eventsListStringfy)
}

function appendListCards() {
   let events = JSON.parse(localStorage.getItem("eventsListabc"));

   for (let i = 0; i < events.length; i++) {
      createEventCard(events[i]);
   }
}

var indexCard = 0

function createEventCard(event) {
   const card = document.createElement("div")
   card.classList.add('cardEvent')

   const btnDelete = document.createElement("button")
   btnDelete.textContent = "Excluir"
   btnDelete.setAttribute("onclick", `excludeEvent(${event.id})`)

   const btnEdit = document.createElement("button")
   btnEdit.textContent = "Editar"
   // btnEdit.setAttribute("id", event.id)
   btnEdit.setAttribute("onclick", `editEvent(${event.id})`)

   const card_options = document.createElement('div') 
   card_options.classList.add('card_option')

   card_options.appendChild(btnEdit)
   card_options.appendChild(btnDelete)

   const title = document.createElement("p")
   title.textContent = `Título: ${event.title}`

   const description = document.createElement("p")
   description.textContent = `Descrição: ${event.description}`

   const date = document.createElement("p")
   date.textContent = `Data: ${event.date}`

   const initialTime = document.createElement("p")
   initialTime.textContent = `Hora do Início: ${event.initialTime}`

   const finalTime = document.createElement("p")
   finalTime.textContent = `Hora do Fim: ${event.finalTime}`

   switch (event.urgency) {
      case "Alta":
          card.style.backgroundColor = "color-mix(in srgb, red, white 70%)";
          break;
      case "Média":
          card.style.backgroundColor = "color-mix(in srgb, yellow, white 70%)";
          break;
      case "Baixa":
          card.style.backgroundColor = "color-mix(in srgb, green, white 70%)";
          break;
  }

   const urgency = document.createElement("p")
   urgency.textContent = `Urgência: ${event.urgency}`

   const records = document.createElement("p")
   records.textContent = `Lembretes: ${event.records}`

   // const identificao = document.createElement('p')
   // identificao.textContent = `id: ${event.id}`

   // card.appendChild(identificao)
   card.appendChild(title)
   card.appendChild(description)
   card.appendChild(date)
   card.appendChild(initialTime)
   card.appendChild(finalTime)
   card.appendChild(urgency)
   
   card.appendChild(records)
   card.appendChild(card_options)

   const divPrincipal = document.querySelector(".lista-eventos")
   divPrincipal.appendChild(card)
}

function excludeEvent(eventId) {

   let eventsList = JSON.parse(localStorage.getItem('eventsListabc')) || [];
   let indexToFind = eventsList.findIndex(object => object.id === eventId)

   if (indexToFind !== -1) {
      eventsList.splice(indexToFind, 1)

      localStorage.setItem('eventsListabc', JSON.stringify(eventsList));

      const divPrincipal = document.querySelector(".lista-eventos")
      divPrincipal.innerHTML = ''

      appendListCards()
   }

}

// function openModal() {
//    new bootstrap.Modal('#modalAberto').show();
// }


function editEvent(eventId) {
   // let eventsList = JSON.parse(localStorage.getItem('eventsListabc')) || [];

   // let indexToFind = eventsList.findIndex(object => object.id === eventId)

   // console.log(`Você clicou no evento de índice ${indexToFind}`)
   // window.alert('Clicou em editar')

   // const editForm = document.querySelector('.editForm');
   // editForm.style.display = 'block';

   // document.body.style.backgroundColor = "rgba(0, 0, 0, 0.2)"

   let eventsList = JSON.parse(localStorage.getItem('eventsListabc')) || [];
   let indexToFind = eventsList.findIndex(object => object.id === eventId);

   const editForm = document.getElementById('editForm');
   editForm.style.display = 'flex';

   const editBtn = document.querySelector('.editBtn')
   console.log(editBtn)

   editBtn.addEventListener('click', (e) => {
      e.preventDefault()

      // console.log('Clicou em submeter')

      eventsList[indexToFind].title = document.getElementById('editTitle').value;
      eventsList[indexToFind].description = document.getElementById('editDescription').value;
      eventsList[indexToFind].date = document.getElementById('editDate').value;
      eventsList[indexToFind].initialTime = document.getElementById('editInitialTime').value;
      eventsList[indexToFind].finalTime = document.getElementById('editFinalTime').value;
      // eventsList[indexToFind].urgency = document.getElementById('editForm_urgencia_id').value;

      const highUrgency = document.querySelector('#editForm_urgencia_alta')
      const midleUrgency = document.querySelector('#editForm_urgencia_media')
      const lowUrgency = document.querySelector('#editForm_urgencia_baixa')

      if(highUrgency.checked) {
         eventsList[indexToFind].urgency = "Alta"
      } else if(midleUrgency.checked) {
         eventsList[indexToFind].urgency = "Média"
      } else if(lowUrgency.checked){
         eventsList[indexToFind].urgency = "Baixa"
      }

      eventsList[indexToFind].records = document.getElementById('editRecords').value;


      localStorage.setItem('eventsListabc', JSON.stringify(eventsList));

      const divPrincipal = document.querySelector(".lista-eventos")
      divPrincipal.innerHTML = ''

      editForm.style.display = 'none';

      appendListCards()

   })
}








