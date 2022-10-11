import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'



export default function Navbar () {
    return (
        <nav className={styles.navContainer}>
            <div className="flex flex-col justify-center z-50 ">
                <Image src="/ndc-logo-white.png" width={192} height={53} draggable={false}/>
            </div>
            <div className="flex-grow"/>
            <div className="flex items-center">
                <ul className={styles.navList}>
                    <li>
                        Home
                    </li>
                    <li>
                        Capabilites
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        About
                    </li>
                </ul>
            </div>
        </nav>
    )
}