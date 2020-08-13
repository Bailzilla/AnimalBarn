let html = " ";

for (let i=0; i<pets.length; i++) {
    let pet = pets[i];
    html += `
    <div class="col" id="${pet.id}">
    <img src="${pet.pic}" alt="picture of ${pet.name}">
    <h2>${pet.name}</h2>
    <p><strong>DOB:</strong> ${pet.DOB}</p>
    <p><strong>Nicknames:</strong> ${pet.nicknames}</p>
    <p><strong>Favorite Toy:</strong> ${pet.toy}</p>
    </div>
    `
}

document.querySelector('main').insertAdjacentHTML('beforeend',html);