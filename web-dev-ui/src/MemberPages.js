import members from "./members.json";

export default function MemberPages() {
  return (
    <div className="mt-8 text-center" id="members">
      <p className="text-3xl font-bold lg:text-5xl">
        member <span className="text-primary">pages</span>
      </p>
      <div className="flex mt-4">
        {members.map((index, member) => {
          return <Member name={members[member]} key={index} />;
        })}
      </div>
    </div>
  );
}

function Member(props) {
  return (
    <a href={`/member-pages/${props.name}`} className="m-auto">
      <div
        className="py-28 px-48 rounded-sm bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url("http://localhost:3000/${props.name}/?url=https://poolesville-high-school-web-dev-club.github.io/member-pages/${props.name}/")`,
        }}
      ></div>
      <div className="px-2 py-1 text-2xl hover-bg-gray">{props.name}</div>
    </a>
  );
}
