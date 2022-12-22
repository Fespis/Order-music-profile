import { Box, Grid, Group, Image, Stack } from "@mantine/core";
import bioImage from "../../images/bioImage.jpg";

function Gallery(props) {
  const { adaptive } = props;

  function a1(adaptive) {
    const { tablet } = adaptive;
    const { mobile } = adaptive;

    if (mobile) return 12;
    if (tablet) return 6;
    return 3;
  }

  return (
    <>
      <Group
        pt={adaptive.ptForBlocks}
        position="center"
        grow
        sx={{
          color: "#000",
          flexDirection: adaptive.tablet ? "column-reverse" : "row",
          minWidth:
            (adaptive.mobile && adaptive.MinWidthForMobile) ||
            (adaptive.tablet && adaptive.MinWidthForTablet),
        }}
      >
        <Stack>
          <Group position="center">Gallery</Group>
          <Grid>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
            <Grid.Col span={a1(adaptive)}>
              <Image src={"https://clck.ru/3375Zj"}></Image>
            </Grid.Col>
          </Grid>
        </Stack>
      </Group>
    </>
  );
}

export default Gallery;
