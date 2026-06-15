/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabsContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    const target = document.querySelector(`#${tab.dataset.target}`);
        console.log('fffffffffff');
        console.log(target);
        // console.log(target);
    tabsContents.forEach(tc => {
      tc.classList.remove('filters_active');
    });

    target.classList.add('filters_active');

    tabs.forEach(t => {
      t.classList.remove('filters-tab-active');
    });

    tab.classList.add('filters-tab-active');
  });
});
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'; 
const iconTheme = 'ri-sun-line';

// Previously Selected Topic 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'; 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'; 

// validate if user select a topic 
if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ?'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate DeActivate the theme  manually
themeButton.addEventListener('click' , () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save in storage 
    localStorage.setItem('selected-theme' , getCurrentTheme)
    localStorage.setItem('selected-icon' , getCurrentIcon)
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
});

sr.reveal(`.profile_border`)
sr.reveal(`.profile_name` , {delay:500})
sr.reveal(`.profile_profession` , {delay:600})
sr.reveal(`.profile_social` , {delay:700})
sr.reveal(`.profile_info-group` , {interval :100 ,delay:700})
sr.reveal(`.profile_buttons` , {delay:800})
sr.reveal(`.filters_content` , {delay:900})
sr.reveal(`.filters` , {delay:1000})
