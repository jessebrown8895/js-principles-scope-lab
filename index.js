var customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    
}
var bestCustomer 
function setBestCustomer(){
    bestCustomer = "not bob"
}

function overwriteBestCustomer(){
    return bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer(){
    throw 'Assignment to constant variable.'
}

changeLeastFavoriteCustomer()
