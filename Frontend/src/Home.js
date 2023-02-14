import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Table from "./components/Table";
import Sort from "./components/Sort";
import Genre from "./components/Genre";

import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./App.css";
import "./First.css";
import Gender from "./components/Gender";

const base_url = process.env.REACT_APP_API_URL;

function Home() {
	const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "contact", order: "desc" });
	const [filterGenre, setFilterGenre] = useState([]);
	const [filterGender, setFilterGender] = useState([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const getAllLists = async () => {
			try {
				const url = `${base_url}?page=${page}&sort=${sort.sort},${
					sort.order
				}&genre=${filterGenre.toString()}&gender=${filterGender.toString()}&search=${search}`;
				const { data } = await axios.get(url);
				setObj(data);
			} catch (err) {
				console.log(err);
			}
		};

		getAllLists();
	}, [sort, filterGenre, filterGender,page,search]);

	return (
		<div className="wrapper">
			
			<div className="container">
				<div className="head">
					<img src="./images/logo.png" alt="logo" className="logo" />
					<Search setSearch={(search) => setSearch(search)} />
				</div>
				<div className="body">
					<div className="table_container">
						<Table lists={obj.lists ? obj.lists : []} />
						
						<p>
							<Pagination 
							page={page}
							limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)}
						/></p>
					</div>
					<div className="filter_container">
						
						<Genre
							filterGenre={filterGenre}
							genres={obj.genres ? obj.genres : []}
							setFilterGenre={(genre) => setFilterGenre(genre)}
						/>
						<Gender
							filterGender={filterGender}
							genders={obj.genders ? obj.genders : []}
							setFilterGender={(gender) => setFilterGender(gender)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
