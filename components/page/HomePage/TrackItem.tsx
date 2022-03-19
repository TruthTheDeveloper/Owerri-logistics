import type { NextPage } from 'next';


const TrackItem: NextPage = () => {
  return (
      <div className="flex justify-center mt-16 ">
          <div className="flex  w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12 ">
            <input className="h-16  w-full placeholder:text-xl rounded-sm placeholder:pl-4 border-slate-400 outline-none border pl-4 " placeholder="Track ID" />
            <button className="px-8 lg:text-xl rounded-sm text bg-green-400 font-semibold text-white">Track</button>
          </div>
      </div>
  )
}

export default TrackItem;
