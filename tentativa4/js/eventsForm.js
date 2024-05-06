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

//    console.log(event)

   eventsList.push(event)

//    console.log(eventsList)

   saveEventsLocalStorage(eventsList)
   
})