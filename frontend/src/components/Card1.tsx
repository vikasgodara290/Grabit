interface Card1Type{
    icon : string,
    topHeading: string,
    bottomHeading:string
}
export default function Card1({icon, topHeading, bottomHeading}:Card1Type){

    return(
        <div className='flex poppins-medium items-center w-[]'>
            <i className={`${icon} text-2xl text-primary-text pt-1`}></i>
            <div className='flex flex-col ml-2.5 mr-5'>
                <span className='text-[12px] text-secondary-text tracking-[0.6px] mb-1.5 p-0 h-3'>{topHeading}</span>
                <a className='text-[13px] text-primary-text'>{bottomHeading}</a>
            </div>
        </div>
    )
}