### Objective

Your task is to connect to an external API to retrieve IP address information and display it like in the provided designs.

### Brief

The challenge is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. You will find all the required assets in the `/images` folder. The assets are already optimized. To get the IP address location, you'll be using the Wookie IP API:

    https://wookie.codesubmit.io/ipcheck?ip=<IP_ADDRESS>

An example response for IP 8.8.8.8

```json
{
	"as": {
		"asn": 15169,
		"domain": "https://about.google/intl/en/",
		"name": "GOOGLE",
		"route": "8.8.8.0/24",
		"type": "Content"
	},
	"ip": "8.8.8.8",
	"isp": "Google LLC",
	"location": {
		"city": "Mountain View",
		"country": "US",
		"geonameId": 5375480,
		"lat": 37.38605,
		"lng": -122.08385,
		"postalCode": "94035",
		"region": "California",
		"timezone": "-08:00"
	}
}
```

For authentication, pass the `"Authorization: Bearer WookieIP2022"` header.
Cache the response in browser storage (local storage, session storage) to avoid making too many requests to the API.

To generate the map, we recommend using [LeafletJS](https://leafletjs.com/), but you are free to use any mapping library of your choice.

Your users should be able to:

-   View the optimal layout for each page depending on their device's screen size
-   See hover states for all interactive elements on the page
-   See their own IP address on the map on the initial page load
-   Search for any IP addresses and see the key information and location

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### Evaluation Criteria

-   **TypeScript** best practices
-   Use Emotion (prefered) or Styles Components
-   Use `react-query` to call the API
-   Show us your work through your commit history
-   We're looking for you to produce working code with enough room to demonstrate how to structure components in a small program
-   Completeness: did you complete the features?
-   Correctness: does the functionality act in sensible, thought-out ways?
-   Maintainability: is it written in a clean, maintainable way?
-   Testing: is the system adequately tested?

### CodeSubmit

Please organize, design, test, and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

**Have fun coding!** 🚀

The Fetcher Team