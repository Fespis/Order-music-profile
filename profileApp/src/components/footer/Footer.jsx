import { Box, Group, Image, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function Footer(props) {
  const mobile = useMediaQuery(`(max-width: 1060px)`);

  return (
    <>
      <Group
        position="center"
        mt={150}
        spacing={100}
        sx={{
          height: 163,
          width: "inherit",
          borderTop: "1px solid black",
          color: "#000",
          fontSize: "0.5em",
          justifyContent: "space-around",
        }}
      >
        <Stack>
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
      </Group>
    </>
  );
}

export default Footer;
