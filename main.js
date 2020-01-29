const ducks = [
{   color: 'blue',
    isRubber: true,
    gender: 'male',
    isMigrator: false,
    socialStatus: "ready to mingle",
    diet: "vegan",
    age: 47,
    featherNum: 0,
    name: 'kobe',
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpq1XxMlbN5iBleEEsst-hUCBG_IdyMoJ-nNlHswTEtryvAaaI1Q&s",
},
{
    color: 'pink',
    isRubber: true,
    gender: 'female',
    isMigrator: false,
    socialStatus: "ready to mingle",
    diet: "vegan",
    age: 47,
    featherNum: 0,
    name: 'gia',
    imageUrl:"https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/740/9733/Coffee-Time-Pink-Rubber-Duck-Adline-1__04482.1568320205.jpg?c=2&imbypass=on ",
},
{
    color: 'blue',
    isRubber: true,
    gender: 'male',
    isMigrator: false,
    socialStatus: "ready to mingle",
    diet: "vegan",
    age: 47,
    featherNum: 0,
    name: 'mikey',
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpq1XxMlbN5iBleEEsst-hUCBG_IdyMoJ-nNlHswTEtryvAaaI1Q&s",
},
{
    color: 'silver',
    isRubber: true,
    gender: 'male',
    isMigrator: false,
    socialStatus: "ready to mingle",
    diet: "vegan",
    age: 47,
    featherNum: 0,
    name: 'papa',
    imageUrl:"https://www.scullyandscully.com/productimages/image.axd/f.41963/w.900/h.900/sterling+silver+duck%2C+sitting.jpg",
},
{
    color: 'silver',
    isRubber: true,
    gender: 'male',
    isMigrator: false,
    socialStatus: "ready to mingle",
    diet: "vegan",
    age: 47,
    featherNum: 0,
    name: 'bobby',
    imageUrl:"https://www.scullyandscully.com/productimages/image.axd/f.41963/w.900/h.900/sterling+silver+duck%2C+sitting.jpg",
},
{
    color: 'pink',
    isRubber: false,
    gender: 'female',
    isMigrator: false,
    socialStatus: "ready to mingle",
    diet: "vegan",
    age: 47,
    featherNum: 0,
    name: 'queeny',
    imageUrl:"https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/740/9733/Coffee-Time-Pink-Rubber-Duck-Adline-1__04482.1568320205.jpg?c=2&imbypass=on ",
},
{
    color: 'pink',
    isRubber: false,
    gender: 'female',
    isMigrator: false,
    socialStatus: "ready to mingle",
    diet: "vegan",
    age: 47,
    featherNum: 0,
    name: 'paris',
    imageUrl:"https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/740/9733/Coffee-Time-Pink-Rubber-Duck-Adline-1__04482.1568320205.jpg?c=2&imbypass=on ",

},
{
    color: 'silver',
    isRubber: false,
    gender: 'male',
    isMigrator: false,
    socialStatus: "ready to mingle",
    diet: "vegan",
    age: 47,
    featherNum: 0,
    name: 'diddy',
    imageUrl:"https://www.scullyandscully.com/productimages/image.axd/f.41963/w.900/h.900/sterling+silver+duck%2C+sitting.jpg"

},

];
const printToDom = (divId,textToPrint) => {
    const selectedDiv= document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const duckPrinter = (quacks)=> {
    let domString = '';
    for(let i = 0; i < quacks.length; i++){
     domString+= '<div class="col-md-6 col-lg-4 card-separation">';
     domString+= '<div class="card">';
     domString+=`<img src="${quacks[i].imageUrl}" class="card-img-top" alt="...">`;
    domString +='<div class="card-body">';
    domString+=`<h5 class="card-title">${quacks[i].name}</h5>`;
    domString+=`<p class="card-text">${quacks[i].socialStatus}</p>`;
    domString+=`<p class="card-text">${quacks[i].diet}</p>`;
    domString+= '</div>';
    domString+= '</div>';
    domString+= '</div>';

    }
    printToDom('ducks',domString);
};

const choseBlue = ()=>{
    console.log('blue!');
};
const chosePink = ()=>{
    console.log('pink!')
};
const choseSilver =()=>{
    console.log('silver!')
};


const events= () => {
    document.getElementById('blue').addEventListener('click', choseColor);
    document.getElementById('pink').addEventListener('click', choseColor);
    document.getElementById('silver').addEventListener('click', choseColor);
    document.getElementById('female').addEventListener('click', choseGender);
    document.getElementById('male').addEventListener('click', choseGender);
    document.getElementById('male').addEventListener('click', isRubber);
    
    
};
const init = ()=> {
    duckPrinter(ducks);
    events();
}
init();

console.log(ducks);