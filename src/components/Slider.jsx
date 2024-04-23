import { useRef, useState } from "react";
import CustomCard from "./CustomCard";
import { Grid } from "@mui/material";

const Slider = ({ data, cardClicked }) => {
  let [scrollcard, setscrollcard] = useState(0);
  const containerRef = useRef();

  return (
    <section className='card-slider-conatiner'>
      <div className='main-slider-contianer'>
        <div
          className='slider'
          style={{ scrollLeft: scrollcard }}
          ref={containerRef}
        >
          {data &&
            data.map((item) => (
              <div className='slider-card'>
                <Grid item xs={12} sm={6} lg={4}>
                  <div onClick={() => cardClicked(item)}>
                    <CustomCard {...item} />
                  </div>
                </Grid>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
