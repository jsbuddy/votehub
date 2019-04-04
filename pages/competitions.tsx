import Layout from "../components/Layout";
import { Fragment } from "react";

export default () => {
    return (
        <Layout>
            <Competition />
        </Layout>
    );
}

function Competition() {
    return (
        <Fragment>
            <div className="Competition">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cumque.
            </div>
            <style scoped jsx>{`
                .Competition {
                    background: #fff;
                    border-radius: 4px;
                    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .1);
                    padding: 2rem;
                    margin-bottom: 20px;
                }
            `}</style>
        </Fragment>
    )
}
