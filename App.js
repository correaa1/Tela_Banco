import React, {Component} from 'react';
import {View, Text, Switch, StyleSheet, TextInput} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexos: [
        {key: 1, nome: 'M'},
        {key: 2, nome: 'F'},
      ],
    };
  }

  render() {
    let sexosItem = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"></TextInput>

        <Text style={styles.titulo}> Sexo </Text>

        <Picker
          selectedValue={this.state.sexo}
          style={{height: 20, width: 80}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({sexo: itemValue})
          }>
          {sexosItem}
        </Picker>
        <Slider minimumValue={0} maximumValue={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#222',
    marginTop: 10,
  },
  titulo: {
    height: 20,
    width: 200,
    textAlign: 'left',
  },
});
