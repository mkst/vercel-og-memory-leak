# vercel/og memory leak demonstrator

## Steps to reproduce

- Clone this repo
- Open 2 terminal windows.
    - In the first :
    - `cd my-app`
    - `npm ci`
    - `npm run dev`
    - In the second (once node is up and running):
    - `while true; do curl http://localhost:3000/opengraph-image >/dev/null; done`

You can also open your browser at http://localhost:3000/opengraph-image to watch the memory usage increase.


## Create this project from scratch

Create an example application per the instructions https://nextjs.org/docs/getting-started/installation.

We are using Docker to keep things simple and reproducible.

Outside of Docker:
```
$ mkdir og
$ cd og
$ docker run --rm -ti -p 3000:3000 -v $(pwd):/og node:20 bash
```

Inside Docker:
```
# cd /og
# npx create-next-app@latest

create-next-app@14.1.4
Ok to proceed? (y) y
✔ What is your project named? … my-app
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /og/my-app.

# cd my-app
# npm install @vercel/og
```

Copy the `my-app/app/opengraph-image.tsx` from this repo into your project.

Start the server
```
# npm run dev
```

Outside of Docker run the `curl` command or connect from your browser and watch the memory usage increase every time you visit the page.
