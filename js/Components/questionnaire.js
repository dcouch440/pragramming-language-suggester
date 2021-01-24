export const questionnaire = (data) => {
  const radioButton = (label, index, value) => {
    const isFirst = value === 1 ? 'checked' : null
    return `
      <div class="radio-button-row">
        <input type="radio" name="radioButton-${index}" value="${value}" ${isFirst}>
        <label class="form-check-label" for="radios1">${label}</label>
      </div>`
  }
  const questionMap = () => {
    return data.questions.map((question, questionsIndex) => {
      questionsIndex += 1
      return `
        <div class="question-container">
          <p class="question-title">${question}</p>
          <form class="radio-button-cluster">
            ${
              data.inputs.map(
                (input, value) => radioButton(input, questionsIndex, value + 1)
              ).join("")
            }
          </form>
        </div>`
    })
  }
  return questionMap().join('')
}