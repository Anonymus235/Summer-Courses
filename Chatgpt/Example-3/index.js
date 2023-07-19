let setupTextarea = document.getElementById('setup-textarea')
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

document.getElementById('send-btn').addEventListener("click",()=>{
    setupInputContainer.innerHTML = '<img src="images/loading.svg" class="loading" id="loading">'
    movieBossText.innerText = 'Ok,just wait a second while my digital brain digests that ...'
    fetchBotReply(setupTextarea.value)
})
// const apiKey = ("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")
const url = "https://api.openai.com/v1/completions"
function fetchBotReply(value){
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer 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 '
        },
        body:JSON.stringify({
            'model':'text-davinci-003',
            'prompt': value
        })
    }).then(response=>response.json()).then(data=>movieBossText.innerText=data.choices[0].text)
}