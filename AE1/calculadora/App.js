import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [buttons, setButons] = useState([
    { text: 'sen', backgroundColor: 'gray', marginRight: 6 },
    { text: 'cos', backgroundColor: 'gray', marginRight: 6 },
    { text: 'tan', backgroundColor: 'gray', marginRight: 6 },
    { text: 'deg', backgroundColor: 'gray' },
    { text: 'ln', backgroundColor: 'gray', marginRight: 6, marginTop: 6 },
    { text: 'log', backgroundColor: 'gray', marginRight: 6, marginTop: 6 },
    { text: 'Π', backgroundColor: 'gray', marginRight: 6, marginTop: 6 },
    { text: 'rad', backgroundColor: 'gray', marginTop: 6 },
    { text: '1/X', backgroundColor: 'gray', marginRight: 6, marginTop: 6 },
    { text: '!', backgroundColor: 'gray', marginRight: 6, marginTop: 6 },
    { text: '√', backgroundColor: 'gray', marginRight: 6, marginTop: 6 },
    { text: '/', backgroundColor: 'gray', marginTop: 6 },
    { text: '7', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: '8', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: '9', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: 'x', backgroundColor: 'gray', marginTop: 6 },
    { text: '4', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: '5', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: '6', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: '-', backgroundColor: 'gray', marginTop: 6 },
    { text: '1', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: '2', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: '3', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: '+', backgroundColor: 'gray', marginTop: 6 },
    { text: 'C', backgroundColor: 'gray', marginRight: 6, marginTop: 6 },
    { text: '0', backgroundColor: 'blue', marginRight: 6, marginTop: 6 },
    { text: ',', backgroundColor: 'gray', marginRight: 6, marginTop: 6 },
    { text: '=', backgroundColor: 'gray', marginTop: 6 },
  ]);
  const [numpanel, setNumPanel] = useState('0');
  const [num1, setNum1] = useState(null);
  const [typeOperation, setTypeOperation] = useState(null);
  let resultOperation;

  function handleOnPress(value) {
    switch (value) {
      case ',':
        if (numpanel == '') {
          setNumPanel(numpanel);
        } else if (numpanel.includes('.')) {
          setNumPanel(numpanel);
        } else {
          setNumPanel(numpanel + '.');
        }
        break;
      case 'C':
        setNumPanel('0');
        setTypeOperation(null);
        setNum1(null);
        break;

      case '0':
        if (numpanel == '0') {
          setNumPanel('0');
        } else {
          setNumPanel(numpanel + '0');
        }
        break;
      case '1':
        if (numpanel == '0') {
          setNumPanel('1');
        } else if (numpanel == '') {
          setNumPanel('1');
        } else {
          setNumPanel(numpanel + '1');
        }
        break;
      case '2':
        if (numpanel == '0') {
          setNumPanel('2');
        } else if (numpanel == '') {
          setNumPanel('2');
        } else {
          setNumPanel(numpanel + '2');
        }
        break;
      case '3':
        if (numpanel == '0') {
          setNumPanel('3');
        } else if (numpanel == '') {
          setNumPanel('3');
        } else {
          setNumPanel(numpanel + '3');
        }
        break;
      case '4':
        if (numpanel == '0') {
          setNumPanel('4');
        } else if (numpanel == '') {
          setNumPanel('4');
        } else {
          setNumPanel(numpanel + '4');
        }
        break;
      case '5':
        if (numpanel == '0') {
          setNumPanel('5');
        } else if (numpanel == '') {
          setNumPanel('5');
        } else {
          setNumPanel(numpanel + '5');
        }
        break;
      case '6':
        if (numpanel == '0') {
          setNumPanel('6');
        } else if (numpanel == '') {
          setNumPanel('6');
        } else {
          setNumPanel(numpanel + '6');
        }
        break;
      case '7':
        if (numpanel == '0') {
          setNumPanel('7');
        } else if (numpanel == '') {
          setNumPanel('7');
        } else {
          setNumPanel(numpanel + '7');
        }
        break;
      case '8':
        if (numpanel == '0') {
          setNumPanel('8');
        } else if (numpanel == '') {
          setNumPanel('8');
        } else {
          setNumPanel(numpanel + '8');
        }
        break;
      case '9':
        if (numpanel == '0') {
          setNumPanel('9');
        } else if (numpanel == '') {
          setNumPanel('9');
        } else {
          setNumPanel(numpanel + '9');
        }
        break;

      case '+':
        setNum1(parseFloat(numpanel));
        setTypeOperation('sum');
        setNumPanel('');
        break;
      case '-':
        setNum1(parseFloat(numpanel));
        setTypeOperation('res');
        setNumPanel('');
        break;
      case 'x':
        setNum1(parseFloat(numpanel));
        setTypeOperation('mult');
        setNumPanel('');
        break;
      case '/':
        setNum1(parseFloat(numpanel));
        setTypeOperation('div');
        setNumPanel('');
        break;

      case '=':
        if (typeOperation == 'sum') {
          if (numpanel == '') {
            resultOperation = num1 + num1;
            setNumPanel(resultOperation.toString());
          } else {
            resultOperation = num1 + parseFloat(numpanel);
            setNumPanel(resultOperation.toString());
          }
        }
        if (typeOperation == 'res') {
          if (numpanel == '') {
            resultOperation = num1 - num1;
            setNumPanel(resultOperation.toString());
          } else if (parseFloat(numpanel) <= 0) {
            resultOperation = parseFloat(numpanel) - num1;
            setNumPanel(resultOperation.toString());
          } else {
            resultOperation = num1 - parseFloat(numpanel);
            setNumPanel(resultOperation.toString());
          }
        }
        if (typeOperation == 'mult') {
          if (numpanel == '') {
            resultOperation = num1 * num1;
            setNumPanel(resultOperation.toString());
          } else {
            resultOperation = num1 * parseFloat(numpanel);
            setNumPanel(resultOperation.toString());
          }
        }
        if (typeOperation == 'div') {
          if (numpanel == '') {
            resultOperation = num1 / num1;
            setNumPanel(resultOperation.toString());
          } else if (parseFloat(numpanel) < num1) {
            resultOperation = parseFloat(numpanel) / num1;
            setNumPanel(resultOperation.toString());
          } else {
            resultOperation = num1 / parseFloat(numpanel);
            setNumPanel(resultOperation.toString());
          }
        }
        break;

      case '1/X':
        resultOperation = 1 / parseFloat(numpanel);
        setNumPanel(resultOperation.toString());
        break;
      case '!':
        if (parseFloat(numpanel) == 0) {
          setNumPanel('1');
        } else if (parseFloat(numpanel) < 0) {
          setNumPanel(numpanel);
        } else {
          resultOperation = 1;
          for (let i = parseFloat(numpanel); i >= 1; i--) {
            resultOperation = resultOperation * i;
          }
          setNumPanel(resultOperation.toString());
        }
        break;
      case '√':
        resultOperation = Math.sqrt(parseFloat(numpanel));
        setNumPanel(resultOperation.toString());
        break;
      case 'ln':
        resultOperation = Math.log(parseFloat(numpanel));
        setNumPanel(resultOperation.toString());
        break;
      case 'log':
        resultOperation = Math.log10(parseFloat(numpanel));
        setNumPanel(resultOperation.toString());
        break;
      case 'Π':
        setNumPanel(Math.PI.toString());
        break;
      case 'rad':
        resultOperation = (parseFloat(numpanel) * Math.PI) / 180;
        setNumPanel(resultOperation.toString());
        break;
      case 'deg':
        resultOperation = (parseFloat(numpanel) * 180) / Math.PI;
        setNumPanel(resultOperation.toString());
        break;
      case 'sen':
        resultOperation = Math.sin(parseFloat(numpanel));
        setNumPanel(resultOperation.toString());
        break;
      case 'cos':
        resultOperation = Math.cos(parseFloat(numpanel));
        setNumPanel(resultOperation.toString());
        break;
      case 'tan':
        resultOperation = Math.tan(parseFloat(numpanel));
        setNumPanel(resultOperation.toString());
        break;
    }
  }

  const limitNumbers = () => {
    if (numpanel.includes('.')) {
      return numpanel.substring(0, 12);
    } else if (numpanel.includes('-')) {
      return numpanel.substring(0, 12);
    } else {
      return numpanel.substring(0, 11);
    }
  };

  return (
    <View style={styles.principalContainer}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={{ marginTop: 5 }}>
        <View style={styles.textPanel}>
          <Text style={styles.text}>{limitNumbers()}</Text>
        </View>
        <View style={{ padding: 3, flexDirection: 'row', flexWrap: 'wrap' }}>
          {buttons.map((element, index) => (
            <Pressable
              onPress={() => handleOnPress(element.text)}
              key={index.toString}
              style={[
                styles.button,
                {
                  backgroundColor: element.backgroundColor,
                  marginRight: element.marginRight,
                  marginTop: element.marginTop,
                },
              ]}>
              <Text>{element.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principalContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 80,
    marginLeft: 25,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  textPanel: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 70,
    width: 340,
    borderRadius: 4,
    borderWidth: 1,
    marginLeft: 2.3,
  },
  text: {
    fontSize: 50,
    textAlign: 'right',
    flex: 1,
  },
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    width: 80,
    height: 80,
  },
});
