export function LoadingComments() {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;
  return (
    <div className="col-span-4 space-y-4 lg:col-span-1 min-h-screen w-full mt-20">
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />
    </div>
  );
}
