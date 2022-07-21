export const getData = async () => {
  const resp = await fetch("/data.json");
  const data = await resp.json();
  return data;
};
