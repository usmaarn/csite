/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useRef, useState } from "react"

export default function ImageUpload({onChange}){

    const [image, setImage] = useState(null);
    const inputRef = useRef();

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
            onChange && onChange(e.target.files[0])
        }
    }

    return (
        <div className="">
            <div onClick={() => inputRef.current.click()} 
                className="w-64 h-64 rounded-full border mx-auto overflow-hidden relative">
                <input type="file" hidden ref={inputRef} onChange={handleChange} />
                {image 
                    ? <Image layout="fill" src={URL.createObjectURL(image)} />
                    : <p className="flex items-center justify-center h-full">
                            Click to Upload Image
                        </p>
                }
            </div>
        </div>
    )
}