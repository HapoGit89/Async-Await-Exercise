console.log("hello JS")

const draw = document.querySelector('#draw')
const shuffle = document.querySelector('#shuffle')
const output = document.querySelector('#outputList')
count = document.querySelector('#cardCount')

let deckId = ""
let currentCard = ""

async function shuffleDeck(){
    try{
    const resp = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    deckId = resp.data.deck_id
    count.innerHTML="Cards remaining in deck: 52/52"}
    catch(err){
        console.log("Sorry something went wrong", err)
    }
}

function renderCard(img){
    output.innerHTML=""
    const newImg = document.createElement('img')
    newImg.src = img
    output.append(newImg)

}

shuffle.addEventListener("click", function(e){
    e.preventDefault()
    shuffleDeck()
    output.innerHTML=""
    
})

draw.addEventListener("click", function(e){
    e.preventDefault()
    drawCard(deckId)
})

async function drawCard(deckId){
    try{
        const resp = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    renderCard(resp.data.cards[0].image)
    count.innerHTML=(`Cards remaining in deck: ${resp.data.remaining}/52`)}
   
    catch(err){
    console.log("Sorry something went wrong", err)
   }
}

shuffleDeck()