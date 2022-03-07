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

for (let index = 0; index < 5; index++) {
    creaCarta(membriStaff[index].foto, membriStaff[index].nome, membriStaff[index].lavoro);
}



const inputName = document.getElementById('name').value;
const inputRole = document.getElementById('role').value;
const inputImage = document.getElementById('image').value;
const btnAdd = document.getElementById('addMemberButton');

btnAdd.addEventListener('click', creaCarta(inputImage, inputName, inputRole));
