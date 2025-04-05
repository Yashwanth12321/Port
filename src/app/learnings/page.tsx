import { cracked } from "@/data/cracked"

const Learnings = () => {

    return (
        <div>
            <div className="max-w-3xl mt-10 mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold">Cracked People i follow</h1>
                <br />
                <hr className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0" />
                <br />
                <div className="flex flex-col text-left">
                    {
                        cracked.map((cracked) => (
                            <div key={cracked.name}>
                                <h1 className="text-lg font-bold text-green-500">{cracked.name}</h1>
                                <a className="hover:underline hover:text-blue-500" href={cracked.link}>{cracked.link}</a>
                                <p>{cracked.about}</p>
                                <br />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Learnings