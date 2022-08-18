let termekek = [];

class Termek {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};

//let apple = new Termek('Alma',500);

let productList = document.getElementById("termekek");
let sablon = " ";

function render() {
    for (termek of termekek) {
        sablon = `
    <div class="card" style="width: 12.5rem; text-align:center; margin-top:20px; margin-right:12px; background-color:#9C6ADC";  >
    <div class="card-body">
      <h5 class="card-title" style="color:white">${termek.name}</h5>
      <p class="card-text"  style="color:white">${termek.price} Ft</p>
    </div>
  </div>`;
    }
    productList.innerHTML += sablon;
}

let forms = document.getElementById('forms');


forms.onsubmit = function (e) {
    e.preventDefault();
    let name = e.target.elements.name.value;
    let price = e.target.elements.price.value;

    if (name != '' && price != '') {
        termekek.push(new Termek(name, price));
    }
    else {
        alert('Hiányzó adatok!')
        return;
    };

    render()
    console.log(termekek);
}

