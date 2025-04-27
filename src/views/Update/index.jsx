import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Update from "../../components/Update";

export default function UpdatePage() {
  const { id } = useParams();

  return (
    <>
      <h1 className="title">Update Question</h1>
      <Suspense fallback={<Loading />}>
        <Update id={id} />
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
