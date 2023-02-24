import gsap from 'gsap'

gsap.to('#alexandra', { 
    rotation: 360, 
    duration: 3, 
  //  transformOrigin: 'center center', 
    transformOrigin: '60% center',
    repeat: -1,
    ease: 'none',
});

gsap.to('.game-over', {
  rotation: 360, 
  duration: 3, 
  transformOrigin: 'center center', 
  repeat: -1,
  ease: 'none',
});

gsap.to('#restartGameBtn', {
  rotation: 360, 
  duration: 3, 
  transformOrigin: 'center center', 
  repeat: -1,
  ease: 'none',
})
