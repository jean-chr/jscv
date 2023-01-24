let input = document.querySelectorAll("input")
let parc = 0
let add = document.querySelector("#nombre")


function perviewi(file) {
  let img = document.querySelector('input[type=file]').files[0]
  let imgv = document.querySelector('#preview')

  var p = new FileReader()
  p.addEventListener("load", () => {
    imgv.src = p.result
  }, false)

  if (img) {
    p.readAsDataURL(img)
  }

}


for (const i of input) {
  i.addEventListener("keyup", () => {
    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let pays = document.getElementById("pays").value
    let tel = document.getElementById("tel").value
    let textarea1 = document.getElementById("textarea1").value


    informations(nom, prenom, email, age, tel, pays, textarea1)
    parcourv()
    text()
  })
}



function informations(nom, prenom, email, age, tel, pays, description) {
  document.querySelector("#vfullname").innerHTML =
    "<b> <span class='text-primary'>" + nom.toUpperCase() + "</span> " + prenom + "</b>"

  document.querySelector("#vemail").innerHTML =
    ' <a href="mailto:' +
    email.toLowerCase() +
    '">' +
    email.toLowerCase() +
    "</a>"

  document.querySelector("#vtel").innerHTML = "telephone: " + tel
  document.querySelector("#vdescription").innerHTML = "<strong class='text-center '>"+description+"</strong"
  document.querySelector("#vage").innerHTML = "Age : " + age + " ans"
  document.querySelector("#vpays").innerHTML = "pays :" + pays.toUpperCase()

}

function creerelement(elt) {
  return document.createElement(elt)
}

function appendelement(pere, elt) {
  return pere.appendChild(elt)
}



add.addEventListener("click", () => {
  parc += 1
  let pc = document.getElementById("pc")

  let description = creerelement("input")
  description.id = "libelle" + parc
  description.type = "text"
  description.placeholder = " nom de la formation"
  appendelement(pc, description)
  let ddate = creerelement("input")
  ddate.id = "ddate" + parc
  ddate.type = "date"
  appendelement(pc, ddate)
  let fdate = creerelement("input")
  fdate.id = "fdate" + parc
  fdate.type = "date"
  appendelement(pc, fdate)
  let hr = creerelement("hr")
  appendelement(pc, hr)


  //visuel 
  let vparc = document.getElementById("vparcours")

  let vdescription = creerelement("p")
  vdescription.id = "vlibelle" + parc
  vdescription.className = "align-self-start"
  vdescription.innerHTML = "Nom de la formation"

  let vdate1 = creerelement("p")
  vdate1.id = "vddate" + parc
  vdate1.className = "align-self-center"
  vdate1.innerHTML = "date du debut"

  let vdate2 = creerelement("p")
  vdate2.className = "align-self-end"
  vdate2.id = "vfdate" + parc
  vdate2.innerHTML = "date fin "

  let hr2 = creerelement("hr")
  appendelement(vparc, hr2)
  let div = creerelement("div")
  div.className = "d-flex justify-content-between liste"
  appendelement(vparc, div)
  appendelement(div, vdescription)
  appendelement(div, vdate1)
  appendelement(div, vdate2)

})




function parcourv() {


  for (let index = 0; index <= parc; index++) {

    let parcourslib = document.getElementById("libelle" + index).value
    let parcoursddate = document.getElementById("ddate" + index).value
    let parcoursfdate = document.getElementById("fdate" + index).value

    let vdescription = document.querySelector("#vlibelle" + index)
    let vparcoursddate = document.querySelector("#vddate" + index)
    let vparcoursfdate = document.querySelector("#vfdate" + index)

    vdescription.innerHTML = parcourslib
    vparcoursddate.innerHTML = "Du " + parcoursddate
    vparcoursfdate.innerHTML = "Au " + parcoursfdate

  }

}
//competances

let competances = document.querySelector("#competances")
competances.addEventListener('keyup', () => {
  text()
})

function text() {
  let vcompetances = document.querySelector("#vcompetances")
  vcompetances.innerHTML = competances.value
}


function pdf() {  
 alert('imprimer')
};
