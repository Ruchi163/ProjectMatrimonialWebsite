import styles from "./styles.module.css";
import {Link} from 'react-router-dom';
const Table = ({ lists }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.title_tab}>Name</p>
				<p className={styles.genre_tab}>Year of Birth</p>
				<p className={styles.genre_tab}>Gender</p>
				<p className={styles.genre_tab}>Religion</p>
				<p className={styles.rating_tab}>Contact</p>
			</div>


			<div className={styles.listcard}>

			
			{lists.map((list) =>
		
				<div className={styles.list} key={list._id}>
					<div className={styles.title_container}>
						<img src={list.img} alt="list" className={styles.list_img} />
						<p className={styles.list_title}>
							{list.name}
						</p>
					</div>
					<div className={styles.genre_container}>
					<p className={styles.list_title}>
							{list.age}
						</p>
					</div>
					<div className={styles.genre_container}>
						{list.gender.map((gender, index) => (
							<p key={gender} className={styles.list_genre}>
								{gender}
								{index !== list.gender.length - 1 && "/"}
							</p>
						))}
					</div>
					<div className={styles.genre_container}>
						{list.genre.map((genre, index) => (
							<p key={genre} className={styles.list_genre}>
								{genre}
								{index !== list.genre.length - 1 && "/"}
							</p>
						))}
					</div>
					<div className={styles.rating_container}>
						<img
							src="./images/star.png"
							alt="star"
							className={styles.star_img}
						/>
						<p className={styles.list_rating}>{list.contact}</p>
					</div>
				</div>
			)
			}
			</div>
		</div>
	);
};

export default Table;
