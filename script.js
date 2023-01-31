const userValue = document.getElementById('value-inp')
const convertBtn = document.getElementById('convert-btn')

const lengthP = document.getElementById('length-val')
const volumeP = document.getElementById('volume-val')
const massP = document.getElementById('mass-val')


convertBtn.addEventListener("click", () => {
    lengthP.textContent = length(Number(userValue.value))
    volumeP.textContent = volume(Number(userValue.value))
    massP.textContent = mass(Number(userValue.value))

    userValue.value = ""
})

function length(num) {
  const feet = num * 3.281
  const meters = num * 0.3048
  
   return `${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meters.toFixed(3)} meters`
   
}
function volume(num) {
    const gallons = num * 0.264
    const liters = num * 3.785411784
    
     return `${num} liters = ${gallons.toFixed(3)} gallons | ${num} gallons = ${liters.toFixed(3)} liters`
     
    }
    function mass(num) {
    const pounds = num * 2.205
    const kilos = num * 0.4536
    
    return `${num} kilos = ${pounds.toFixed(3)} pounds | ${num} pounds = ${kilos.toFixed(3)} kilos`

}
