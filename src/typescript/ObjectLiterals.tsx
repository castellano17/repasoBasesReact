interface Person {
  name: string;
  age: number;
  isDeveloper: boolean;
  address: Address;
}

interface Address {
  street: string;
  city: string;
}

const ObjectLiterals = () => {
  // Objetos literales
  const person: Person = {
    name: "Luis",
    age: 30,
    isDeveloper: true,
    address: {
      street: "Calle 123",
      city: "Bogota",
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

export default ObjectLiterals;
