export default async function getSinglePost(id:string){
const respons=  await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
const {data} =await respons.json()
return data
}