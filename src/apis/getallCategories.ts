export default async function getAllCategories(){
  const respons = await fetch("https://ecommerce.routemisr.com/api/v1/categories")
  const { data } = await respons.json()
  return data
}
