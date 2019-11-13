import React from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

export default function List(props) {
  const items = props.items.map(item => (
    <div key={item.url}>
      <h3>{image.title}</h3>
      <img src={image.url} alt={image.title} />
    </div>
  ));

  const form = props.seller ? <CreateItemContainer /> : <LoginFormContainer />;

  return (
    <div>
      {form}
      {images}
    </div>
  );
}
