function Title({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="w-full px-5 py-2 text-center">
      <h1 className="font-title text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h1>
      <p className="mt-1 text-xs md:text-sm">{subtitle}</p>
    </div>
  );
}

export default Title;
