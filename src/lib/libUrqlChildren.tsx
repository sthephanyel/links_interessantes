'use client'
import { ReactNode } from "react";
import { Provider } from "urql";
import { client } from "./urql";

  type libUrqlChildrenProps = {
    children: ReactNode;
  }



export function LibUrqlChildren(props: libUrqlChildrenProps){

    return(
        <Provider value={client}>
            {props.children}
        </Provider>
    );
}