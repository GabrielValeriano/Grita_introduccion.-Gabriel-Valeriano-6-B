import { useCallback, useState } from "react";
import { Pressable, Text } from "react-native";
import { estilosLista } from "../componentes/estilosListaDeCompras";
export type Item = {
id: string;
name: string;
done: boolean;
};

export function useListaDeCompras() {
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState('');

    const agregarItem = useCallback(() => {
     const trimmed = text.trim();
     if (!trimmed) return;
      setItems((prev) => [
    ...prev,
        { id: String(Date.now()), name: trimmed, done: false },
    ]);
     setText('');
    }, [text]);

    const cambiarElEstadoDeCompra = useCallback((id: string) => {
        setItems((prev) =>
        prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
        );
    }, []);

    const borrarItem = useCallback((id: string) => {
        setItems((prev) => prev.filter((it) => it.id !== id));
    }, []);

    const TarjetaParaItemDeCompra = ({ item }: { item: Item }) => (
        <Pressable
            onPress={() => cambiarElEstadoDeCompra(item.id)}
            onLongPress={() => borrarItem(item.id)}
            style={estilosLista.row}
            >
            <Text style={[estilosLista.rowText, item.done && estilosLista.done]}>
                {item.name}
            </Text>
            <Text style={[estilosLista.pill, item.done ? estilosLista.pillDone : estilosLista.pillTodo]}>
                {item.done ? '✔' : '•'}
            </Text>
        </Pressable>
    );

    return {
        items,
        text,
        setText,
        agregarItem,
        cambiarElEstadoDeCompra,
        borrarItem,
        TarjetaParaItemDeCompra,
    }
}