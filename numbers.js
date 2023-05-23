console.log("Hello its JS")

const button = document.querySelector('#button')
const input = document.querySelector('#favNumber')
const output = document.querySelector('#outputList')



function appendTrivia(triv){
    const newLi = document.createElement('li')
        newLi.innerHTML = triv
        output.append(newLi)

}

async function getNumTrivia(number){
    let PromiseArr = []
    let factArr = []
    try {
        for (let i =0; i <4; i++){
            PromiseArr.push(
                axios.get(`http://numbersapi.com/${number}/trivia?json`)
            )
        }

        let numbers = await Promise.all(PromiseArr)
        
        numbers.forEach(n=>appendTrivia(n.data.text))
    }
    catch (err) {
        console.log("Sorry something went wrong", err)
    }
    
    
    
    
}

button.addEventListener("click", function(e){
    e.preventDefault()
    output.innerHTML=""
    getNumTrivia(input.value)
  
 

})



