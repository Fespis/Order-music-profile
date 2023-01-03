import {
  Burger,
  Container,
  createStyles,
  Drawer,
  Group,
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
}));

function Navigation(props) {
  const { allRefs } = props;
  const { refsNavigation } = props;
  const { positionNavPanel } = props;

  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const tablet = useMediaQuery(`(max-width: 1060px)`);

  function buttonHandler(refName) {
    allRefs[refName].current.scrollIntoView({ behavior: "smooth" });
    setOpened(false);
  }

  return (
    <>
      <Group
        position={tablet && "right"}
        spacing={100}
        p={"lg"}
        sx={{
          position: positionNavPanel ? "fixed" : "inherit",
          backgroundColor: "#11171D",
          width: "inherit",
          height: `${props.height}px`,
          justifyContent: !tablet && "space-around",
        }}
        ref={refsNavigation}
      >
        {tablet ? (
          <Burger
            color="#fff"
            opened={opened}
            onClick={() => setOpened((state) => !state)}
          />
        ) : (
          <>
            <Group spacing="lg" position="left" sx={{ fontSize: "0.7em" }}>
              <div
                className={`${classes.buttonLink}`}
                onClick={() => buttonHandler("start")}
              >
                Start
              </div>
              <div
                className={`${classes.buttonLink}`}
                onClick={() => buttonHandler("biography")}
              >
                Biography
              </div>
              <div
                className={`${classes.buttonLink}`}
                onClick={() => buttonHandler("gallery")}
              >
                Gallery
              </div>
            </Group>
            <Group spacing="lg" position="right" sx={{ fontSize: "0.7em" }}>
              <div
                className={`${classes.buttonLink}`}
                onClick={() => buttonHandler("video")}
              >
                Video
              </div>
              <div
                className={`${classes.buttonLink}`}
                onClick={() => buttonHandler("tickets")}
              >
                Tickets
              </div>
              <div
                className={`${classes.buttonLink}`}
                onClick={() => buttonHandler("contacts")}
              >
                Contacts
              </div>
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
        transitionDuration={500}
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
          <Container onClick={() => buttonHandler("start")}>Start</Container>
          <Container onClick={() => buttonHandler("biography")}>
            Biography
          </Container>
          <Container onClick={() => buttonHandler("gallery")}>
            Gallery
          </Container>
          <Container onClick={() => buttonHandler("video")}>Video</Container>
          <Container onClick={() => buttonHandler("tickets")}>
            Tickets
          </Container>
          <Container onClick={() => buttonHandler("contacts")}>
            Contacts
          </Container>
        </Stack>
      </Drawer>
    </>
  );
}

export default Navigation;
