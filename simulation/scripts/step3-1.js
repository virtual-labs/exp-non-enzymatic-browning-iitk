let beakerAnimation_3_1 = bodymovin.loadAnimation({
    container: document.querySelector('#step-31 .bodymovinanim_3-1'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_NCEiyO.json'
});

let beakerAnimation_3_2 = bodymovin.loadAnimation({
    container: document.querySelector('#step-31 .bodymovinanim_3-2'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_HRnmkj.json'
});

var sucked31 = false
var juiceheated = false
var machineon31 = false
var machineset31 = false
var machinesetcom = false

var temp = 0
var last_temp = 0

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function suckPour31() {
    if (!task_done && juiceheated) {
        if (!sucked31) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-31 .pipette small', { opacity: 0 })
                .to('#step-31 .pipette', { duration: 2, y: -250, x: 250 })
                .to('#step-31 .pipette', {
                    duration: 1, y: -150, onComplete: () => {
                        beakerAnimation_3_2.play()
                    }
                })
                .to('#step-31 .pipette .pipetteTop', { y: -30 })
                .to(obj, {
                    i: 5, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-31 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-31 .pipette', { delay: 2, duration: 2, y: -250 })
                .to('#step-31 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-31 .pipette small').innerHTML = 'click to pour juice'
                    }
                })
                .to('#step-31 .pipette small', {
                    opacity: 1, onComplete: () => {
                        sucked31 = true
                    }
                })

        } else {
            var obj = { i: 5 }
            var tl = gsap.timeline()

            tl
                .to('#step-31 .pipette small', { opacity: 0 })
                .to('#step-31 .ppCap', { duration: 2, x: -100, y: 150 })
                .to('#step-31 .pipette', { duration: 2, y: -110, x: -205 })
                .to('#step-31 .pipette .pipetteTop', {duration: 1, y: 0})
                .to('#step-31 .pipette', {
                    duration: 3, y: -30, onStart: () => {
                        beakerAnimation_3_1.play()
                    }
                })
                .to(obj, {
                    i: 0, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-31 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-31 .pipette', { duration: 1, y: -110 })
                .to('#step-31 .pipette', { duration: 2, y: 0, x: 0})
                .to('#step-31 .ppCap', { duration: 2, x: 0, y: 0 , onComplete: () => {
                    task_done = true
                    addTask('Step4: Heat strained juice & take 5ml of it in a centrifuge tube B ')
                }
            })

        }
    }
}

function machineonstep31() {
    if(!machineon31) {
        machineon31 = true
        gsap.to('#step-31 .control-5', {opacity: 0})
    
        beep.play()
    }
}

function incTemp() {
    if(!machineset31 && machineon31) {
        temp++
        document.querySelector('#step-31 .reading-2').innerHTML = `ST ${pad(temp, 2)}℃`

        beep.play()
    }
}

function decTemp() {
    if(!machineset31 && machineon31) {
        temp--
        document.querySelector('#step-31 .reading-2').innerHTML = `ST ${pad(temp, 2)}℃`

        beep.play()
    }
}

function set31() {
    if(machineon31) {
        machineset31 = true
    
        if (last_temp != temp) {
            var obj = { i: last_temp }
            gsap.to(obj, {
                i: temp,
                ease: new SteppedEase.config(temp - last_temp),
                duration: 5,
                onUpdate: () => {
                    document.querySelector('#step-31 .reading-1').innerHTML = `PT ${pad(obj.i, 2)}℃`
                }, onComplete: () => {
                    machinesetcom = true
                    gsap.to('#step-31 .control-1', {opacity: 1})
                    last_temp = temp
                }
            })
        }

        beep.play()
    }
}

function heatjuice() {
    if(!juiceheated && machineon31 && machinesetcom) {
        beakerAnimation_3_2.playSegments([0, 331], true)

        gsap.to('#step-31 .control-1', {opacity: 0})
        gsap.to('#step-31 .pipette', {
            delay: 10, opacity: 1, onComplete: () => {
                juiceheated = true
            }
        })
    }
}