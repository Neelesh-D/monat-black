let circle = document.querySelector('#cursor');

window.addEventListener('mousemove', function(details){


   
    let xValue = details.clientX;
    let yValue = details.clientY;
    console.log(details);

    circle.style.top = yValue + 'px';
    circle.style.left = xValue + 'px';
    
})