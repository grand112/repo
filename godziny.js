let godz = document.querySelector('.godziny');
let mid2 = document.querySelector('.mid');

godz.addEventListener('click', function(){
    mid2.innerHTML=`
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  `;
});