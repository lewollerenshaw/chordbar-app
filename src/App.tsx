import React, { useState } from "react";
import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, SimpleGrid } from "@chakra-ui/react"
import { KeyList, ModeList } from './constants/form';
import { getChordProgression, getModalChords } from './generator';
import './App.css';

const App = () => {
  const [key, setKey] = useState(0);
  const [mode, setMode] = useState(0);
  const [length, setLength] = useState(2);
  const [isDiminished, setIsDiminished] = useState(false);
  const [resolveRoot, setResolveRoot] = useState(true);

  const generateProgression = () => {
    if (!key || !mode) {
      console.log('Problem with form input');
    }

    getChordProgression(key, mode, length, isDiminished, resolveRoot);
  };

  return (
    <div className="App">
      <div className="header">
        <Heading as="h2" size="2xl">Chordbar</Heading>
        <Heading as="h2" size="1xl" color="gray">What'll it be?</Heading>
      </div>

      <form className="form">
        <div className="form__inputs">
          <SimpleGrid columns={[1, 1, 3]} spacing={10}>
            <Box>
              <FormControl id="key">
                <FormLabel>Key</FormLabel>
                <Select onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setKey(Number(e.target.value))}>
                  <option selected disabled>Please select</option>
                  {KeyList.map((key) => (
                    <option key={key.label} value={key.value}>{key.label}</option>
                  ))}
                </Select>
                <FormHelperText>Which key you want your progression</FormHelperText>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="mode">
                <FormLabel>Mode</FormLabel>
                <Select onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setMode(Number(e.target.value))}>
                  <option selected disabled>Please select</option>
                  {ModeList.map((key) => (
                    <option key={key.label} value={key.value}>{key.label}</option>
                  ))}
                </Select>
                <FormHelperText>Which mode you want your progression</FormHelperText>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="progression-length">
                <FormLabel>Progression length</FormLabel>
                <NumberInput defaultValue={2} min={2} max={10} onChange={(e: React.SetStateAction<string>) => setLength(Number(e))}>
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
          <Checkbox className="form__actions__root" defaultChecked onChange={(e: { target: { checked: React.SetStateAction<boolean>; }; }) => setResolveRoot(e.target.checked)}>Resolve on root</Checkbox>
          <Checkbox onChange={(e: { target: { checked: React.SetStateAction<boolean>; }; }) => setIsDiminished(e.target.checked)}>Diminished chord</Checkbox>
        </div>

        <div className="form__submit">
          <Button colorScheme="blue" onClick={() => generateProgression()}>Go</Button>
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
