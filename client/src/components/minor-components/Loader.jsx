import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "../../styles/Loader.css";

const Loader = () => {
  const animationWindowRef = useRef(null);

  useEffect(() => {
    const animData = {
      container: animationWindowRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader_chrisgannon.json",
    };

    const anim = lottie.loadAnimation(animData);
    anim.setSpeed(3.24);

    return () => anim.destroy();
  }, []);

  return (
    <div className="loader-container">
      <div ref={animationWindowRef} className="animation-window" />
    </div>
  );
};

export default Loader;
