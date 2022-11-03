import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import gsap from "gsap";
import { useEffect, useState, useRef, useCallback } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { animated, useSpring, useTransition, config } from "react-spring";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

export const Navlinks = (props) => {
  const router = useRouter();

  const goToContact = () => {
    gsap.killTweensOf(window);
    ScrollTrigger.disable();

    if (props.closeDrawer) {
      props.closeDrawer();
    }

    const tween = gsap.to(window, {
      scrollTo: { y: document.body.scrollHeight, autoKill: false },
      delay: 0.15,
      duration: 0.5,
      ease: "sine",
      onComplete: () => {
        gsap.killTweensOf(window)
        ScrollTrigger.enable();
      },
    });
  };

  return (
    <>
      <li>
        <Link href="/">
          <a
            className={`h-full flex items-center ${
              router.pathname === "/"
                ? "text-blue-500 drop-shadow-none"
                : "text-inherit"
            }`}
          >
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/capabilites">
          <a
            className={`h-full flex items-center ${
              router.pathname === "/capabilites"
                ? "text-blue-500  drop-shadow-none"
                : "text-inherit"
            }`}
          >
            Capabilities
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a
            className={`h-full flex items-center ${
              router.pathname === "/about"
                ? "text-blue-500 drop-shadow-none"
                : "text-inherit"
            }`}
          >
            About
          </a>
        </Link>
      </li>
      <li onClick={goToContact}>Contact</li>
    </>
  );
};

export default function Navbar() {
  const [isDrawerOpen, setDrawer] = useState(false);
  const navRef = useRef(null);
  const drawerStyle = useSpring({ opacity: isDrawerOpen ? 1 : 0 });
  const router = useRouter();

  useEffect(() => {
    const showAnim = gsap
      .from(navRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.5,
        ease: 'sine'
      })
      .progress(1);


    ScrollTrigger.create({
      start: "top -60%",
      end: 99999,
      onUpdate: (self: any) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);

  useEffect(() => {
    setDrawer(false);
  }, [router.pathname]);

  useEffect(() => {
    if (isDrawerOpen === false) {
      document.body.style.overflow = "unset";
    } else {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }
  }, [isDrawerOpen]);

  function handleClose() {
    setDrawer(false);
  }

  return (
    <>
      <nav className="navbar-container" ref={navRef}>
        <div className="flex flex-col justify-center z-50 drop-shadow-md">
          <Image
            src="/ndc-logo-white.png"
            className="drop-shadow-xl"
            width={192}
            height={53}
            draggable={false}
            alt={""}
          />
        </div>
        <div className="flex-grow" />
        <div className="items-center hidden lg:flex">
          <ul className={styles.navList}>
            <Navlinks closeDrawer={handleClose} />
          </ul>
        </div>
        <div className="items-center justify-center flex lg:hidden  aspect-square">
          <div
            className="cursor-pointer select-none active:scale-95 transition-all"
            onClick={() => setDrawer(!isDrawerOpen)}
          >
            {isDrawerOpen && <HiX size={35} />}
            {!isDrawerOpen && <HiOutlineMenu size={35} />}
          </div>
        </div>
      </nav>
      {isDrawerOpen && (
        <animated.div className={styles.drawer} style={drawerStyle}>
          <ul className={styles.navListDrawer}>
            <Navlinks closeDrawer={handleClose} />
          </ul>
        </animated.div>
      )}
    </>
  );
}
