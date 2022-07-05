import '../styles/globals.css';
import Layout from '../components/Layout';
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [userPosition, setUserPosition] = useState(null);
  const [listCount, setListCount] = useState(7);
  return <>
    <Layout>
      <Component
        {...pageProps}
        userPosition={userPosition}
        setUserPosition={setUserPosition}
        listCount={listCount}
        setListCount={setListCount} />
    </Layout>
  </>
}

export default MyApp;
