import members from './members.json'

export default function MemberPages() {
    return (
        <div className="mt-8 text-center" id="members" >
            <p className="text-5xl font-bold">member <span className="text-primary">pages</span></p>
            <div className='flex mt-4'>
                {members.map((index, member) => {
                    return (
                        <Member name={members[member]} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

function Member(props) {
    return (
        <a href={`/${props.name}`} className='m-auto'>
            <div className='px-2 py-1 text-2xl hover-bg-gray'>
                {props.name}
            </div>
        </a>
    )
}