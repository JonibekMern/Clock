const hour = document.querySelector('.h')
const min = document.querySelector('.m')
const sec = document.querySelector('.s')


const hoursBlock = document.querySelector('.hours'),
    minutesBlock = document.querySelector('.minutes'),
    check = document.querySelector('#check'),
    audio = document.querySelector('audio')

function clock() {
    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes()
    let hours = time.getHours()


    sec.animate([{
        transform: `rotate(${second}deg)`
    },
    {
        transform: `rotate(${second + 6}deg)`
    }
    ],
        {
            fill: `forwards`,
            duration: 1000,
            easing: 'linear'
        }
    )


    min.style = `transform: rotate(${(minutes * 6)}deg)`
    hour.style = `transform: rotate(${(hours * 30) + (minutes / 12)}deg)`


    if (check.checked) {
        audio.play()
    }
    else {
        audio.pause()
    }


    setTimeout(() => clock(), 1000)

    hoursBlock.innerHTML = hours < 10 ? '0' + hours : hours
    minutesBlock.innerHTML = minutes < 10 ? '0' + minutes : minutes

}
clock()

const tabLink = document.querySelectorAll('.tabsItem');
const tabContent = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].addEventListener('click', function () {

        for (let x = 0; x < tabLink.length; x++) {
            tabLink[x].classList.remove('active')
            tabContent[x].classList.remove('active')
        }

        tabLink[i].classList.add('active')
        tabContent[i].classList.add('active')
    })
}

const watchBtn = document.querySelector('.stopwatch__btn')
const secondWatch = document.querySelector('.stopwatch__seconds')
const minutesWatch = document.querySelector('.stopwatch__minutes')
const hoursWatch = document.querySelector('.stopwatch__hours')
watchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop'

        let i = 0
        stopWatch(this, i)
    } else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear'
    } else if (this.innerHTML == 'clear') {
        this.innerHTML = 'start'
        secondWatch.innerHTML = 0
        minutesWatch.innerHTML = 0
        hoursWatch.innerHTML = 0
    }
})

function stopWatch(el, i) {

    if (el.innerHTML == 'stop') {
        if (i == 59) {
            i = 0
            secondWatch.innerHTML = i
            if (minutesWatch.innerHTML == 59) {
                minutesWatch.innerHTML = 0
                hoursWatch.innerHTML++
            }
            else {
                minutesWatch.innerHTML++
            }
        } else {
            i++
            secondWatch.innerHTML = i
        }
        setTimeout(() => { stopWatch(el, i) }, 1000);
    }
}