import {useEffect, useState} from 'react';

const Content = () => {

  const [data, setData] = useState<any>(null)

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('/api/catalog.json')
      const data = await res.json()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <div className='sidebar'>
        <ul>
          {
            data && data.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <a href='./'>{item.name}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default Content;
