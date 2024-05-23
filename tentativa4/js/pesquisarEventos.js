function plotEventCard(event) {
   const card = document.createElement("div")

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

   card.appendChild(title)
   card.appendChild(description)
   card.appendChild(date)
   card.appendChild(initialTime)
   card.appendChild(finalTime)
   card.appendChild(urgency)
   card.appendChild(records)   

   // const divPrincipal = document.querySelector(".principal_search")
   // divPrincipal.appendChild(card)
   const resultsContainer = document.querySelector('.results_container');
   resultsContainer.appendChild(card)
}

function searchEvent(e) {
   // console.log("TESTE")
   e.preventDefault()
   const txtSearchInput = document.getElementById('inputSearch').value
   let eventsList = JSON.parse(localStorage.getItem("eventsListabc"))
   if (eventsList.length > 0) {
      searchResults = eventsList.filter(({ title }) => title.includes(txtSearchInput))
      //mesma coisa que item.title

      console.log(searchResults);

      const divPrincipalSearch = document.querySelector('.principal_search')
      const inputSearch = document.getElementById('inputSearch')
      // const inputSearchNextSibling = inputSearch.nextElementSibling
      // console.log(inputSearchNextSibling)
      // inputSearchNextSibling.innerHTML = ''
      
      const resultsContainer = document.querySelector('.results_container');
      resultsContainer.innerHTML = ''; // Limpa o conteúdo anterior
    
      searchResults.forEach(card => {
         const foundedCard = plotEventCard(card)
         console.log(foundedCard)
         resultsContainer.appendChild(foundedCard)         
      })
   }
}

const btnSearchEvent = document.querySelector('#btnSearchEvent')

btnSearchEvent.addEventListener('click', searchEvent)

