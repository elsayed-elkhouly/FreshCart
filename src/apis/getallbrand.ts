export default async function getAllBrands(){
  const respons = await fetch("https://ecommerce.routemisr.com/api/v1/brands")
  const { data } = await respons.json()
  return data
}