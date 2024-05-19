import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className=" max-w-7xl mx-auto py-20">{children}</div>
    </section>
  );
}
