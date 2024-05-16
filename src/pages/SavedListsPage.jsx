import { Box, Heading, Text, Button } from "@chakra-ui/react";

function SavedListsPage() {
  return (
    <Box p={5}>
      <Heading>Saved Lists</Heading>
      <Text>Here you can manage your saved lists.</Text>
      <Button mt={4} colorScheme="teal">
        Load List
      </Button>
    </Box>
  );
}

export default SavedListsPage;
