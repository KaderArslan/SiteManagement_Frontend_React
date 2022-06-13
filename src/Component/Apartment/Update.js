import React, { useState } from "react";

import ApartmentForm from "./ApartmentForm";
import OpenDialog from "../Table/OpenDialog";

function Update({ editApartment, apartment }) {
  const [open, setOpen] = useState(false);

  return (
    <OpenDialog btnText="Edit" open={open} setOpen={setOpen}>
      <ApartmentForm setOpen={setOpen} editApartment={editApartment} oldApartment={apartment} />
    </OpenDialog>
  );
}

export default Update;
