import { PodFour, PodOne, PodThree, PodTwo } from "@/utils";
import Image from 'next/image';
import { Container, Dropdown } from 'react-bootstrap';

const ResourcesHead = () => {
  return (
    <section className="py-[30px]">
      <Container>
        <div className="flex justify-between items-center">
          {/* Left side: Search input */}
          <div className="w-1/2">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full p-2 border border-gray-300 rounded" 
            />
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
