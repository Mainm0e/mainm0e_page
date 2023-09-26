export default function Label(props: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="w-full mx-auto bg-neutral p-6 rounded-lg shadow-lg max-sm:flex max-sm:flex-col max-sm:items-center">
      <span className="text-primary">{props.label}</span>
      <span className="text-primary font-semibold">
        {props.value} <i className={props.icon}></i>
      </span>
    </div>
  );
}
