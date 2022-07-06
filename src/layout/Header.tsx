import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import { Link } from "react-router-dom"
import HeaderData from "../data/header.json"

type Props = {}

type HeaderItemType = {
  url: string;
  name: string;
  id: number;
}

function Header ( { }: Props )
{
  return (
    <div>
      <div className='container mx-auto flex justify-between h-16 item-center px-3'>
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-4xl leading-3	">furniture</h1>
          <span className="text-sm">Modern & minimalistic</span>
        </div>
        <div className="flex flex-row-reverse md:flex-row font-light gap-8 items-center">
          <div className="md:hidden">
            <AiOutlineMenu />

            <div className="absolute max-h-0 group-hover:max-h-96 md:max-h-full overflow-hidden transition-all w-full right-0 top-0">
              {
                HeaderData.data.map( headerItem =>
                (
                  <li key={ headerItem.id } className="text-zinc-700 hover:text-black"><Link to={ headerItem.url }>{ headerItem.name }</Link></li>

                ) )
              }


            </div>
          </div>
          <ul className="hidden md:flex gap-8 text-lg ">



            {
              HeaderData.data.map( (headerItem: HeaderItemType) =>
              (
                <li key={ headerItem.id } className="text-zinc-700 hover:text-black"><Link to={ headerItem.url }>{ headerItem.name }</Link></li>

              ) )
            }


          </ul>
          <ul className="flex gap-3 text-2xl">
            <li>
              <Link to="#">
                <AiOutlineSearch />
              </Link>
            </li>
            <li>
              <Link to="#">
                <BsHandbag />
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="#">
                <AiOutlineHeart />
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="#">
                <AiOutlineUser />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header