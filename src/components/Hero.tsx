import type { FunctionComponent } from 'preact';
import { useEffect } from 'preact/compat';
import { useObserver } from '../hooks/useObserver';

export const Hero: FunctionComponent<{}> = () => {
	const [ref, inView, _entry] = useObserver({ defaultInView: true });

	// const observer = new IntersectionObserver((entries) => {
	// 	entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 			setIsHidden(false);
	// 		} else {
	// 			setIsHidden(true);
	// 		}
	// 	});
	// });

	useEffect(() => {
		console.log('inView', inView);
	}, [inView]);

	return (
		<div className="hero min-h-screen bg-transparent">
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-2xl">
					{/* @ts-ignore */}
					<div ref={ref}>
						<h1
							hidden={!inView}
							className="mb-5 text-5xl font-bold uppercase animate-slideUpFirst"
						>
							vos constructions en toute sérénité
						</h1>
					</div>

					<p className="my-14 animate-slideUpSecond">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button
						onAnimationEnd={(e) => {
							const target = e.target as HTMLElement;
							target.classList.replace('btn-disabled', 'btn-primary');
						}}
						onClick={(e) => {
							const target = e.target as HTMLElement;
							target.classList.remove('animate-slideUpThird');
						}}
						className="btn btn-disabled animate-slideUpThird"
					>
						en savoir plus
					</button>
				</div>
			</div>
		</div>
	);
};
