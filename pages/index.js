
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';
import '../styles/Home.scss';

import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../graphql/apollo';
import { JOBS_QUERY } from '../graphql/queries';


const Home = (props) => {
  const { data, loading, error } = useQuery(JOBS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <Layout>
      <p className="title">home page</p>
      <p>Check current bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </Layout>
  )
}

Home.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi

  }
}


export default withApollo(Home);