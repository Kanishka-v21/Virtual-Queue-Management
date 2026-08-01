import React, {useEffect, useState} from "react";
import API from "../Api/axios";

const QueueList = () => {

    const [queue, setQueue] = useState([]);

    useEffect(()=>{

        const fetchQueue = async()=>{

            try{
                const response = await API.get("/queue");

                setQueue(response.data);

            }catch(error){
                console.log(error);
            }
        }

        fetchQueue();

    },[]);


    return(
        <div>

            <h2>Current Queue</h2>

            {
                queue.map((person)=>(
                    <div key={person._id}>

                        <h3>
                            Token: {person.tokenNumber}
                        </h3>

                        <p>
                            Name: {person.customerName}
                        </p>

                        <p>
                            Service: {person.serviceName}
                        </p>

                        <p>
                            Status: {person.status}
                        </p>

                    </div>
                ))
            }

        </div>
    )
}

export default QueueList;