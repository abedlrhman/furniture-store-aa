import React, { ReactNode } from 'react'
import Header from "@layout/Header"
import { Outlet } from 'react-router-dom';

type Props = {
    children?: ReactNode;

}

function MainLayout ( { children }: Props )
{

    return (
        <div>

            <Header />

            <Outlet />

            <footer>
                main layout footer
            </footer>

        </div>
    )
}

export default MainLayout