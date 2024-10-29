import { useForm } from "react-hook-form";

type FormInput = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormInput>({
    defaultValues: {
      email: "esmir@esmir.net",
      password: "33",
    },
  });

  const onSubmit = (myForm: FormInput) => {
    console.log("enviado", myForm);
  };

  watch("email");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>fomrulario</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Email"
            {...(register("email"), { required: true })}
          />
          <input type="text" placeholder="password" {...register("password")} />
          <button type="submit">Enviar</button>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};
