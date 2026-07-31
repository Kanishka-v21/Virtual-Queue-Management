import { ClipLoader } from "react-spinners";

export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center py-20">
            <ClipLoader
                size={55}
                color="#22d3ee"
            />
        </div>
    );
}