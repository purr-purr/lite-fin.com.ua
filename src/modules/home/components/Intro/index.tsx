import s from './Intro.module.scss';
import Button from '@modules/common/components/Button';

const Intro = () => {
	const scrollToElement = () => {
		const targetElement = document.getElementById('calc');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className={s.container}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>
					Майбутнє фінансів <br /> разом із нами!
				</h1>
				<p className={s.infoDesc}>
					ТОВ &quot;ЛАЙТ ФІНАНС&quot; – ваш надійний партнер у світі фінансів. Ми
					пропонуємо безпечні, ефективні та сучасні фінансові рішення, які допоможуть
					покращити ваш добробут.
				</p>

				<div className={s.buttonsGroup}>
					<Button text="Розрахувати кредит" type="white" onClick={scrollToElement} />
				</div>
			</article>
		</section>
	);
};

export default Intro;
