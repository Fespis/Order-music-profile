import { Container, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Biography from "./Biography";
import Gallery from "./Gallery";

const useStyles = createStyles((theme) => ({
  buttonLink: {
    padding: "10px 20px",
    width: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #fff",
    borderRadius: 50,
    transition: "all ease 0.5s",
    cursor: "pointer",
    [theme.fn.smallerThan("1060")]: {
      display: "none",
    },

    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
}));

function Main() {
  const tablet = useMediaQuery(`(max-width: 1060px)`);
  const mobile = useMediaQuery(`(max-width: 640px)`);

  const MinWidthForTablet = "60vw";
  const MinWidthForMobile = "80vw";

  const mainData = {
    tablet: tablet,
    mobile: mobile,
    MinWidthForTablet: MinWidthForTablet,
    MinWidthForMobile: MinWidthForMobile,
    ptForBlocks: 50,
  };

  return (
    <>
      <Container
        sx={{
          width: "inherit",
          height: 1200,
        }}
      >
        <Biography mainData={mainData} />
        <Gallery mainData={mainData} />
      </Container>
    </>
  );
}

export default Main;
