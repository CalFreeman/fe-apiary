import { useEffect, useState } from 'react'

export default function AllFarms({ farms }) {
const[reactData, setReactData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/farms')
    .then(res => res.json())
    .then(data => {
      setReactData(data);
    }).catch((e) => {console.log(e)});
  }, []);

  return (
    <table>
      <tr>
        <th colSpan='3' className='topnav'>Rendered By Next JS | Server side rendered</th>
      </tr>
      {farms?.map((farm, index) => (
        <tr>
          <td>{farm.name}</td>
          <td>{farm.location}</td>
        </tr>
      ))}
    </table>
  )
}
export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  console.log('Logging : '+res);
  const data = await fetch('http://localhost:8080/api/farms');
  const farms = await data.json();

  const result = Object.values(farms);
  if (!result) {
    return {notFound: true,}
  }  
  return { props: { result } }
}