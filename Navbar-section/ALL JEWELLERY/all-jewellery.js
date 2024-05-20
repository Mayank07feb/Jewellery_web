// Gold Jewellery
let goldJewelleryLoaded = 6; // Initial number of gold jewellery items loaded

function loadMoreGold() {
    const goldContainer = document.querySelector('.gold-container');
    const loadMoreGoldBtn = document.querySelector('.gold-section .load-more-btn button');

    // Array of image paths for gold jewellery
    const goldImagePaths = [
        "./gold asset/gold-jewellery1.jpg",
        "./gold asset/gold-jewellery2.jpg",
        "./gold asset/gold-jewellery3.jpg",
        // Add more image paths for gold jewellery here
    ];

    for (let i = 0; i < 4; i++) { // Load 4 more gold jewellery items each time
        // Create a new gold jewellery box
        const goldBox = document.createElement('div');
        goldBox.classList.add('jewellery-box');

        // Create the gold jewellery image
        const goldImg = document.createElement('img');
        goldImg.classList.add('jewellery-img');
        goldImg.src = goldImagePaths[goldJewelleryLoaded % goldImagePaths.length];
        goldImg.alt = `Gold Jewellery ${goldJewelleryLoaded + i}`;

        // Create the gold jewellery info
        const goldInfo = document.createElement('div');
        goldInfo.classList.add('jewellery-info');

        // Create the gold jewellery title
        const goldTitle = document.createElement('div');
        goldTitle.classList.add('jewellery-title');
        goldTitle.textContent = `Gold Jewellery ${goldJewelleryLoaded + i}`;

        // Create the gold jewellery price
        const goldPrice = document.createElement('div');
        goldPrice.classList.add('jewellery-price');
        goldPrice.textContent = '$999.99'; // You can change the price here

        // Create the Buy Now button
        const buyNowGoldBtn = document.createElement('button');
        buyNowGoldBtn.classList.add('buy-now-btn');
        buyNowGoldBtn.textContent = 'Buy Now';
        buyNowGoldBtn.onclick = buyNow;

        // Append elements to the gold jewellery info
        goldInfo.appendChild(goldTitle);
        goldInfo.appendChild(goldPrice);
        goldInfo.appendChild(buyNowGoldBtn);

        // Append the new gold jewellery box to the container
        goldBox.appendChild(goldImg);
        goldBox.appendChild(goldInfo);
        goldContainer.appendChild(goldBox);

        goldJewelleryLoaded++; // Increment goldJewelleryLoaded inside the loop
    }

    // If there are no more gold jewellery items to load, hide the "Load More" button
    if (goldJewelleryLoaded > 20) { // Adjust the number based on your gold jewellery collection
        loadMoreGoldBtn.style.display = 'none';
    }
}

// Ring Jewellery
let ringsLoaded = 6; // Initial number of rings loaded

function loadMoreRings() {
    const ringContainer = document.querySelector('.ring-container');
    const loadMoreRingsBtn = document.querySelector('.ring-section .load-more-btn button');

    // Array of image paths for rings
    const ringImagePaths = [
        "./ring asset/ring1.jpg",
        "./ring asset/ring2.jpg",
        "./ring asset/ring3.jpg",
        // Add more image paths for rings here
    ];

    for (let i = 0; i < 4; i++) { // Load 4 more rings each time
        // Create a new ring box
        const ringBox = document.createElement('div');
        ringBox.classList.add('jewellery-box');

        // Create the ring image
        const ringImg = document.createElement('img');
        ringImg.classList.add('jewellery-img');
        ringImg.src = ringImagePaths[ringsLoaded % ringImagePaths.length];
        ringImg.alt = `Ring ${ringsLoaded + i}`;

        // Create the ring info
        const ringInfo = document.createElement('div');
        ringInfo.classList.add('jewellery-info');

        // Create the ring title
        const ringTitle = document.createElement('div');
        ringTitle.classList.add('jewellery-title');
        ringTitle.textContent = `Ring ${ringsLoaded + i}`;

        // Create the ring price
        const ringPrice = document.createElement('div');
        ringPrice.classList.add('jewellery-price');
        ringPrice.textContent = '$599.99'; // You can change the price here

        // Create the Buy Now button
        const buyNowRingBtn = document.createElement('button');
        buyNowRingBtn.classList.add('buy-now-btn');
        buyNowRingBtn.textContent = 'Buy Now';
        buyNowRingBtn.onclick = buyNow;

        // Append elements to the ring info
        ringInfo.appendChild(ringTitle);
        ringInfo.appendChild(ringPrice);
        ringInfo.appendChild(buyNowRingBtn);

        // Append the new ring box to the container
        ringBox.appendChild(ringImg);
        ringBox.appendChild(ringInfo);
        ringContainer.appendChild(ringBox);

        ringsLoaded++; // Increment ringsLoaded inside the loop
    }

    // If there are no more rings to load, hide the "Load More" button
    if (ringsLoaded > 20) { // Adjust the number based on your ring collection
        loadMoreRingsBtn.style.display = 'none';
    }
}

// Diamond Jewellery
let diamondsLoaded = 6; // Initial number of diamonds loaded

function loadMoreDiamonds() {
    const diamondContainer = document.querySelector('.diamond-container');
    const loadMoreDiamondsBtn = document.querySelector('.diamond-section .load-more-btn button');

    // Array of image paths for diamonds
    const diamondImagePaths = [
        "./diamond asset/diamond1.jpg",
        "./diamond asset/diamond2.jpg",
        "./diamond asset/diamond3.jpg",
        // Add more image paths for diamonds here
    ];

    for (let i = 0; i < 4; i++) { // Load 4 more diamonds each time
        // Create a new diamond box
        const diamondBox = document.createElement('div');
        diamondBox.classList.add('jewellery-box');

        // Create the diamond image
        const diamondImg = document.createElement('img');
        diamondImg.classList.add('jewellery-img');
        diamondImg.src = diamondImagePaths[diamondsLoaded % diamondImagePaths.length];
        diamondImg.alt = `Diamond ${diamondsLoaded + i}`;

        // Create the diamond info
        const diamondInfo = document.createElement('div');
        diamondInfo.classList.add('jewellery-info');

        // Create the diamond title
        const diamondTitle = document.createElement('div');
        diamondTitle.classList.add('jewellery-title');
        diamondTitle.textContent = `Diamond ${diamondsLoaded + i}`;

        // Create the diamond price
        const diamondPrice = document.createElement('div');
        diamondPrice.classList.add('jewellery-price');
        diamondPrice.textContent = '$1499.99'; // You can change the price here

        // Create the Buy Now button
        const buyNowDiamondBtn = document.createElement('button');
        buyNowDiamondBtn.classList.add('buy-now-btn');
        buyNowDiamondBtn.textContent = 'Buy Now';
        buyNowDiamondBtn.onclick = buyNow;

        // Append elements to the diamond info
        diamondInfo.appendChild(diamondTitle);
        diamondInfo.appendChild(diamondPrice);
        diamondInfo.appendChild(buyNowDiamondBtn);

        // Append the new diamond box to the container
        diamondBox.appendChild(diamondImg);
        diamondBox.appendChild(diamondInfo);
        diamondContainer.appendChild(diamondBox);

        diamondsLoaded++; // Increment diamondsLoaded inside the loop
    }

    // If there are no more diamonds to load, hide the "Load More" button
    if (diamondsLoaded > 20) { // Adjust the number based on your diamond collection
        loadMoreDiamondsBtn.style.display = 'none';
    }
}

let earringsLoaded = 3; // Initial number of earrings loaded

function loadMoreEarrings() {
    const earringContainer = document.querySelector('.earrings-container'); // Corrected selector
    const loadMoreEarringsBtn = document.querySelector('.load-more-btn-earring button'); // Corrected selector

    // Array of image paths for earrings
    const earringImagePaths = [
        "./earring asset/earring4.jpg",
        "./earring asset/earring5.jpg",
        "./earring asset/earring6.jpg",
        // Add more image paths for earrings here
    ];

    for (let i = 0; i < 3; i++) { // Load 3 more earrings each time
        // Create a new earring box
        const earringBox = document.createElement('div');
        earringBox.classList.add('jewellery-box');

        // Create the earring image
        const earringImg = document.createElement('img');
        earringImg.classList.add('jewellery-img');
        earringImg.src = earringImagePaths[earringsLoaded % earringImagePaths.length];
        earringImg.alt = `Earring ${earringsLoaded + i}`;

        // Create the earring info
        const earringInfo = document.createElement('div');
        earringInfo.classList.add('jewellery-info');

        // Create the earring title
        const earringTitle = document.createElement('div');
        earringTitle.classList.add('jewellery-title');
        earringTitle.textContent = `Earring ${earringsLoaded + i}`;

        // Create the earring price
        const earringPrice = document.createElement('div');
        earringPrice.classList.add('jewellery-price');
        earringPrice.textContent = '$49.99'; // You can change the price here

        // Create the Buy Now button
        const buyNowEarringBtn = document.createElement('button');
        buyNowEarringBtn.classList.add('buy-now-btn');
        buyNowEarringBtn.textContent = 'Buy Now';
        buyNowEarringBtn.onclick = buyNow;

        // Append elements to the earring info
        earringInfo.appendChild(earringTitle);
        earringInfo.appendChild(earringPrice);
        earringInfo.appendChild(buyNowEarringBtn);

        // Append the new earring box to the container
        earringBox.appendChild(earringImg);
        earringBox.appendChild(earringInfo);
        earringContainer.appendChild(earringBox);

        earringsLoaded++; // Increment earringsLoaded inside the loop
    }

    // If there are no more earrings to load, hide the "Load More" button
    if (earringsLoaded > 6) { // Adjust the number based on your earring collection
        loadMoreEarringsBtn.style.display = 'none';
    }
}

function buyNow(button) {
    const jewelleryBox = button.closest('.jewellery-box');
    const jewelleryTitle = jewelleryBox.querySelector('.jewellery-title').textContent;
    const jewelleryPrice = jewelleryBox.querySelector('.jewellery-price').textContent;

    const message = `Check out this jewellery item:\nTitle: ${jewelleryTitle}\nPrice: ${jewelleryPrice}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
}
