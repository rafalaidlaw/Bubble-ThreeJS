# Three.js-Boilerplate-TS-Vite

A Three.js Boilerplate for TypeScript Vite projects.

This boilerplate is supplementary to <!--my book titled [**Three.js and TypeScript**](https://amzn.to/3FahROZ) and--> my **ThreeJS and TypeScript** courses at [Udemy](https://www.udemy.com/course/threejs-tutorials/?referralCode=4C7E1DE91C3E42F69D0F) and [YouTube (Channel membership required)](https://www.youtube.com/playlist?list=PLKWUX7aMnlEKTmkBqwjc-tZgULJdNBjEd)

[Introductory Video](https://youtu.be/cZWAqrJhtvQ&list=PLKWUX7aMnlEKTmkBqwjc-tZgULJdNBjEd)

[Course Discount Coupons](https://sbcode.net/coupons#threejs)

## Boilerplate Overview

When run, the boilerplate shows a multi-coloured wireframe cube, with `OrbitControls`, `Dat.GUI` and `Stats.js` included.

[Example](https://sean-bradley.github.io/Three.js-Boilerplate-TS-Vite/)

![](docs/screengrab.jpg)

## Installing

```bash
git clone https://github.com/Sean-Bradley/Three.js-Boilerplate-TS-Vite.git
cd Three.js-Boilerplate-TS-Vite
npm install
```

### Develop

```
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/)

### Build Production

```bash
npm run build
npm run preview
```

Visit [http://localhost:4173/](http://localhost:4173/)

### Deploy to GitHub Pages (deploy from branch)

1. Build and publish the `dist` folder to a **`gh-pages`** branch (already scripted):

   ```bash
   npm run build
   npm run deploy
   ```

   `npm run deploy` uses the `gh-pages` package to push `dist` to the `gh-pages` branch on `origin`.

2. On GitHub: **Settings → Pages → Build and deployment → Source** → **Deploy from a branch**.

3. Set **Branch** to **`gh-pages`** and folder **`/ (root)`**, then Save.

4. Site URL: `https://<username>.github.io/<repo>/` (e.g. `https://rafalaidlaw.github.io/Bubble-ThreeJS/`).

If you previously used **GitHub Actions** as the Pages source, switch the source to **Deploy from a branch** so it uses `gh-pages` instead.
