import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import CountryHeader from "./CountryHeader";
import Link from "next/link";
import { countryList } from "@/lib/data";

export default function CountryInfo() {
  const router = useRouter();
  const { country } = router.query;

  const countryData = countryList.find((c) => c.name === country);
  if (!countryData) return <div>Country not found!</div>;

  return (
    <>
      <CountryHeader />
      <div className="min-h-screen max-w-6xl mx-auto py-12 mt-12">
        <Link
          href="/"
          className="flex md:flex-row flex-col items-center gap-2 bg-white w-fit px-6 py-2 shadow-gray-300 shadow my-8"
        >
          <IoArrowBackOutline size={20} />
          <button>Back</button>
        </Link>
        <div className="flex md:flex-row flex-col px-4 gap-10">
          <img src={countryData.flag} alt={countryData.name} width={400} />
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-3">{countryData.name}</h1>
            <div className="mb-6">
              <p>Capital: {countryData.capital}</p>
              <p>Population: {countryData.population}</p>
              <p>Region : {countryData.region}</p>
              <p>Sub Region: {countryData.subregion}</p>
            </div>

            <p>Native Name: {countryData.nativeName}</p>
            <p>Time Zones: {countryData.timezones}</p>
            <p>Area: {countryData.area}</p>
            <p>Demonym: {countryData.demonym}</p>
          </div>
        </div>
      </div>
    </>
  );
}
