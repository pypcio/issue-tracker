import { Container, Flex, Skeleton, Text } from "@radix-ui/themes";

const NewIssueLoadingPage = () => {
  return (
    <Container size='1' align='left'>
      <Flex direction='column' gap='3' justify='start'>
        <Text>
          <Skeleton className='text-xl'>Lorem ipsum dolor sit amet</Skeleton>
        </Text>
        <Text>
          <Skeleton className='text-xl'>Lorem ipsum</Skeleton>
        </Text>

        <Skeleton>
          <Text className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis tellus,
            efficitur id convallis a, viverra eget libero. Nam magna erat, fringilla sed commodo
            sed, aliquet nec magna.
          </Text>
        </Skeleton>
      </Flex>
    </Container>
  );
};

export default NewIssueLoadingPage;
