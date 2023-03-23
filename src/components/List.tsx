import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export default function List<T extends {}>({ items, render }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, i: number) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
}
