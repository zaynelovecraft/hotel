import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { supabase } from "../utils/supabase-client";



function admindashboard() {
    const router = useRouter();
    const [admin,setAdmin] = useState(false)

    const isadmin = async() => {
        let {data, error} = await supabase
        .from('is_admin')
        .select('*')
        console.log(data)
        if(data[0]?.admin === undefined) {
         router.replace('/signin')
        }
        if(data[0]?.admin === true) {
            setAdmin(true)
        }
      }

    useEffect(() => {
        isadmin()
    },[])  

    
  return (
      <div>

          {admin === true && (
    
              <div>admindashboard</div>
          ) }
      </div>
  )
}




export default admindashboard