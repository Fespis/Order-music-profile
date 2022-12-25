import { Grid, Group, Stack } from "@mantine/core";

function Video(props) {
  const { mainData } = props;

  function returnCountOfSpan(mainData) {
    const { mobile } = mainData;
    const ONE_IFRAME_ON_WIDTH = 12;
    const TWO_IFRAME_ON_WIDTH = 6;

    if (mobile) return ONE_IFRAME_ON_WIDTH;
    return TWO_IFRAME_ON_WIDTH;
  }

  return (
    <Group
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
        grow
        sx={{
          color: "#000",
          maxWidth:
            (mainData.mobile && mainData.MinWidthForMobile) ||
            (mainData.tablet && mainData.MinWidthForTablet),
        }}
      >
        <Stack>
          <Group position="center">Video</Group>
          <Grid>
            <Grid.Col span={returnCountOfSpan(mainData)}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/C4xxJ-AdKQk"
                title="CPE Bach Sonata in A Major Anna Kalakoltsau"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Grid.Col>
            <Grid.Col span={returnCountOfSpan(mainData)}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/RLItPN_6DfY"
                title="CPE Bach Sonata in A Major Anna Kalakoltsau"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Grid.Col>
          </Grid>
        </Stack>
      </Group>
    </Group>
  );
}

export default Video;
