let beakerAnimation = bodymovin.loadAnimation({
        container: document.querySelector('#step-1 .bodymovinanim'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://assets10.lottiefiles.com/packages/lf20_OEMHMF.json'
});

var juicerSet = false

function juice() {
    if (!juicerSet) {
        var tl = gsap.timeline()

        tl
            .to('#step-1 .apple small', {
                opacity: 0,
            })
            .to('#step-1 .apple', {
                duration: 2,
                y: -300,
                zIndex: 0
            })
            .to('#step-1 .apple', {
                duration: 2,
                x: 250
            })
            .to('#step-1 .apple', {
                duration: 1,
                rotation: 90,
            })   
            .to('#step-1 .apple', {
                duration: 1,
                y: -100,
            })   
            .to('#step-1 .juicer', {
                opacity: 1,
                onComplete: () => {
                    juicerSet = true
                }
            })
    }
}

function juicer() {
    if(juicerSet) {
        var tl = gsap.timeline()

        tl
        .to('#step-1 .juicer', {opacity: 0})
        .to('#step-1 .juicerHandle', {
            duration: 5,
            y: 40,
            onStart: () => {
                juicerSound.play()
                beakerAnimation.play()
            },
            onComplete: () => {
                task_done = true
                juicerSound.stop()
                addTask('Step1: Extraction of juice from selected fruit/vegetable')
            }
        }) 
    }
}