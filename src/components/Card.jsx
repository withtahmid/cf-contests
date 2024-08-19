import Countdown from "./Countdown";
import DateComponent from "./DateComponent";
import Duration from "./Duration";
export default function Card({ data }){
    return (
        <div className="card card-side bg-base-100 shadow-xl">
             <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title max-w-[23ch] overflow-hidden whitespace-nowrap text-ellipsis">{data.title}</h2>
                <DateComponent date = {data.startDate}/>
                <Duration data = {data} />
                <Countdown endTime = {data.dateObj}/>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary" 
                        onClick={() => window.open(`https://codeforces.com/contestRegistration/${data.id}`, '_blank')}
                    >
                        Contest page
                    </button>
                </div>
            </div>
        </div>
    );
}

/*
Codeforces Round 967 (Div. 2)
Tuesday
20/8/2024
Starts at: 8:35 PM

Duration: 2h 0m 0s

Starts in: 2d 9h 39m 24s

Contest Page


*/ 