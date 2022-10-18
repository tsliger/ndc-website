import Image from 'next/image'
import { Navlinks } from './Navbar'
import { Input, InputGroup, InputLeftElement, Stack, Textarea } from '@chakra-ui/react'
import { HiOutlinePhone, HiOutlineMail, HiOutlineUser } from "react-icons/hi"
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs"



export default function Footer() {
  return (
    <div className="min-h-[585px] flex p-8 flex-col lg:flex-row  lg:items-start overflow-hidden">
        <div className="flex-grow">
          <div>
            <Image 
                src={"/ndc-logo-white.png"}
                width={310}
                height={83}
                className="-translate-x-4"
            />
            </div>
            <div className="mt-8 flex flex-col lg:flex-row">
                <div>
                  <h1 className="font-['Ethnocentric'] text-2xl">Explore</h1>
                  <ul className="footerNavList">
                    <Navlinks />
                  </ul>
                </div>
                <div className="relative lg:left-32 space-y-8 mt-8 lg:mt-0">
                  <h1 className="font-['Ethnocentric'] text-2xl">Connect</h1>
                  <BsFacebook style={{marginTop: 25}} size={35}/>
                  <BsTwitter style={{marginTop: 25}} size={35}/>
                  <BsLinkedin style={{marginTop: 25}} size={35}/>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end mt-16 lg:mt-0 ">
            <div className="w-[48rem] z-50 h-full">
              <h1 className="font-['Ethnocentric'] text-2xl mb-6">CONTACT</h1>
              <div className="w-full h-fit flex flex-col  ">
                <Stack spacing={16}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      height={'100%'}
                      children={
                        <div className="flex justify-center items-center pl-4">
                          <HiOutlineUser size={16}/>
                        </div>
                      }
                    />
                    <Input width={'100%'}  pl='3.5rem' className="bg-white/10 p-4" placeholder='First Name' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      height={'100%'}
                      children={
                        <div className="flex justify-center items-center pl-4">
                          <HiOutlineUser size={16}/>
                        </div>
                      }
                    />
                    <Input width={'100%'} pl='3.5rem' className="bg-white/10 p-4" placeholder='Last Name' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      height={'100%'}
                      children={
                        <div className="flex justify-center items-center pl-4">
                          <HiOutlinePhone size={16}/>
                        </div>
                      }
                    />
                    <Input width={'100%'} type='tel' pl='3.5rem' className="bg-white/10 p-4" placeholder='Phone Number' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      height={'100%'}
                      children={
                        <div className="flex justify-center items-center pl-4">
                          <HiOutlineMail size={16}/>
                        </div>
                      }
                    />
                    <Input width={'100%'} type='email' pl='3.5rem' className="bg-white/10 p-4" placeholder='Email' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      pt={20}
                      children={
                        <div className="flex  items-start pl-4">
                          <HiOutlineMail size={16}/>
                        </div>
                      }
                    />
                    <Textarea width={'100%'} pl='3.5rem' className="bg-white/10 p-4" minHeight={100} resize={'none'} placeholder='Let us know how we can help...' />
                  </InputGroup>
                  <button className="w-32 bg-ndcBlue text-xl py-2 font-semibold active:scale-95 transition-all">Submit</button>
                </Stack>
            </div>
          </div>
      </div>
    </div>
  )
}
