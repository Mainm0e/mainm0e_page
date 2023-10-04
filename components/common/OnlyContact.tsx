import Image from "next/image";
export default function OnlyContact(props: {name: string, email: string, phone: string, imageUrl: string}){
  return (
    <div className="bg-accent shadow-xl rounded-lg p-6 max-w-sm mx-auto flex flex-col justify-center items-center">
      <img
        src={props.imageUrl}
        alt={props.name}
        className="w-32 h-32 rounded-full mx-auto border-2 border-primary shadow-sm"
      />
      <h2 className="text-2xl font-semibold text-text-label mt-4 justify-center">{props.name}</h2>
      <p className="text-text-neutral">{props.email}</p>
   {/*    <p className="text-text-neutral">{props.phone}</p> */}
    </div>
  );
}
