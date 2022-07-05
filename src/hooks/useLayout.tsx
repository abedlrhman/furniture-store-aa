import { FunctionComponent, ReactNode } from "react"
import MainLayout from "../layout/MainLayout"



export const useLayout: ( layout: string ) => FunctionComponent<{children?: ReactNode}> = function ( layout )
{

    switch (layout) {
        case "mainLayout":
            
            return MainLayout
    
        default:
            return MainLayout
    }
}