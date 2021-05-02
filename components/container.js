import Head from "next/head";
import Navi from "./navigation";
const container = ({children,title="Agenda"}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/superhero/bootstrap.min.css"/>
            </Head>
            <Navi></Navi>
            <div className="container p-4">
                {children}
            </div>
        </div>
    )
}

export default container
