export const config = {
  columns: [
    {title: 'id', content: ({id}) => id},
    {title: 'name', content: ({name}) => name},
    {title: 'email', content: ({email}) => email},
    {title: 'address', content: ({address}) => address.city},
    {title: 'phone', content: ({phone}) => phone},
    {title: 'website', content: ({website}) => website},
    {title: 'company', content: ({company}) => company.name},
  ]
}

export function sortByTd(nameSortCol, reverse) {
  if(!nameSortCol)
    return
  
  if(nameSortCol === 'id') 
    return (a,b) => reverse? b[nameSortCol] - a[nameSortCol] : a[nameSortCol] - b[nameSortCol];

  if(reverse) 
    return (a, b) =>  b[nameSortCol].localeCompare(a[nameSortCol]);
  
  return (a, b) => a[nameSortCol].localeCompare(b[nameSortCol]);
}

export async function fetcher(url) {
  console.log(url);
  
    const 
      response = await fetch(url);
    if (!response.ok) throw new Error('fetch' + response.status);
    return await response.json();
}