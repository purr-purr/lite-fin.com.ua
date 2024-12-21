import SplitBlocks from '@modules/common/components/SplitBlocks';
import s from './About.module.scss';

const About = () => {
	return (
		<SplitBlocks
			title="Швидкі кредити на вашу карту"
			anchor="about"
			className={s.container}
		>
			<p>
				ТОВ &quot;ЛАЙТ ФІНАНС&quot; - сервіс онлайн-кредитів в Україні, в якому
				можна швидко отримати гроші на карту будь-якого українського банку. Діюча
				ліцензія на діяльність фінансової компанії із надання коштів та банківських
				металів в кредит.
			</p>
			<p>
				Свідоцтво про реєстрацію фінансової установи серії ФК №В0000140 від
				18.01.2021.
			</p>
		</SplitBlocks>
	);
};

export default About;
