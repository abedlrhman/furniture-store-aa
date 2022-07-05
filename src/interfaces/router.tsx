import { FunctionComponent, ReactNode } from "react";

export interface PageRouterType {
    
    hasAuth: false;
    layout: FunctionComponent<{children?: ReactNode}>;
    component: FunctionComponent;
    path: string;
}