import { Suspense } from "react";
import { Await } from "react-router-dom";
import CuisineItem from "./CuisineItem";
import SkeletonLoading from "./SkeletonLoading";
import { useSelector } from "react-redux";

export default function CuisineList({ cuisines }) {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto ${
        !theme && "text-white"
      }`}
    >
      <Await resolve={cuisines}>
        {(cuisines) =>
          cuisines.length > 0 ? (
            cuisines.map((cuisine) => (
              <CuisineItem key={cuisine.id} cuisine={cuisine} />
            ))
          ) : (
            <>
              <SkeletonLoading count={10} />
            </>
          )
        }
      </Await>
    </div>
  );
}
