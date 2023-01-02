import { Accordion, Box, createStyles, Group, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  buttonTickets: {
    padding: "5px 30px",
    backgroundColor: "red",
    color: "#fff",
    cursor: "pointer",
    textDecoration: "none",
  },

  accordionPanel: {
    gap: 10,
    display: "flex",
    justifyContent: "space-between",
  },

  rootAccordion: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  item: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: "1px solid transparent",
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",

    "&[data-active]": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],

      zIndex: 1,
    },
  },
}));

function Tickets(props) {
  const { mainData } = props;
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: 1060px)`);

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
          <Stack sx={{ fontSize: "0.5em", gap: mobile ? 0 : 60 }}>
            {showTicketsInfo ? (
              <Accordion
                variant="filled"
                defaultValue="customization"
                classNames={classes}
                className={classes.rootAccordion}
              >
                {mainData.ticketsInfo.map((tickets, index) => {
                  return "";
                })}
              </Accordion>
            ) : (
              <Group position="center">No ticket details</Group>
            )}
            {showTicketsInfo ? (
              mainData.ticketsInfo.map((ticket, index) => {
                return mobile ? (
                  <Accordion
                    variant="filled"
                    defaultValue="customization"
                    classNames={classes}
                    className={classes.rootAccordion}
                    key={index}
                  >
                    <Accordion.Item value="focus-ring">
                      <Accordion.Control>
                        {ticket.date}
                        <br />
                        {ticket.city}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Box className={classes.accordionPanel}>
                          {ticket.place}
                          <br />
                          <a
                            href={ticket.link}
                            className={classes.buttonTickets}
                          >
                            Tickets
                          </a>
                        </Box>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                ) : (
                  <Group grow key={index}>
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
