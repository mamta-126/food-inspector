<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
 
 integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTtt
 BxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <script
src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"

integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+
4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw=="
 crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"

integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9
GkcIdslK1eN7N6jIeHz"
 crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
 <script>
 // JavaScript to toggle the background color
 document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
 var navbarCollapse = document.querySelector('.navbar');
 navbarToggler.addEventListener('click', function () {
 navbarCollapse.classList.toggle('bg-white-nav');
 });
 });
 var ctx1 = document.getElementById('hazardChart').getContext('2d');
 var hazardChart = new Chart(ctx1, {
 type: 'doughnut',
 data: {
 datasets: [{
 data: [1],
 backgroundColor: ['#28a745']
 }]
 },
 options: {
 responsive: true,
 cutoutPercentage: 70,
 legend: {
 display: false
 },
 tooltips: {
 enabled: false
 }
 }
 });
 var ctx2 = document.getElementById('organicChart').getContext('2d');
 var organicChart = new Chart(ctx2, {
 type: 'doughnut',
 data: {
 datasets: [{
 data: [1],
 backgroundColor: ['#28a745']
 }]
 },
 options: {
 responsive: true,
 cutoutPercentage: 70,
 legend: {
 display: false
 },
 tooltips: {
 enabled: false
 }
 }
 });
 </script>
document.getElementById('search-button').addEventListener('click', () => {
 const ingredient = document.getElementById('ingredient-input').value;
 fetch(https://api.example.com/ingredients?name=${ingredient})
 .then(response => response.json())
 .then(data => {
 displayResults(data);
 })
 .catch(error => console.error('Error:', error));
});
document.getElementById('upload-button').addEventListener('click', () => {
 const file = document.getElementById('image-upload').files[0];
 const formData = new FormData();
 formData.append('file',file);
 fetch('https://api.example.com/ingredients/upload', {
 method: 'POST',
 body: formData
 })
 .then(response => response.json())
 .then(data => {
 displayResults(data);
 })
 .catch(error => console.error('Error:', error));
});
function displayResults(data) {
 const resultsSection = document.getElementById('results');
 resultsSection.innerHTML = '';
 data.forEach(item => {
 const p = document.createElement('p');
 p.textContent = ${item.name}: ${item.healthStatus};
 resultsSection.appendChild(p);
 });
}
var tl = gsap.timeline({scrollTrigger:{
 trigger: ".two",
 start: "0% 95%",
 end: "70% 50%",
 scrub: true,
 // markers: true,
}})
tl.to("#cola",{
 top: "120%",
 left: "0%"
}, 'orange')
tl.to("#orange-cut",{
 top:"160%",
 left: "23%"
}, 'orange')
var tl2 = gsap.timeline({scrollTrigger:{
 trigger: ".three",
 start: "0% 95%",
 end: "20% 50%",
 scrub: true,
  // markers: true,
}})
tl2.to("#orange-cut",{
 width:"18%",
 left: "42%",
 top: "198%"
}, 'ca')
tl2.to("#cola",{
 width:"35%",
 top: "210%",
 left: "33%",
}, 'ca')