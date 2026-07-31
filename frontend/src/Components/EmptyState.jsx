import { Link } from "react-router-dom";
import { Inbox } from "lucide-react";

export default function EmptyState({
    title,
    description,
    buttonText,
    buttonLink
}) {

    return (

        <div className="bg-slate-900 rounded-3xl p-14 text-center shadow-xl border border-slate-800">

            <div className="flex justify-center">

                <div className="bg-cyan-500/20 p-6 rounded-full">

                    <Inbox
                        size={55}
                        className="text-cyan-400"
                    />

                </div>

            </div>

            <h2 className="text-3xl font-bold mt-8">

                {title}

            </h2>

            <p className="text-slate-400 mt-4 max-w-lg mx-auto leading-8">

                {description}

            </p>

            {buttonText && (

                <Link to={buttonLink}>

                    <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl text-black font-semibold">

                        {buttonText}

                    </button>

                </Link>

            )}

        </div>

    );

}