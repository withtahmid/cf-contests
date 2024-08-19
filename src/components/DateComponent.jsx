export default function DateComponent({ date }){
    return (
        <div className="flex gap-4">
            <div className="text-2xl font-mono"> {date.date}/{date.month}/{date.year} </div>
            <div>{date.dayName}</div>
        </div>
        
    )
}