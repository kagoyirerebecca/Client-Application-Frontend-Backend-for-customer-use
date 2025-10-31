interface CardProps {
  title: string;
  value: string | number;
}

export const Card = ({ title, value }: CardProps) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start border-l-4 border-brandGreen">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-2xl font-bold mt-2 text-brandBlack">{value}</p>
  </div>
);
