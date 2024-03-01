import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <nav className="flex justify-center">
            <ul className="list-none">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/fileexplanation"}>Explanation of each File</Link>
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