import { Box, createStyles, Group, Image, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  footerGroup: {
    display: "flex",
    justifyContent: "space-around",
    width: "inherit",
    borderTop: "1px solid black",
    color: "#000",
    fontSize: "0.5em",
  },

  footerGroupMobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 40,
    width: "inherit",
    borderTop: "1px solid black",
    color: "#000",
    fontSize: "0.5em",
  },
}));

function Footer(props) {
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: 640px)`);

  return (
    <>
      <Box
        mt={150}
        spacing={100}
        sx={{
          height: props.height,
        }}
        className={mobile ? classes.footerGroupMobile : classes.footerGroup}
      >
        <Stack justify="center">
          <Box>+44 (0)20 3725 9184</Box>
          <Box>federico.hernandez@harrisonparrott.co.uk</Box>
        </Stack>
        <Group spacing={40}>
          <a href="">
            <Image src={require(`../../images/linkedin.png`)}></Image>
          </a>
          <a href="">
            <Image src={require(`../../images/instagram.png`)}></Image>
          </a>
          <a href="">
            <Image src={require(`../../images/telegram.png`)}></Image>
          </a>
          <a href="">
            <Image src={require(`../../images/facebook.png`)}></Image>
          </a>
        </Group>
      </Box>
    </>
  );
}

export default Footer;
