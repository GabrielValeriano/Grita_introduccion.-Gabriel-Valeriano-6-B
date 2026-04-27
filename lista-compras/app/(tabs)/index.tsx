import { ContenedorDeListaDeCompras } from "./componentes/ContenedorDeListaDeCompras ";
import { TituloDeLaPagina } from "./componentes/TituloDeListaDeCompras"
import { FormularioParaAgregarUnNuevoItem } from "./componentes/FormularioParaAgregarItem"
import { ListaDeItemsCompras } from "./componentes/ListaDeItemsDeCompra";
import { useListaDeCompras } from "./hooks/use-lista-compras"

export function ControladorDeListaDeCompras() {
  const {
    items,
    text,
    setText,
    agregarItem,
    TarjetaParaItemDeCompra  
  } = useListaDeCompras();

  return (
    <ContenedorDeListaDeCompras>
      <TituloDeLaPagina />

      <FormularioParaAgregarUnNuevoItem 
        texto={text} 
        AlIntroducirUnTexto={setText} 
        AlAgregarUnItem={agregarItem} />

      <ListaDeItemsCompras Items={items} ComponeneteParaCadaItem={TarjetaParaItemDeCompra} />

    </ContenedorDeListaDeCompras>
  );
}  