
//add aetm //ok
// themeMode //ok
//seav in locl storg//ok
//cler data// ok
//searshInData //ok
//delat data own and all aetm  //ok
//read data   //ok
//updeat data 
// sign in pag



class ProductManager {
  constructor() {
    this.dataAll = localStorage.proDact ? JSON.parse(localStorage.proDact) : [];
    this.titel = document.getElementById("tatel");
    this.type = document.getElementById("type");
    this.price = document.getElementById("price");
    this.mathse = document.getElementById("mathse");
    this.delatAll = document.getElementById("delatAll");
    this.search = document.getElementById("search");
    this.newFunction();


  }
  newFunction() {
    if (localStorage.getItem("themeMode") === "dark") {
      this.addCssDark();
    } else {
      localStorage.setItem("themeMode", "light");
    }
  }

  changeTheme() {
    if (localStorage.getItem("themeMode") === "light") {
      this.addCssDark();
      localStorage.setItem("themeMode", "dark");
    } else {
      document.getElementById("masdark").remove();
      document.getElementById("toggles").classList.remove("active");
      localStorage.setItem("themeMode", "light");
      document.getElementById("toggles").title = "Change to dark mode";
    }
  }

  addCssDark() {
    const newLocal = `<style id="masdark">html, html 
  * {color: #eeeeee !important;background-color: #292929 !important;} 
  a {color: #8db2e5 !important;}
  a:visited {color:rgb(211, 138, 138) !important;}
  #toggles.active {background: #fff !important;}
  .search input,.input input {color:#fff !important;border: 2px solid #fff !important;}
  input:hover::placeholder,
  input:hover {background-color:#fff !important;color:#000 !important;}
.butonTabol:hover {background-color:rgb(221, 21, 68) !important;}
.search button,

.input button{border:1px solid #fff !important;}
.search button:hover,
.input button:hover {background-color:#fff !important;color:#000 !important;}
input::placeholder{color: #fff !important;}
table th{background:#0a15e4 !important;}
th,
td {border: 1px solid #fff !important;padding: 5px 0;}
    </style>`;
    document.head.innerHTML = document.head.innerHTML + newLocal;
    document.getElementById("toggles").classList.add("active");
    document.getElementById("toggles").title = "Change to light mode";
  }

  dataRcust() {
    let reaslt = +this.price.value * +this.mathse.value;
    let nweData = {
      Titel: this.titel.value.toLowerCase(),
      Type: this.type.value.toLowerCase(),
      Price: this.price.value,
      Mathse: this.mathse.value,
      Reaslt: reaslt,
    };
    if (
      this.titel.value != "" &&
      this.type.value != "" &&
      this.price.value != "" &&
      this.mathse.value != ""
    ) {
      this.dataAll.push(nweData);
      this.clerData();
    } else {
      alert("You must enter valid data.");
    }
    localStorage.setItem("proDact", JSON.stringify(this.dataAll));
    this.shoData();
  }

  clerData() {
    this.titel.value = "";
    this.type.value = "";
    this.price.value = "";
    this.mathse.value = "";
  }

  shoData() {
    let tabol = ``;
    for (let i = 0; i < this.dataAll.length; i++) {
      tabol += `
  <tr>  
  <td>${i + 1} </td>
  <td> ${this.dataAll[i].Titel}</td>
  <td> ${this.dataAll[i].Type}</td>
  <td> ${this.dataAll[i].Mathse} </td>
  <td> ${this.dataAll[i].Price} $</td>
  <td> ${this.dataAll[i].Reaslt} $ </td>
  <td> <button type="delet" onclick="delatOwnIetm(${i})" class="butonTabol" id="delet">delet</button> </td></> 
        </tr >
  `;
    }
    document.getElementById("tbody").innerHTML = tabol;

    if (this.dataAll.length > 0) {
      delatAll.innerHTML = `
  <button type = "delatAll" onclick = "delatAllAetm()" class="butonTabol" > Delat All</button>
    `;
    } else {
      delatAll.innerHTML = "";
    }
  }
  searchData() {
    let tabol = ``;
    for (let i = 0; i < this.dataAll.length; i++) {
      if (this.dataAll[i].Titel.includes(search.value.toLowerCase()) || this.dataAll[i].Type.includes(search.value.toLowerCase())) {
        tabol += `
          <tr>
            <td>${i + 1} </td>
            <td> ${this.dataAll[i].Titel}</td>
            <td> ${this.dataAll[i].Type}</td>
            <td> ${this.dataAll[i].Mathse} </td>
            <td> ${this.dataAll[i].Price} $</td>
            <td> ${this.dataAll[i].Reaslt} $ </td>
            <td> <button type="delet" onclick="delatOwnIetm(${i})" class="butonTabol" id="delet">delet</button> </td> 
        </tr>
  `;

      }
    }
    document.getElementById("tbody").innerHTML = tabol;
  }

}

const productManager = new ProductManager();
productManager.shoData();


function delatOwnIetm(i) {
  productManager.dataAll.splice(i, 1);
  localStorage.proDact = JSON.stringify(productManager.dataAll);
  productManager.shoData();
}
function delatAllAetm(i) {
  localStorage.clear();
  productManager.dataAll.splice(0);
  productManager.shoData();
}



