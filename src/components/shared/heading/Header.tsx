export default function Header({ children }: { children: string }) {
  return (
    <div className=" flex items-center gap-4 mb-5">
      <h1 className=" text-2xl font-bold">{children}</h1>
      <div className=" h-[2px] w-1/12 bg-info "></div>
    </div>
  );
}
