import { FunctionComponent, ReactNode } from "react";

export interface PageRouterType {
    
    hasAuth: false;
    layout: FunctionComponent;
    component: FunctionComponent;
    path: string;
}