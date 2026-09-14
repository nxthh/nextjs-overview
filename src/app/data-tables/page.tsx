/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { columns, ProductType} from "./columns"
import { DataTable } from "./data-table"
import useSWR from 'swr'

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//    {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     }
//   ]
// }

const fetcher = (url:string) => fetch(url).
then((r) => r.json())
// .then((data:ProductType[]) => data)

export default  function ProductDataTable() {

  const {data, error, isLoading} = useSWR(
    'https://fakestoreapi.com/products',
    fetcher );
  
    if(isLoading) return <h1>Loading....</h1>
    if(error) return <h2>Server Error</h2>

  return (
    <div className="container mx-auto py-10">
      <DataTable 
      columns={columns} 
      data={data} />
    </div>
  )
}