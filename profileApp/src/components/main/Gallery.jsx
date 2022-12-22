import { Box, createStyles, Grid, Group, Image, Stack } from "@mantine/core";
import bioImage from "../../images/bioImage.jpg";

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
            <Grid>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
              <Grid.Col span={returnCountOfSpan(adaptive)}>
                <Image src={"https://clck.ru/3375Zj"}></Image>
              </Grid.Col>
            </Grid>
          </Stack>
        </Box>
      </Group>
    </Group>
  );
}

export default Gallery;
