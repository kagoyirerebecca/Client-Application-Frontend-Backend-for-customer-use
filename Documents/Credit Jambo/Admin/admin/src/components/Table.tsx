interface TableProps {
  headers: string[];
  data: any[];
}

export const Table = ({ headers, data }: TableProps) => (
  <table className="w-full table-auto border-collapse border border-gray-300">
    <thead className="bg-brandGreen text-white">
      <tr>
        {headers.map((header) => (
          <th key={header} className="p-2 text-left">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx} className="hover:bg-gray-100">
          {headers.map((header) => (
            <td key={header} className="p-2 border-b border-gray-200 text-brandBlack">
              {row[header.toLowerCase().replace(/ /g, "_")]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
