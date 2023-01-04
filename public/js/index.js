
// francois
let francois = {
    panier : ['tomate', 'lait', 'patate', 'carotte', 'pain'],
    derober(sergio){
        francois.panier.push(sergio.panier.pop(), sergio.panier.pop())
    }
}
// sergio
let sergio = {
    panier : ['courgette', 'glace', 'thon','jus', 'coca', ],
}
console.log(francois.panier);
console.log(sergio.panier);
francois.derober(sergio)
console.log(francois.panier);
console.log(sergio.panier);
