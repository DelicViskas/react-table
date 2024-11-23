export default function TBody({ data }) {

  return (
    <tbody>
      {data.map(user => {
        return <tr key={user.id} data-id={user.id}>
          {Object.keys(user).map(key => {
            return <td key={key}>{user[key]}</td>;
          })}
        </tr>
      })}
    </tbody>
  )
}



