let beakerAnimation_81 = bodymovin.loadAnimation({
    container: document.querySelector('#step-8 .bodymovinanim_81'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_SGt9jv.json'
});

let beakerAnimation_82 = bodymovin.loadAnimation({
    container: document.querySelector('#step-8 .bodymovinanim_82'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_SGt9jv.json'
});

var animationStep8 = 1

function suckPour8() {
    if (!task_done) {
        if (animationStep8 == 1) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-8 .pipette small', { opacity: 0 })
                .to('#step-8 .cap', { duration: 2, y: 150, x: 150 })
                .to('#step-8 .pipette', {duration: 2, y: -170, x: 180})
                .to('#step-8 .pipette', { delay: 2, duration: 1, y: -20 })
                .to('#step-8 .pipette .pipetteTop', { y: -30 })
                .to(obj, {
                    i: 1, ease: new SteppedEase.config(1), onUpdate: () => {
                        document.querySelector('#step-8 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-8 .pipette', { delay: 2, duration: 2, y: -150 })
                .to('#step-8 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-8 .pipette small').innerHTML = 'click to pour'
                    }
                })
                .to('#step-8 .cap', { duration: 2, y: 0, x: 0 })
                .to('#step-8 .pipette small', {
                    opacity: 1, onComplete: () => {
                        animationStep8++
                    }
                })
        } else if (animationStep8 == 2) {
            var obj = { i: 1 }
            var tl = gsap.timeline()

            tl
                .to('#step-8 .pipette small', { opacity: 0 })
                .to('#step-8 .pipette', { duration: 2, y: -20, x: -202 })
                .to('#step-8 .pipette .pipetteTop', { duration: 1, y: 0 })
                .to('#step-8 .pipette', {
                    duration: 3, y: 20, onStart: () => {
                        beakerAnimation_82.play()
                    }
                })
                .to(obj, {
                    i: 0, ease: new SteppedEase.config(1), onUpdate: () => {
                        document.querySelector('#step-8 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-8 .pipette', { duration: 1, y: -20 })
                .to('#step-8 .pipette', {
                    duration: 2, y: 0, x: 0, onComplete: () => {
                        document.querySelector('#step-8 .pipette small').innerHTML = 'click to pipette out'
                    }
                })
                .to('#step-8 .pipette small', {
                    opacity: 1, onComplete: () => {
                        animationStep8++
                    }
                })
        } else if (animationStep8 == 3) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-8 .pipette small', { opacity: 0 })
                .to('#step-8 .cap', { duration: 2, y: 150, x: 150 })
                .to('#step-8 .pipette', {duration: 2, y: -170, x: 180 })
                .to('#step-8 .pipette', { delay: 2, duration: 1, y: -20 })
                .to('#step-8 .pipette .pipetteTop', { y: -30 })
                .to(obj, {
                    i: 1, ease: new SteppedEase.config(1), onUpdate: () => {
                        document.querySelector('#step-8 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-8 .pipette', { delay: 2, duration: 2, y: -150 })
                .to('#step-8 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-8 .pipette small').innerHTML = 'click to pour'
                    }
                })
                .to('#step-8 .cap', { duration: 2, y: 0, x: 0 })
                .to('#step-8 .pipette small', {
                    opacity: 1, onComplete: () => {
                        animationStep8++
                    }
                })

        } else if (animationStep8 == 4) {
            var obj = { i: 1 }
            var tl = gsap.timeline()

            tl
                .to('#step-8 .pipette small', { opacity: 0 })
                .to('#step-8 .pipette', { duration: 2, y: -20, x: -252 })
                .to('#step-8 .pipette .pipetteTop', { duration: 1, y: 0 })
                .to('#step-8 .pipette', {
                    duration: 3, y: 20, onStart: () => {
                        beakerAnimation_81.play()
                    }
                })
                .to(obj, {
                    i: 0, ease: new SteppedEase.config(1), onUpdate: () => {
                        document.querySelector('#step-8 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-8 .pipette', { duration: 1, y: -20 })
                .to('#step-8 .pipette', {
                    duration: 2, y: 0, x: 0, onComplete: () => {
                        document.querySelector('#step-8 .pipette small').innerHTML = 'click to pipette out'
                    }
                })
                .to('#step-8 .pipette small', {
                    onComplete: () => {
                        task_done = true
                        addTask('Step7: Pipette out 1ml of supernatant from the centrifuge tubes and add to the seperate cuvettes')
                    }
                })
        }
    }
}