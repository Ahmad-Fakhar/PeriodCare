import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<Wrapper id="home" className="container flexCenter">
			<LeftSide className="flexCenter">
				<div>
					<h1 className="extraBold font60">
						your period, your way.
					</h1>
					<HeaderP className="font13 semiBold">
						Although a period spans only a few days every month, our bodies undergo various hormonal, physical and emotional changes throughout the entire cycle. We noticed that most period trackers focus on what happens during the menstrual phase, but don't take into account what we can do to take care of our bodies in between each period. With dot. we hope to provide catered health and food recommendations and insights throughout the entire menstruation cycle, to help people who menstruate to better understand their bodies and take control of their periods.
					</HeaderP>
					<BtnWrapper>
						<Link to={"/signup"}>
							<FullButton title="Get Started" />
						</Link>
					</BtnWrapper>
				</div>
			</LeftSide>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	padding-top: 80px;
	width: 100%;
	min-height: 840px;
	display: flex;
	justify-content: center; /* Center the content horizontally */
	align-items: center; /* Center the content vertically */
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

const LeftSide = styled.div`
	width: 100%; /* Use full width */
	text-align: center; /* Center text */
	padding: 20px; /* Add padding around the left side */
	@media (max-width: 960px) {
		margin: 50px 0;
	}
	@media (max-width: 560px) {
		margin: 80px 0 50px 0;
	}
`;

const HeaderP = styled.div`
	max-width: 470px;
	padding: 15px 0 30px 0; /* Adjusted padding for spacing */
	line-height: 1.5rem;
	margin: 0 auto; /* Center the paragraph */
	@media (max-width: 960px) {
		padding: 15px 0 30px 0; /* Adjusted padding for smaller screens */
		max-width: 100%;
	}
`;

const BtnWrapper = styled.div`
	max-width: 190px;
	margin: 20px auto; /* Center the button wrapper and add margin */
	@media (max-width: 960px) {
		margin: 20px auto; /* Maintain margin for smaller screens */
	}
`;
