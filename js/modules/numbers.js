export default function initNumbers() {
    const numbers = document.querySelectorAll('.data-number');

    numbers.forEach((number) => {
        const total = +number.innerText;
        const increment = Math.floor(total / 25);
        let start = 0;
        const timer = setInterval(() => {
            start = start + increment;
            number.innerText = start;
            if (start > total){
            number.innerText = total;
            clearInterval(timer);
        }

        }, 150)
    
    })




    const observeTarget = document.querySelector('.numbers');
    const observer = new MutationObserver(handleMutation);

    observer.observe(observeTarget, {attributes: true});
};



    
    