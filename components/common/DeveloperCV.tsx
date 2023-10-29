export default function DeveloperCv(props: {
  key: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  image: string;
  linkedin: string;
  github: string;
}) {
  /*  <div className=""
        key={props.key}>
        <div className="">
            <img
            src={props.image}
            alt={props.name}
            className=""
            />
       
        </div>
        </div> */
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{props.name}</h2>
        <p className="text-gray-600">{`${props.firstName} ${props.lastName}`}</p>
        <p className="text-gray-600">{props.email}</p>
        <p className="text-gray-600">{props.phone}</p>
        <p className="text-gray-600">{props.description}</p>
        <div className="mt-4 flex justify-between">
          <a
            href={props.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
