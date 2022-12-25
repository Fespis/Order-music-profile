import { Box, Grid, Group, Stack } from "@mantine/core";

function Tickets(props) {
  const { mainData } = props;

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
              <Group position="right">Tickets</Group>
            </Group>
            <Group grow>
              <Group>Nov. 01, 2022</Group>
              <Group position="center">Lucerne, Switzerland</Group>
              <Group position="center">Music Hall</Group>
              <Group position="right">Tickets</Group>
            </Group>
            <Group grow>
              <Group>Nov. 01, 2022</Group>
              <Group position="center">Lucerne, Switzerland</Group>
              <Group position="center">Music Hall</Group>
              <Group position="right">Tickets</Group>
            </Group>
            <Group grow>
              <Group>Nov. 01, 2022</Group>
              <Group position="center">Lucerne, Switzerland</Group>
              <Group position="center">Music Hall</Group>
              <Group position="right">Tickets</Group>
            </Group>
          </Stack>
        </Stack>
      </Group>
    </Group>
  );
}

export default Tickets;
