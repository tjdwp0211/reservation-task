export default async function getReservationList() {
  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const { reservations } = await fetch(
      "https://frontend.tabling.co.kr/v1/store/9533/reservations",
      config
    ).then((res) => res.json());
    return await reservations;
  } catch (err) {
    return err;
  }
}
