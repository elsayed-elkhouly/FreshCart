export default async function getallProduct() {
  const respons = await fetch("http://localhost:3000/api/Product")
  const { data } = await respons.json()
  return data
}