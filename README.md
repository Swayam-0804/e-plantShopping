# e-plantShopping — Paradise Nursery

**Project Name:** e-plantShopping

# Paradise Nursery — React Plant Shopping Application

Paradise Nursery is a responsive demo e-commerce storefront for indoor plants, built with **React, Vite, Redux Toolkit, and React Redux**. It includes a welcoming landing page, an About Us page, a searchable plant catalog organized into three categories, and a fully interactive shopping cart.

## Project Name
**Paradise Nursery — Online Plant Shop**

## Features
- Landing page with Paradise Nursery branding, background photograph, and **Get Started** button
- Header with Home, Shop Plants, Our Story, and a live cart-item counter
- About Us page describing the company and its mission
- Product listing with **nine plants** in **three categories**: Tropical Plants, Low-Maintenance, and Flowering Plants
- Plant photographs, descriptions, prices, category filters, and live search
- **Add to bag** buttons using Redux
- Cart with item images, unit prices, line totals, subtotal, total-item count, and grand total
- Increase/decrease quantity, remove individual items, and clear cart
- Continue Shopping button and demo-only Checkout alert
- Responsive design for desktop and mobile

## Tech Stack
React 18, JavaScript/JSX, Vite 6, Redux Toolkit, React Redux, CSS, Lucide React.

## Run Locally
Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## File Guide (Coursera Assignment)

| Question | File | Purpose |
|---|---|---|
| Q1 | `README.md` | Project name and information |
| Q2 | `src/AboutUs.jsx` | Company information |
| Q3 | `src/App.css` | Landing page background image and styling |
| Q4 | `src/App.jsx` | Paradise Nursery landing page and Get Started button |
| Q5 | `src/CartSlice.jsx` | Redux `addItem`, `removeItem`, and `updateQuantity` reducers |
| Q6 | `src/ProductList.jsx` | Plant list, categories, prices, and add-to-cart |
| Q7 | `src/CartItem.jsx` | Shopping cart, quantities, totals, deletion and checkout |

## GitHub Submission
Create a **public** GitHub repository and push all files. Replace `YOUR_USERNAME` and `e-plantShopping` in the URLs with your own GitHub username and repo name. If your branch is not named `main`, replace `main` with the actual branch name.

Example: `https://github.com/YOUR_USERNAME/e-plantShopping/blob/main/src/CartItem.jsx`

## Notes
This is a demo shop: the checkout button intentionally displays a message and **does not process payment**. Product photography is fetched from Unsplash and requires an internet connection. Cart state is kept in memory and resets on a page refresh. Product names/prices are demo sample data. No backend is required.
