import type { ReactNode } from 'react';
import { View } from 'react-native';
import { estilosLista } from '../estilos/estilosListaDeCompras';

type Props = { children: ReactNode };
export function ContenedorDeListaDeCompras({ children }: Props) {
return <View style={estilosLista.container}>{children}</View>;

}

