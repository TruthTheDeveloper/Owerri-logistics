import type { NextPage } from 'next';
import bike from '../../public/assets/bike.svg'


const TrackItem: NextPage = () => {
  return (
      <div className="flex justify-center mt-16 ">
          <div className="flex  w-10/12">
            <input className="h-16  w-full placeholder:text-xl placeholder:pl-12 border-slate-400 outline-none border pl-4 " placeholder="Track ID" />
            <button className="px-8  text bg-green-400 font-semibold text-white">Track</button>
          </div>
      </div>
  )
}

export default TrackItem;
