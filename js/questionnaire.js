export const questionMapper = () => {
  const questions = [
    'A walk to the store should take three or more hours', 
    'A comb is better than a brush', 
    'A micraphone is just a speaker in reverse',
    'A plastic bottle weighs as much as a glass bottle',
    'A dog is as fast as a cheetah'
  ]
  const inputs = [
    'Agree Greatly',
    'Agree Kinda',
    'Disagree Kinda',
    'Disagree Greeatly'
  ]
  const radioButton = (label, index, value) => {
    const isFirst = value === 1 ? 'checked' : null
    return `
      <div class="radio-button-row">
        <input type="radio" name="radioButton-${index}" value="${value}" ${isFirst}>
        <label class="form-check-label" for="radios1">${label}</label>
      </div>`
  }
  const questionMap = () => {
    return questions.map((question, questionsindex) => {
      questionsindex += 1
      return `
        <div class="question-container">
          <p class="question-title">${question}</p>
          <form class="radio-button-cluster">
            ${
              inputs.map(
                (input, value) => radioButton(input, questionsindex, value + 1)
              ).join("")
            }
          </form>
        </div>`
    })
  }
  return questionMap().join('')
}