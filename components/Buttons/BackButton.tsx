import type { NextPage } from 'next';
import { useRouter } from 'next/router';



const BackButton:NextPage = () => {
    const router = useRouter()
    return  <div className="pb-8 mx-4">
                    <button className="bg-white rounded-md flex  mx-auto shadow-lg border border-slate-400 px-8 py-2" onClick={() => router.back()}>Back</button>
            </div>
}
export default BackButton;