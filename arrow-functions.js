// Etape 0
function disBonjour(prenom) {
	return `Bonjour ${prenom}`
}

// Etape 1
const disBonjour = function (prenom) {
	return `Bonjour ${prenom}`
}

// Etape 2
const disBonjour2 = (prenom) => {
	return `Bonjour ${prenom}`
}

// Etape 3
// Si ma fonction n'a qu'UN SEUL paramètre, alors je peux enlever les parenthèses à ce dernier
const disBonjour2 = prenom => {
	return `Bonjour ${prenom}`
}

// Etape 4
// Si ma fonction ne possède qu'une seule ligne ET que cette ligne est un return, je peux supprimer les accolades et le mot clé return afin de faire un 'return implicite'.
const disBonjour2 = prenom => `Bonjour ${prenom}`

function add(a, b) {
	return (a + b)
}

const add = function(a, b) {
	return (a + b)
}

const add = (a, b) => {
	return (a + b)
}

const add = (a, b) => (a + b)

function isEven(a, b) {
	return a % b
}

const isEven = (a, b) => a % b


// Transformer ces fonctions en arrow function (fonction flechée)