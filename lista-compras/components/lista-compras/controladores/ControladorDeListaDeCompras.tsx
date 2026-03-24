import { FlatList, ListRenderItem, Text, View } from "react-native";
import { useListaDeCompras } from "../../../hooks/use-lista-compras";
import { ContenedorDeListaDeCompras } from "../contenedores/ContenedorDeListaDeCompras ";
import { TituloDeLaPagina } from "../contenidos/TituloDeListaDeCompras";
import { FormularioParaAgregarUnNuevoItem } from "../contenidos/FormularioParaAgregarItem";
import { TarjetaParaItemDeCompra } from "../contenidos/TarjetaParaItemDeCompra";
import { ListaDeItemsCompras } from "../contenidos/ListaDeItemsDeCompra";
import { Item } from "../../../hooks/use-lista-compras";

export function ControladorDeListaDeCompras() {
  const {
    items,
    text,
    setText,
    agregarItem,
    cambiarElEstadoDeCompra,
    borrarItem,  
  } = useListaDeCompras();

  const renderItem: ListRenderItem<Item> = ({ item }) => (

    <TarjetaParaItemDeCompra
    item={item}
    CambiarElEstadoDeCompra={cambiarElEstadoDeCompra}
    BorrarItem={borrarItem}/>
);

  return (
    <ContenedorDeListaDeCompras>
      <TituloDeLaPagina />

      <FormularioParaAgregarUnNuevoItem 
        texto={text} 
        AlIntroducirUnTexto={setText} 
        AlAgregarUnItem={agregarItem} />

      <ListaDeItemsCompras Items={items} ComponeneteParaCadaItem={renderItem} />

    </ContenedorDeListaDeCompras>
  );
}  