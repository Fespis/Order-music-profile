import {
  Autocomplete,
  Burger,
  Button,
  Container,
  createStyles,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  buttonLink: {
    padding: "10px 20px",
    width: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #fff",
    borderRadius: 50,
    transition: "all ease 0.5s",
    cursor: "pointer",
    [theme.fn.smallerThan("1060")]: {
      display: "none",
    },

    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },

  // burgerMobile: {
  //   display: "none",
  //   height: 36,
  //   cursor: "pointer",
  //   [theme.fn.smallerThan("sm")]: {
  //     display: "block",
  //   },
  //   "& span": {
  //     margin: 0,
  //   },
  // },
}));

function Navigation(props) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const mobile = useMediaQuery(`(max-width: 1060px)`);

  return (
    <>
      <Group
        position={mobile && "right"}
        spacing={100}
        p={"lg"}
        sx={{
          backgroundColor: "#11171D",
          width: "inherit",
          height: `${props.height}px`,
          justifyContent: !mobile && "space-around",
        }}
      >
        {mobile ? (
          <Burger
            color="#fff"
            opened={opened}
            onClick={() => setOpened((state) => !state)}
          />
        ) : (
          <>
            <Group spacing="lg" position="left" sx={{ fontSize: "0.7em" }}>
              <div className={`${classes.buttonLink}`}>Start</div>
              <div className={`${classes.buttonLink}`}>Biography</div>
              <div className={`${classes.buttonLink}`}>Gallery</div>
            </Group>
            <Group spacing="lg" position="right" sx={{ fontSize: "0.7em" }}>
              <div className={`${classes.buttonLink}`}>Video</div>
              <div className={`${classes.buttonLink}`}>Calendar</div>
              <div className={`${classes.buttonLink}`}>Contacts</div>
            </Group>
          </>
        )}
      </Group>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="top"
        size="full"
        transition="slide-down"
        transitionDuration={1000}
        withCloseButton={false}
      >
        <Group
          p={"lg"}
          sx={{
            position: "absolute",
            right: 1,
            width: "inherit",
            height: `${props.height}px`,
          }}
        >
          <Burger
            color="#000"
            opened={opened}
            onClick={() => setOpened((state) => !state)}
          />
        </Group>
        <Stack sx={{ height: "100vh" }} justify="center">
          <Container>Start</Container>
          <Container>Biography</Container>
          <Container>Gallery</Container>
          <Container>Video</Container>
          <Container>Calendar</Container>
          <Container>Contacts</Container>
        </Stack>
      </Drawer>
    </>
  );
}

export default Navigation;
