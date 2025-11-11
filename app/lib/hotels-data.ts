


export async function getHotelsData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  if (!res.ok) throw new Error("Failed to fetch hotel data");
  return res.json();
}