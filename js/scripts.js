import { questionnaire } from './Components/questionnaire.js'
import * as utils from './utils.js'

const getRoot = () => {
  const rootId = document.getElementById('questionnaire')
  rootId.innerHTML = questionnaire(utils.getQuestions())
}
getRoot()

$(document).ready(function() {
  $('#submit-button').click(function(event) {
    event.preventDefault()
    const input1_store = parseInt($("input:radio[name=radioButton-1]:checked").val())
    const input2_hair = parseInt($("input:radio[name=radioButton-2]:checked").val())
    const input3_microphone = parseInt($("input:radio[name=radioButton-3]:checked").val())
    const input4_bottle = parseInt($("input:radio[name=radioButton-4]:checked").val())
    const input5_dog = parseInt($("input:radio[name=radioButton-5]:checked").val())
    const totalValue = input1_store + input2_hair + input3_microphone + input4_bottle + input5_dog
    
    $('#greet-message').hide()
    $('#submit-button').hide()
    $('#start-over-button').show()
    
    if (totalValue > 15) {
      $('#ruby').show()
    } else if (totalValue > 7) {
      $('#react').show()
    } else if (totalValue > 5) {
      $('#html').show()
    } else {
      $('#base-value').show()
    }
  })
  $('#start-over-button').click(function(){
    location.reload()
  })
})