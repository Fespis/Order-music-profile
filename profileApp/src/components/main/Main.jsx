import { Container, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Biography from "./Biography";
import Gallery from "./Gallery";
import Video from "./Video";

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
    countImagesInGallery: 12,
    videoInfo: [
      {
        link: "https://www.youtube.com/embed/C4xxJ-AdKQk",
        title: "CPE Bach Sonata in A Major Anna Kalakoltsau",
      },
      {
        link: "https://www.youtube.com/embed/RLItPN_6DfY",
        title: "CPE Bach Sonata in A Major Anna Kalakoltsau",
      },
    ],
  };

  return (
    <>
      <Container
        sx={{
          width: "inherit",
        }}
      >
        <Biography mainData={mainData} />
        <Gallery mainData={mainData} />
        <Video mainData={mainData}></Video>
      </Container>
    </>
  );
}

export default Main;
