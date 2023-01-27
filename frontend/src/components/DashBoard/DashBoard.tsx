import { gql, useApolloClient } from '@apollo/client';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import React, { Fragment, useState, useRef } from 'react';
import { GetAllStationsQuery } from '../../generated/graphql';

type Station = {
  Adress: String;
  FID: Number;
  ID: Number;
  Kapasiteet: Number;
  Kaupunki: String;
  Name: String;
  Namn: String;
  Nimi: String;
  Operaattor: String;
  Osoite: String;
  Stad: String;
  x: Number;
  y: Number;
};

const loadAllStations = async () => {
  const client = useApolloClient();

  const GET_ALL_STATIONS = gql`
    query GetAllStations {
      stations(order_by: { Name: asc }) {
        Adress
        FID
        ID
        Kapasiteet
        Kaupunki
        Name
        Namn
        Nimi
        Operaattor
        Osoite
        Stad
        x
        y
      }
    }
  `;

  const { data, networkStatus } = await client.query<GetAllStationsQuery>({
    query: GET_ALL_STATIONS,
  });

  if (data) {
    console.log(data);
  }
  if (networkStatus === 8) {
    console.error(data);
  }
};

const DashBoard = () => {
  loadAllStations();

  return (
    <Box
      sx={{
        backgroundColor: "#E5E5E5", width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: -1
      }}
    >
      <Paper elevation={3}  sx={{
        width: "80vw", height: "80vh", margin: "auto", marginTop: "10vh", padding: "3rem", boxSizing: "border-box"
      }}>
       <Typography
        variant="h2"
        component="div"
        sx={{ flexGrow: 1, fontSize: '2rem' }}
      >
        Dashboard
      </Typography>
      </Paper>
    </Box>
  );
};
export default DashBoard;
