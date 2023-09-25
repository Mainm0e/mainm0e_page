import Image from "next/image";
export default function OnlyContact(props: {name: string, email: string, phone: string, imageUrl: string}){
  return (
    <div className="bg-primary shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <img
        src={props.imageUrl}
        alt={props.name}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">{props.name}</h2>
      <p className="text-gray-600">{props.email}</p>
      <p className="text-gray-600">{props.phone}</p>
    </div>
  );
}
