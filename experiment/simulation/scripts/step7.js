let beakerAnimation_7 = bodymovin.loadAnimation({
    container: document.querySelector('#step-7 .bodymovinanim_71'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_iTYGXl.json'
});

let beakerAnimation_71 = bodymovin.loadAnimation({
    container: document.querySelector('#step-7 .bodymovinanim_7'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_iTYGXl.json'
});

let beakerAnimation_72 = bodymovin.loadAnimation({
    container: document.querySelector('#step-7 .bodymovinanim_72'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_Z5WTb8.json'
});

let beakerAnimation_73 = bodymovin.loadAnimation({
    container: document.querySelector('#step-7 .bodymovinanim_73'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_Z5WTb8.json'
});


var animationStep7 = 1

function suckPour7() {
    if (!task_done) {
        if (animationStep7 == 1) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-7 .pipette small', { opacity: 0 })
                .to('#step-7 .pipette', {
                    duration: 2, y: -170, x: 180, onComplete: () => {
                        beakerAnimation_7.play()
                    }
                })
                .to('#step-7 .pipette', { delay: 2, duration: 1, y: -20 })
                .to('#step-7 .pipette .pipetteTop', { y: -30 })
                .to(obj, {
                    i: 1, ease: new SteppedEase.config(1), onUpdate: () => {
                        document.querySelector('#step-7 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-7 .pipette', { delay: 2, duration: 2, y: -150 })
                .to('#step-7 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-7 .pipette small').innerHTML = 'click to pour'
                    }
                })
                .to('#step-7 .pipette small', {
                    opacity: 1, onComplete: () => {
                        animationStep7++
                    }
                })
        } else if (animationStep7 == 2) {
            var obj = { i: 1 }
            var tl = gsap.timeline()

            tl
                .to('#step-7 .pipette small', { opacity: 0 })
                .to('#step-7 .pipette', { duration: 2, y: -20, x: -200 })
                .to('#step-7 .pipette .pipetteTop', { duration: 1, y: 0 })
                .to('#step-7 .pipette', {
                    duration: 3, y: 20, onStart: () => {
                        beakerAnimation_73.play()
                    }
                })
                .to(obj, {
                    i: 0, ease: new SteppedEase.config(1), onUpdate: () => {
                        document.querySelector('#step-7 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-7 .pipette', { duration: 1, y: -20 })
                .to('#step-7 .pipette', {
                    duration: 2, y: 0, x: 0, onComplete: () => {
                        document.querySelector('#step-7 .pipette small').innerHTML = 'click to pipette out'
                    }
                })
                .to('#step-7 .pipette small', {
                    opacity: 1, onComplete: () => {
                        animationStep7++
                    }
                })
        } else if (animationStep7 == 3) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-7 .pipette small', { opacity: 0 })
                .to('#step-7 .pipette', {
                    duration: 2, y: -170, x: 280, onComplete: () => {
                        beakerAnimation_71.play()
                    }
                })
                .to('#step-7 .pipette', { delay: 2, duration: 1, y: -20 })
                .to('#step-7 .pipette .pipetteTop', { y: -30 })
                .to(obj, {
                    i: 1, ease: new SteppedEase.config(1), onUpdate: () => {
                        document.querySelector('#step-7 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-7 .pipette', { delay: 2, duration: 2, y: -150 })
                .to('#step-7 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-7 .pipette small').innerHTML = 'click to pour'
                    }
                })
                .to('#step-7 .pipette small', {
                    opacity: 1, onComplete: () => {
                        animationStep7++
                    }
                })

        } else if (animationStep7 == 4) {
            var obj = { i: 1 }
            var tl = gsap.timeline()

            tl
                .to('#step-7 .pipette small', { opacity: 0 })
                .to('#step-7 .pipette', { duration: 2, y: -20, x: -250 })
                .to('#step-7 .pipette .pipetteTop', { duration: 1, y: 0 })
                .to('#step-7 .pipette', {
                    duration: 3, y: 20, onStart: () => {
                        beakerAnimation_72.play()
                    }
                })
                .to(obj, {
                    i: 0, ease: new SteppedEase.config(1), onUpdate: () => {
                        document.querySelector('#step-7 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-7 .pipette', { duration: 1, y: -20 })
                .to('#step-7 .pipette', {
                    duration: 2, y: 0, x: 0, onComplete: () => {
                        document.querySelector('#step-7 .pipette small').innerHTML = 'click to pipette out'
                    }
                })
                .to('#step-7 .pipette small', {
                    onComplete: () => {
                        task_done = true
                        addTask('Step7: Pipette out 1ml of supernatant from the centrifuge tubes and add to the seperate cuvettes')
                    }
                })
        }
    }
}
