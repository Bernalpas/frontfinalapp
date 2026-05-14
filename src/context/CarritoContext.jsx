import { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const guardados = localStorage.getItem('carrito');
      return guardados ? JSON.parse(guardados) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(items));
  }, [items]);

  const agregar = (producto) => {
    setItems((prev) => {
      const existe = prev.find((p) => p._id === producto._id);
      if (existe) {
        return prev.map((p) =>
          p._id === producto._id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const sumarCantidad = (id) => {
    setItems((prev) =>
      prev.map((p) => (p._id === id ? { ...p, cantidad: p.cantidad + 1 } : p))
    );
  };

  const restarCantidad = (id) => {
    setItems((prev) =>
      prev.map((p) =>
        p._id === id
          ? { ...p, cantidad: Math.max(1, p.cantidad - 1) }
          : p
      )
    );
  };

  const eliminar = (id) => {
    setItems((prev) => prev.filter((p) => p._id !== id));
  };

  const vaciar = () => {
    setItems([]);
  };

  const total = items.reduce((acc, p) => acc + Number(p.precio) * p.cantidad, 0);
  const cantidadTotal = items.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{ items, agregar, sumarCantidad, restarCantidad, eliminar, vaciar, total, cantidadTotal }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
