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

  function addVideos(videoInfo) {
    return videoInfo.map((video, index) => {
      return (
        <Grid.Col span={returnCountOfSpan(mainData)} key={index}>
          <iframe
            width="100%"
            height="315"
            src={video.link}
            title={video.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid.Col>
      );
    });
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
          <Grid>{addVideos(mainData.videoInfo)}</Grid>
        </Stack>
      </Group>
    </Group>
  );
}

export default Video;
