import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Box } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles";

const VideoPlayer = ({
  src,
  thumbnail,
  customStyles,
  reverseLayout = false,
  currentIdx,
  index,
  setIndex,
  page,
  passOverlay = true,
}) => {
  const ref = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handleViewChange = useCallback(
    (entries) => {
      if (!ref.current) return;
      for (const entry of entries) {
        if (entry.intersectionRatio > 0.5 && !isPaused) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      }
    },
    [isPaused]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleViewChange, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [handleViewChange]);

  useEffect(() => {
    if (currentIdx === index) {
      setIsPaused(false);
      ref?.current && ref?.current.play();
    } else {
      setIsPaused(true);
      ref?.current && ref?.current.pause();
    }
  }, [currentIdx, index]);

  useEffect(() => {
    setIsPaused(true);
    ref?.current && ref?.current.pause();
  }, [page]);

  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      {src && (
        <Box
          src={src}
          sx={styles.video}
          ref={ref}
          controls
          component="video"
          onClick={() => {
            typeof setIndex === "function" && setIndex(index);
            setIsPaused(true);
          }}
        />
      )}
      {src && isPaused && (
        <Box>
          <Fade
            in={isPaused}
            style={{ transitionDelay: isPaused ? "80ms" : "0ms" }}
          >
            <Box
              sx={{
                ...styles.overlayWrapper,
                flexDirection: reverseLayout ? "column-reverse" : "column",
              }}
              onClick={() => {
                typeof setIndex === "function" && setIndex(index);
                setIsPaused(false);
                ref?.current && ref?.current.play();
              }}
            >
              <Box sx={styles.playIcon}>
                <PlayCircleOutlinedIcon sx={styles.icon} />
              </Box>
              {passOverlay && (
                <Box
                  sx={{
                    ...styles.overlay,
                    transform: reverseLayout
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              )}
              <Box
                component="img"
                src={thumbnail || "/videoBanner3.png"}
                alt="thumbnail"
                sx={styles.thumbnail}
              />
            </Box>
          </Fade>
        </Box>
      )}
    </Box>
  );
};

export default VideoPlayer;
