import React from "react";
import ListBank from "./ListBankItem";

const CustomList = (props) => {
  const { type, colorBack } = props;
  switch (type.toLowerCase()) {
    case "list-bank":
      return <ListBank colorBack={colorBack} />;
      break;

    default:
      return null;
      break;
  }
};

export default CustomList;
