interface Fields {
  name: string;
  label: string;
}

export default function CvTemplate(prom: {
  image: string;
  description: string;
  usage: string;
  requirements: Fields[];
}) {
  return (
    <div className="container pt-16">
      <div className="bg-accent flex md:flex-row flex-col  border-4 border-primary shadow-lg justify-center ">
        <div className="bg-primary md:w-1/3  ">
          <img src={prom.image} alt={prom.description} className="p-4" />
        </div>
        <div className="md:w-1/3 flex flex-col p-4 md:p-6">
          <h2 className="text-xl font-semibold">{prom.description}</h2>
          <p className="text-gray-600 text-sm">{prom.usage}</p>
        </div>
        <div className="md:w-1/3  p-4 md:p-6">
          <h2 className="text-xl font-semibold">Requirements</h2>
          <ul className="mt-4">
            {prom.requirements.map((field) => (
              <li key={field.name} className="list-disc ml-4">
                {field.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
        <div className="">
          <button className="btn btn-primary">Use this template</button>
        </div>
    </div>
  );
}
