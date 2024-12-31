"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps{
  title: string;
  poster_path: string;
  id: string;
};
export default function Movie({title, poster_path, id}: IMovieProps){
  const router = useRouter();
  const onClick = ()=>{
    router.push(`/movies/${id}`);
  }
  return(
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick}></img>
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
      {/* prefetch시 next가 자동으로 데이터 패치ㅇ */}
    </div>
  );
}