# Lesson 7 – React Router

---

## 1. What is Client-Side Routing?

In a traditional website, clicking a link sends a request to the server and loads a new HTML page. In a React app, **client-side routing** handles navigation entirely in the browser — no full page reload. The URL changes, and React swaps out which component is displayed.

**React Router** is the standard library for client-side routing in React.

Install it with:

```bash
npm install react-router-dom
```

---

## 2. Setting Up BrowserRouter

`BrowserRouter` wraps your entire app and enables routing. It should go in `main.jsx` (or wherever you render your root component).

```jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

Everything inside `<BrowserRouter>` can use routing features.

---

## 3. Defining Routes

Use `<Routes>` and `<Route>` inside your `App.jsx` to define which component renders at which URL path.

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

- `path` — the URL that triggers this route
- `element` — the component to render

---

## 4. Navigating with Link and NavLink

Never use `<a href="">` for internal navigation in React — it triggers a full page reload. Use `<Link>` instead.

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

**NavLink** works the same way but automatically adds an `active` class when the link matches the current URL — useful for styling the active nav item.

```jsx
import { NavLink } from 'react-router-dom';

<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
  About
</NavLink>
```

---

## 5. Nested Routes

Nested routes let child routes render inside a parent route. Define them by placing `<Route>` components inside another `<Route>`.

```jsx
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/jobs" element={<Jobs />}>
    <Route index element={<JobList />} />
    <Route path="full-time" element={<FullTime />} />
    <Route path="part-time" element={<PartTime />} />
  </Route>
  <Route path="/contact" element={<Contact />} />
</Routes>
```

- `index` — renders at exactly `/jobs` (default child)
- `/jobs/full-time` — renders `<Jobs />` with `<FullTime />` inside it
- `/jobs/part-time` — renders `<Jobs />` with `<PartTime />` inside it

Add `<Outlet />` in the parent component where the child should appear:

```jsx
import { Outlet } from 'react-router-dom';

function Jobs() {
  return (
    <div>
      <h1>Jobs</h1>
      <Outlet />  {/* child route renders here */}
    </div>
  );
}
```

---

## 6. Dynamic Routes and useParams

A **dynamic route** uses a parameter in the path (`:id`) to match different URLs with the same route definition.

```jsx
// App.jsx
<Route path="/profile/:id" element={<Profile />} />
```

Inside the `Profile` component, use the `useParams` hook to read the value from the URL.

```jsx
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();

  return <h1>Viewing profile: {id}</h1>;
}
```

You can use this `id` to look up data from an array or API.

```jsx
const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

function Profile() {
  const { id } = useParams();
  const user = users.find(u => u.id === id);

  if (!user) return <p>User not found.</p>;
  return <h1>{user.name}</h1>;
}
```

---

## 7. Programmatic Navigation with useNavigate

Sometimes you need to navigate in response to an event (like a form submission or button click) rather than a link. Use the `useNavigate` hook.

```jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/about')}>
      Go to About
    </button>
  );
}
```

You can also go back to the previous page:

```jsx
navigate(-1);
```

---

## 8. Catch-All Route (404)

Add a route with `path="*"` at the end of your `<Routes>` to catch any URL that doesn't match a defined route.

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 9. Quick Reference

| Concept | Import | Purpose |
|---|---|---|
| `BrowserRouter` | `react-router-dom` | Wraps the app, enables routing |
| `Routes` | `react-router-dom` | Container for all route definitions |
| `Route` | `react-router-dom` | Maps a path to a component |
| `Link` | `react-router-dom` | Internal navigation, no page reload |
| `NavLink` | `react-router-dom` | Like Link, adds active class automatically |
| `Outlet` | `react-router-dom` | Renders child routes inside a parent layout |
| `useParams` | `react-router-dom` | Reads dynamic segments from the URL |
| `useNavigate` | `react-router-dom` | Programmatic navigation |

---

## 10. The key Prop

When rendering lists, React needs a way to identify each item. The `key` prop tells React which item is which so it can update the DOM efficiently.

```jsx
const items = ['Apple', 'Banana', 'Mango'];

items.map((item, index) => (
  <li key={index}>{item}</li>
));
```

Using the array index as a key works for static lists, but can cause bugs if the list is reordered or items are added/removed. Use a stable, unique value when available — like an ID from your data:

```jsx
users.map(user => (
  <div key={user.id}>{user.name}</div>
));
```

**Rule of thumb:** if the list can change, use a unique ID. If it's fixed and never reorders, index is fine.

---

## 11. Finding and Using npm Packages

React has a large ecosystem of packages you can install to add functionality without building from scratch.

**Finding packages**

Search at [npmjs.com](https://www.npmjs.com) or [react.dev](https://react.dev) for libraries. Things to check before installing:

- Weekly downloads — higher means more widely used
- Last publish date — recently maintained is a good sign
- GitHub stars and open issues

**Installing a package**

```bash
npm install package-name
```

Then import what you need:

```jsx
import { something } from 'package-name';
```

**Removing a package**

```bash
npm uninstall package-name
```

Installed packages are listed in `package.json` under `dependencies`.

---

## 12. Building for Production

During development, Vite runs a local dev server with hot reloading. When your app is ready to deploy, you need to build it into static files.

**Run the build:**

```bash
npm run build
```

This creates a `dist/` folder containing optimised HTML, CSS, and JavaScript files ready to be deployed.

**Preview the build locally:**

```bash
npm run preview
```

This serves the `dist/` folder locally so you can test the production build before deploying.

**Deploying**

The contents of `dist/` can be uploaded to any static hosting service — Netlify, Vercel, GitHub Pages, or a traditional web server. You don't need Node.js on the server; it's just static files.

---

## In-Class Exercise: Building LinkedIn Clone with React Router

### Todo Steps

1. **First add BrowserRouter**
   - Import BrowserRouter from react-router-dom
   - Wrap your App component in main.jsx with BrowserRouter

2. **Then declare routes**
   - Import Routes and Route from react-router-dom
   - Set up basic routing structure in App.jsx
   - Define routes for Home, Network, Jobs, Profile, etc.

3. **Then write navigation component**
   - Create a Navigation component
   - Use Link components for navigation
   - Add the Navigation component to your App layout

4. **Difference between Link and NavLink**
   - Link: Basic navigation without active state
   - NavLink: Adds active class when route matches current URL
   - Use NavLink for navigation menus where you want to highlight the current page

5. **Styling it**
   - Create separate CSS file for LinkedIn-like styles
   - Style navigation, cards, and page layouts
   - Add hover effects and transitions

6. **Nested route**
   - Create parent route with child routes
   - Use Outlet component in parent to render child content
   - Example: Jobs page with Full-time and Part-time sub-routes

7. **Dynamic route**
   - Use route parameters with :id syntax
   - Access parameters with useParams hook
   - Fetch data based on dynamic ID (e.g., user profiles)

### Getting Started

```bash
# Install react-router-dom
npm install react-router-dom

# Start development server
npm run dev
```

The starter code includes all the basic components and pages. Your task is to wire them together using React Router concepts covered in this lesson.