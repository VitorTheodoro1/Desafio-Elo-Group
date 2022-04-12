import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@material-ui/core/TextField";
import "./Modal.css";
import CheckBoxOportunities from "../checkbox/CheckBox";
import { useForm } from "react-hook-form";
import logo from "../../imagens/logo.jpg";
import { LeadsController } from "../../services/LeadsService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({ leadsCriados, setLeadsCriados }) {
  const [open, setOpen] = React.useState(false);

  const [lead, setLead] = React.useState({
    name: "",
    telephone: "",
    email: "",
    oportunities: {
      RPA: "",
      produtoDigital: "",
      analytics: "",
      BPM: "",
    },
  });

  const leadsController = new LeadsController();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if (
      lead.oportunities.BPM === "X" ||
      lead.oportunities.RPA === "X" ||
      lead.oportunities.analytics === "X" ||
      lead.oportunities.produtoDigital === "X"
    ) {
      leadsController.add(lead);
      addItem();
      handleClose();
      alert(
        "Lead salvo com sucesso, obs: devido a dificuldades que tive para integrar a biblioteca dnd com o local storage, você só verá o lead no painel após dar F5"
      );
    } else {
      alert("Atenção, campo oportunidades vazio");
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setLead({
      name: "",
      telephone: "",
      email: "",
      oportunities: {
        RPA: "",
        produtoDigital: "",
        analytics: "",
        BPM: "",
      },
    });
  };

  const handleChange = (event) => {
    setLead({ ...lead, [event.target.name]: event.target.value });
  };

  const addItem = () => {
    const allInputData = {
      id: new Date().getTime().toString(),
      name: lead.name,
    };
    setLeadsCriados([...leadsCriados, allInputData]);
  };

  return (
    <div>
      <button className="buttonAdd" onClick={handleOpen}>
        Novo Lead (+)
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style, width: 500, height: 500 }}>
          <button className="close" onClick={() => handleClose(false)}></button>

          <img className="logo" src={logo} alt="logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="checkbox">
              <CheckBoxOportunities
                lead={lead}
                setLead={setLead}
              ></CheckBoxOportunities>
            </div>
            <TextField
              label="name"
              name="name"
              style={{
                margin: 8,
                marginTop: -110,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 90,
              }}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("name", { required: "O nome é obrigatório" })}
              onChange={handleChange}
              value={lead.name}
            />

            {errors?.name?.type === "required" && (
              <p className="aviso1">Esse campo é obrigatório</p>
            )}

            <TextField
              label="Contato"
              name="telephone"
              type="number"
              style={{
                margin: 8,
                marginTop: -50,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 60,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              {...register("telephone", {
                required: "O telephone é obrigatório",
              })}
              value={lead.telephone}
              onChange={handleChange}
            />

            {errors?.telephone?.type === "required" && (
              <p className="aviso2">Esse campo é obrigatório</p>
            )}

            <TextField
              label="E-mail"
              name="email"
              style={{
                margin: 8,
                marginTop: -35,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 80,
              }}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("email", { required: "O email é obrigatório" })}
              onChange={handleChange}
              value={lead.email}
            />

            {errors?.email?.type === "required" && (
              <p className="aviso3">Esse campo é obrigatório</p>
            )}

            <input className="buttonSaveModal" type="submit" value="salvar" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
