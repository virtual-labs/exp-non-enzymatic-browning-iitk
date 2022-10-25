let beakerAnimation_4 = bodymovin.loadAnimation({
    container: document.querySelector('#step-4 .bodymovinanim_4'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_q04HJy.json'
});

let beakerAnimation_41 = bodymovin.loadAnimation({
    container: document.querySelector('#step-4 .bodymovinanim_41'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_q04HJy.json'
});

var suckedAlcohol = false
var pourPart2 = false

function suckPourAlcohol() {
    if (!task_done) {
        if (!suckedAlcohol) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-4 .pipette small', { opacity: 0 })
                .to('#step-4 .cap', { duration: 2, y: 150, x: 150 })
                .to('#step-4 .pipette', { duration: 2, y: -150, x: 180 })
                .to('#step-4 .pipette', { duration: 3, y: -30 })
                .to('#step-4 .pipette .pipetteTop', { y: -30 })
                .to(obj, {
                    i: 5, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-4 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-4 .pipette', { duration: 1, y: -150 })
                .to('#step-4 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-4 .pipette small').innerHTML = 'click to pour alcohol'
                    }
                })
                .to('#step-4 .cap', { duration: 2, y: 0, x: 0 })
                .to('#step-4 .pipette small', {
                    opacity: 1, onComplete: () => {
                        suckedAlcohol = true
                    }
                })

        } else {
            var obj = { i: 5 }
            var tl = gsap.timeline()

            tl
                .to('#step-4 .pipette small', { opacity: 0 })
                .to((!pourPart2) ? '#step-4 .ppCap' : '#step-4 .ppCap2', { duration: 2, x: -170, y: 150 })
                .to('#step-4 .pipette', { duration: 2, y: -110, x: (!pourPart2) ? -205 : -155 })
                .to('#step-4 .pipette .pipetteTop', { y: 0 })
                .to('#step-4 .pipette', {
                    duration: 3, y: -30, onStart: () => {
                        (!pourPart2)? beakerAnimation_4.play() : beakerAnimation_41.play()
                    }
                })
                .to(obj, {
                    i: 0, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-4 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-4 .pipette', { duration: 1, y: -110 })
                .to('#step-4 .pipette', { duration: 2, y: 0, x: 0 })
                .to((!pourPart2) ? '#step-4 .ppCap' : '#step-4 .ppCap2', {
                    duration: 2, x: 0, y: 0, onComplete: () => {

                        if (!pourPart2) {
                            gsap.to('#step-4 .pipette small', { opacity: 1 })

                            suckedAlcohol = false
                            pourPart2 = true
                            document.querySelector('#step-4 .pipette small').innerHTML = 'click to pipette out alcohol'
                        } else {
                            task_done = true
                            addTask('Step4: Add 5 ml of 95% ethyl alcohol in the centrifuge Tube')
                        }
                    }
                })

        }
    }
}