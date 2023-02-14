const router = require("express").Router();
const List = require("../models/List");
const lists = require("../config/lists.json");



/* This is a post request to add a new user to the database. */
router.route("/add").post((req,res)=>{
	const name=req.body.name;
	const age=req.body.age;
	const genre=req.body.genre;
	const gender=req.body.gender;
	const contact=req.body.contact;
	const img=req.body.img;

	const newCreate=new List({
		name,
		age,
		genre,
		gender,
		contact,
		img
	});
	newCreate.save()
})

/* This is a get request to get all the users from the database. */

router.get("/lists", async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
		let sort = req.query.sort || "rating";
		let genre = req.query.genre || "All";
		let gender = req.query.gender || "All";

		const genreOptions = [
			"Hindu",
			"Muslim",
			"Jain",
			"Christian",
			"Sikh"
			
		];
		const genderOptions = [
			"Male",
			"Female",
		
			
		];

		genre === "All"
			? (genre = [...genreOptions])
			: (genre = req.query.genre.split(","));
		gender === "All"
			? (gender = [...genderOptions])
			: (gender = req.query.gender.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const lists = await List.find({ name: { $regex: search, $options: "i" } })
			.where("genre")
			.in([...genre])
			.where("gender")
			.in([...gender])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		const total = await List.countDocuments({
			genre: { $in: [...genre] },
			name: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			genres: genreOptions,
			genders: genderOptions,
			lists,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

// const insertLists = async () => {
//     try {
//         const docs = await List.insertMany(lists);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertLists()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

module.exports = router;


