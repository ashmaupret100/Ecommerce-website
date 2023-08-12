import React from "react";

function Button(props: any) {
  return (
    <div>
      <button name="primary">{props.children}</button>
      <button name="secondary">{props.children}</button>
      <button name="tertiary">{props.children}</button>
    </div>
  );
}

export default Button;
