import Image from "next/image"



const Card2 = ({img  , title  ,  subtitle}) => {
  return (
 

  <div
  className={`flex flex-col items-center
  w-[90%] m:w-[320px] lg:w-[338px]
  min-h-[170px] sm:min-h-[350px] lg:min-h-[335px]
  bg-[#F3F5FF]
  mt-4 sm:mt-6
  rounded-2xl sm:rounded-[30px]
  shadow-xl
  px-4 sm:px-6 lg:px-[26px]
  py-6 sm:py-8 lg:py-[50px]
  gap-2 sm:gap-3 lg:gap-[10px]
  text-center
  mx-auto
  space-y-5
  `}
>
  <div className="flex flex-col items-center justify-center space-y-10 mt-6">
    <div
      className="sm:h-[100px] sm:w-[100px] w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#121E52]"
    >
      <Image
        src={img}
        alt="img"
        className="w-[28px] h-[28px] sm:w-[66px] sm:h-[62px]"
      />
    </div>

    <p className="font-poppins sm:text-2xl font-semibold sm:leading-[34.8px] text-base leading-[17.4px] text-[#121E52]">
      {title}
    </p>

    <p className="font-poppins text-base font-medium sm:leading-[23.2px] text-[10px] sm:font-normal leading-[14.5px] text-[#6F6F6F]">
      {subtitle}
    </p>
  </div>
  </div>







 
    
  
   
  )
}

export default Card2