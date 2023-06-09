import Head from "next/head";
import Home from "./home";
import axios from "axios";


export default function Index({categoryList,productList}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
       
      </Head>
      <> 
        <Home categoryList={categoryList} productList={productList}/>
      </>
    </div>
  );
}

export const getServerSideProps = async () =>{

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`);
  const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
  return{
    props:{
      categoryList : res.data ? res.data : [],
      productList : products.data ? products.data : [],
    
    }
  }
}
 