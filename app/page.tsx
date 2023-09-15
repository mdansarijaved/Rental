import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
interface SearchParams {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}
export default async function Home( {searchParams}:{searchParams:SearchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit ||15,
    model: searchParams.model || '',
  });
  // console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars</p>
        </div>
        <div className="home__filter">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='Fuel' options={fuels} />
            <CustomFilter title='Year' options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <div key={car.id}>

                <CarCard car={car} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h3 className="text-black text-xl font-bold">
              Sorry no cars for now!
            </h3>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
