import { Box, Button, Group, Image } from "@mantine/core";
import mainImage from "./images/main.jpg";
import Navigation from "./components/nav/Navigation";
import { useMediaQuery } from "@mantine/hooks";

function App() {
  const HEIGHT_NAV = 120;
  const mobile = useMediaQuery(`(max-width: 1060px)`);

  return (
    <Box sx={{ color: "#fff" }}>
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
      <Navigation height={HEIGHT_NAV} />
    </Box>
  );
}

export default App;
