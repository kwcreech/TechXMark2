export default function FileExplanation() {
    return (
        <div className="ml-7 mr-7">
            <h1 className="text-center text-3xl mb-11">Explanation of <span className="font-extrabold">EVERY</span> file in a NextJS project!</h1>

            <h2 className="text-center text-xl mb-8 font-semibold">.next Folder</h2>
            <p className="mb-7">
                <span className="font-semibold">static directory - </span>
                Contains static assets like Javascript, CSS, images, fonts, and other things needed for the website to run well.
            </p>
            <p className="mb-7">
                <span className="font-semibold">server directory - </span>
                Contains code that is necessary for server-side rendering.
            </p>
            <p className="mb-7">
                <span className="font-semibold">cache directory - </span>
                Stores cached data related to the build process which helps speeds up subsequent builds.
            </p>
            <p className="mb-7">
                <span className="font-semibold">types directory - </span>
                Contains TypeScript declaration files.
            </p>
            <p className="mb-7">
                <span className="font-semibold">app-build-manifest.json - </span>
                Tracks assets generated in the build, optimizes resource loading, maps source files to output files, and speeds up the build process only rebuilding what NEEDS to be rebuilt.
            </p>
            <p className="mb-7">
                <span className="font-semibold">build-manifest.json - </span>
                Stores metadata which serves to optimize resource loading, handle dynamic routes, manage caching, and streamlines the build process.
            </p>
            <p className="mb-7">
                <span className="font-semibold">package.json - </span>
                Manages the loading and rendering of imported React components and optimizes performances and resource utilization.
            </p>
            <p className="mb-7">
                <span className="font-semibold">trace - </span>
                Contains tracing data on server-side rendering operations, which can be used to monitor performance.
            </p>


            <h2 className="text-center text-xl mb-8 font-semibold">components Folder</h2>
            <p className="mb-7">
                <span className="font-semibold">NavBar.tsx - </span>
                Custom created component (by me) that hosts the nav bar used in my layout.
            </p>


            <h2 className="text-center text-xl mb-8 font-semibold">node_modules Folder</h2>
            <p className="mb-8">Stores all dependencies used in the project.</p>


            <h2 className="text-center text-xl mb-8 font-semibold">public Folder</h2>
            <p className="mb-7">
                <span className="font-semibold">images directory - </span>
                Created by me to hold images used in the project.
            </p>
            <p className="mb-7">
                <span className="font-semibold">next.svg - </span>
                Default icon provided by NextJS.
            </p>
            <p className="mb-7">
                <span className="font-semibold">vercel.svg - </span>
                Default icon provided by NextJS.
            </p>


            <h2 className="text-center text-xl mb-8 font-semibold">src\app Folder</h2>
            <p className="mb-7">
                <span className="font-semibold">approuterexplanation, fileexplanation, and servercomponent directories - </span>
                Additional pages created by me.
            </p>
            <p className="mb-7">
                <span className="font-semibold">favicon.ico - </span>
                Default icon provided by NextJS.
            </p>
            <p className="mb-7">
                <span className="font-semibold">globals.css - </span>
                CSS file that allows you to define CSS rules that apply to the entire project.
            </p>
            <p className="mb-7">
                <span className="font-semibold">layout.tsx - </span>
                Defines the layout of every page in the project.
            </p>
            <p className="mb-7">
                <span className="font-semibold">page.tsx - </span>
                The home page of the project.
            </p>


            <h2 className="text-center text-xl mb-8 font-semibold">Root Directory</h2>
            <p className="mb-7">
                <span className="font-semibold">eslintrc.json - </span>
                Configures ESLint, which is a linting tool that helps developers adhere to coding standards, improving code quality.
            </p>
            <p className="mb-7">
                <span className="font-semibold">next-env.d.ts - </span>
                Augments global TypeScript types to include definitions specific to NextJS.
            </p>
            <p className="mb-7">
                <span className="font-semibold">.gitignore - </span>
                Specifies which files and directories are to be ignored by Git.
            </p>
            <p className="mb-7">
                <span className="font-semibold">next.config.mjs - </span>
                Controls how the project is built and behaves, allowing you to tailor it to specific needs.
            </p>
            <p className="mb-7">
                <span className="font-semibold">package-lock.json - </span>
                Standard file used in Node.js projects to ensure that the exact versions of dependencies installed are recorded and installed, leading to consistency across different machines.
            </p>
            <p className="mb-7">
                <span className="font-semibold">package.json - </span>
                Lists all dependencies needed for the project.
            </p>
            <p className="mb-7">
                <span className="font-semibold">postcss.config.js - </span>
                Configures PostCSS, which transforms CSS using JavaScript plugins.
            </p>
            <p className="mb-7">
                <span className="font-semibold">README.md - </span>
                Text file which describes the project.
            </p>
            <p className="mb-7">
                <span className="font-semibold">tailwind.config.ts - </span>
                Configures TailwindCSS and allows for customization.
            </p>
            <p className="mb-7">
                <span className="font-semibold">tsconfig.json - </span>
                Configures Typescript.
            </p>
        </div>
    )
}