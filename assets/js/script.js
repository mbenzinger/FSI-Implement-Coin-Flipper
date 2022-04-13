// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')
let flipButton = document.querySelector('#flipCoin')
let resetButton = document.querySelector('#resetScore')
let tcHeads = document.querySelector('#heads')
let tcTails = document.querySelector('#tails')
let tcheadspercent = document.querySelector('#heads-percent')
let tctailspercent = document.querySelector('#tails-percent')
let headCount = 0
let tailCount = 0
let totalCount = 0
let errImg = document.querySelector('#errImg')
let errMessage = document.querySelector('#statusMessage')
let errMessages = ['Ya all have any eggs? Cause I\'m totally going to mess someones house up!'
                    ,'Yeah, burn it!'
                    ,'The Earth is our moon!'
                    ,'You shall do as the Scorpions have done before you!'
                    ,'We smoke as we shoot the bird!'
                    ,'Man, you hear what I\'m saying?!'
                    ,'On the moon, nerds get their pants pulled down and they are spanked with moon rocks'
                    ,'Take two, mother muchachos!'
                    ,'Hand over those magazines!'
                    ,'We get checks from the government, and we use them to buy beer.']

    // TODO: Add event listener and handler for flip and clear buttons
flipButton.addEventListener('click', function() {
    let coinValue = Math.round(Math.random())
        totalCount++
    if (coinValue == 0) {
            errImg.src = './assets/images/penny-heads.jpg'
            headCount++
            errMessage.textContent = 'Hey, put me back!'
    }   else {
            errImg.src = './assets/images/penny-tails.jpg'
            tailCount++
            errMessage.textContent =  errMessages[Math.round(Math.random()*9)]
    }
    let percentheads = ((headCount / totalCount) * 100).toFixed(2)
    let percentTails = ((tailCount / totalCount) * 100).toFixed(2)
    tcHeads.textContent = headCount
    tcTails.textContent = tailCount
    tcheadspercent.textContent = percentheads
    tctailspercent.textContent = percentTails

})

resetButton.addEventListener('click', function()    {
    headCount = 0
    tailCount = 0
    totalCount = 0
    tcHeads.textContent = 0
    tcTails.textContent = 0
    tcheadspercent.textContent = "0%"
    tctailspercent.textContent = "0%"
    errImg.src = './assets/images/penny-tails.jpg'
    errMessage.textContent = 'Is your ego satisfied? DAMN NO! Let\'s get flippin\''
})
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})