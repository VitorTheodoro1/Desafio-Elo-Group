import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CheckBoxOportunities({ lead, setLead }) {
  const [checked, setChecked] = React.useState([false, false, false, false]);

  const handleChange1 = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
    if (lead.oportunities.RPA === "X") {
      setLead({
        ...lead,
        oportunities: { ...lead.oportunities, [event.target.name]: "" },
      });
    } else {
      setLead({
        ...lead,
        oportunities: {
          ...lead.oportunities,
          [event.target.name]: "X",
        },
      });
    }
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
    if (lead.oportunities.produtoDigital === "X") {
      setLead({
        ...lead,
        oportunities: { ...lead.oportunities, [event.target.name]: "" },
      });
    } else {
      setLead({
        ...lead,
        oportunities: {
          ...lead.oportunities,
          [event.target.name]: "X",
        },
      });
    }
  };

  const handleChange4 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
    if (lead.oportunities.analytics === "X") {
      setLead({
        ...lead,
        oportunities: { ...lead.oportunities, [event.target.name]: "" },
      });
    } else {
      setLead({
        ...lead,
        oportunities: {
          ...lead.oportunities,
          [event.target.name]: "X",
        },
      });
    }
  };

  const handleChange5 = (event) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
    if (lead.oportunities.BPM === "X") {
      setLead({
        ...lead,
        oportunities: { ...lead.oportunities, [event.target.name]: "" },
      });
    } else {
      setLead({
        ...lead,
        oportunities: {
          ...lead.oportunities,
          [event.target.name]: "X",
        },
      });
    }
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        name="RPA"
        label="RPA"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        name="produtoDigital"
        label="Produto Digital"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        name="analytics"
        label="Analytics"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
      <FormControlLabel
        name="BPM"
        label="BPM"
        control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Oportunidades"
        control={
          <Checkbox
            checked={checked[0] && checked[1] && checked[2] && checked[3]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
