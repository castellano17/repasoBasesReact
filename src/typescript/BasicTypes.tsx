export const BasicTypes = () => {
  const name: string = "Esmir";
  const age: number = 33;
  const isActive: boolean = true;
  const powers: string[] = ["Velocidad", "Volar", "Respirar en el agua"];
  powers.push("Invisibilidad");
  return (
    <>
      <h3>Tipos basicos</h3>

      {name}
      {age}
      {isActive ? "Activo" : "Inactivo"}
      {powers.join(", ")}
    </>
  );
};
