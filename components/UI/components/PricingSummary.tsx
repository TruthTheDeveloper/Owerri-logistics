import type {NextPage} from 'next';

const PricingSummary:NextPage = () => {
     return (
        <div className="mt-10  border lg:mx-14 xl:mx-24 2xl:mx-36 shadow-lg rounded-md">
            <div className=" my-4 border-slate-400 border-b shadow-md">
                <h1 className="ml-4 mb-2 text-center">Pricing</h1>
            </div>
            <div className="flex flex-col mx-8">
                <div className="flex justify-between">
                    <p>Main Charge</p>
                    <p>#1,220,00</p>
                </div>
                <div className="flex justify-between">
                    <p>Total</p>
                    <p>#1,220,00</p>
                </div>
                <div className="flex justify-between text-red-600">
                    <p>Wallet Balance</p>
                    <p>#0.00</p>
                </div>
            </div>
        </div>
     )
}

export default PricingSummary