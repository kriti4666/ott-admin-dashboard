import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Categories = [
  {
    title: "Languages",
    count: 6,
    color: "#E50813",
  },
  {
    title: "Genres",
    count: 9,
    color: "#FF8ACC",
  },
  {
    title: "Movies",
    count: 42,
    color: "#F9C851",
  },
  {
    title: "Shows",
    count: 20,
    color: "#646464",
  },
  {
    title: "Artist",
    count: 278,
    color: "#10C469",
  },
  {
    title: "Technicians",
    count: 356,
    color: "#FF5B5B",
  },
  {
    title: "Users",
    count: 1051,
    color: "#FFFFFF",
  },
  {
    title: "Transactions",
    count: 601,
    color: "#E50813",
  },
  {
    title: "Total Revenue",
    count: 203618,
    color: "#FFFFFF",
  },
];

const Home = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Basic Plan",
        backgroundColor: "#FF8ACC",
        borderColor: "#FF8ACC",
        data: [100, 100, 200, 100, 300, 234, 355, 456],
      },
      {
        label: "Premium Plan",
        backgroundColor: "#6F42C1",
        borderColor: "#6F42C1",
        data: [90, 300, 100, 200, 400, 344, 454, 123, 244],
      },
      {
        label: "Platinum Plan",
        backgroundColor: "#007BFF",
        borderColor: "#007BFF",
        data: [40, 200, 200, 100, 300, 244, 212, 324, 213],
      },
      {
        label: "Free Plan",
        backgroundColor: "#28A745",
        borderColor: "#28A745",
        data: [400, 300, 400, 300, 400, 232, 456, 532, 546],
      },
    ],
  };
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3]} spacing="30px">
        {Categories.map((categ, i) => (
          <Box
            bg="#1C1C1E"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            height="200px"
            boxShadow="lg"
            key={i}
          >
            <Text
              lineHeight="50px"
              fontSize="30px"
              fontStyle="Karla"
              color={`${categ.color}`}
            >
              {categ.count}
            </Text>
            <Text lineHeight="22px" fontSize="20px" fontStyle="Karla">
              {categ.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* User PLan Statistic */}
      <Box h="355px" bg="#1C1C1E" mt="40px" fontStyle="Karla">
        <Box ml="30px" pt="20px" color="white">
          <Text >User plan Statistics</Text>
          <Text >Current year</Text>
        </Box>
        <Box h="300px">
          <Bar
            options={{ maintainAspectRatio: false }}
            style={{ padding: "30px", width: "100%" }}
            data={data}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
