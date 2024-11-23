import TableUsers from "@/components/table/TableUsers";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Table users</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <TableUsers />
      </main>
    </>
  );
}
