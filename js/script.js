//chart
var ctxB = document.getElementById("barChart").getContext('2d');
var chart = new Chart(ctxB, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});

const links = document.querySelectorAll('.offcanvas .nav-link');
let activeLink = links[0];
activeLink.classList.add('activ-nav-item');
let id = links[0].getAttribute('href').replace('#','');
let activeCard = document.getElementById(id);

for(let link of links){ 
	link.addEventListener('click', function(event){ 
		event.preventDefault();

		if(this.getAttribute('href').replace('#','')!=='manager'){
		activeCard.classList.add('d-none');
		activeLink.classList.remove('activ-nav-item');
		
		activeLink = this;
		activeLink.classList.add('activ-nav-item');
		
		id = activeLink.getAttribute('href').replace('#','');
		activeCard = document.getElementById(id);
		activeCard.classList.remove('d-none');
		}
	});
}