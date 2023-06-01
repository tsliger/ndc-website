import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

const Switcher = ({ children, duration = 2500 }) => {
  const [currPage, setPage] = useState(0);
  const [isEnabled, setEnabled] = useState(false);
  const [windowSize, setWindow] = useState(0);
  const transitions = useTransition(currPage, {
    key: currPage,
    from: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, delay: 2500 },
    config: { duration: duration },
    onRest: (_a, _b, item) => {
      if (currPage === item) {
        setPage((state) => (state + 1) % children.length);
      }
    },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindow(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize <= 1024) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [windowSize]);

  return (
    <>
      {isEnabled && (
        <>
          {transitions((style, i) => (
            <animated.div
              className="w-full flex justify-center"
              style={{ ...style }}
            >
              {children[i]}
            </animated.div>
          ))}
        </>
      )}
      {!isEnabled && <>{children}</>}
    </>
  );
};

export default Switcher;
