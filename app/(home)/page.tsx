//route groups는 폴더이름 생성시 ()로 감싸줘야함

import Link from "next/link";

export const metadata = {
    title: 'Home',
};

//next.js fetch 방식
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    return fetch(API_URL).then((res) => res.json());
};

export default async function HomePage(){
    /*react fetch 방식: 프론트에서 api와 통신해서 보안상 문제ㅇ, metadata 사용ㄴ -> next 자체 서버에서 통신하게 하는게 좋음ㅇ 
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const json = await res.json();
        setMovies(json);
        setLoading(false);
    };
    useEffect(()=>{
        getMovies();
    }, []); */
    
    const movies = await getMovies();
    return (
    <div>
        {/* {isLoading ? "Loading..." : JSON.stringify(movies)} */}
        {movies.map((movie)=>(
            <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
        ))}
    </div>
);
};