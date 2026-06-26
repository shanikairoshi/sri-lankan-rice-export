function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createPackagingBadges(packaging) {
  const badges = createElement("div", "badges");
  packaging.forEach((item) => {
    badges.appendChild(createElement("span", "badge", item));
  });
  return badges;
}

function createProductCard(product) {
  const card = createElement("article", "product-card");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = `${product.name} product image`;
  card.appendChild(image);

  const content = createElement("div", "product-content");
  content.appendChild(createElement("h3", "", product.name));
  content.appendChild(createElement("p", "meta", `Type: ${product.type} | Origin: ${product.origin}`));

  const description = createElement("p", "", product.description);
  content.appendChild(description);

  content.appendChild(createPackagingBadges(product.packaging));

  const link = document.createElement("a");
  link.className = "btn primary";
  link.href = `contact.html?product=${encodeURIComponent(product.name)}`;
  link.textContent = "Request Quotation";
  content.appendChild(link);

  card.appendChild(content);
  return card;
}

async function loadProducts() {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  try {
    const response = await fetch("data/products.json");
    if (!response.ok) {
      throw new Error(`Could not load products: ${response.status}`);
    }

    const products = await response.json();
    productList.innerHTML = "";

    products.forEach((product) => {
      productList.appendChild(createProductCard(product));
    });
  } catch (error) {
    console.error(error);
    productList.innerHTML = "<p>Product catalogue could not be loaded. Please check data/products.json.</p>";
  }
}

loadProducts();
