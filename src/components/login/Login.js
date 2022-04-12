import "./Login.css";
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import logo from "../../imagens/logo.jpg";
import { useNavigate } from "react-router-dom";

function TelaLogin() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if (user.password === user.password2) {
      window.localStorage.setItem("usuários", JSON.stringify(user));
      alert("User salvo com sucesso, você ja pode acessar o sistema");
      navigate("/listas");
    } else {
      alert("As senhas não são iguais, favor conferir");
    }
  };

  const [user, setUser] = React.useState({
    usuário: "",
    password: "",
    password2: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="box">
      <img className="logoLogin" src={logo} alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="usuário"
          name="usuário"
          style={{
            margin: 8,
            marginLeft: 100,
            marginRight: 30,
            marginBottom: 40,
          }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("usuário", { required: "O nome é obrigatório" })}
          onChange={handleChange}
          value={user.usuário}
        />

        {errors?.usuário?.type === "required" && (
          <p>Esse campo é obrigatório</p>
        )}

        <TextField
          label="password"
          name="password"
          type="password"
          style={{
            margin: 8,
            marginLeft: 100,
            marginRight: 30,
            marginBottom: 40,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          {...register("password", {
            required: "O nome é obrigatório",
            pattern:
              /^(?=.*\d)(?=.*[a-z])(?=.*[0-9])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
          })}
          value={user.password}
          onChange={handleChange}
        />
        {errors?.password?.type === "required" && (
          <p>Esse campo é obrigatório</p>
        )}
        {errors?.password?.type === "pattern" && (
          <p>Não se encontra no formato desejado</p>
        )}

        <TextField
          label="Confirmação Password"
          name="password2"
          type="password"
          style={{
            margin: 8,
            marginLeft: 100,
            marginRight: 30,
            marginBottom: 40,
          }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("password2", {
            required: "O email é obrigatório",
            pattern:
              /^(?=.*\d)(?=.*[a-z])(?=.*[0-9])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
          })}
          onChange={handleChange}
          value={user.password2}
        />

        {errors?.password2?.type === "required" && (
          <p>Esse campo é obrigatório</p>
        )}
        {errors?.password2?.type === "pattern" && (
          <p>Não se encontra no formato desejado</p>
        )}

        <input className="button" type="submit" value="Registrar" />
      </form>
    </div>
  );
}

export default TelaLogin;
