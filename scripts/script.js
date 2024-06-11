$('.menu-toggle').click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});

const products = [
    { id: 1, title: 'Air Compression Therapy XY-K-DVT-I', price: 'Ksh.  20,000', description: 'The lower limb air pressure therapy instrument adopts the circulation pressure massage to prevent deep venous thrombosis by accelerating blood circulation and promoting venous blood reflux speed and flow. During pressure therapy, three pressure sacs inflate one by one from the distal end to the proximal end, continuously pressuring the body to circulate blood from the bottom up.', image: '../catalog/images/Air Compression Therapy XY-K-DVT-I.jpg', thumbnail: '../catalog/thumbnails/Air Compression Therapy XY-K-DVT-I.jpg', application: 'Rehabilitation centre', classification: 'Class II', model: 'XY-K-DVT-I', service: 'deep vein thrombosis (DVT)', voltage: '220V/50 Hz', size: '190mm*75mm*40mm' },
    { id: 2, title: 'Deep Muscle Stimulator XY-DMS-102B', price: 'Ksh.  10,000', description: 'The deep muscle stimulator is driven by a motor to generate mechanical power, which is driven by an eccentric wheel to drive the connecting rod to reciprocate. The connecting rod drives the massage head to vibrate and strike. It uses the transmission of mechanical force from the human body to act on the deep muscle tissue of the human body and stimulate the patient\'s body Sensory function. The treatment intensity is mainly determined by the rotation speed of the motor. As the rotation speed of the motor increases, the treatment intensity increases, and vice versa, the intensity decreases. It can simulate traditional massage techniques by changing the types of massage heads: Zen push, bird pecking, palm rub, tooth comb, finger kneading, acupressure, finger pressing, fist vibration, kneading, pushing, hanging, tapping, patting, tapping, tapping wait.', image: '../catalog/images/Deep Muscle Stimulator XY-DMS-102B.jpg', thumbnail: '../catalog/thumbnails/Deep Muscle Stimulator XY-DMS-102B.jpg', application: 'Rehabilitation centre', classification: 'N/A', model: 'XY-DMS-102B( Magnetic resonance heat)', service: 'Body massage', voltage: 'N/A', size: 'N/A' },
    { id: 3, title: 'Microwave Therapy HYJ-I', price: 'Ksh.  50,000', description: 'The electromagnetic energy of ultrashort wave can produce thermal effect in muscle tissue. The ultrashort wave can directly penetrate the abdominal wall and heat up the viscera in the body. The thermal permeation can flow mucopolysaccharide in the connective tissue, change its concentration and make joints and ligaments more extensibility.', image: '../catalog/images/Microwave Therapy HYJ-I.png', thumbnail: '../catalog/thumbnails/Microwave Therapy HYJ-I.png', application: 'adjuvant treatment of soft tissue pain', classification: 'N/A', model: 'HYJ-I', service: 'Onsite training', voltage: 'N/A', size: 'N/A' },
    { id: 4, title: 'Microwave Therapy HYJ-IV (Enhanced)', price: 'Ksh.  100,000', description: 'Under the action of extremely short wave, the charged particles in the body and polarizing molecules move violently and friction each other to produce thermal effect, so that local tissue blood vessels dilate, blood circulation is accelerated, tissue metabolism is accelerated, blood cell phagocytosis is strengthened, promote the absorption of pathological metabolites, so as to achieve the purpose of treatment.', image: '../catalog/images/Microwave Therapy HYJ-IV (Enhanced).jpg', thumbnail: '../catalog/thumbnails/Microwave Therapy HYJ-IV.jpg', application: 'Rehab center/ hospital/ home', classification: 'Class II', model: 'HYJ-IV', service: 'ODM & OEM service', voltage: '220V/50 Hz', size: '430mm*120mm*99m' },
    { id: 5, title: 'Pulse Magnetic Therapy XY-K-MCC-II', price: 'Ksh.  5,000', description: 'The pulse magnetic therapy device uses a single pulse triangle wave to generate an impact magnetic field, which acts on the surface of the human spine, femur and other bones. Through electromagnetic biological effects, it activates the activity of bone cells, interferes with bone metabolism, increases bone density, and improves bone quality.', image: '../catalog/images/Pulse Magnetic Therapy XY-K-MCC-II.jpg', thumbnail: '../catalog/thumbnails/Pulse Magnetic Therapy XY-K-MCC-II.jpg', application: 'adjuvant treatment of pain caused by soft tissue sprains', classification: 'Class II', model: 'XY-K-MCC-II', service: 'N/A', voltage: '220V/50 Hz', size: '380mm*310mm*125mm' },
];

function goToProductDetail(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'product-detail.html';
}

function goToCheckout(){
    window.location.href = 'checkout.html';
}

function loadProductDetails() {
    const productId = localStorage.getItem('selectedProductId');
    if (!productId) return;

    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById('product-title').innerText = product.title;
        document.getElementById('product-price').innerText =  product.price;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-image').src = product.image;
    }
}

function loadCheckoutDetails(){
    const productId = localStorage.getItem('selectedProductId');
    if (!productId) return;

    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById('total-payable').innerText =  product.price;
    }
}

function loadProductList() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.setAttribute('data-id', product.id);

        const productImageContainer = document.createElement('div');
        productImageContainer.classList.add('product-image-container');

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;
        productImage.classList.add('product-image');

        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');

        const productTitle = document.createElement('p');
        productTitle.innerText = product.title;

        const productPrice = document.createElement('h4');
        productPrice.innerText = '' + product.price;

        const productButton = document.createElement('button');
        productButton.innerText = 'View Details';
        productButton.onclick = () => goToProductDetail(product.id);

        priceContainer.appendChild(productPrice);
        priceContainer.appendChild(productButton);

        productImageContainer.appendChild(productImage);

        productItem.appendChild(productImageContainer);
        productItem.appendChild(productTitle);
        productItem.appendChild(priceContainer);

        productList.appendChild(productItem);
    });
}

/* Checkout page Tab switching*/
const tabs = document.querySelectorAll(".tab");
const radio = document.querySelectorAll(".toggleTab");
const inputs = document.querySelectorAll(".tab input");

for(var x=0; x < radio.length; x++){
  radio[x].addEventListener("change", function(){
    for(var y = 0; y < inputs.length; y++){
      inputs[y].value = "";
    }
  
    for(var i=0; i < tabs.length; i++){
      tabs[i].classList.add("d-none");
      if(this.checked && tabs[i].getAttribute("tabname") == this.value){
        tabs[i].classList.remove("d-none")
      }
    }
    
  });
}


if (window.location.pathname.endsWith('catalog.html') || window.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', loadProductList);
}

if (window.location.pathname.endsWith('product-detail.html')) {
    document.addEventListener('DOMContentLoaded', loadProductDetails);
}

if (window.location.pathname.endsWith('checkout.html')) {
    document.addEventListener('DOMContentLoaded', loadCheckoutDetails);
}
