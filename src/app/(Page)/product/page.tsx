import Body from './Body/Body'
import GetWithSearch from '@/api/GetWithSearch'

const page = async ({ searchParams}:{searchParams:any} ) => {
    const Search = {id:searchParams?.postId}
  // const Data = await Get("posts")    

   const Data = await GetWithSearch("posts",Search)
   return (
  <>
   <Body data={Data}/>
  </>
  )
}

export default page