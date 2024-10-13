import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<FooterWrapper>
			<FooterContent>
				<AppName>Period Care</AppName>
				
				<Copyright>© {new Date().getFullYear()}PeriodCare.All rights reserved.</Copyright>
			</FooterContent>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.footer`
	width: 100%;
	padding: 40px 20px;
	background-color: #f0f8f8; // Match the color scheme
	text-align: center;
	position: relative;
	bottom: 0;
`;

const FooterContent = styled.div`
	color: #000; // Ensure text is readable
	font-size: 14px;
`;

const AppName = styled.h2`
	font-size: 18px;
	margin-bottom: 10px;
	font-weight: bold;
`;

const Motto = styled.p`
	font-size: 16px;
	margin-bottom: 10px;
	font-style: italic;
`;

const Description = styled.p`
	font-size: 14px;
	margin-bottom: 20px;
	line-height: 1.5;
	max-width: 600px;
	margin: 0 auto;
`;

const Copyright = styled.p`
	font-size: 14px;
	margin-top: 20px;
`;
