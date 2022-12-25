import { createStyles, Grid, Group, Stack } from "@mantine/core";

const useStyles = createStyles((theme) => ({}));

function Video(props) {
  const { mainData } = props;
  const { classes } = useStyles();

  function returnCountOfSpan(mainData) {
    const { tablet } = mainData;
    const { mobile } = mainData;

    if (mobile) return 12;
    return 6;
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
