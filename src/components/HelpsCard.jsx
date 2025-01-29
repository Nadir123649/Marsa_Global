import { Container } from 'react-bootstrap';

const HelpsCard = ({description, title , spantitle, moretitle , morespan , className }) => {
    return (
        <section className={className} >
            <Container className='p-0'>
                <div className='py-[60px] border border-[rgba(139, 195, 74, 0.04)] bg-[#8BC34A0A] flex flex-col gap-[20px] rounded-[18px]  mx-auto text-center' >
                    <h1 className='text-[#4F4F4F] text-[40px] font-bold max-w-[890px] mx-auto'>{title} <span className='text-[#8BC34A]'>{spantitle}</span>  {moretitle} <span className='text-[#8BC34A]'>{morespan}</span> </h1>
                    <p className='text-[#4F4F4F] max-w-[965px]  leading-[30px] text-[22px] mx-auto'>{description}</p>
                </div>
            </Container>
        </section>
    );
}

export default HelpsCard;
