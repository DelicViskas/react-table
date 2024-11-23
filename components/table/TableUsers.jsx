import useSWR from 'swr';
import { config, fetcher, sortByTd } from '@/components/config/config'
import THead from './THead';
import TBody from './TBody';
import { useMemo, useState } from 'react';

export default function TableUsers() {
  const
    [searchValue, setSearchValue] = useState(''),
    [nameSortCol, setNameSortCol] = useState(null),
    [reverse, setReverse] = useState(false),
    { data } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher, { revalidateOnFocus: false }),
    sorteredAndFilteredData = useMemo(() => {
      if (data) {
        const usersList = []; // Здесь создаем новый массив users, для дальнейшего поиска по видимым полям
        data.map(user => {
          const rowObj = {};
          usersList.push(rowObj);
          config.columns.map(({ title, content }) => rowObj[title] = content(user))
        })

        return usersList
          .sort(sortByTd(nameSortCol, reverse))
          .filter(row => {
            if (!searchValue.length) return true;
            for (const key in row) {
              if (row[key]?.includes?.(searchValue)) return true;
            }
            return false;
          });
      }
    }, [data, nameSortCol, searchValue, reverse]),
    onClick = event => {
      const
        action = event.target.closest('[data-action]')?.dataset?.action;
      if (!action) return
      switch (action) {
        case 'sorted':
          const
            col = event.target.closest('[data-col]')?.dataset?.col;
          if (col === nameSortCol)
            setReverse(prev => !prev);
          setNameSortCol(col);
          return;
      }
    };

  return <>
    {sorteredAndFilteredData &&
      <>
        <input value={searchValue} onChange={event => setSearchValue(event.target.value)} />
        <table onClick={onClick}>
          <THead config={config} />
          <TBody data={sorteredAndFilteredData}/>
        </table>
      </>
    }
  </>
}


