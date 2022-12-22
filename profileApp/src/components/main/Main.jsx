import { Container, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Biography from "./Biography";

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

function Main(props) {
  const tablet = useMediaQuery(`(max-width: 1060px)`);
  const mobile = useMediaQuery(`(max-width: 640px)`);

  const MinWidthForTablet = "60vw";
  const MinWidthForMobile = "80vw";

  const adaptive = {
    tablet: tablet,
    mobile: mobile,
    MinWidthForTablet: MinWidthForTablet,
    MinWidthForMobile: MinWidthForMobile,
  };

  return (
    <>
      <Container
        sx={{
          width: "inherit",
          height: 1200,
        }}
      >
        <Biography adaptive={adaptive} />
      </Container>
    </>
  );
}

export default Main;
