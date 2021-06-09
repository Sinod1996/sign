
function openClose() {
    let openNav = document.querySelector('.fa-bars');
    let closeNav = document.querySelector('.fa-times');
    let navBar = document.querySelector('.nav-bar');



    openNav.addEventListener('click', function () {

        navBar.style.transform = 'translateY(0%)';
        navBar.style.width = '100%';
        navBar.style.height = '500px';
        navBar.style.background = '#000033';
        navBar.style.transition = ' 0.5s';


    })

    closeNav.addEventListener('click', function () {
        navBar.style.transform = 'translateY(-350%)';

    })

}

openClose();





function personBlocks() {



    let secOne = document.querySelector('.sec-one');
    let blockDiv = document.createElement('div');
    blockDiv.classList.add('block-div');
    secOne.append(blockDiv);

    let person = [

        { img: './images/img1.png' },
        { img: './images/img2.png' },
        { img: './images/img3.png' },
        { img: './images/img4.png' },
    ]

    for (let item of person) {
        let divImg = document.createElement('div');
        divImg.classList.add('item');
        divImg.innerHTML = `<img src = ${item.img} />`;
        blockDiv.append(divImg);

    }

}

personBlocks()


function iconBlocks() {
    let SecThreeCont = document.querySelector('.sec-three-cont');

    let icons = [
        {
            img: './images/icon1.png',
            title: 'Naxly as the Winners in Global Agency Awards',
            text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
        },

        {
            img: './images/icon2.png',
            title: 'Expert Prespective Agency Awards',
            text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
        },

        {
            img: './images/icon3.png',
            title: 'Business Prespective Global Agency Awards',
            text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
        },

        {
            img: './images/icon4.png',
            title: 'Value for Results in Global Agency Awards',
            text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
        },

        {
            img: './images/icon5.png',
            title: 'Global Experience in Agency Awards',
            text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
        },
    ]

    for (let icon of icons) {
        let iconDiv = document.createElement('div');
        iconDiv.classList.add('icon-div');
        iconDiv.innerHTML =
            `<img src = ${icon.img} />
         <h3>${icon.title}</h3>
          <p>${icon.text}</p>`
        SecThreeCont.append(iconDiv);

    }


}

iconBlocks()




let modalBtn = document.querySelector(".btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.addEventListener('click', function () {
    modal.style.display = "block"
})
closeBtn.addEventListener('click', function () {
    modal.style.display = "none"
})
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
})