import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Box, Text, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [attendees, setAttendees] = useState([]);
  const [name, setName] = useState("");

  const addAttendee = () => {
    if (name.trim() !== "") {
      setAttendees([...attendees, { name, arrived: false }]);
      setName("");
    }
  };

  const toggleArrival = (index) => {
    const newAttendees = [...attendees];
    newAttendees[index].arrived = !newAttendees[index].arrived;
    setAttendees(newAttendees);
  };

  const removeAttendee = (index) => {
    const newAttendees = attendees.filter((_, i) => i !== index);
    setAttendees(newAttendees);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Enter attendee name" value={name} onChange={(e) => setName(e.target.value)} />
          <Button onClick={addAttendee} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {attendees.map((attendee, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={attendee.arrived} onChange={() => toggleArrival(index)}>
                {attendee.name}
              </Checkbox>
              <IconButton aria-label="Remove attendee" icon={<FaTrash />} onClick={() => removeAttendee(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

const PrintPage = ({ attendees }) => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <SimpleGrid columns={2} spacing={4} width="100%">
        {attendees.map((attendee, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            <Text>{attendee.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

const App = () => {
  const [attendees, setAttendees] = useState([]);
  const [name, setName] = useState("");
  const [showPrintPage, setShowPrintPage] = useState(false);

  const addAttendee = () => {
    if (name.trim() !== "") {
      setAttendees([...attendees, { name, arrived: false }]);
      setName("");
    }
  };

  const toggleArrival = (index) => {
    const newAttendees = [...attendees];
    newAttendees[index].arrived = !newAttendees[index].arrived;
    setAttendees(newAttendees);
  };

  const removeAttendee = (index) => {
    const newAttendees = attendees.filter((_, i) => i !== index);
    setAttendees(newAttendees);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      {showPrintPage ? (
        <PrintPage attendees={attendees} />
      ) : (
        <VStack spacing={4} width="100%">
          <HStack width="100%">
            <Input placeholder="Enter attendee name" value={name} onChange={(e) => setName(e.target.value)} />
            <Button onClick={addAttendee} colorScheme="teal">
              Add
            </Button>
          </HStack>
          <VStack spacing={2} width="100%">
            {attendees.map((attendee, index) => (
              <HStack key={index} width="100%" justifyContent="space-between">
                <Checkbox isChecked={attendee.arrived} onChange={() => toggleArrival(index)}>
                  {attendee.name}
                </Checkbox>
                <IconButton aria-label="Remove attendee" icon={<FaTrash />} onClick={() => removeAttendee(index)} />
              </HStack>
            ))}
          </VStack>
          <Button onClick={() => setShowPrintPage(true)} colorScheme="blue">
            Print List
          </Button>
        </VStack>
      )}
      {showPrintPage && (
        <Button onClick={() => setShowPrintPage(false)} colorScheme="blue" mt={4}>
          Back
        </Button>
      )}
    </Container>
  );
};

export default App;
