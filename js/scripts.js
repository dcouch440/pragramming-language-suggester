const questionMapper = () => {
  const questions = [
    "A walk to the store should take three or more hours", 
    "A comb is better than a brush", 
    "A micraphone is just a speaker in reverse",
    "A plastic bottle weighs as much as a glass bottle",
    "A dog is as fast as a cheetah"
  ]
  const questionMap = () => {
    let iteration = 0
    return questions.map(question => {
      iteration += 1
      return `
        <div class="question-container">
          <p class="question-title">${question}</p>
          <div class="radio-button-cluster">
            <div class="radio-button-row">
              <input type="radio" name="radioButton-${iteration}" id="radios1" value="1" checked>
              <label class="form-check-label" for="radios1">Agree Greatly</label>
            </div>
            <div class="radio-button-row">
              <input type="radio" name="radioButton-${iteration}" id="radios2" value="2">
              <label class="form-check-label" for="radios2">Agree Kinda</label>
            </div>
            <div class="radio-button-row">
              <input type="radio" name="radioButton-${iteration}" id="radios3" value="3">
              <label class="form-check-label" for="radios3">Disagree Kinda</label>
            </div>
            <div class="radio-button-row">
              <input type="radio" name="radioButton-${iteration}" id="radios4" value="4">
              <label class="form-check-label" for="radios4">Disagree Greatly</label>
            </div>
          </div>
        </div>`
    })
  }
  return questionMap().join('')
}
const getRoot = () => {
  const rootId = document.getElementById('questionnaire')
  rootId.innerHTML = questionMapper()
}
getRoot()

$(document).ready(function() {
  $('#submit-button').click(function(event) {
    event.preventDefault()
    const input1_store = parseInt($("input:radio[name=radioButton-1]:checked").val())
    const input2_hair = parseInt($("input:radio[name=radioButton-2]:checked").val())
    const input3_micraphone = parseInt($("input:radio[name=radioButton-3]:checked").val())
    const input4_bottle = parseInt($("input:radio[name=radioButton-4]:checked").val())
    const input5_dog = parseInt($("input:radio[name=radioButton-5]:checked").val())
    const totalValue = input1_store + input2_hair + input3_micraphone + input4_bottle + input5_dog
    
    $('#greet-message').hide()
    $('#submit-button').hide()
    
    if (totalValue > 15) {
      $('#ruby').show()
      $('#start-over-button').show()
    } else if (totalValue > 5) {
      $('#react').show()
      $('#start-over-button').show()
    } else {
      $('#html').show()
      $('#start-over-button').show()
    }
  })
  $('#start-over-button').click(function(){
    location.reload()
  })
})