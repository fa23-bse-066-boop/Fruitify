**Live-Project-Netlify-Link**
https://fruitifly.netlify.app/
# Fruitables - Organic Fruits & Vegetables Website

A premium static frontend website for an organic fruits and vegetables e-commerce store, built with HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript.

## Features

- Fully responsive design (desktop, tablet, mobile)
- 5 pages: Home, Shop, About Us, Pages, Contact
- Reusable header/footer components via JavaScript
- Product filtering by category
- Image carousels (hero + vegetables)
- Animated statistics counters
- Client-side form validation
- Hover effects and scroll animations

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Bootstrap 5.3
- Vanilla JavaScript
- Font Awesome 6
- Google Fonts (Poppins)

## Project Structure

```
fruitables/
├── index.html          # Home page
├── shop.html           # Shop page
├── about.html          # About Us page
├── pages.html          # Pages hub
├── contact.html        # Contact page
├── assets/
│   ├── css/
│   │   └── style.css   # Custom styles
│   ├── js/
│   │   ├── data.js     # Static product data
│   │   ├── components.js # Shared header/footer
│   │   └── main.js     # Interactions & rendering
│   └── img/            # Local images (optional)
└── README.md
```

## Local Development

Open any HTML file directly in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`

## Deploy to Netlify

1. Push the project to a GitHub repository
2. Log in to [Netlify](https://netlify.com)
3. Click **Add new site** → **Import an existing project**
4. Connect your GitHub repo
5. Set build command to empty and publish directory to `/` (root)
6. Click **Deploy**

Alternatively, drag and drop the `fruitables` folder onto the Netlify dashboard.

## Deploy to Vercel

1. Push the project to a GitHub repository
2. Log in to [Vercel](https://vercel.com)
3. Click **Add New Project** and import your repo
4. Set the framework preset to **Other** (no build step needed)
5. Click **Deploy**

Alternatively, install the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes. Design inspired by the Fruitables organic food template.
