import { Box, Button, Group, Image } from "@mantine/core";
import mainImage from "./images/main.jpg";

function App() {
  return (
    <Box sx={{ color: "#fff" }}>
      <Box sx={{ position: "relative" }}>
        <Image fit="fill" height={"80vh"} src={mainImage} />
        <Box
          sx={{
            position: "absolute",
            bottom: "6%",
            left: "4%",
            fontSize: "2em",
          }}
        >
          Anna Kalakoltsau
        </Box>
      </Box>
      <Group
        sx={{
          backgroundColor: "#11171D",
          width: "inherit",
          height: "20vh",
        }}
      >
        <Button variant="outline" color="gray" radius="xl">
          Start
        </Button>
        <Button variant="outline" color="gray" radius="xl">
          Biography
        </Button>
        <Button variant="outline" color="gray" radius="xl">
          Gallery
        </Button>
        <Button variant="outline" color="gray" radius="xl">
          Video
        </Button>
        <Button variant="outline" color="gray" radius="xl">
          Calendar
        </Button>
        <Button variant="outline" color="gray" radius="xl">
          Contacts
        </Button>
      </Group>
    </Box>
  );
}

export default App;
