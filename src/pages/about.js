import Image from "next/image"

export default function about() {
    return(
        <div className="flex flex-col items-center space-y-9 mt-12 h-full pt-12">
            <h1 className="text-3xl font-semibold">Sobre o Projeto</h1>
            <p className="text-center text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <img className="mt-2" src="./img/charizard.png"/>
        </div>
    )
}