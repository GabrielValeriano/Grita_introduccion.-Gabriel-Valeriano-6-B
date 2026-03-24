import { useCallback, useState } from "react";

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

    return {
        items,
        text,
        setText,
        agregarItem,
        cambiarElEstadoDeCompra,
        borrarItem
    }
}