import styled from 'styled-components';

const ContainerSkill = styled.div`
	background: #f3f8f9;
	padding-bottom: 40px;
	padding-top: 64px;
`;
const RowDiv = styled.div`
	margin-bottom: 50px;
`;
const DivTitle = styled.div`
	font-size: 36px;
`;
const RowContent = styled.div``;
const ColRow = styled.div``;
const ColItem = styled.div`
	margin-bottom: 30px;
`;
const NavLink = styled.a`
	max-height: 132px;
	border: 1px solid #dfe9eb;
	background: #ffffff;
	overflow: hidden;
	padding: 30px;
	display: block;
	color: #111111;
	border-radius: 5px;
	display: flex;
	align-items: center;
	&:hover {
		background: #226fb7;
		color: #ffffff;
		border-color: #226fb7;
		transition: all 0.3s ease;
		.img {
			color: #ffffff;
			transform: scale(0.8);
		}
		.icon {
			background-color: #ffffff;
		}
	}
`;
const DivIcon = styled.div`
	float: left;
	margin-right: 25px;
	width: 70px;
	height: 70px;
	line-height: 70px;
	border-radius: 100%;
	background: rgba(22, 170, 202, 0.2);
	text-align: center;
	transition: all 0.3s ease;
`;
const ImgIcon = styled.img`
	transform: scale(1);
	transition: all 0.3s ease;
`;
const DivContent = styled.div`
	.title {
		margin-bottom: 5px;
		font-size: 18px;
		line-height: 1.2;
	}
	h4.title :hover {
		transition: all 0.3s ease;
		color: white;
	}
	span.courses {
		font-size: 15px;
	}
`;
export {
	ContainerSkill,
	RowDiv,
	DivTitle,
	RowContent,
	ColRow,
	ColItem,
	NavLink,
	DivIcon,
	ImgIcon,
	DivContent,
};
