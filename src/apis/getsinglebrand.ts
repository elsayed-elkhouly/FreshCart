export default async function getSinglebrand(id:string){
const respons=  await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
const {data} =await respons.json()
return data
}