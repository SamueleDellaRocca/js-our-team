let membriStaff = [

    personaUno = {
        nome: 'Angela Caroll',
        lavoro: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },

    personaDue = {
        nome: 'Walter Gordon',
        lavoro: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg',
    },

    personaTre = {
        nome: 'Angela Lopez',
        lavoro: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg',
    },

    personaQuattro = {
        nome: 'Scott Estrada',
        lavoro: 'Developer',
        foto: 'img/scott-estrada-developer.jpg',
    },

    personaCinque = {
        nome: 'Barbara Ramos',
        lavoro: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg',
    }

]


function creaCarta(immagine, nomePersona, posizione) {

    const divContainer = document.querySelector('.team-container');

    const divTeamCard = document.createElement('div');
    divTeamCard.classList.add('team-card');
    divContainer.append(divTeamCard);

    const divCardImage = document.createElement('div');
    divCardImage.classList.add('card-image');
    divCardImage.innerHTML = `<img src="${immagine}" alt="${nomePersona}" />`;
    divTeamCard.append(divCardImage);

    const divCardText = document.createElement('div');
    divCardText.classList.add('card-text');
    divTeamCard.append(divCardText);

    const h3Nome = document.createElement('h3');
    h3Nome.innerHTML = `${nomePersona}`;
    divCardText.append(h3Nome);

    const pLavoro = document.createElement('p');
    pLavoro.innerHTML = `${posizione}`;
    divCardText.append(pLavoro);

}

for (let chiaviOggetto in membriStaff) {
    creaCarta(membriStaff[chiaviOggetto].foto, membriStaff[chiaviOggetto].nome, membriStaff[chiaviOggetto].lavoro);
}


//BONUS
const btnAdd = document.getElementById('addMemberButton');

function creaCarta2() {
    let inputName = document.getElementById('name');
    let inputRole = document.getElementById('role');
    let inputImage = document.getElementById('image');
    creaCarta(inputImage.value, inputName.value, inputRole.value);
    inputName.value = '';
}

btnAdd.addEventListener('click', creaCarta2);


