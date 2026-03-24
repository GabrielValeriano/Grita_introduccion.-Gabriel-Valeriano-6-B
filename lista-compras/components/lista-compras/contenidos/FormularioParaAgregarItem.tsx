import { View,TextInput,Pressable,Text } from 'react-native';
import { estilosLista } from '../estilos/estilosListaDeCompras';

type Props = {texto : string; AlIntroducirUnTexto : (nuevoTexto : string) => void; AlAgregarUnItem : () => void;};
export function FormularioParaAgregarUnNuevoItem({texto, AlIntroducirUnTexto, AlAgregarUnItem} : Props){
  return ( 
     <View style={estilosLista.inputRow}>
        <TextInput
          value={texto}
          onChangeText={AlIntroducirUnTexto}
          placeholder="Agregar producto (ej: Leche)"
          style={estilosLista.input}
          returnKeyType="done"
          onSubmitEditing={AlAgregarUnItem}
        />
        <Pressable style={estilosLista.addBtn} onPress={AlAgregarUnItem}>
          <Text style={estilosLista.addTxt}>Agregar</Text>
        </Pressable>
      </View>
    )
  }