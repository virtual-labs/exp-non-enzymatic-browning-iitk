let beakerAnimation_5 = bodymovin.loadAnimation({
    container: document.querySelector('#step-5 .bodymovinanim_5'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets8.lottiefiles.com/packages/lf20_OggzYE.json'
});

var machineON = false

var animateSegment1 = 0
var rpmVal = 100
var timVal = 1
var rpmLocked = false
var timLocked = false

var weightRPM = 400
var weightTIM = 400

function ON() {
    if (!machineON) {
        machineON = true
        gsap.to('#step-5 .rmpVal', { opacity: 1 })
        gsap.to('#step-5 .timVal', { opacity: 1 })
        gsap.to('#step-5 .controlCentrifuge1', { opacity: 1 })
        gsap.to('#step-5 .onbutton', { background: 'green' })
        animateSegment1++

        beep.play()
    }
}

function animateSegment() {
    if (!task_done) {
        if (animateSegment1 == 1) {
            beakerAnimation_5.playSegments([0, 70], true)

            hydrolics.play()
            var tl = gsap.timeline()

            tl
                .to('#step-5 .controlCentrifuge1', { opacity: 0 })
                .to('#step-5 .controlCentrifuge2', {
                    delay: "+4",
                    opacity: 1, onComplete: () => {
                        animateSegment1++
                    }
                })
        }

        else if (animateSegment1 == 2) {
            beakerAnimation_5.playSegments([70, 250], true)

            var tl = gsap.timeline()

            tl
                .to('#step-5 .controlCentrifuge2', { opacity: 0 })
                .to('#step-5 .controlCentrifuge3', {
                    delay: "+4",
                    opacity: 1, onComplete: () => {
                        animateSegment1++
                    }
                })
        }

        else if (animateSegment1 == 3) {
            beakerAnimation_5.playSegments([250, 390], true)

            var tl = gsap.timeline()

            tl
                .to('#step-5 .controlCentrifuge3', { opacity: 0 })
                .to('#step-5 .controlCentrifuge4', {
                    delay: "+3",
                    opacity: 1, onComplete: () => {
                        animateSegment1++
                    }
                })
        }

        else if (animateSegment1 == 4) {
            hydrolics.play()
            beakerAnimation_5.playSegments([440, 470], true)
            gsap.to('#step-5 .controlCentrifuge4', { opacity: 0, delay: "+3", })
            animateSegment1++
        }

        else if (animateSegment1 == 6) {
            hydrolics.play()
            beakerAnimation_5.playSegments([470, 520], true)

            var tl = gsap.timeline()

            tl
                .to('#step-5 .controlCentrifuge1', { opacity: 0 })
                .to('#step-5 .controlCentrifuge2', {
                    delay: "+3",
                    opacity: 1,
                    onStart: () => {
                        document.querySelector('#step-5 .controlCentrifuge2').style.left = '225px'
                        document.querySelector('#step-5 .controlCentrifuge2 small').innerHTML = 'Remove Sample A'
                    },
                    onComplete: () => {
                        animateSegment1++
                    }
                })
        }

        else if (animateSegment1 == 7) {
            beakerAnimation_5.playSegments([520, 620], true)
            var tl = gsap.timeline()

            tl
                .to('#step-5 .controlCentrifuge2', { opacity: 0 })
                .to('#step-5 .controlCentrifuge3', {
                    delay: "+5",
                    opacity: 1,
                    onStart: () => {
                        document.querySelector('#step-5 .controlCentrifuge3').style.left = '225px'
                        document.querySelector('#step-5 .controlCentrifuge3 small').innerHTML = 'Remove Sample B'
                    },
                    onComplete: () => {
                        animateSegment1++
                    }
                })

        }

        else if (animateSegment1 == 8) {
            beakerAnimation_5.playSegments([620, 900], true)

            gsap.to('#step-5 .controlCentrifuge3', { opacity: 0 })
            gsap.to('#step-5 .controlCentrifuge2', { opacity: 0 })
            gsap.to('#step-5 .controlCentrifuge1', { opacity: 0 })

            task_done = true
            addTask('Step5: Centrifuge sample for 10 min at 5000 rpm')
        }
    }
}

function MEN() {
    if (animateSegment1 == 5) {
        beep.play()
        if (!rpmLocked) {
            weightRPM = 800
            weightTIM = 400
        }
        else {
            weightRPM = 400
            weightTIM = 800
        }

        document.querySelector('#step-5 .rmpVal').innerHTML = `<span style="font-weight: ${weightRPM}">RPM ${rpmVal}</span>`
        document.querySelector('#step-5 .timVal').innerHTML = `<span style="font-weight: ${weightTIM}">TIM ${timVal}min</span>`
    }
}

function SET() {
    if (animateSegment1 == 5) {
        if (!rpmLocked)
            rpmLocked = true
        else {
            timLocked = true

            weightRPM = 400
            weightTIM = 400

            setTimeout(() => {
                gsap.to('#step-5 .controlCentrifuge1', { opacity: 1 })
                humming.stop()
                animateSegment1++

                var obj = { i: rpmVal }

                gsap.to(obj, {
                    i: 0,
                    duration: 1,
                    ease: new SteppedEase.config(rpmVal),
                    onUpdate: () => {
                        document.querySelector('#step-5 .rmpVal').innerHTML
                            = `<span style="font-weight: ${weightRPM}">RPM ${obj.i}</span`
                    }
                })

            }, timVal * 1000)

            var obj = { i: 0 }

            gsap.to(obj, {
                i: rpmVal,
                duration: 1,
                ease: new SteppedEase.config(rpmVal),
                onUpdate: () => {
                    document.querySelector('#step-5 .rmpVal').innerHTML
                        = `<span style="font-weight: ${weightRPM}">RPM ${obj.i}</span`
                }
            })

            var obj1 = { i: timVal }

            gsap.to(obj1, {
                i: 0,
                duration: 1 * timVal,
                ease: new SteppedEase.config(timVal),
                onUpdate: () => {
                    document.querySelector('#step-5 .timVal').innerHTML = 
                        `<span style="font-weight: ${weightTIM}">TIM ${obj1.i}min</span>`
                }
            })

            humming.play()
        }

        beep.play()
    }
}

function ADD() {
    if (animateSegment1 == 5) {
        if (!rpmLocked)
            rpmVal += 100
        else if (!timLocked)
            timVal += 1

        document.querySelector('#step-5 .rmpVal').innerHTML = `<span style="font-weight: ${weightRPM}">RPM ${rpmVal}</span>`
        document.querySelector('#step-5 .timVal').innerHTML = `<span style="font-weight: ${weightTIM}">TIM ${timVal}min</span>`

        beep.play()
    }
}

function SUB() {
    if (animateSegment1 == 5) {
        if (!rpmLocked)
            rpmVal -= 100
        else if (!timLocked)
            timVal -= 1

        document.querySelector('#step-5 .rmpVal').innerHTML = `<span style="font-weight: ${weightRPM}">RPM ${rpmVal}</span>`
        document.querySelector('#step-5 .timVal').innerHTML = `<span style="font-weight: ${weightTIM}">TIM ${timVal}min</span>`

        beep.play()
    }
}