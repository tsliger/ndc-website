import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import gsap from "gsap"
import { useEffect } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"



export default function Navbar () {
    useEffect(() => {
        const showAnim = gsap
        .from(".navbar-container", {
            yPercent: -100,
            paused: true,
            duration: 0.5
        })
        .progress(1);

        ScrollTrigger.create({
        start: "top -60%",
        end: 99999,
        onUpdate: (self: any) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
            
        },
        });
    }, [])
    return (
        <nav className="navbar-container">
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