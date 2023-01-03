import { Box, Group, Image } from "@mantine/core";
import bioImage from "../../images/bioImage.jpg";

function Biography(props) {
  const { mainData } = props;
  const { refsNavigation } = props;

  return (
    <>
      <Group
        pt={mainData.ptForBlocks}
        position="center"
        grow
        sx={{
          color: "#000",
          flexDirection: mainData.tablet ? "column-reverse" : "row",
          minWidth:
            (mainData.mobile && mainData.MinWidthForMobile) ||
            (mainData.tablet && mainData.MinWidthForTablet),
        }}
        ref={refsNavigation}
      >
        <Box sx={{ minWidth: "inherit" }}>
          <Group
            position={mainData.tablet ? "center" : "left"}
            sx={{ fontSize: mainData.mobile ? "0.85em" : "1em" }}
          >
            Anna Kalakoltsau
          </Group>
          <Group
            position={mainData.tablet ? "center" : "left"}
            pt={"sm"}
            sx={{ fontSize: "0.75em" }}
          >
            About
          </Group>
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
