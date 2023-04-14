import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

const listaItens = [
  {
    nome: "Adaga",
    poder: "Dano de Ataque: 35",
    peso: "Peso: Leve",
    urlItem: "https://i.pinimg.com/originals/29/dc/41/29dc4186832ceee03d0a5362ac48bd1d.jpg"
  },
  {
    nome: "Espada",
    poder: "Dano de Ataque: 62",
    peso: "Peso: Médio",
    urlItem: "https://i.pinimg.com/originals/9b/b1/e6/9bb1e69c0169d1fb5899bdc20b8a0d77.png"
  },
  {
    nome: "Armadura de Bronze",
    poder: "Pode de Defesa: 120",
    peso: "Peso: Pesado",
    urlItem: "https://i.pinimg.com/originals/bf/17/95/bf17955c3536442c3be97363b29fcffe.jpg"
  }
]

export default function App() {
  return (
    <View style={styles.background}>
      {listaItens.map(item => <Item item={item}/>)}
    </View>
  );
}

function Item(props)
{
  return (
    <View style={styles.cartao}>
      <View style={styles.viewImage}>
        <Image style={styles.imagem} source={{uri: props.item.urlItem}}/>
      </View>
      <View style={styles.viewDados}>
        <Text style={styles.nomeItem}>{props.item.nome}</Text>
        <Text style={styles.dados}>{props.item.poder}</Text>
        <Text style={styles.dados}>{props.item.peso}</Text>
        <Button style={styles.botaoTroca} title="TROCAR"/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartao: {
    width: "90%",
    backgroundColor: '#c1c1c3',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
  },
  viewImage: {
    padding: 20,
    height: "100%",
    width: "30%",
  },
  imagem: {
    width: 90,
    height: 100,
  },
  viewDados: {
    width: '70%',
    padding: 20,
    flexDirection: 'column',
  },
  nomeItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoTroca: {
    borderRadius:10,
  }
});
