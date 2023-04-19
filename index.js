// console.log('Welcome');

function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function Display(){

}

// Add methods to display



// Add submit event listner to form libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    // the default behaviour of form is that it reloads the form
    console.log('You have submitted library form');
    // So we will prevent that;
    e.preventDefault();
    let name = document.getElementById('formName').value;
    let author = document.getElementById('Author').value;
    let type = document.getElementById('').value;
    let book = new Book(name,author,type);

}


