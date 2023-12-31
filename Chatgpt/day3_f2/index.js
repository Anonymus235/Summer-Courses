const setupTextarea = document.getElementById('setup-textarea') 
const setuploading = document.getElementById('output-container') 
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const OPENAI_API_KEY = process.env.OPENAI_API_KEY ; 
const url = "https://api.openai.com/v1/completions"


/*$(window).on('load', function(){ 
  $("#output-container").css('display','block');

});*/

document.getElementById("send-btn").addEventListener("click",()=> {
   //debugger;
   //var prompttext = $("#setup-textarea").val();
  // $("#output-container").css('display','block');   
    movieBossText.innerText = "Ok, just wait a second while my digital brain digests that...";
    // fetchBotReply(setupTextarea.value);
    fetchSynopsis(setupTextarea.value);
    })

function fetchSynopsis(prompttext) {
 var prompttext = $("#setup-textarea").val();
  fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY
      },
      body: JSON.stringify({
        'model':'text-davinci-003',
        'prompt': `I am interested in ${prompttext}. What is the best career option for me? Genrate a pointised note.`,
        'max_tokens':1000,
      })
      
    }).then(response => response.json()).then(data => {
      
      setTimeout(function() {
        $("#output-container").css('display','block');
        document.getElementById('output-text').innerText=data.choices[0].text
      }, 1000)}
    )
  }