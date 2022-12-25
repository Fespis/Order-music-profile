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
  const { mainData } = props;
  const { classes } = useStyles();

  function returnCountOfSpan(mainData) {
    const { tablet } = mainData;
    const { mobile } = mainData;

    if (mobile) return 12;
    if (tablet) return 6;
    return 3;
  }

  function addImages(countImages) {
    const numberImages = [...Array(countImages).keys()];
    return numberImages.map((imgCount) => {
      return (
        <Grid.Col span={returnCountOfSpan(mainData)} key={imgCount}>
          <Image src={require(`../../images/${imgCount}.jpg`)}></Image>
        </Grid.Col>
      );
    });
  }

  return (
    <Group
      position="center"
      grow
      sx={{
        color: "#000",
        minWidth:
          (mainData.mobile && mainData.MinWidthForMobile) ||
          (mainData.tablet && mainData.MinWidthForTablet),
      }}
    >
      <Group
        position="center"
        pt={mainData.ptForBlocks}
        sx={{
          color: "#000",
          maxWidth:
            (mainData.mobile && mainData.MinWidthForMobile) ||
            (mainData.tablet && mainData.MinWidthForTablet),
        }}
      >
        <Box className={`${classes.widthMainBox}`}>
          <Stack>
            <Group position="center" mb={60}>
              Gallery
            </Group>
            <Grid gutter="xs" grow>
              {addImages(mainData.countImagesInGallery)}
            </Grid>
          </Stack>
        </Box>
      </Group>
    </Group>
  );
}

export default Gallery;
