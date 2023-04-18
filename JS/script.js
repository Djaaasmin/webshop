const responsiveNavbar = (function () {
	const button = document.querySelector("#menuButton");
	const navbar = document.querySelector("#navbar")
	button.addEventListener("click", function () {
		if (navbar.className === "navbar") {
			navbar.className += " navbarResponsive";
		}
		else {
			navbar.className = "navbar";
		}
	});
})();

if (document.getElementById('hearderSlide')) {
	$('#hearderSlide').multislider();
	$('#hearderSlide').multislider('pause');
}


function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

// Selektiranje forme košarice i dodavanje slušača događaja na nju
const cartForm = document.querySelector('#cartForm');
cartForm.addEventListener('submit', function(event) {
  // Sprječavanje podnošenja obrasca putem HTTP zahtjeva
  event.preventDefault();
  
  // Dohvaćanje vrijednosti polja za odabir načina plaćanja
  const paymentMethod = document.querySelector('#paymentMethod').value;
  
  // Provjera koja je vrijednost odabrana i prikaz odgovarajućih informacija
  if (paymentMethod === 'card') {
    alert('Plaćanje karticom');
  } else if (paymentMethod === 'pickup') {
    alert('Plaćanje prilikom preuzimanja');
  }
});

