let coordinates;
const score = document.getElementById('score');

// Burst of particles for score incrementation
export function burst() {
    // get coordinates to position a burst
    coordinates = document.getElementById('score').getBoundingClientRect();
    const burst = new mojs.Burst({
        left: coordinates.left,
        top: coordinates.top,
        classname: 'sparks',
        radius: {
            0: 100
        },
        count: 10,
        children: {
            fill: [{
                '#45c0fd': '#ff00fe'
            }]
        }
    });
    //set event listener for score being modified
    document.addEventListener('DOMSubtreeModified', (e) => {
        if (e.target === score) {
            burst.play();
        }
    });
}

export function confettiBurst() {
    confetti({
        particleCount: 120,
        spread: 120,
        startVelocity: 60,
        colors: ['#fbc9fe', '#51c6fe', '#c3c7cd', '#ff00fe', '#f8f8f8', '#45c0fd']
    });
}