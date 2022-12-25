import { createStyles, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({}));

function Video(props) {
  const { mainData } = props;
  const { classes } = useStyles();

  return (
    <Group
      position="center"
      sx={{
        color: "#000",
        minWidth:
          (mainData.mobile && mainData.MinWidthForMobile) ||
          (mainData.tablet && mainData.MinWidthForTablet),
      }}
    >
      <Group
        pt={mainData.ptForBlocks}
        position="center"
        grow
        sx={{
          color: "#000",
          maxWidth:
            (mainData.mobile && mainData.MinWidthForMobile) ||
            (mainData.tablet && mainData.MinWidthForTablet),
        }}
      ></Group>
    </Group>
  );
}

export default Video;
