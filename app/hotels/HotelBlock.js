
"use client";
import Image from "next/image";

export default function HotelBlock({index, name, capacity }) {
   
  
  return (
    <tr className="hover:bg-slate-700 transition-colors duration-200">
      <td className="px-6 py-4 text-slate-100 font-medium border-b border-slate-600">
        {name}
      </td>
       <td className="px-6 py-4 text-slate-100 font-medium border-b border-slate-600">
        <Image  src={`/hotels/hotel${index + 1}.jpg`} width={300} height={300} alt="missing me"/>
      </td>
      <td className="px-6 py-4 text-slate-300 border-b border-slate-600">
        {capacity}
      </td>
    </tr>
  );
}