import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"

type Props = {}

function Header({}: Props) {
  return (
    <div>
      <div className='container mx-auto bg-red-400 flex justify-between h-16 item-center px-3'>
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-4xl leading-3	">furniture</h1>
          <span className="text-sm">Modern & minimalistic</span>
        </div>
        <div className="flex font-light gap-8 items-center">
          <ul className="flex gap-8 text-lg ">
            <li className="text-zinc-700 hover:text-black"><a href="#">Home</a></li>
            <li>Catalog</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <ul className="flex gap-3 text-2xl">
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <BsHandbag />
            </li>
            <li>
              <AiOutlineHeart />
            </li>
            <li>
              <AiOutlineUser />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header