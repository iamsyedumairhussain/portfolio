import { Typography, Grid, Box } from "@mui/material";
import injazacademy from "../../../assets/images/projects/injazacademy/injazacademy.jpg";
import injazacademy2 from "../../../assets/images/projects/injazacademy/injazacademy3.jpg";
import injazacademy_icon from "../../../assets/images/projects/injazacademy/injazacademy_icon.jpg";
import React from "react";

const EachProject = () => {
  return (
    <Grid container marginY={3}>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography
          marginLeft={5}
          color="#707B7C"
          marginTop={10}
          variant="body1"
        >
          INJAZ Bahrain is a non-profit organization that was established in
          2005 as part of Junior Achievement Worldwide with the aim of
          empowering young people to own their economic success and be prepared
          for today's business challenges. INJAZ Bahrain delivers hands on,
          immersive learning in work readiness, financial literacy,
          entrepreneurship, sustainability, STEM, digital literacy, and more.
        </Typography>
        <Typography
          marginLeft={5}
          color="#707B7C"
          marginTop={1}
          variant="body1"
        >
          With the help of its partners and volunteers, INJAZ Bahrain impacts
          thousands of students every year bringing them closer to the real
          world and opening their minds to their own potential.
        </Typography>
        <Grid spacing={2} marginY={2} container>
          <Grid item md={4} xs={12}>
            <Box padding={1} color="#707B7C" textAlign="center">
              <img
                src={injazacademy_icon}
                width={50}
                height={50}
                alt="fbaprep"
              />
              <Typography fontWeight="bolder" color="#5499C7" variant="body1">
                WORK READINESS
              </Typography>
              <Typography marginTop={1} variant="body1">
                Preparing Youth for the Jobs of the Future
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box padding={1} color="#707B7C" textAlign="center">
              <img
                src={injazacademy_icon}
                width={50}
                height={50}
                alt="fbaprep"
              />
              <Typography fontWeight="bolder" color="#5499C7" variant="body1">
                FINANCIAL LITERACY
              </Typography>
              <Typography marginTop={1} variant="body1">
                Developing Financial Independence
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box padding={1} color="#707B7C" textAlign="center">
              <img
                src={injazacademy_icon}
                width={50}
                height={50}
                alt="fbaprep"
              />
              <Typography fontWeight="bolder" color="#5499C7" variant="body1">
                ENTREPRENEURSHIP
              </Typography>
              <Typography marginTop={1} variant="body1">
                Cultivating an Entrepreneurial Mindset
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        textAlign="center"
        padding={3}
        boxSizing="border-box"
        xs={12}
        md={6}
      >
        {" "}
        <img
          style={{ marginTop: "30px" }}
          height={300}
          width={300}
          src={injazacademy}
          alt="injazacademy"
        />
        <img
          style={{ borderRadius: 10, marginTop: "10px" }}
          height={350}
          width={550}
          src={injazacademy2}
          alt="injazacademy2"
        />
      </Grid>
    </Grid>
  );
};

export default EachProject;
