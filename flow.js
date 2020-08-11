let html = " ";

for (let i=0; i<pets.length; i++) {
    let pet = pets[i];
    html += `
    <img src="${pet.pic}" alt="picture of ${pet.name}"
    <h2>${pet.name}</h2>
    <h3>DOB: ${pet.DOB}</h3>
    <p>Nicknames: ${pet.nicknames}</p>
    <p>Favorite Toy: ${pet.toy}</p>
    `
}

document.querySelector('main').insertAdjacentHTML('beforeend',html);