module.exports = {
	name: "johanedlund.se", // optional, falls back to object key
	description: "johanedlund.se",
	// skip if localhost
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.johanedlund.se/",
		"https://www.johanedlund.se/posts/this-is-the-first-example-post/",
		"https://www.johanedlund.se/cv/",
	]
};