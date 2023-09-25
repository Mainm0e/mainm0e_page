export default function Label(props: { label: string; value: string ; size_w?: string}) {
  return (
<div className="max-w-7xl mx-auto bg-neutral p-6 rounded-lg shadow-lg max-sm:flex max-sm:flex-col max-sm:items-center">
    <span className="text-primary">{props.label}</span>
    <span className="text-primary font-semibold">{props.value}</span>
</div>

  );
}