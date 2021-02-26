import React, { useState } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, SimpleGrid } from "@chakra-ui/react"
import { KeyList, ModeList } from './constants/form';
import { getChordProgression } from './generator';
import './App.css';
import { Progression } from "./constants/models";

const App = () => {
  /**
   * Form inputs
   */
  const [key, setKey] = useState<number | null>(null);
  const [mode, setMode] = useState<number | null>(null);
  const [length, setLength] = useState(2);
  const [isDiminished, setIsDiminished] = useState(false);
  const [resolveRoot, setResolveRoot] = useState(true);
  const [showFormError, setShowFormError] = useState(false);

  /**
   * Chord grid logic variables
   */
  const [progression, setProgression] = useState<Progression>();

  const generateProgression = () => {
    if (key === null || mode === null) {
      setShowFormError(true);
    } else {
      setShowFormError(false);

      const progression = getChordProgression(key!, mode!, length, isDiminished, resolveRoot);
      setProgression(progression);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <Heading as="h2" size="2xl">Chordbar</Heading>
        <Heading as="h2" size="1xl" color="gray">What'll it be?</Heading>
      </div>

      <form className="form">
        {showFormError &&
          <Alert status="error" className="error">
            <AlertIcon />
            <AlertTitle mr={2}>Invalid properties!</AlertTitle>
            <AlertDescription>Please check you have completed the form inputs.</AlertDescription>
          </Alert>
        }
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
        <SimpleGrid className="chords__grid" columns={[1, 2, 4]} spacing={10}>
          {progression?.Chords.map((chord) => (
            <Box bg="blue.300" height="80px"  >
              <div>{chord.Note}</div>
              <div>{chord.Type}</div>
            </Box>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default App;
