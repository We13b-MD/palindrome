const input = document.getElementById('text-input')
const checkbutton = document.getElementById('check-btn')
const resultDiv = document.getElementById('result')

const palindromeChecker = (input) => {
  const MainInput = input
  if (input === '') {
    alert('Please insert a word')
    return
  }

  resultDiv.replaceChildren()
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
  const resultMessage = `<strong> ${MainInput}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'}
    a palindrome `
  const pTag = document.createElement('p')
  pTag.className = 'user-input'
  pTag.innerHTML = resultMessage
  resultDiv.appendChild(pTag)
  resultDiv.classList.remove('hidden')
}

checkbutton.addEventListener('click', () => {
  palindromeChecker(input.value)
  input.value = ''
})

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    palindromeChecker(input.value)
    input.value = ''
  }
})

module.exports = palindromeChecker
