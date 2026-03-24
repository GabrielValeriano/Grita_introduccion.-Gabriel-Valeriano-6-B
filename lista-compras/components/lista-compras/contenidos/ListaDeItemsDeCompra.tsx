import { FlatList, ListRenderItem, Text, View } from "react-native";
import { Item } from "../../../hooks/use-lista-compras";
import { estilosLista } from "../estilos/estilosListaDeCompras";

type Props = {
  Items: Item[];
  ComponeneteParaCadaItem: ListRenderItem<Item>;
};

export function ListaDeItemsCompras({Items, ComponeneteParaCadaItem} : Props){
  return (
    <FlatList
        data={Items}
        keyExtractor={(it) => it.id}
        renderItem={ComponeneteParaCadaItem}
        ListEmptyComponent={
          <Text style={estilosLista.empty}>Sin productos. ¡Agregá el primero! 😊</Text>
        }
        ItemSeparatorComponent={() => <View style={estilosLista.sep} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
  )   
}