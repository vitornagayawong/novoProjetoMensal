btnCreateEvent = document.getElementById("btn-sent-form");

btnCreateEvent.addEventListener("click", (e) => {
   e.preventDefault();

   let txtTitle = document.getElementById("titulo").value

   let txtDescription = document.getElementById("descricao").value

   let date = document.getElementById("data").value

   let initialTime = document.getElementById("hrComeco").value

   let finalTime = document.getElementById("hrFim").value

   let records = document.getElementById("lembrete").value

   const event = new Event(txtTitle, txtDescription, date, initialTime, finalTime, urgencia, records)

   if (localStorage.length <= 0) {

      eventsList.push(event)        

      saveEventsLocalStorage(eventsList)

      appendListCards();        

   } else {

      eventsList = JSON.parse(localStorage.getItem("eventsListabc"))

      eventsList.push(event)        

      saveEventsLocalStorage(eventsList)

      appendListCards();
   }

   

   // eventsList = JSON.parse(localStorage.getItem("eventsListabc"))

   // eventsList.push(event)
   //    //    console.log(eventsList)   

   //    saveEventsLocalStorage(eventsList)

   //    appendListCards();
   //    console.log(event) 

   
   // indexCard++

})

