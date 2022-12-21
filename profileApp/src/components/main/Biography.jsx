import { Box, createStyles, Group, Image } from "@mantine/core";
import bioImage from "../../images/bioImage.jpg";

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

function Biography(props) {
  const { adaptive } = props;

  return (
    <>
      <Group
        pt={"xl"}
        position="center"
        grow
        sx={{
          color: "#000",
          flexDirection: adaptive.tablet ? "column-reverse" : "row",
          minWidth:
            (adaptive.mobile && adaptive.MinWidthForMobile) ||
            (adaptive.tablet && adaptive.MinWidthForTablet),
        }}
      >
        <Box sx={{ minWidth: "inherit" }}>
          <Box>Anna Kalakoltsau</Box>
          <Box pt={"sm"} sx={{ fontSize: "0.75em" }}>
            About
          </Box>
          <Box pt={"sm"} sx={{ fontSize: "0.5em" }}>
            Sayaka Shoji has become internationally recognised for her artistic
            versatility and deep engagements with each repertoire. Her
            remarkable insight into musical languages comes from her mix of
            European and Japanese backgrounds.
            <br /> <br />
            Born in Tokyo, Shoji moved to Siena, Italy when she was three. She
            studied at Accademia Musicale Chigiana and Cologne’s Musikhochschule
            and made her European debut with Lucerne Festival Strings and Rudolf
            Baumgartner at the Lucerne Festival and then at the Musikverein,
            Vienna at the age of fourteen.
            <br /> <br />
            Recent highlights include successful debuts at the BBC Proms in 2021
            with the Royal Philharmonic Orchestra/​Vasily Petrenko and the
            Blossom Festival with the Cleveland Orchestra, a recital tour with
            Víkingur Ólafsson, a UK tour with Philharmonia Orchestra/​Ashkenazy,
            as well as Bernstein’s 100th gala at Vienna Musikverein with
            Tonkünstler-Orchester/Sado which was recorded and released by
            Tonkünstler label.
          </Box>
        </Box>
        <Box sx={{ minWidth: "inherit" }}>
          <Box
            p={"sm"}
            sx={{ border: "1px solid black", borderRadius: "25px" }}
          >
            <Image fit="fill" src={bioImage}></Image>
          </Box>
        </Box>
      </Group>
    </>
  );
}

export default Biography;
