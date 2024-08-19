export default function Duration({ data }){
    const { hours, minutes, seconds } = data.duration;
    return (
        <div className="flex gap-5">
            
            <div className= {`${data.unusualTime? "text-yellow-500" : ""} font-mono text-2xl`}>
                {data.startTime.hours}:{data.startTime.minutes}
            </div>
            
            <div className="flex gap-2">
                <div>
                    <span className="countdown font-mono">
                        <span style={{"--value":hours}}></span>
                    </span>
                    h
                </div>
                <div>
                    <span className="countdown font-mono">
                    <span style={{"--value":minutes}}></span>
                    </span>
                    m
                </div>
                <div>
                    <span className="countdown font-mono">
                    <span style={{"--value":seconds}}></span>
                    </span>
                    s
                </div>
            </div>

        </div>
    )
}