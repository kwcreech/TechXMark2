export default function ServerComponent() {
    return (
        <div className="ml-7 mr-7">
            <h1 className="text-center text-3xl font-extrabold mb-11">About Server Components</h1>
            <p className="text-center">
                While traditional React components render on both the client and server, Server Components run only on the server, leading to improved performance
                and faster page load times. In addition, since they only run on the server, they can directly access databases and external APIs without API routes and data fetching
                To create a Server Component, files are created with the `.server.js` extension. They work the same as React components, but are designated to only run on the server.
            </p>
        </div>
    )
}