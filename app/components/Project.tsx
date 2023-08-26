interface Props {
    title: string;
    img: string;
    text: string;
}

function Project(props: Props) {
    return (
        <div className="flex justify-center items-center flex-col p-4 mt-12 project">
            <img className="rounded" src={props.img} />
            <h1 className="text-xl mt-2">{props.title}</h1>
            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet ad provident vitae obcaecati modi maiores alias porro earum, voluptatem iste! In dolorem atque dolore eum tempore vitae sint necessitatibus.</p>
        </div>
    )
}

export default Project