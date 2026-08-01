import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import DashboardNavbar from "../Components/DashboardNavbar";
import {
    User,
    Mail,
    Shield,
    Ticket,
    Clock,
    Users
} from "lucide-react";

import {
    getAllQueues,
    getQueuePosition
} from "../Services/queueService";

export default function Profile() {

    const { user } = useAuth();

    const [myQueue, setMyQueue] = useState(null);
    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadProfile = async () => {

            try {

                const response = await getAllQueues(
                    1,
                    100,
                    user?.email
                );

                const queues =
                    response.data || [];

                const mine = queues.find(
                    q =>
                        q.customerEmail === user.email &&
                        (
                            q.status === "Waiting" ||
                            q.status === "Serving"
                        )
                );

                if (mine) {

                    setMyQueue(mine);

                    const pos =
                        await getQueuePosition(
                            mine._id
                        );

                    setPosition(pos);

                }

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        if (user) {

            loadProfile();

        }

    }, [user]);

    return (

        <div className="min-h-screen bg-slate-950 text-white">

            <DashboardNavbar />

            <div className="pt-28 max-w-6xl mx-auto px-6">

                <h1 className="text-5xl font-bold">

                    My Profile

                </h1>

                <p className="text-slate-400 mt-2">

                    View your account and queue information.

                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-10">

                    <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">

                        <div className="flex justify-center">

                            <div className="w-28 h-28 rounded-full bg-cyan-500 flex items-center justify-center">

                                <User size={55} />

                            </div>

                        </div>

                        <div className="mt-8 space-y-5">

                            <div className="flex items-center gap-4">

                                <User />

                                <div>

                                    <p className="text-slate-400">

                                        Name

                                    </p>

                                    <h3 className="text-xl font-semibold">

                                        {user?.name}

                                    </h3>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <Mail />

                                <div>

                                    <p className="text-slate-400">

                                        Email

                                    </p>

                                    <h3 className="text-xl font-semibold">

                                        {user?.email}

                                    </h3>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <Shield />

                                <div>

                                    <p className="text-slate-400">

                                        Role

                                    </p>

                                    <h3 className="text-xl font-semibold capitalize">

                                        {user?.role}

                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">

                        <h2 className="text-3xl font-bold text-cyan-400">

                            Current Queue

                        </h2>

                        {

                            loading ?

                                <p className="mt-8">

                                    Loading...

                                </p>

                                :

                                myQueue ?

                                    <div className="space-y-6 mt-8">

                                        <div className="flex items-center gap-4">

                                            <Ticket />

                                            <div>

                                                <p className="text-slate-400">

                                                    Token

                                                </p>

                                                <h3 className="text-2xl font-bold">

                                                    Q-{myQueue.tokenNumber}

                                                </h3>

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <Users />

                                            <div>

                                                <p className="text-slate-400">

                                                    People Ahead

                                                </p>

                                                <h3 className="text-2xl font-bold">

                                                    {

                                                        position?.peopleAhead ?? 0

                                                    }

                                                </h3>

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <Clock />

                                            <div>

                                                <p className="text-slate-400">

                                                    Estimated Wait

                                                </p>

                                                <h3 className="text-2xl font-bold">

                                                    {

                                                        position?.estimatedWaitTime ?? 0

                                                    } mins

                                                </h3>

                                            </div>

                                        </div>

                                        <div className="pt-4">

                                            <span className="bg-cyan-500 px-5 py-2 rounded-full text-black font-semibold">

                                                {

                                                    myQueue.status

                                                }

                                            </span>

                                        </div>

                                    </div>

                                    :

                                    <div className="mt-10">

                                        <h3 className="text-2xl font-bold">

                                            No Active Queue

                                        </h3>

                                        <p className="text-slate-400 mt-3">

                                            You haven't joined any queue yet.

                                        </p>

                                    </div>

                        }

                    </div>

                </div>

            </div>

        </div>

    );

}