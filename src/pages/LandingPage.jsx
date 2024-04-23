import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomCard from "../components/CustomCard";
import chartData from "../data/chartData.json";
import Slider from "../components/Slider";
import CustomChart from "../components/CustomChart";

const LandingPage = () => {
  const [cardSelected, setcardSelected] = useState(null);
  const cardClicked = (cardData) => {
    setcardSelected(cardData);
  };
  return (
    <div>
      <Grid container spacing={4} margin={0}>
        <Slider data={chartData} cardClicked={cardClicked} />
      </Grid>
      {cardSelected && (
        <div>
          <CustomChart
            data={cardSelected.actualChartData}
            options={cardSelected.chartOptionData}
            height='500px'
          />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
