let beakerAnimation_2 = bodymovin.loadAnimation({
    container: document.querySelector('#step-2 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets1.lottiefiles.com/packages/lf20_uQxiTh.json'
});

var step21done = false

function filterJuice() {
    if (!step21done) {
        var tl = gsap.timeline()

        tl
        .to('#step-2 .filter small', {opacity: 0})
        .to('#step-2 .filter', {duration: 1, y: -130})
        .to('#step-2 .filter', {duration: 1, x: -175})
        .to('#step-2 .filter', {duration: 1, y: -80, onclick: () => {
            step21done = true
        }})
        .to('#step-2 .filter2', {opacity: 1})
    }
}

function filterJuice2() {
    if (step21done) {
        var tl = gsap.timeline()

        tl
        .to('#step-2 .filter2', {opacity: 0})
        .to('#step-2 .filter2', {
            duration: 4.5,
            onStart: () =>{
                beakerAnimation_2.play()
                gsap.to('#step-2 .filtrate', { delay: 2, opacity: 1 })
            },
            onComplete: () => {
                task_done = true
                addTask('Step2: Filtration of juice sample')
            }
        })
        
    }
}

