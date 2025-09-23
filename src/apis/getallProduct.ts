export default async function getallProduct() {
  const respons = await fetch("https://ecommerce.routemisr.com/api/v1/Product")
  const { data } = await respons.json()
  return data
}