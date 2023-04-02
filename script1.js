const dataUserContainer = document.querySelector("[data-user-container]");
const dataUserTemplate = document.querySelector("[data-user-template]");


let files = [];

fetch("http://localhost:3000/films/1")
  .then(response => response.json())
  .then(data => {
      const card = dataUserTemplate.content.cloneNode(true).children[0];
      const title = card.querySelector("[data-title]");
      const runtime = card.querySelector("[data-runtime]");
      const capacity = card.querySelector("[data-capacity]");
      const showtime = card.querySelector("[data-showtime]");
      const ticket_sold = card.querySelector("[data-ticket_sold]");
      const description = card.querySelector("[data-description]");
      const poster = card.querySelector("[data-poster]");
      const available = card.querySelector("[data-available]");

      let avail1 = parseInt(data.capacity);
      let avail2 = parseInt(data.tickets_sold);

      title.textContent = data.title;
      runtime.textContent = data.runtime;
      capacity.textContent = data.capacity;
      showtime.textContent = data.showtime;
      ticket_sold.textContent = data.tickets_sold;
      description.textContent = data.description;
      poster.src = data.poster;
      available.textContent = parseInt(avail1 - avail2);

      dataUserContainer.append(card);
    })
  .catch(error => console.error(error));

  const dataFilmsTitle = document.querySelector("[data-user-films]");
  const dataFilmTmp = document.querySelector("[data-film-tmp]");
  
  fetch("http://localhost:3000/films")
    .then(response => response.json())
    .then(data => {
      data.map(file => {
        //console.log(file);
        const userFilms = dataFilmTmp.content.cloneNode(true).children[0];
        const films = userFilms.querySelector("[data-film_title]");
        const buy = document.createElement('button')
        let avail = userFilms.querySelector("[data-avail")
        buy.textContent = "Buy"
        const id = file.id
        let avail1 = parseInt(file.capacity);
        let avail2 = parseInt(file.tickets_sold);
        let available = 0
        let minus = 0
        available = avail1-avail2

        buy.addEventListener('click', ()=> {
            if(available > 0){
                minus++
                number = parseInt(file.tickets_sold);
                number2 = parseInt(file.capacity)
                avail.textContent = parseInt(number2) - parseInt(number) - parseInt(minus)
                if(parseInt(number2) - parseInt(number) - parseInt(minus)<=0){
                    alert("Tickets are sold out")
                }
            }
        })
  
        films.textContent = file.title;
        avail.textContent = available
        dataFilmsTitle.append(userFilms,buy );
      });
    });
  