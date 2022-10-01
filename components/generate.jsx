/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import {HiDownload} from 'react-icons/hi';
import {useRef } from "react";
import html2canvas from "html2canvas";
import useData, {cand} from "../utils/useData";

export default function Generate({details}) {

    const [data, changeData] = useData();

    const node = useRef()

    const onButtonClick = () => {
        html2canvas(node.current).then(canvas => {
            let a = document.createElement('a');
            a.download = 'my-download.png';
            a.href = canvas.toDataURL("image/png");
            a.click();
        });
    }

    return (
        <>
            <div className="flex flex-col items-center p-5">
                <label htmlFor="cand" className="font-semibold">Candidate</label>
                <select onChange={changeData} id="cand" className="px-3 py-2 rounded">
                    {cand.map(el => (
                        <option key={el.id} value={el.id}>{el.username}</option>
                    ))}    
                </select>
            </div>
            <div ref={node} className="w-[700px] p-5 bg-sky-200 mx-auto my-10">
                <div className="relative w-full h-full mx-auto flex flex-col rounded-lg bg-white space-y-3 overflow-hidden">

                    <div className="p-5">
                        <div className="absolute w-full h-full overflow-hidden opacity-10">
                            <Image src="/bat.jpeg" layout="fill" className="object-cover" />
                        </div>
                        <div className="flex items-start justify-between z-50">
                        <div className="flex items-center">
                            <Image src="/logo.png" width="100" height={100} />
                            <h1 className="text-xl uppercase font-black leading-6">
                                <p className="text-green-500">{data.candidate}</p>
                                <p className="text-red-500">{data.name}</p>
                                <p className="text-blue-500">movement</p>
                            </h1>
                        </div>
                            <Image src="/apc-logo.jpeg" width="150" height={80} />

                        </div>


                        <div className="flex-grow z-50 relative -top-5">
                            <div className="relative p-5 border-2 border-dashed w-[400px] h-[400px] mx-auto rounded-full bg-gray-100 shadow overflow-hidden">
                                <Image src={URL.createObjectURL(details?.avatar)} layout="fill" />
                            </div>
                            <div className="relative -top-5">
                                <p className="font-semibold relative left-24 inline-flex items-center justify-center bg-black text-white pb-5 tracking-widest p-1 uppercase">
                                    My name is
                                </p>
                                <h1 className="capitalize font-semibold text-red-500 text-center text-4xl">{details?.name}</h1>

                                <h3 className="text-center uppercase tracking-widest font-bold py-2 mt-3">i will vote</h3>
                                <h3 className="text-center text-2xl uppercase font-black">
                                    <span className="bg-green-500 px-2 text-white pb-5">
                                        {data.candidate}/{data.vice}
                                    </span>
                                </h3>
                                <div className="text-center pt-2">
                                    <p className="font-black">As</p>
                                    <h1 className="text-3xl font-black">Governor/Deputy</h1>
                                </div>
                                <p className="text-center text-xl text-zinc-500 font-medium">
                                    Their <span className="text-red-500">commitment</span> to the <span className="text-blue-500">People</span> and the <span className="text-green-500">Nation</span> is how <span className="text-green-500">Nigeria</span> works!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 absolute bottom-0 w-full opacity-70">
                        <div className="skew-x-12 p-2 bg-green-500" />
                        <div className="skew-x-12 p-2 bg-red-500" />
                        <div className="skew-x-12 p-2 bg-blue-500" />
                    </div>
                </div>
            </div>

             <button onClick={onButtonClick} className="fixed bottom-5 right-5 animate-bounce p-5 bg-green-400 rounded-full text-white">
                <HiDownload className=" text-lg md:text-2xl" />
            </button>
        </>
    )
}