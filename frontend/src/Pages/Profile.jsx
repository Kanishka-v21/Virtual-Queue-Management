import { Mail, Ticket, Clock } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getQueueByToken } from "../services/queueService";


export default function Profile() {

  const { user } = useAuth();

  const [queueData, setQueueData] = useState(null);


  useEffect(() => {

    const fetchQueueData = async () => {

      try {

        if(user?.tokenNumber){

          const data = await getQueueByToken(user.tokenNumber);

          setQueueData(data);

        }

      } catch(error){

        console.log(
          "Queue data error:",
          error
        );

      }

    };


    fetchQueueData();

  },[user]);



  return (

    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8">


        {/* Profile Header */}

        <div className="flex items-center gap-6">


          <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-3xl font-bold">

            {user?.name?.charAt(0)}

          </div>


          <div>

            <h1 className="text-3xl font-bold">

              {user?.name}

            </h1>


            <p className="text-slate-400">

              Queue Management User

            </p>


          </div>


        </div>




        <div className="grid md:grid-cols-2 gap-6 mt-10">



          {/* Email */}

          <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">

            <Mail className="text-cyan-400"/>


            <div>

              <p className="text-slate-400">
                Email
              </p>

              <h3>
                {user?.email}
              </h3>

            </div>


          </div>




          {/* Token */}

          <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">


            <Ticket className="text-cyan-400"/>


            <div>

              <p className="text-slate-400">
                Current Token
              </p>


              <h3>

                {
                  queueData?.tokenNumber
                  ?
                  `Q-${queueData.tokenNumber}`
                  :
                  "No Active Token"
                }

              </h3>


            </div>


          </div>




          {/* Status */}

          <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">


            <Clock className="text-cyan-400"/>


            <div>


              <p className="text-slate-400">
                Queue Status
              </p>


              <h3>

                {
                  queueData?.status
                  ||
                  "Not Joined"

                }

              </h3>


            </div>


          </div>


        </div>


      </div>


    </div>

  );

}