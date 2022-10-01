import { useState } from "react"

export const cand = [
        {
          id: 1,
          name: "presidential",
          candidate: "bola tinubu",
          vice: "Shettima",
          username: "bola tinubu",
          post: "President/vice president",
          img: "/bat.jpeg",
          img2: "/bat2.jpeg",
        },
        {
          id: 2,
          name: "governorship",
          candidate: "Uba Sanni",
          post: "Governor/Deputy Governor",
          username: "Uba Sanni",
          vice: "hadiza balarabe",
          img: "/sani2.jpeg",
          img2: "/sani2.png",
        },
        {
          id: 3,
          name: "senatorial",
          candidate: "muhammad sani datijjo",
          username: "sani datijjo",
          post: "Senator (Kaduna Central)",
          img: "/dattijo.jpeg",
        },
        {
          id: 4,
          name: "house of rep",
          username: 'bashir elrufai',
          candidate: "Bashir Elrufai",
          post: "Member of House of Representative",
          img: "/bash.jpeg",
        },
    ]

export default function useData(){

    const [data, setData] = useState(cand[0]);


    const changeData = (e) => {
        let item = cand.find(item => item.id == e.target.value);
        setData(item);
    }

    return [data, changeData]

}