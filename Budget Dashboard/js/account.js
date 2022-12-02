//side menu functionality
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sideMenu = document.querySelector('aside');

//show side menu
menuBtn.addEventListener('click', function(){
    sideMenu.style.display = 'block'
});
//hide side menu
closeBtn.addEventListener('click', function(){
    sideMenu.style.display = 'none'
});
//set a variable for the theme toggler
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('.theme-btn i:first-child').classList.toggle('active');
    themeBtn.querySelector('.theme-btn i:last-child').classList.toggle('active');
});

//  Constructing the cryptocurrency chart
const chart = document.querySelector('#chart').getContext('2d');

//to create a new chart
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'BTC',
                data: [8430, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 1
            },
            {
                label: 'ETH',
                data: [0, 41000, 78800, 26000, 50000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: 'blue',
                borderWidth: 1
            },
            {
                label: 'DOGE',
                data: [890, 12000, 60980, 43252, 46000, 70874, 10034, 20685, 39854, 60037, 43910],
                borderColor: 'gold',
                borderWidth: 1
            },
            {
                label: 'USD',
                data: [5000, 12000, 50364, 9042, 12300, 30575, 43957, 20685, 50008, 33401, 43910],
                borderColor: 'green',
                borderWidth: 1
            },
            {
                label: 'SHIB',
                data: [2000, 20000, 10000, 40003, 70000, 60000, 30422, 50329, 45044, 20126, 50219],
                borderColor: 'purple',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true
    }
});