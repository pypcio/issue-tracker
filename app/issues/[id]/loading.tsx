import { Heading, Flex, Card, Box, Skeleton, Text } from "@radix-ui/themes";
import React from "react";

const IssueLoadingPage = () => {
  return (
    <Box>
      <Heading>
        <Skeleton>Title header</Skeleton>
      </Heading>
      <Flex gap='3' my='2'>
        <Text>
          <Skeleton>Badge</Skeleton>
        </Text>
        <Text>
          <Skeleton>Date to String</Skeleton>
        </Text>
      </Flex>
      <Card className='mt-4 max-w-xl'>
        <Skeleton>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis tellus,
            efficitur id convallis a, viverra eget libero. Nam magna erat, fringilla sed commodo
            sed, aliquet nec magna.
          </Text>
        </Skeleton>
      </Card>
    </Box>
  );
};

export default IssueLoadingPage;
