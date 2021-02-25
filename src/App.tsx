import React, { useState } from "react";
import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, SimpleGrid } from "@chakra-ui/react"
import { KeyList, ModeList } from './constants/form';
import './App.css';

function App() {
  const [key, setKey] = useState('');
  const [mode, setMode] = useState('');
  const [length, setLength] = useState('2');
  const [isDiminished, setIsDiminished] = useState(false);
  const [resolveRoot, setResolveRoot] = useState(true);

  const generateProgression = () => {
    
  }

  return (
    <div className="App">
      <div className="header">
        <Heading as="h2" size="2xl">Chordbar</Heading>
        <Heading as="h2" size="1xl">What'll it be?</Heading>
      </div>

      <form className="form">
        <div className="form__inputs">
          <SimpleGrid columns={[1, 1, 3]} spacing={10}>
            <Box>
              <FormControl id="first-name" isRequired>
                <FormLabel>Key</FormLabel>
                <Select placeholder="Please select" onChange={(e) => setKey(e.target.value)}>
                  {KeyList.map((key) => (
                    <option key={key.label} value={key.value}>{key.label}</option>
                  ))}
                </Select>
                <FormHelperText>Which key you want your progression</FormHelperText>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="first-name" isRequired>
                <FormLabel>Mode</FormLabel>
                <Select placeholder="Please select" onChange={(e) => setMode(e.target.value)}>
                  {ModeList.map((key) => (
                    <option key={key.label} value={key.value}>{key.label}</option>
                  ))}
                </Select>
                <FormHelperText>Which mode you want your progression</FormHelperText>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="first-name" isRequired>
                <FormLabel>Progression length</FormLabel>
                <NumberInput defaultValue={2} min={2} max={10} onChange={(e) => setLength(e)}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormHelperText>The length of your progression</FormHelperText>
              </FormControl>
            </Box>
          </SimpleGrid>
        </div>

        <div className="form__actions">
          <Checkbox className="form__actions__root" defaultChecked onChange={(e) => setResolveRoot(e.target.checked)}>Resolve on root</Checkbox>
          <Checkbox onChange={(e) => setIsDiminished(e.target.checked)}>Diminished chord</Checkbox>
        </div>

        <div className="form__submit">
          <Button colorScheme="blue">Go</Button>
        </div>
      </form>

      <div className="chords">
        <SimpleGrid columns={[1, 2, 4]} spacing={10}>
          <Box bg="blue.300" height="80px"></Box>
          <Box bg="blue.300" height="80px"></Box>
          <Box bg="blue.300" height="80px"></Box>
          <Box bg="blue.300" height="80px"></Box>
        </SimpleGrid>
      </div>
    </div>
  );
}

export default App;
