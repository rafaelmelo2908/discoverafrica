//Scroll smooth to internal links//

export default function initScroll() {

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
        //Alternative scroll 
        //const top = section.offsetTop;
        //window.scrollTo({
        //    top: top,
        //    behavior: 'smooth',
        //});

    }

    const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    internalLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

}



