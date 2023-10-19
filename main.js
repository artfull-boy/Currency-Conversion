let curr = document.querySelector("#amount");
let converted = document.querySelector("#converted")
let amount_input = document.querySelector(".amount")
let selectors = document.querySelectorAll(".converter > div > div > select");
let result_text = document.querySelector(".converted_input p");
let currency_data;
let startCurrency;
let endCurrency;
let amount;
 fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_SZzVg9zdE5LurPkhJjRKOvvFJk3qogOhgzfoKZR7")
        .then((result) => {return result.json()})
        .then ((result) => {return currency_data = result.data})
        .then((result) => {
            for (val in result) {
                let option = `<option value="${val}">${val}</option>`
                selectors[0].innerHTML += option;
                selectors[1].innerHTML += option;
            }
        })
        .catch((err) => console.log(err));


curr.addEventListener("change", () => {
    startCurrency = curr.value;
})
converted.addEventListener("change", () => {
    endCurrency = converted.value;
})
amount_input.addEventListener("input", () => {
    amount = amount_input.value;
})
function display_result() {
    if (startCurrency && endCurrency && amount) {
            let conversionRate = currency_data[endCurrency].value / currency_data[startCurrency].value;
            let convertedAmount = (amount * conversionRate).toFixed(2)
            result_text.textContent = convertedAmount;   
        }
    }
let counter = setInterval(display_result,1000)

