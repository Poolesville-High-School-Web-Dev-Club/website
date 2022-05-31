import { FaInstagram } from 'react-icons/fa';
import groupme from './images/groupme.png';
import members from './members.json'


export default function Navbar() {


    return (
        <nav className='flex p-3 text-2xl '>
            <div className='w-full lg:w-1/3 '>
                <a href='/' >phs web dev club</a>
            </div>
            <div className='hidden lg:w-1/3 lg:block'>
                <div className='flex justify-between'>
                    <div className='relative'>
                        <a href='#members' className='group'>
                            <div className='rounded-b-none hover-bg-gray hover:rounded-b-none rounded-t-md' >
                                <div className='px-2 py-1 '>
                                    members
                                </div>
                                <div className='absolute w-full bg-blue-700 opacity-0 pointer-events-none transition-primary rounded-b-md group-hover:opacity-100 group-hover:pointer-events-auto'>
                                    {members.map((index, member) => {
                                        return (
                                            <div key={index} className="hover:bg-blue-800 hover:rounded-md transition-primary ">
                                                <a href={`/member-pages/` + members[member]}><p className='p-2'>{members[member]}</p></a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </a>
                    </div>
                    <NavItem name='about' />
                    <NavItem name='faq' />
                    <NavItem name='contact' />
                    <NavItem name='join' />
                </div>
            </div>
            <div className='flex justify-end lg:w-1/3 '>
                <a href='https://www.instagram.com/phswebdev/' className='w-8 h-8 mr-2' ><FaInstagram className='w-full h-full' /></a>
                <a href='https://groupme.com/join_group/71895246/o5og2A9w' className="w-8 "><img src={groupme} alt="GroupMe" /></a>
            </div>
        </nav>
    )

}

function NavItem(props) {
    return (
        <a href={`#${props.name}`}>
            <div className='px-2 py-1 hover-bg-gray rounded-md' >
                {props.name}
            </div>
        </a>
    )
}