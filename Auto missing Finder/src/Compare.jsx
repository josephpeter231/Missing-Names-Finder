import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

class StudentNameComparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      missingNames: [],
      constantNames: [
        "ABHISHEK V",
        "ABISHEK M",
        "AKSHAYA M",
        "ALBERT SUBARAJ B",
        "A LOKESH",
        "ANITHA R",
        "ASWATH N.P",
        "ATHAVAN K",
        "BALAJI M D",
        "BALAKRISHNAN S",
        "BATHULA SAI TEJA",
        "BHARATHKUMAR V",
        "BHUVANESH N S",
        "BLESSY ESTHER S",
        "B THARMESH KHANNA",
        "CHANDRAVEL M K",
        "DASARI UDAYASRI",
        "DASARI VENKATA SATHVIK",
        "DEEPAK CHAKKARAWARTHY S",
        "DEVAHARISH M",
        "DEVAKAR K",
        "DHINAKAR L",
        "DUVVURU SNEHITHA",
        "ENIIYAVAN T G",
        "ESWAR R",
        "GANAPATHI BABI SAI",
        "GEETIKA S",
        "GIRIPRASHAATH M",
        "GIRISH KUMAR S",
        "GOWTHAM K",
        "HARIHARAN R",
        "HARISH M",
        "HEMA RANJANI M",
        "HEUBERT AKASH. B",
        "JEESMON S J",
        "JEEVANANTHAM N",
        "JOSEPH PETER J",
        "KADARABAD MARUTHI VAMSI",
        "KARTHIKA R",
        "KAVYAPRIYA G V",
        "KHASHIKA S",
        "KOUSIGA.A.S",
        "KRISHNA SRIDHAR",
        "LAKSHMI.B",
        "LAVANYA V",
        "LOGESH S",
        "LOKESH G",
        "MADHUVARSHINI VM",
        "MAKAM PRADEEPKUMAR",
        "MAMUDURI B DHARAHASH",
        "MATHIVANAN G",
        "MEGA K",
        "MOHANA T",
        "MOUNISH PRITHVIRAJAN",
        "MUDIKETI SOMA SEKHAR",
        "MUKTHIKHA B",
        "NANDAGOPALAN.K",
        "NARASHIMAN.D",
        "NETY SRI SAI KRISHNA BHARADWAJ",
        "ONTELA BHARGAV",
        "ARSHATH PARVES I",
        "ARUN KUMAR K",
        "SANJAY B S"
      ],
    };
  }

  // Function to handle input changes and update the inputText state
  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  // Function to compare names and update the missingNames state
  compareNames = () => {
    const { inputText, constantNames } = this.state;

    // Split the input into an array of names using line breaks
    const inputNames = inputText
      .trim()
      .split(/\r?\n/)
      .map((name) => name.trim().toUpperCase());

    // Find names in the constant list but not in the input list
    const missingNames = constantNames.filter(
      (constantName) => !inputNames.includes(constantName.toUpperCase())
    );

    this.setState({ missingNames });
  };

  // Function to copy missing names to the clipboard
  copyToClipboard = () => {
    const missingNamesText = this.state.missingNames.join('\n');
    navigator.clipboard.writeText(missingNamesText);
    alert('Remaining names copied to clipboard!');
  };

  render() {
    return (
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Remaining Student Names</h1>
        <textarea
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          rows="5"
          value={this.state.inputText}
          onChange={this.handleInputChange}
          placeholder="Enter student names (one per line)"
        />
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
            onClick={this.compareNames}
          >
            Find Remaining Names
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
            onClick={this.copyToClipboard}
          >
            Copy Remaining Names <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
        <h2 className="text-lg font-semibold mt-4">Remaining Names:</h2>
        <ul className="list-disc ml-6 mt-2">
          {this.state.missingNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentNameComparison;