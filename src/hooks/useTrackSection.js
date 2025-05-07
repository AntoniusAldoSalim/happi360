// src/hooks/useTrackSection.js
import { useEffect, useRef } from "react";
import { log } from "../lib/amplitude";

/**
 * Emits a SECTION_VIEW event once when ≥ 50 % of the section
 * becomes visible.
 */
export default function useTrackSection(name) {
    const ref = useRef(null);
  
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
  
      let sent = false;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !sent) {
            log(name, { section: name });
            sent = true;
          }
        },
        {
          threshold : 0.25,      // <- was 0.50
          root      : null,      // viewport
          rootMargin: "0px",
        }
      );
  
      io.observe(el);
      return () => io.disconnect();
    }, [name]);
  
    return ref;
  }
