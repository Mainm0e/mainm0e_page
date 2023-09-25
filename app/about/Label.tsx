export default function Label(props: { label: string; value: string }) {
  return (
<div className="max-w-4xl mx-auto bg-neutral p-6 rounded-lg shadow-lg max-sm:flex max-sm:flex-col max-sm:items-center">
    <span className="text-primary">{props.label}</span>
    <span className="text-primary font-semibold">{props.value}</span>
</div>

  );
}