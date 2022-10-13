import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import gsap from "gsap"
import { useEffect, useState, useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { animated, useSpring, useTransition, config } from 'react-spring'

gsap.registerPlugin(ScrollTrigger)

export const Navlinks = ({}) => {
    return (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/capabilites">Capabilites</Link>
            </li>
            <li>
                Contact
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </>
    )
}

export default function Navbar () {
    const [isDrawerOpen, setDrawer] = useState(false)
    const navRef = useRef(null)
    const drawerStyle = useSpring({ opacity: isDrawerOpen ? 1 : 0 })
    

    useEffect(() => {
        const showAnim = gsap
        .from(navRef.current, {
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
        <>
            <nav className="navbar-container" ref={navRef}>
                <div className="flex flex-col justify-center z-50">
                    <Image src="/ndc-logo-white.png" width={192} height={53} draggable={false}/>
                </div>
                <div className="flex-grow"/>
                <div className="items-center hidden lg:flex">
                    <ul className={styles.navList}>
                        <Navlinks />
                    </ul>
                </div>
                <div className="items-center justify-center flex lg:hidden h-[100px] aspect-square">
                    <div className="cursor-pointer select-none translate-x-8 active:scale-95 transition-all" onClick={() => setDrawer(!isDrawerOpen)}>
                        <HiOutlineMenu size={40}/>
                    </div>
                </div>
            </nav>
            {isDrawerOpen && (
                <animated.div   className={styles.drawer}>
                    <div className="items-center flex h-[100px]  bg-ndcDark">
                        <div className="flex flex-col ml-8 z-50">
                            <Image src="/ndc-logo-white.png" width={192} height={53} draggable={false}/>
                        </div>
                        <div className="cursor-pointer select-none absolute right-0 -translate-x-8 active:scale-95 transition-all" onClick={() => setDrawer(!isDrawerOpen)}>
                            <HiX size={40}/>
                        </div>
                    </div>

                    <ul className={styles.navListDrawer}>
                        <Navlinks />
                    </ul>
                </animated.div>
            )}
            
        </>
    )
}