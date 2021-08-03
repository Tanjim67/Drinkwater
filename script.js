const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percent = document.getElementById('percent')
const remained = document.getElementById('remained')



smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightcups(idx))
})

updateBigCup()

function highlightcups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')
        }

    })

    updateBigCup()
}

function updateBigCup() {
    const fullcup = document.querySelectorAll('.cup-small.full').length
    const totalcup = smallCups.length

    if (fullcup === 0) {
        percent.style.visibility = 'hidden'
        percent.style.height = 0
    } else {
        percent.style.visibility = 'visible'
        percent.style.height = `${fullcup / totalcup * 330}px`
        percent.innerText = `${fullcup / totalcup * 100}%`
    }

    if (fullcup === totalcup) {
        percent.style.color = "#116125"
        remained.style.visibility = "hidden"
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullcup / 1000)}L`
    }

}
