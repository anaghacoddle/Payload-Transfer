import axios from "axios";
import PageTemplate from "./index.client";
import { fetchPage } from '../../_api/fetchPage'

// async function getData() {
//   const res = await axios('http://localhost:3000/api/index')
//   return res;
// }

export default async function Hero() {
  const res = await fetchPage('index');
  return <PageTemplate page={res.data?.docs?.[0]}/>
}