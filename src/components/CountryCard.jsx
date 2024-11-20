import { countryList } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import CountryHeader from "./CountryHeader";

export default function CountryCard() {
  const [search, setSearch] = useState("");

  const results = countryList.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <CountryHeader />
      <div className="w-full h-full container mx-auto my-4 mt-20">
        <div className="flex justify-between py-10 md:px-0 px-4 relative">
          <div>
            <CiSearch
              className="absolute top-[54px] md:left-6 left-10"
              size={22}
            />
            <input
              type="text"
              className=" hover:border-purple-200 border px-10 md:w-96 w-64 rounded-md py-3 outline-none ml-3 placeholder-gray-500"
              placeholder="Search for a country"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid relative lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20 md:px-3 px-8">
          {results.map((country) => {
            return (
              <div
                key={country.name}
                className="bg-white shadow-md animate-fadeIn  text-black"
              >
                <Link href={`/countries/${country.name}`}>
                  <img
                    src={country.flag}
                    className="w-fit"
                    alt={country.name}
                  />
                  <div className="p-4">
                    <h1 className="mb-2 text-xl font-semibold">
                      {country.name}
                    </h1>
                    <p>
                      <span className="font-bold">population: </span>
                      {country.population}
                    </p>
                    <p>
                      <span className="font-bold">region: </span>
                      {country.region}
                    </p>
                    <p>
                      <span className="font-bold">capital: </span>
                      {country.capital}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
