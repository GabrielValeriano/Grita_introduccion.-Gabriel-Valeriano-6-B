import { ReactNode, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from 'react-native';

type Item = {
  id: string;
  name: string;
  done: boolean;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState('');

  const AgregarItem = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);
    setText('');
  };

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    );
  };

  const BorrarItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const TarjetaParaItemDeCompra = ({ item }: { item: Item }) => (
    <Pressable
      onPress={() => toggleItem(item.id)}
      onLongPress={() => BorrarItem(item.id)}
      style={Estilos.row}
    >
      <Text style={[Estilos.rowText, item.done && Estilos.done]}>
        {item.name}
      </Text>
      <Text style={[Estilos.pill, item.done ? Estilos.pillDone : Estilos.pillTodo]}>
        {item.done ? '✔' : '•'}
      </Text>
    </Pressable>
  );

  return (
    <Contenedor>
      <TituloDeLaPagina />

      <FormularioParaAgregarUnNuevoItem 
        texto={text} 
        AlIntroducirUnTexto={setText} 
        AlAgregarUnItem={AgregarItem} />

      <ListaDeCompras Items={items} ComponeneteParaCadaItem={TarjetaParaItemDeCompra} />

    </Contenedor >
  );
}

const Contenedor = ({ childrent } : {childrent : ReactNode }) => {
  return <View style={Estilos.container}>{childrent}</View>
};
const TituloDeLaPagina = () => {
  return <Text style={Estilos.title}>🛒 Lista de Compras</Text>
};

const FormularioParaAgregarUnNuevoItem = ({texto, AlIntroducirUnTexto, AlAgregarUnItem} : {texto : string, AlIntroducirUnTexto : () => void, AlAgregarUnItem : () => void}) =>{
  return ( 
     <View style={Estilos.inputRow}>
        <TextInput
          value={texto}
          onChangeText={AlIntroducirUnTexto}
          placeholder="Agregar producto (ej: Leche)"
          style={Estilos.input}
          returnKeyType="done"
          onSubmitEditing={AlAgregarUnItem}
        />
        <Pressable style={Estilos.addBtn} onPress={AlAgregarUnItem}>
          <Text style={Estilos.addTxt}>Agregar</Text>
        </Pressable>
      </View>
    )
  }

const ListaDeCompras = ({Items, ComponeneteParaCadaItem} : {Items : Item[], ComponeneteParaCadaItem : ListRenderItem<any> | null | undefined}) => {
  return (
    <FlatList
        data={Items}
        keyExtractor={(it) => it.id}
        renderItem={ComponeneteParaCadaItem}
        ListEmptyComponent={
          <Text style={Estilos.empty}>Sin productos. ¡Agregá el primero! 😊</Text>
        }
        ItemSeparatorComponent={() => <View style={Estilos.sep} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
  )   
}

const Estilos = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 12 },
  inputRow: { flexDirection: 'row', gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  addBtn: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTxt: { color: '#fff', fontWeight: '600' },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: '#999' },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  pillTodo: { backgroundColor: '#eee', color: '#666' },
  pillDone: { backgroundColor: '#2ecc71', color: '#fff' },
  sep: { height: 1, backgroundColor: '#eee' },
  empty: { textAlign: 'center', color: '#777', marginTop: 24 },
});