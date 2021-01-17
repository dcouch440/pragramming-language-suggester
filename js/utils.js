export const getQuestions = () => {
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
  return { questions, inputs }
}
