import type { ReactNode } from "react";

type AnimatedListProps = {
  items: ReactNode[];
  startDelay?: number;
};

export function AnimatedList({
  items,
  startDelay = 0.2,
}: AnimatedListProps) {
  return (
    <ul className="bullet-list">
      {items.map((item, index) => (
        <li
          key={index}
          className="bullet-item"
          style={{ animationDelay: `${startDelay + index * 0.2}s` }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
