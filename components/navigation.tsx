"use client"; //기본적으로 next는 server(backend)로 render되며 그 후 hydrate됨 -> 그러므로 interactive components(hydrate될 것: javascript, react event, use... 등) 사용 시 use client 선언해줘야ㅇ

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🐻" : ""}
        </li>
        <li>
          <Link href="/about">About</Link>{path === "/about" ? "🐻" : ""}
        </li>
      </ul>
    </nav>
  );
}