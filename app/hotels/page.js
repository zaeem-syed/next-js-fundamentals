// import { getHotelsData } from "../mountain/page";
import HotelBlock from "./HotelBlock";
import { getHotelsData } from "@/app/lib/hotels-data";

export default async function Page() {
  const data = await getHotelsData();

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-100 mb-6 text-center">
          Luxury Hotels
        </h1>

        <div className="overflow-x-auto rounded-2xl shadow-lg border border-slate-700">
          <table className="min-w-full border-collapse">
            <thead className="bg-slate-800 text-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b border-slate-700">
                  Hotel Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b border-slate-700">
                  Hotel Capacity
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((hotel, index) => (
                <HotelBlock
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  capacity={hotel.capacity}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
