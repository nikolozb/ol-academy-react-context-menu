import { useState, useEffect } from "react";

const useContextMenu = (ref) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextText, setContextText] = useState("");
  const [contextCords, setContextCords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const showContext = (e) => {
      if (ref.current.contains(e.target)) {
        e.preventDefault();
        setShowContextMenu(true);
        setContextCords({ x: e.pageX, y: e.pageY });
        setContextText(e.target.innerText);
      }
    };

    document.addEventListener("contextmenu", showContext);
    return () => document.addEventListener("contextmenu", showContext);
  }, []);

  useEffect(() => {
    const hideContext = (e) => {
      if (!ref.current.contains(e.target)) {
        e.target.value && console.log(e.target.value);
        setShowContextMenu(false);
      }
    };

    document.addEventListener("click", hideContext);
    document.addEventListener("contextmenu", hideContext);
    return () => {
      document.removeEventListener("click", hideContext);
      document.removeEventListener("contextmenu", hideContext);
    };
  }, [ref]);

  return { showContextMenu, contextCords, contextText };
};

export default useContextMenu;
