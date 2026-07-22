export default function Graph() {
  const bars = [
    { h: "40%", c: "bg-blue-300" },
    { h: "55%", c: "bg-blue-400" },
    { h: "35%", c: "bg-blue-500" },
    { h: "80%", c: "bg-blue-600" },
    { h: "30%", c: "bg-blue-300" },
    { h: "15%", c: "bg-blue-400" },
    { h: "90%", c: "bg-blue-500" },
    { h: "65%", c: "bg-blue-600" },
    { h: "75%", c: "bg-blue-300" },
    { h: "50%", c: "bg-blue-400" },
  ];

  return (
    <div className="relative flex h-48 w-fit items-end gap-2 border-l-2 border-b-2 border-neutral-300 pl-3 pb-3">
      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pl-3 pb-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="border-t border-dashed border-neutral-200"
          />
        ))}
      </div>

      {/* Bars */}
      {bars.map((bar, index) => (
        <div
          key={index}
          style={{ height: bar.h }}
          className={`${bar.c} relative z-10 w-4 rounded-t-md transition-all duration-300 hover:-translate-y-1 hover:brightness-110`}
        />
      ))}
    </div>
  );
}