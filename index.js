const checkbox = document.getElementById("checkbox")
const basicPriceDisplay= document.getElementById("basicDisplay")
const proPriceDisplay = document.getElementById("proDisplay")
const masterPriceDisplay = document.getElementById("masterDisplay")

const priceAnnually =[199.99,249.99,399.99]
const priceMonthly =[19.99,24.99,39.99]



const changePrice = ()=>{

    if( checkbox.checked){

        basicPriceDisplay.innerText = priceMonthly[0]
        proPriceDisplay.innerText = priceMonthly[1]
        masterPriceDisplay.innerText = priceMonthly[2]
    
    }else{
    
        basicPriceDisplay.innerText = priceAnnually[0]
        proPriceDisplay.innerText = priceAnnually[1]
        masterPriceDisplay.innerText = priceAnnually[2]
    }

}

checkbox.addEventListener("change", changePrice)