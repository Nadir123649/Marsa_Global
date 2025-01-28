import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import "../styles/index.css";
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        { question: "What is mental health?", answer: "Mental health refers to a person's emotional, psychological, and social well-being." },
        { question: "What are common mental health disorders?", answer: "Mental health refers to a person's emotional, psychological, and social well-being." },
        { question: "What are the signs of a mental health problem?", answer: "Mental health refers to a person's emotional, psychological, and social well-being." },
        { question: "How is mental health treated?", answer: "Mental health refers to a person's emotional, psychological, and social well-being." },
        { question: "How can I support someone with a mental health issue?", answer: "Mental health refers to a person's emotional, psychological, and social well-being." }
    ];

    return (
        <section>
            <Container className="p-0 ">
                <h1 className="text-[#4A4A4A] text-[20px] font-semibold pb-[40px] text-center">FAQ's</h1>
                {questions.map((item, index) => (
                    <div key={index} className="py-2">
                        <div
                            className={`accordion-title font-medium text-[20px] bg-[#fbfbfb] px-[20px] py-[16px] cursor-pointer d-flex justify-content-between align-items-center 
                            ${openIndex === index ? 'rounded-t-[16px]' : 'rounded-[16px]'}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2 className="mb-0">{item.question}</h2>
                            <FaChevronDown
                                className={`chevron-icon text-[#8BC34A] ${openIndex === index ? "rotate" : ""}`}
                            />
                        </div>
                        {openIndex === index && (
                            <div   className={`accordion-content text-[20px] bg-[#fbfbfb] py-[16px] px-[20px] rounded-b-[16px] min-h-[100px]
                                ${openIndex === index ? 'border-bottom' : 'border-full'}`}
                            >
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </Container>
        </section>
    );
};

export default FAQ;
