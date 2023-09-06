import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
const userDataHead = [
  {
    title: "Email",
  },
  {
    title: "Plan",
  },
  {
    title: "Amount",
  },
  {
    title: "Payment Gateway",
  },
  {
    title: "Payment ID",
  },
  {
    title: "Payment Date",
  },
];
const userTableBody = [
  {
    email: "Name*****@gmail.com",
    plan: "Free Plan",
    Amount: 199.0,
    PaymentGatway: "Razorpay",
    paymentID: "Trsbgmjbkjk",
    paymentDate: "Jun 28 2023 02:31 PM",
  },
  {
    email: "Name*****@gmail.com",
    plan: "Free Plan",
    Amount: 199.0,
    PaymentGatway: "Razorpay",
    paymentID: "Trsbgmjbkjk",
    paymentDate: "Jun 28 2023 02:31 PM",
  },
  {
    email: "Name*****@gmail.com",
    plan: "Free Plan",
    Amount: 199.0,
    PaymentGatway: "Razorpay",
    paymentID: "Trsbgmjbkjk",
    paymentDate: "Jun 28 2023 02:31 PM",
  },
  {
    email: "Name*****@gmail.com",
    plan: "Free Plan",
    Amount: 199.0,
    PaymentGatway: "Razorpay",
    paymentID: "Trsbgmjbkjk",
    paymentDate: "Jun 28 2023 02:31 PM",
  },
  {
    email: "Name*****@gmail.com",
    plan: "Free Plan",
    Amount: 199.0,
    PaymentGatway: "Razorpay",
    paymentID: "Trsbgmjbkjk",
    paymentDate: "Jun 28 2023 02:31 PM",
  },
  {
    email: "Name*****@gmail.com",
    plan: "Free Plan",
    Amount: 199.0,
    PaymentGatway: "Razorpay",
    paymentID: "Trsbgmjbkjk",
    paymentDate: "Jun 28 2023 02:31 PM",
  },
];

const UserData = () => {
  return (
    <TableContainer mt="30px" pb="30px">
      <Table
        w="95%"
        // mx="15px"
        m="auto"
        align="center"
        color="white"
        border="1px solid grey"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Thead>
          <Tr border="1px solid grey">
            {userDataHead?.map((item, i) => (
              <Th
                key={i}
                border="1px solid grey"
                textAlign="center"
                color="white"
              >
                {item.title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {userTableBody?.map((item, i) => (
            <Tr key={i}>
              {/* <Td border="1px solid grey">{item.title}</Td> */}
              {item.email ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.email}
                </Td>
              ) : (
                ""
              )}
              {item.plan ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.plan}
                </Td>
              ) : (
                ""
              )}
              {item.Amount ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.Amount}
                </Td>
              ) : (
                ""
              )}
              <Td border="1px solid grey" textAlign="center">
                {item.PaymentGatway}
              </Td>
              <Td border="1px solid grey" textAlign="center">
                {item.paymentID}
              </Td>
              <Td border="1px solid grey" textAlign="center">
                {item.paymentDate}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserData;
