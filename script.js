const dataUserContainer = document.querySelector("[data-user-container]")
const dataUserTemplate = document.querySelector("[data-user-template]")

let files = []

fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then(data =>{
      files => data.map(file=>{
          console.log(file)
          const card = dataUserTemplate.content.cloneNode(true).children[0]
          const title = card.querySelector("[data-title]")
          const runtime = card.querySelector("[data-runtime]")
          const capacity = card.querySelector("[data-capacity]")
          const showtime = card.querySelector("[data-showtime]")
          const ticket_sold = card.querySelector("[data-ticket_sold]")
          const description = card.querySelector("[data-description]")
          //const poster = card.querySelector("[data-poster]")

          title.textContent =file.title
          runtime.textContent = file.runtime
          capacity.textContent = file.capacity
          showtime.textContent = file.showtime
          ticket_sold.textContent = file.ticket_sold
          description.textContent = file.description
          poster.textContent = file.poster

          dataUserContainer.append(card)

        }
      )}
)


