import { Box, Button, Group, Image } from "@mantine/core";
import mainImage from "./images/main.jpg";
import Navigation from "./components/nav/Navigation";
import { useMediaQuery } from "@mantine/hooks";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { useRef } from "react";

function App() {
  const HEIGHT_NAV = 120;
  const HEIGHT_FOOTER = 163;
  const mobile = useMediaQuery(`(max-width: 1060px)`);

  const refsNavigation = {
    start: useRef(),
    biography: useRef(),
    gallery: useRef(),
    video: useRef(),
    tickets: useRef(),
    contacts: useRef(),
  };

  return (
    <Box sx={{ color: "#fff", scrollBehavior: "smooth" }}>
      <Box sx={{ position: "relative" }}>
        <Image
          fit="fill"
          height={`calc(100vh - ${HEIGHT_NAV}px)`}
          src={mainImage}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "6%",
            left: "4%",
            fontSize: `${mobile ? "1.5em" : "2em"}`,
          }}
        >
          Anna Kalakoltsau
        </Box>
      </Box>
      <Navigation
        height={HEIGHT_NAV}
        allRefs={refsNavigation}
        refsNavigation={refsNavigation.start}
      />
      <Main refsNavigation={refsNavigation} />
      <Footer
        height={HEIGHT_FOOTER}
        refsNavigation={refsNavigation.contacts}
      ></Footer>
    </Box>
  );
}

export default App;
