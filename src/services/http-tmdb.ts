import axios from "axios";

export default axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		"Content-type": "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
	},
});
