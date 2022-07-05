import Header from '@components/base/Header';
import React from 'react'
import { useLayout } from '../hooks/useLayout'

type Props = {}

const Home = ( props: Props ) =>
{

    const Layout = useLayout( "mainLayout" )

    return (
        <div>
            <Layout>
               <Header/>
            </Layout>

        </div>
    )
}

export default Home