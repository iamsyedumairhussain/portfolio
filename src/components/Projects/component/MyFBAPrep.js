import { Typography, Grid, Box } from "@mui/material";
import myfbaprep from "../../../assets/images/projects/myfbaprep/myfbaprep.png";
import myfbaprep2 from "../../../assets/images/projects//myfbaprep/myfbaprep2.png";
import fbaprep from "../../../assets/images/projects//myfbaprep/fbaprep.png";
import consumer from "../../../assets/images/projects//myfbaprep/consumer.png";
import fulfilled from "../../../assets/images/projects//myfbaprep/fulfilled.svg";
import logistics from "../../../assets/images/projects//myfbaprep/logistics.png";
import seller from "../../../assets/images/projects//myfbaprep/seller.svg";
import temperature from "../../../assets/images/projects//myfbaprep/temperature.png";

import React from "react";

const EachProject = () => {
  return (
    <Grid container marginY={{ md: 3 }}>
      <Grid
        item
        textAlign="center"
        padding={3}
        boxSizing="border-box"
        xs={12}
        md={6}
        display={{ xs: "none", md: "block" }}
      >
        <img
          style={{ borderRadius: 10, marginY: "10px" }}
          height={120}
          width={250}
          src={myfbaprep}
          alt="myfbaprep"
        />
        <img
          style={{ marginTop: "25px", borderRadius: 10 }}
          height={400}
          width={600}
          src={myfbaprep2}
          alt="myfbaprep2"
        />
      </Grid>
      <Grid item padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography
          letterSpacing={2}
          marginTop={{ xs: 4, md: 10 }}
          color="#34495e"
          variant="h4"
        >
          FBA PREP
        </Typography>
        <Typography color="#707B7C" marginTop={2} variant="body1">
          Simplifying and solving FBA prep for top Amazon sellers, so you can
          stay focused on building your business. Fast turnaround, nationwide
          network, full suite of services
        </Typography>
        <Typography color="#707B7C" marginTop={1} variant="body1">
          MyFBAPrep handles all your Amazon FBA Prep, FBM, and marketplace
          fulfillment needs, offering DTC logistics for eCommerce merchants of
          all sizes.
        </Typography>
        <Grid spacing={2} marginY={4} container>
          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img src={fbaprep} width={50} height={50} alt="fbaprep" />
              <Typography variant="body2">Amazon FBA prep</Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img src={consumer} width={50} height={50} alt="consumer" />
              <Typography variant="body2">
                Direct to Consumer Fulfillment
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img src={fulfilled} width={50} height={50} alt="fulfilled" />
              <Typography variant="body2">
                Amazon Fulfilled by Merchant
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img src={seller} width={50} height={50} alt="seller" />
              <Typography variant="body2">
                Amazon Seller Fulfilled Prime
              </Typography>
            </Box>
          </Grid>

          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img src={temperature} width={50} height={50} alt="temperature" />
              <Typography variant="body2">
                Temperature-Controlled Logistics
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img src={logistics} width={50} height={50} alt="logistics" />
              <Typography variant="body2">Reverse Logistics</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EachProject;
