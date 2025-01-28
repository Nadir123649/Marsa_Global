import { SearchIcon } from "@/utils";
import Image from 'next/image';
import { Container } from 'react-bootstrap';

const ResourcesHead = () => {
    return (
        <section className="py-[40px]">
            <Container className="p-0">
                <div className="flex justify-between items-center">
                    <div className="input-search relative min-w-[406px] rounded-[16px] border border-[#C6C6C6] ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 text-[16px] font-medium  py-[13px] rounded-[16px] "
                        />
                        <div className="search-box absolute right-[10px] bottom-[10px] h-[24px]">
                            <Image src={SearchIcon} />
                        </div>
                    </div>
                    <select className="sort-dropdown rounded-[16px] py-[13px] px-2 cursor-pointer ">
                        <option value="Reading">Sort By</option>
                        <option value="Reading">Reading</option>
                        <option value="Podcast">Podcast</option>
                        <option value="Blogs">Blogs</option>
                    </select>
                </div>
            </Container>
        </section>
    );
};

export default ResourcesHead;
