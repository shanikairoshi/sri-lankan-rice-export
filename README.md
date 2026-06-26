# Sri Lankan Rice Export Website

This is a free GitHub Pages starter website for a Sri Lankan rice export/product catalogue business.

## What is included

- `index.html` — home page
- `products.html` — product catalogue loaded from `data/products.json`
- `quality.html` — quality, packaging, and export notes
- `about.html` — business profile page
- `contact.html` — email/WhatsApp inquiry page
- `css/style.css` — responsive styling
- `js/products.js` — loads product cards from JSON
- `js/contact.js` — prepares a mailto inquiry from the contact form
- `images/*.svg` — placeholder images; replace these with real product photos later
- `data/products.json` — product data, later replaceable by a FastAPI `/products` endpoint

## Local test

Open `index.html` in your browser.

For the product JSON loading to work reliably, run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Edit business details before publishing

Replace these placeholders:

- Business name: `Ceylon Rice Global`
- Email: `yourbusiness@email.com`
- WhatsApp link: `https://wa.me/94771234567`
- Product descriptions
- Product images
- Certification and quality claims
- About page content

Do not publish certification claims unless you have proof.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial rice export website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sri-lankan-rice-export.git
git push -u origin main
```

Then in GitHub:

1. Open the repository.
2. Go to **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch: `main`.
6. Select folder: `/root`.
7. Save.

The website should appear at:

```text
https://YOUR_USERNAME.github.io/sri-lankan-rice-export/
```

## Future FastAPI migration idea

The current product page loads data from:

```javascript
fetch("data/products.json")
```

Later, when you build your backend, change it to:

```javascript
fetch("https://api.yourdomain.com/products")
```

Suggested FastAPI endpoints for the future:

```text
GET    /products
GET    /products/{product_id}
POST   /inquiries
POST   /auth/login
POST   /orders
GET    /admin/orders
POST   /admin/products
PUT    /admin/inventory/{product_id}
```
