let main = document.querySelector('main')

pets.forEach (pet => {
    main.innerHTML += `
    <div class="col" id="${pet.id}">
    <img src="${pet.pic}" alt="picture of ${pet.name}">
    <h2>${pet.name}</h2>
    <p><strong>DOB:</strong> ${pet.birth}</p>
    <p><strong>Nicknames:</strong> ${pet.nick}</p>
    <p><strong>Favorite Toy:</strong> ${pet.toy}</p>
    </div>
    `
    })

