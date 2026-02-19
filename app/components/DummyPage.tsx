type DummyPageProps = {
  title: string;
  description?: string;
};

export default function DummyPage({ title, description }: DummyPageProps) {
  return (
    <div className="card">
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">
        {description ?? "This is a placeholder page for future content."}
      </p>
    </div>
  );
}
