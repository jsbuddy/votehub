import Head from 'next/head';
import { FaPlus } from 'react-icons/fa';
import { IconButton } from '../../components/Button';
import Link from 'next/link';
import Wrapper from '../../components/Wrapper';
import { withAuth } from '../../components/withAuth';

const Admin = () => {
    return (
        <>
            <Head>
                <title>Manage Competitions</title>
            </Head>
            <Wrapper>
                <div className="title">
                    Manage Competitions
                        <div className="buttons">
                        <span>
                            <Link href="/competitions/new">
                                <IconButton icon={<FaPlus />} className="rounded" onClick={() => { }}></IconButton>
                            </Link>
                        </span>
                    </div>
                </div>
            </Wrapper>
            <style scoped jsx>{`
                .title {
                    color: steelblue;
                    margin-bottom: 5px;
                    font-weight: 600;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            `}</style>
        </>
    )
};

export default withAuth(Admin);