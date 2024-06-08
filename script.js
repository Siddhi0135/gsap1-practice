var tl= gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3,
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3,
})

gsap.from("h1",{
    opacity:0,
    duration:2,
    y:30, //shortform of transform translate
    delay:1,
    stagger:1,
})

// gsap.to(".box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1,//will repeat infinte times
//     //on giving value 1 it will repeat 2 times as by default it will move 1 time
//     yoyo:true, //it means it will go and reverse back
// })

// gsap.to(".box1",{
//     x:1200,
//     duration:2,
//     delay:3,//as we want our second box to move when our first box completes its first rotation
//     rotate:360,
//     repeat:-1,//will repeat infinte times
//     //on giving value 1 it will repeat 2 times as by default it will move 1 time
//     yoyo:true, //it means it will go and reverse back
// })

// gsap.to(".box2",{
//     x:1200,
//     duration:2,
//     delay:6,
//     rotate:360,
//     repeat:-1,//will repeat infinte times
//     //on giving value 1 it will repeat 2 times as by default it will move 1 time
//     yoyo:true, //it means it will go and reverse back
// })

//introduction to timeline
//Timeline is used when the calculation for delay becomes very difficult
// and we want our elements to move one after another



tl.to(".box",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    repeat:-1,//will repeat infinte times
    //on giving value 1 it will repeat 2 times as by default it will move 1 time
    yoyo:true, //it means it will go and reverse back
})

tl.to(".box1",{
    x:1200,
    duration:2,
    rotate:360,
    repeat:-1,//will repeat infinte times
    //on giving value 1 it will repeat 2 times as by default it will move 1 time
    yoyo:true, //it means it will go and reverse back
})

tl.to(".box2",{
    x:1200,
    duration:2,
    rotate:360,
    repeat:-1,//will repeat infinte times
    //on giving value 1 it will repeat 2 times as by default it will move 1 time
    yoyo:true, //it means it will go and reverse back
})

