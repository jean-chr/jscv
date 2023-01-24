
function image(file) {
  let image = document.querySelector('input[type=file]').files[0]
  let imgv = document.querySelector('#preview')

  var p = new FileReader()
  p.addEventListener("load", () => {
    imgv.src = p.result
  }, false)
  if (image) {
    p.readAsDataURL(image)
  }
}


//pour les textarea
let textarea = document.querySelectorAll("#description,textarea")
for (const i of textarea) {
  i.addEventListener("keyup", () => {
    let description = document.getElementById("description").value
    document.querySelector("#vdescription").innerHTML = description
    let competances = document.querySelector("#competances")
    let vcompetances = document.querySelector("#vcompetances")
    vcompetances.innerHTML = competances.value
  })
}

//pour les inputs
let input = document.querySelectorAll("input")
for (const i of input) {
  i.addEventListener("keyup", () => {
    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let pays = document.getElementById("pays").value
    let numero = document.getElementById("numero").value
    let sexe = document.getElementById("sexe").value
    document.querySelector("#vsexe").innerHTML = sexe
    document.querySelector("#vfullname").innerHTML = "<b> <span class='text-primary'>" + nom.toUpperCase() + "</span> " + prenom + "</b>"
    document.querySelector("#vemail").innerHTML = ' <a href="mailto:' + email.toLowerCase() + '"><strong>' + email.toLowerCase() + "</strong></a>"
    document.querySelector("#vtel").innerHTML = "<strong>telephone: " + numero+"</strong>"
    document.querySelector("#vage").innerHTML = "<strong>Age : " + age + " ans</strong>"
    document.querySelector("#vpays").innerHTML = "<strong>pays :" + pays.toUpperCase()+"</strong>"

  })
}

//competence

function addparcours() {
  let formation = document.getElementById("formation").value
  let debut = document.getElementById("debut").value
  let fin = document.getElementById("fin").value
  if (!formation == "" || !fin == "" || !debut == "") {
    parcours(formation, debut, fin)
  } else {
    alert("champs vide")
  }
  debut = ""
  formation = ""
  fin = ""
}

function creerelement(elt) {
  return document.createElement(elt)
}

function appendelement(pere, elt) {
  return pere.appendChild(elt)
}

function parcours(formation, debut, fin) {
  let parcours = document.querySelector('.vparcours')
  let hr = creerelement("hr")
  appendelement(parcours, hr)
  let description = creerelement("p")
  description.id = formation
  description.class = "text-danger"
  description.innerHTML = "Formation: <strong>" + formation + " </strong> DU:  <strong>" + debut + " </strong> AU :  <strong>" + fin+" </strong>"
  appendelement(parcours, description)

}