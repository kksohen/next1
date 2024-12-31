//[]는 다이나믹 라우팅ㅇ
//props는 params, searchParams를 가짐ㅇ
import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: {
    id: string;
  };
};

/* 다이나믹 라우팅에 맞추어야 하는 동적인 타이틀 가능하게 해주는 함수 */
export async function generateMetadata({params: {id}}: IParams) {
  const movie = await getMovie(id);
  return {
  title: movie.title,
  };
};

export default async function MovieDetail({params: {id}}: IParams) {
    /* 병렬적으로 데이터 패치할 것ㅇ 
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    */
    /* 2개 이상 데이터 패치 시 컴포넌트에 각 파일 만들어서 개별적으로 패치ㅇ, react 서스펜스 활용해서 로딩메시지 띄울 것  */
    
    return (
      <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id}/>
        </Suspense>
      </div>
    );
};