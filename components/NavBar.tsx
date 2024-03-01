import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <nav className="fixed top-0 left-0 z-50 mb-20">
            <ul className="flex flex-row space-between">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/fileexplanation"}>Explanation of each file</Link>
                </li>
                <li>
                    <Link href={"/approuterexplanation"}>App Router</Link>
                </li>
                <li>
                    <Link href={"/servercomponent"}>Server Components</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar