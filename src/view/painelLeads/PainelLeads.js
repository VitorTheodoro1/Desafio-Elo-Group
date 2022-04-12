import Painel from "../../components/painel/Painel";
import ModalAdd from "../../components/modal/Modal";
import { LeadsController } from "../../services/LeadsService";
import { useEffect } from "react";
import * as React from "react";
import "./PainelLeads.css";
import logo from "../../imagens/logo.jpg";

function PainelLeads() {
  const leadsController = new LeadsController();
  const [leadsCriados, setLeadsCriados] = React.useState(leadsController.get());

  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leadsCriados));
  }, [leadsCriados]);

  return (
    <div className={"div0"}>
      <img src={logo} alt="logo" />
      <div className="paineldeLeads">Painel de Leads</div>
      <div className="AddButton">
        <ModalAdd
          leadsCriados={leadsCriados}
          setLeadsCriados={setLeadsCriados}
        ></ModalAdd>
      </div>
      <Painel></Painel>
    </div>
  );
}

export default PainelLeads;
