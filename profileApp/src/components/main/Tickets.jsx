import { Box, createStyles, Grid, Group, Stack } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  buttonTickets: {
    padding: "5px 30px",
    backgroundColor: "red",
    color: "#fff",
    cursor: "pointer",
    textDecoration: "none",
  },
}));

function Tickets(props) {
  const { mainData } = props;
  const { classes } = useStyles();

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
        grow
        pt={mainData.ptForBlocks}
        sx={{
          color: "#000",
          maxWidth:
            (mainData.mobile && mainData.MinWidthForMobile) ||
            (mainData.tablet && mainData.MinWidthForTablet),
        }}
      >
        <Stack>
          <Group position="center" mb={60}>
            Tickets
          </Group>
          <Stack sx={{ fontSize: "0.5em", gap: 60 }}>
            <Group grow>
              <Group>Nov. 01, 2022</Group>
              <Group position="center">Lucerne, Switzerland</Group>
              <Group position="center">Music Hall</Group>
              <Group position="right">
                <a
                  href="https://www.youtube.com/watch?v=C4xxJ-AdKQk"
                  className={classes.buttonTickets}
                >
                  Tickets
                </a>
              </Group>
            </Group>
          </Stack>
        </Stack>
      </Group>
    </Group>
  );
}

export default Tickets;
