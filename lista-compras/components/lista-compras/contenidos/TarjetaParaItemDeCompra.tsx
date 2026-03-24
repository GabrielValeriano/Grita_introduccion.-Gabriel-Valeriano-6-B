import { Pressable, Text } from "react-native";
import { Item } from "../../../hooks/use-lista-compras";
import { estilosLista } from "../estilos/estilosListaDeCompras";

type Props = { 
    item : Item; 
    CambiarElEstadoDeCompra : (id : string) => void; 
    BorrarItem : (id : string) => void;
};

export function TarjetaParaItemDeCompra({ item, CambiarElEstadoDeCompra, BorrarItem }: Props){
  return (
    <Pressable
      onPress={() => CambiarElEstadoDeCompra(item.id)}
      onLongPress={() => BorrarItem(item.id)}
      style={estilosLista.row}
    >
      <Text style={[estilosLista.rowText, item.done && estilosLista.done]}>
        {item.name}
      </Text>
      <Text style={[estilosLista.pill, item.done ? estilosLista.pillDone : estilosLista.pillTodo]}>
        {item.done ? '✔' : '•'}
      </Text>
    </Pressable>
  )};