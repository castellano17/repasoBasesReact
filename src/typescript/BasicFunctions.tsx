export const BasicFunctions = () => {
  const increaseBy = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones retorno y argumentos</h3>
      <span>El resultado de sumar: {increaseBy(1, 2)}</span>
    </>
  );
};
