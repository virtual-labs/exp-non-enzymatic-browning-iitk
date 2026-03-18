let beakerAnimation_31 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim_31'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_NCEiyO.json'
});

let beakerAnimation_32 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim_32'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_zOaiCd.json'
});

var sucked = false

function suckPour() {
    if (!task_done) {
        if (!sucked) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-3 .pipette small', { opacity: 0 })
                .to('#step-3 .pipette', { duration: 2, y: -150, x: 180 })
                .to('#step-3 .pipette', {
                    duration: 1, y: -20, onComplete: () => {
                        beakerAnimation_32.play()
                    }
                })
                .to('#step-3 .pipette .pipetteTop', { y: -30 })
                .to(obj, {
                    i: 5, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-3 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-3 .pipette', { delay: 2, duration: 2, y: -150 })
                .to('#step-3 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-3 .pipette small').innerHTML = 'click to pour juice'
                    }
                })
                .to('#step-3 .pipette small', {
                    opacity: 1, onComplete: () => {
                        sucked = true
                    }
                })

        } else {
            var obj = { i: 5 }
            var tl = gsap.timeline()

            tl
                .to('#step-3 .pipette small', { opacity: 0 })
                .to('#step-3 .ppCap', { duration: 2, x: -100, y: 150 })
                .to('#step-3 .pipette', { duration: 2, y: -110, x: -205 })
                .to('#step-3 .pipette .pipetteTop', {duration: 1, y: 0})
                .to('#step-3 .pipette', {
                    duration: 3, y: -30, onStart: () => {
                        beakerAnimation_31.play()
                    }
                })
                .to(obj, {
                    i: 0, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-3 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-3 .pipette', { duration: 1, y: -110 })
                .to('#step-3 .pipette', { duration: 2, y: 0, x: 0})
                .to('#step-3 .ppCap', { duration: 2, x: 0, y: 0 , onComplete: () => {
                    task_done = true
                    addTask('Step3: Pipette out 5ml juice and pour it into the centrifuge tube')
                }
            })

        }
    }
}