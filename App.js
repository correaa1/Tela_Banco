import React, {Component} from 'react';
import {View, Text, Switch, StyleSheet, TextInput, Button} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import {Slider} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexos: [
        {key: 1, nome: 'M'},
        {key: 2, nome: 'F'},
      ],
      valor: 50,
      status: false,
      input: '',
    };
    this.conta = this.conta.bind(this);
  }
  conta() {
    if (this.state.input === '') {
      alert('Complete todos os campos');
    }

    return;
  }

  render() {
    let sexosItem = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome: "></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Digite sua idade: "></TextInput>

        <Text style={styles.titulo}> Sexo </Text>

        <Picker
          selectedValue={this.state.sexo}
          style={{height: 20, width: 80, marginTop: 5}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({sexo: itemValue})
          }>
          {sexosItem}
        </Picker>
        <Slider
          style={{marginTop: 30}}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) =>
            this.setState({valor: valorSelecionado})
          }
          value={this.state.valor}
        />

        <Text style={{textAlign: 'center', fontSize: 20}}>
          Seu limite: {this.state.valor.toFixed(1)} R$
        </Text>

        <View style={styles.container2}>
          <Text style={{textAlign: 'center', fontSize: 15, width: 200}}>
            Estudante
          </Text>
          <Switch
            value={this.state.status}
            onValueChange={(valorSwitch) =>
              this.setState({status: valorSwitch})
            }
          />

          <Button title="Cria Conta" onPress={this.conta} />
        </View>
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
    borderRadius: 5,
    borderColor: '#454545',
    marginTop: 10,
    paddingLeft: 10,
  },
  titulo: {
    height: 20,
    width: 200,
    textAlign: 'left',
    marginTop: 30,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  conta: {},
});
