import { API_URL } from "../app/(home)/page";

async function getVideos(id: string){
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
};

export default async function MovieVideos({id}: {id: string}) {
  const videos = await getVideos(id);
  return (
    <h6>
      {JSON.stringify(videos)}
    </h6>
  );
}