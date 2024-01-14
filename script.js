document.addEventListener('DOMContentLoaded', function () {
      
       // Getting elements from DOM
    const enterDomain = document.getElementById('enter-domain');
    const startScanBtn = document.getElementById('start-scan');
    const magnifyingGlass = document.querySelector('.fa-magnifying-glass');
    const nav = document.querySelectorAll('.info-selection ul li');
    const statTypes = document.querySelectorAll('.stat-type');

    let domainToScan;


    nav.forEach((item, idx) => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all li elements
            nav.forEach(i => i.classList.remove('active'));

            // Hide all stat-type elements
            statTypes.forEach(stat => stat.classList.remove('show'));

            // Add 'active' class to the clicked li element
            item.classList.add('active');

            // Show the corresponding stat-type element
            statTypes[idx].classList.add('show');
        });
    });

    startScanBtn.addEventListener('click', startScan);
    enterDomain.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            startScan();
        }
    });

    function startScan() {
        const validDomain = /^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/.test(enterDomain.value);

        if (enterDomain.value !== '' && validDomain) {
            domainToScan = enterDomain.value;
            window.open('./Dashboard/dashboard.html'); //Open dashboard
            console.log(validDomain);
        } else {
            enterDomain.focus();
            enterDomain.classList.add('invalid');
            magnifyingGlass.style.color = 'red';

            setTimeout(() => {
                magnifyingGlass.style.color = '#152735';
                enterDomain.classList.remove('invalid');
            }, 1500);
        }

        console.log(domainToScan);
    }
});

function test() {
    const newTableRow = document.createElement('tr');
    subdomainsTable.appendChild(newTableRow);
    for (let i = 0; i < 4; i++) {
        const newTableData = document.createElement('td');
        if(i === 0){
            newTableData.classList.add('subdomain-activity');
        }
        newTableRow.appendChild(newTableData);
    }
    
    
}