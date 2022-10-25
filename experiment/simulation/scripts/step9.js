let beakerAnimation_9 = bodymovin.loadAnimation({
    container: document.querySelector('#step-9 .bodymovinanim_9'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_pKomDw.json'
});

var machineon = false
var machineset = false
var lambda = 280

var part81done = false
var canread1 = false
function turnOnMachine() {
    beep.play()

    gsap.to('#step-9 .readings, #step-9 .control-1', {
        opacity: 1, onComplete: () => {
            machineon = true
        }
    })
}

function menu() {
    if (machineon) {
        beep.play()

        gsap.to('#step-9 .read-1', {color: 'blue'})
    }
}

function read() {
    if (machineon && canread1) {
        beep.play()

        if (machineset) {
            document.querySelector('#step-9 .read-2').innerHTML = `Abs=0.1275`
        }

        gsap.to('#step-9 .read-1', {color: '#000'})
        gsap.to('#step-9 .read-2', {color: 'blue'})

        gsap.to('#step-9 .control-3', { opacity: 0 })

        machineon = false
        task_done = true
        addTask('Step9: Switch on the UV-vis spectrophotometer and set the wavelength at 420 nm & calibrate it using ethyl alcohol cuvettes')
    }
}

function inc() {
    if (machineon) {
        beep.play()

        if (!machineset) {
            if (lambda >= 280 && lambda < 750) {
                lambda++
            }

            document.querySelector('#step-9 .read-1').innerHTML = `λ=${lambda}`
        }
    }
}

function dec() {
    if (machineon) {
        beep.play()

        if (!machineset) {
            if (lambda > 280 && lambda <= 750) {
                lambda--
            }

            document.querySelector('#step-9 .read-1').innerHTML = `λ=${lambda}`
        }
    }
}

function step9() {
    if (machineon) {
        if (!part81done) {
            machineset = true
            beakerAnimation_9.playSegments([0, 320], true)
            gsap.to('#step-9 .control-1', { opacity: 0 })
            gsap.to('#step-9 .control-2', { delay: "11", opacity: 1 })
        }
    }
}

function closeLidFunc() {
    if (machineon && !part81done) {
        beakerAnimation_9.playSegments([320, 420], true)

        gsap.to('#step-9 .control-2', { opacity: 0 })

        gsap.to('#step-9 .control-2', {
            delay: 4, onComplete: () => {
                canread1 = true
                gsap.to('#step-9 .control-3', { opacity: 1 })
            }
        })
    }
}