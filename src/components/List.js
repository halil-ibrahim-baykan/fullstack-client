import React from "react";
import CreateItemContainer from "./CreateItemContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";

export default function List(props) {
  return (
    <div>
      {!props.seller && (
        <div>
          <LoginFormContainer />
          <SignUpFormContainer />
        </div>
      )}
      {props.seller && <CreateItemContainer />}
      {props.items.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img alt={item.title} src={item.url} />
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

// const items = props.items.map(item => (
//   <div key={item.url}>
//     <h3>{item.title}</h3>
//     <img src={item.url} alt={item.title} />
//     <p>{item.description}</p>
//     <p>{item.price}</p>
//   </div>
// ));

// const form = props.seller ? <CreateItemContainer /> : <LoginFormContainer />;

// return (
//   <div>
//     {form}
//     {items}
//   </div>
// );
