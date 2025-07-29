'use client'
// import App from "@/components/app/page"
import { useParams } from "next/navigation"
import PageUser from "../page1/page"


export default function id() {
    const {id} = useParams()
    const idParams = id ? id : ''
return(
    <section>
        {/* <App id={idParams}  /> */}
        <PageUser id={idParams} />
    </section>
)    
}