import { createStyles, Group, Stack } from "@mantine/core";
import { useState } from "react";

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
  const [showTicketsInfo, setShowTicketsInfo] = useState(
    Boolean(mainData.ticketsInfo.length)
  );

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
            {showTicketsInfo ? (
              mainData.ticketsInfo.map((ticket) => {
                return (
                  <Group grow>
                    <Group>{ticket.date}</Group>
                    <Group position="center">{ticket.city}</Group>
                    <Group position="center">{ticket.place}</Group>
                    <Group position="right">
                      <a href={ticket.link} className={classes.buttonTickets}>
                        Tickets
                      </a>
                    </Group>
                  </Group>
                );
              })
            ) : (
              <Group position="center">No ticket details</Group>
            )}
          </Stack>
        </Stack>
      </Group>
    </Group>
  );
}

export default Tickets;
