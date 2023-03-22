let beakerAnimation_10 = bodymovin.loadAnimation({
    container: document.querySelector('#step-10 .bodymovinanim_10'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_Gb8hDR.json'
});

var currentAnimate10 = 1
var canread = false

function read10() {
    if (canread) {
        beep.play()
        gsap.to('#step-10 .control-3', {opacity: 0})
        canread = false

        if (currentAnimate10 == 4) {
            document.querySelector('#step-10 .read-2').innerHTML = `Abs=0.7312`

            document.querySelector('#step-10 .control-1 small').innerHTML = 'Open Lid'
            gsap.to('#step-10 .control-1', { opacity: 1 })

            currentAnimate10++
        } else if (currentAnimate10 == 8) {
            document.querySelector('#step-10 .read-2').innerHTML = `Abs=0.9147`

            task_done = true
            addTask('Step10: Switch on the UV-vis spectrophotometer and set the wavelength at 420 nm & calibrate it using ethyl alcohol cuvettes')

        }
    }
}

function animateMessage10() {
    if (!task_done) {
        if (currentAnimate10 == 1) {
            beakerAnimation_10.playSegments([0, 58], true)

            gsap.to('#step-10 .control-1', { opacity: 0 })
            gsap.to('#step-10 .control-2', {
                delay: 3, opacity: 1, onComplete: () => {
                    currentAnimate10++
                }
            })
        } else if (currentAnimate10 == 2) {
            beakerAnimation_10.playSegments([58, 271], true)

            document.querySelector('#step-10 .control-1 small').innerHTML = 'Close Lid'

            gsap.to('#step-10 .control-2', { opacity: 0 })
            gsap.to('#step-10 .control-1', {
                delay: 8, opacity: 1, onComplete: () => {
                    currentAnimate10++
                }
            })
        } 
        else if (currentAnimate10 == 3) {
            beakerAnimation_10.playSegments([271, 316], true)

            gsap.to('#step-10 .control-1', { opacity: 0 })
            gsap.to('#step-10 .control-3', {
                delay: 3, opacity: 1, onComplete: () => {
                    currentAnimate10++
                    canread = true
                }
            })
        } else if (currentAnimate10 == 5) {
            beakerAnimation_10.playSegments([316, 397], true)

            gsap.to('#step-10 .control-1', { opacity: 0 })
            gsap.to('#step-10 .control-2', {
                delay: 3, opacity: 1, onComplete: () => {
                    currentAnimate10++
                }
            })
        } 
        else if (currentAnimate10 == 6) {
            beakerAnimation_10.playSegments([397, 658], true)

            document.querySelector('#step-10 .control-1 small').innerHTML = 'Close Lid'

            gsap.to('#step-10 .control-2', { opacity: 0 })
            gsap.to('#step-10 .control-1', {
                delay: 8, opacity: 1, onComplete: () => {
                    currentAnimate10++
                }
            })
        }
        else if (currentAnimate10 == 7) {
            beakerAnimation_10.playSegments([658, 718], true)

            gsap.to('#step-10 .control-1', { opacity: 0 })
            gsap.to('#step-10 .control-3', {
                delay: 3, opacity: 1, onComplete: () => {
                    currentAnimate10++
                    canread = true
                }
            })
        }
    }
}