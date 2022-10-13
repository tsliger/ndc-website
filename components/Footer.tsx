import Image from 'next/image'

export default function Footer() {
  return (
    <div className="h-[585px] flex p-8">
        <div className="flex-grow">
            <Image 
                src={"/ndc-logo-white.png"}
                width={310}
                height={83}
                className="-translate-x-4"
            />
            <div className="mt-8">
                <h1 className="font-['Ethnocentric'] text-2xl">Explore</h1>
            </div>
        </div>
        <div className="bg-yellow-500 flex-grow">
            
        </div>
    </div>
  )
}
