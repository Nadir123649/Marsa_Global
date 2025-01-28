import { PodFour, PodOne, PodThree, PodTwo, SearchIcon } from "@/utils";
import Image from 'next/image';
import { Container, Dropdown } from 'react-bootstrap';

const ResourcesHead = () => {
    return (
        <section className="py-[30px]">
            <Container>
                <div className="flex justify-between items-center">
                    {/* Left side: Search input */}
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

                    {/* Right side: Sort dropdown */}
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className="sort-dropdown">
                                Sort By
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Readings</Dropdown.Item>
                                <Dropdown.Item href="/">Blogs</Dropdown.Item>
                                <Dropdown.Item href="/">Podcast</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ResourcesHead;
