import { createStyles } from "@mantine/core";
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

function Main(props) {
  const mobile = useMediaQuery(`(max-width: 1060px)`);

  return <></>;
}

export default Main;
