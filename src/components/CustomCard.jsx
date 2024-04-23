import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CurrencyFormat from "react-currency-format";
import CustomChart from "./CustomChart";

const DivRoot = styled("div")(() => ({
  height: "100%",
  transition: "0.3s",
  position: "relative",
  minHeight: "150px",
  width: "300px",
  cursor: "pointer",

  "&:before": {
    transition: "0.2s",
    position: "absolute",
    width: "100%",
    height: "100%",
    content: '""',
    display: "block",
    backgroundColor: "#d9daf1",
    borderRadius: "1rem",
    zIndex: 0,
    bottom: 0
  },

  "&:hover": {
    "&:before": {
      bottom: -6
    },
    "& $card": {
      boxShadow: "-12px 12px 64px 0 #bcc3d6"
    }
  }
}));

const ColumnCard = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  position: "relative",
  borderRadius: "1rem",
  boxShadow: "0 6px 20px 0 #dbdbe8",
  backgroundColor: "#fff",
  transition: "0.4s",
  height: "100%"
}));

const ButtonJoin = styled(Button)(() => ({
  borderRadius: 50,
  textTransform: "initial",
  "&:focus": {
    boxShadow:
      "0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)"
  },
  "&:active": {
    boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`
  },
  textShadow: "0 1px 0 rgba(0,0,0,0.2)",
  transition: "0.2s",
  background: `linear-gradient(to top, #638ef0, #82e7fe)`,
  boxShadow:
    "0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)",
  "&:hover": {
    borderBottom: "none"
  },
  "& > *": {
    textTransform: "none !important"
  }
}));

const onCardClick = () => {
  console.log("CARD CLIECKED");
};
const CustomCard = ({
  value,
  label,
  actualChartData,
  displayChartData,
  cardClicked
}) => {
  const onCardClick = () => {
    cardClicked(actualChartData);
  };
  return (
    <DivRoot onClick={onCardClick}>
      <ColumnCard>
        <Box display='flex' gap={2} flexWrap='nowrap'></Box>
        <Box pb={1} px={2} fontFamily={"Ubuntu"} flexGrow={1}>
          <CurrencyFormat
            value={value}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
              <Box fontSize={"1.3rem"} fontWeight={700}>
                {value}
              </Box>
            )}
          />
          <p>{label}</p>
        </Box>
        <Box>
          <div className='display-chart'>
            <CustomChart data={displayChartData} />
          </div>
        </Box>
      </ColumnCard>
    </DivRoot>
  );
};

export default CustomCard;
