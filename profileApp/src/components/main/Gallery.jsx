import { Box, createStyles, Grid, Group, Image, Stack } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  widthMainBox: {
    minWidth: "inherit",
    [theme.fn.smallerThan("1060px")]: {
      maxWidth: "calc(50% - 8px)",
    },
  },
}));

function Gallery(props) {
  const { adaptive } = props;
  const { classes } = useStyles();

  function returnCountOfSpan(adaptive) {
    const { tablet } = adaptive;
    const { mobile } = adaptive;

    if (mobile) return 12;
    if (tablet) return 6;
    return 3;
  }

  function addImages(countImages) {
    const numberImages = [...Array(countImages).keys()];
    return numberImages.map((imgCount) => {
      return (
        <Grid.Col span={returnCountOfSpan(adaptive)} key={imgCount}>
          <Image src={require(`../../images/${imgCount}.jpg`)}></Image>
        </Grid.Col>
      );
    });
  }

  return (
    <Group
      position="center"
      sx={{
        color: "#000",
        minWidth:
          (adaptive.mobile && adaptive.MinWidthForMobile) ||
          (adaptive.tablet && adaptive.MinWidthForTablet),
      }}
    >
      <Group
        pt={adaptive.ptForBlocks}
        position="center"
        grow
        sx={{
          color: "#000",
          maxWidth:
            (adaptive.mobile && adaptive.MinWidthForMobile) ||
            (adaptive.tablet && adaptive.MinWidthForTablet),
        }}
      >
        <Box className={`${classes.widthMainBox}`}>
          <Stack>
            <Group position="center">Gallery</Group>
            <Grid>{addImages(12)}</Grid>
          </Stack>
        </Box>
      </Group>
    </Group>
  );
}

export default Gallery;
