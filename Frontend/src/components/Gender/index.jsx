import styles from "./styles.module.css";

const Gender = ({genders, filterGender, setFilterGender }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterGender, input.value];
			setFilterGender(state);
		} else {
			const state = filterGender.filter((val) => val !== input.value);
			setFilterGender(state);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By Gender</h1>
			<div className={styles.gender_container}>
				{ genders.map((gender) => (
					<div className={styles.gender} key={gender}>
						<input
							className={styles.gender_input}
							type="checkbox"
							value={gender}
							onChange={onChange}
						/>
						<p className={styles.gender_label}>{gender}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gender;
