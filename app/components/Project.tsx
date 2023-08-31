import Link from "next/link";

interface Props {
    title: string;
    img: string;
    text: string;
    url: string;
}

function Project(props: Props) {
    return (
        <div className="flex justify-center items-center flex-col p-4 mt-12 project">
            <Link href={props.url}><img className="rounded-lg" src={props.img} /></Link>
            <h1 className="text-xl mt-2">{props.title}</h1>
            <p className="p-2">{props.text}</p>
        </div>
    )
}

export default Project