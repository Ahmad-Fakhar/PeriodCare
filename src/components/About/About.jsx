import React, { useEffect, useState } from "react";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const About = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const fetchTeam = async () => {
            const querySnapshot = await getDocs(collection(db, "team"));
            const teamData = querySnapshot.docs.map(doc => doc.data());
            setTeam(teamData);
        };
        fetchTeam();
    }, []);

    return (
        <Wrapper>
            <TopNavbar />
            <Container>
                <Section>
                    <h1>Our Story</h1>
                    <p>
                        Welcome to Period Care, where we are dedicated to empowering women through health education and care. Our journey began with a mission to provide accessible and reliable information to women everywhere. We believe in the power of community and support, and we strive to make a positive impact in the lives of women around the world.
                    </p>
                </Section>
                <Section>
                    <h2>Meet Our Team</h2>
                    <CardContainer>
                        {team.map((member, index) => (
                            <Card key={index}>
                                <img src={member.image} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <LinkedInButton>LinkedIn</LinkedInButton>
                                </a>
                            </Card>
                        ))}
                    </CardContainer>
                </Section>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default About;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Container = styled.div`
    flex: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const Section = styled.section`
    margin-bottom: 40px;

    h1, h2 {
        color: #333;
    }

    p {
        color: #666;
        line-height: 1.6;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    width: 200px;

    img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    h3 {
        margin: 10px 0;
        color: #333;
    }

    p {
        color: #777;
    }
`;

const LinkedInButton = styled.button`
    background-color: #0077b5;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
        background-color: #005582;
    }
`;
