export default function THead({ config }) {
  return (
  <thead>
    <tr>
      {config.columns.map(col => <td key={col.title} data-action={'sorted'} data-col={col.title}>{col.title}</td>)}
    </tr>
  </thead>)
}