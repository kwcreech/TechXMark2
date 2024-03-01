export default function AppRouter() {
    return (
        <div className="ml-7 mr-7">
            <h1 className="text-center text-3xl font-extrabold mb-11">About the App Router</h1>
            <p className="text-center">
                The App Router allows for directory based routing which resemble URL structures by supporting nested routes. In addition, it
                supports layouts, which define standard page structures that apply to all same-level and nested pages.
                It also enhances performance by allowing parts of each page to be streamed to the client as they are ready, thus improving load times (and with it user experience).
            </p>
        </div>
    )
}