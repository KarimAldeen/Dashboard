import Body from "@/Components/users/Body"

const  page = async () => {
    const response = await fetch('https://64df594871c3335b25827869.mockapi.io/users',
    {cache:"no-cache",next:{tags:["users"]} });
    const data :any = await response.json();
  
  return (
  <Body  data={data}/>

  )
}

export default page