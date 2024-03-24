# Howdy!
![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=howdyremy)

[howdyremy.com](https://howdyremy.com) is the personal portfolio site for Remy Lynch, frontend engineer.

## 🔬 Project Structure

```text
/
├── public/
│   ├── {project}/
│   │   └── {...project images}
│   ├── fonts/
│   │   └── {...webfonts}
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── layouts/
│   ├── lib/
│   │   └── contentful.ts
│   ├── pages/
│   │   ├── index.astro
│   │   └── {...design project pages}
│   └── styles/
│       └── {...myfonts provided css files}
└── package.json
```
### About Astro
Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🔭 Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ⚙️ Deploying code changes
To deploy a new code change create a PR against `main`. Once merged, Vercel will deploy changes automatically.

## ⌨️ Deploying content changes
Some content, for example the main list of projects, is managed in Contentful. After publishing changes a webhook will trigger a Vercel deployment.