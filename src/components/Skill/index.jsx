import React from 'react';
import Container from 'react-bootstrap/Container';
import Icon1 from '../../assets/images/icon1.png';
import Icon2 from '../../assets/images/icon2.png';
import Icon3 from '../../assets/images/icon3.png';
import Icon4 from '../../assets/images/icon4.png';
import Icon5 from '../../assets/images/icon5.png';
import Icon6 from '../../assets/images/icon6.png';
import Icon7 from '../../assets/images/icon7.png';
import Icon8 from '../../assets/images/icon8.png';
import Icon9 from '../../assets/images/icon9.png';
import {
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
} from '../../components/Skill/index.styled';
const Skill = () => {
	return (
		<>
			<ContainerSkill>
				<Container>
					<RowDiv>
						<ColRow className="col-md-12">
							<DivTitle>
								<h2 className="title mb-0">
									What an engineer after Devplus will must have?
								</h2>
							</DivTitle>
						</ColRow>
					</RowDiv>
					<RowContent className="row ">
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon1} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">Programing foundation</h4>
									<span className="courses"> Algorithm, Design pattern </span>
								</DivContent>
							</NavLink>
						</ColItem>
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon2} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">Database</h4>
									<span className="courses"> SQL Syntax </span>
								</DivContent>
							</NavLink>
						</ColItem>
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon3} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">Testing</h4>
									<span className="courses"> Unit testing, TDD </span>
								</DivContent>
							</NavLink>
						</ColItem>
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon4} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">Front-end</h4>
									<span className="courses"> HTM/CSS/Js , ReactJS/VueJS </span>
								</DivContent>
							</NavLink>
						</ColItem>
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon5} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">Back-end</h4>
									<span className="courses"> PHP, NodeJS </span>
								</DivContent>
							</NavLink>
						</ColItem>
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon6} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">Agile Stable Team</h4>
									<span className="courses"> Agile/Scrum </span>
								</DivContent>
							</NavLink>
						</ColItem>
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon7} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">English</h4>
									<span className="courses"> Basic conversion </span>
								</DivContent>
							</NavLink>
						</ColItem>
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon8} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">Communication</h4>
									<span className="courses"> HORENSO</span>
								</DivContent>
							</NavLink>
						</ColItem>
						<ColItem className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
							<NavLink className="categories-item">
								<DivIcon className="icon">
									<ImgIcon src={Icon9} className="img"></ImgIcon>
								</DivIcon>
								<DivContent>
									<h4 className="title">Career path</h4>
									<span className="courses"> Work ethic, Integrity </span>
								</DivContent>
							</NavLink>
						</ColItem>
					</RowContent>
				</Container>
			</ContainerSkill>
		</>
	);
};

export default Skill;
