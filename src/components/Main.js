import React from "react";
import {List} from "./List";

export function Main(props) {
  return <section className="main">
    <input className="toggle-all"
           type="checkbox"/>
    <List items={props.items} actions={props.actions}/>
  </section>;
}
